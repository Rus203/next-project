import { IPost } from "@/interfaces";
import { IPostDocument, PostModel } from "@/models";
import { connectDB } from "@/database";
import { FilterQuery, UpdateQuery } from "mongoose";
import { CustomError } from "@/utils";
import { NextResponse } from "next/server";

class PostService {
  constructor() {}

  async addPost(post: Omit<IPost, '_id'>): Promise<IPostDocument> {
    await connectDB();

    const savedPost = new PostModel(post);
    return savedPost.save();
  }

  async getOnePost(entityFilterQuery: FilterQuery<IPostDocument>
  ): Promise<IPostDocument> {
    const db = await connectDB();

    const post = await db.model(PostModel.modelName).findOne(entityFilterQuery);

    if (!post) {
      throw new CustomError({ message: 'not found post', status: 404 });
    }

    return post;
  }

  async getPosts(entityFilterQuery: FilterQuery<IPostDocument>)
  : Promise<IPostDocument[]> {
    const db = await connectDB();

    return db
    .model(PostModel.modelName)
    .find(entityFilterQuery, {}, { lean: true });
  }

  async deletePostById(postId: string): Promise<boolean> {
    const db = await connectDB();

    const query = await db.model(PostModel.modelName)
      .deleteOne({ _id: postId });

    return query.deletedCount > 0;
  }

  async findOneAndUpdate(entityFilterQuery: FilterQuery<IPostDocument>,
    updatedData: UpdateQuery<IPostDocument>) {
    const db = await connectDB();

    const post = await db.model(PostModel.modelName)
      .findOneAndUpdate(entityFilterQuery, updatedData,
        { lean: true, new: true });

      if (!post) {
        return new NextResponse('Post not found', { status: 404 });
      }

      return post;
  }
}

export const postService = new PostService();