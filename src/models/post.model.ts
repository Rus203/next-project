import { Schema, model, models, Model } from 'mongoose';

interface IPost {
  title: string;
  description: string;
  image: string;
  content: string;
  userName: string;
}

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
  userName: {
    required: true,
    type: String,
  },
});


export const PostModel = models.Post || model<IPostDocument, IPostModel>(
  'Post',
  postSchema,
);

