import mongoose, {Schema, Document, Model} from "mongoose";

export interface IUser extends Document {
    email:string;
    username: string;
    password: string; //hashed
    createdAt: Date;
}

const UserSchema:Schema=new Schema<IUser>({
    email: {type: String, required: true, unique: true, lowercase: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})

export const User:Model<IUser>=mongoose.models.User || mongoose.model<IUser>("User",UserSchema);