import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";
import { signToken, createSetCookieResponse } from "@/lib/auth";

export async function POST(req: NextRequest) {
    try{
        const body=await req.json();
        const{identifier,password}=body; // identifier can be email or username

        if(!identifier || !password){
            return NextResponse.json({ok:false,error:"Missing fields"},{status:400});
        }

        await connectToDatabase();

        const user=await User.findOne({$or:[{email:identifier},{username:identifier}]}).lean();
        if(!user){
            return NextResponse.json({ok:false,error:"Invalid credentials"},{status:401});
        }

        const match=bcrypt.compareSync(password,user.password);
        if(!match){
            return NextResponse.json({ok:false,error:"Invalid credentials"},{status:401});
        }

        const token=signToken({id:user._id,username:user.username,email:user.email});

        //set httponly cookie and return
        return createSetCookieResponse(token);
    }catch(error){
        console.error(error);
        return NextResponse.json({ok:false,error:"Server error"},{status:500});
    }
}