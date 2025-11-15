// src/app/api/auth/register/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, username, password } = body;

    if (!email || !username || !password) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    await connectToDatabase();

    const existing = await User.findOne({ $or: [{ email }, { username }] }).lean();
    if (existing) {
      return NextResponse.json({ ok: false, error: "User already exists" }, { status: 409 });
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = await User.create({
      email,
      username,
      password: hash,
    });

    return NextResponse.json({ ok: true, data: { id: newUser._id, email: newUser.email, username: newUser.username } });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
