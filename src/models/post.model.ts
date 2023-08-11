import { Schema, model, models, Model } from 'mongoose';
import { IPost } from '@/interfaces';

export interface IPostDocument extends IPost, Document {}

export interface IPostModel extends Model<IPostDocument> {}

const postSchema = new Schema<IPost>({
  title: {
    type: String,
    required: true,
  },
  description: {
    required: true,
    type: String,
  },
  image: {
    required: true,
    type: String,
  },
  content: {
    required: true,
    type: String,
  },
  userId: {
    required: true,
    type: String,
  },
});


export const PostModel = models.Post || model<IPostDocument, IPostModel>(
  'Post',
  postSchema,
);

