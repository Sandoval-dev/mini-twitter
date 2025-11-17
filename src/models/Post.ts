
import mongoose ,{Schema, Document, Model} from "mongoose";

export interface IPost extends Document
{
  authorId:string;
  content:string;
  image?:string;
  likes:string[]; //user IDs who liked the post
  createdAt:Date;
}

const PostSchema:Schema=new Schema<IPost>({
    authorId:{type:String, required:true},
    content:{type:String, required:true, maxlength:300},
    image:{type:String},
    likes:{type:[String], default:[]},
    createdAt:{type:Date, default:Date.now}
});

export const Post:Model<IPost>=mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);