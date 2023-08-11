import { NextResponse } from 'next/server';
import { postService } from '@/services';
import type { NextRequest } from 'next/server';
import { CustomError, extractQuery } from '@/utils';
import { IPost } from '@/interfaces';

export const GET = async (req: NextRequest) => {
  try {
    const params = extractQuery(req.url);

    const posts = await postService.getPosts(params);
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    if (error instanceof CustomError) {
      return new NextResponse(error.message, { status: error.status });
    } else {
      return new NextResponse("Internal error", { status: 500 });
    }
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const params: Omit<IPost, '_id' > = req
      .body as unknown as Omit<IPost, '_id'>;

    if (!params) {
      throw new CustomError({ message: "Don't provide enough data",
        status: 400 });
    }

    await postService.addPost(params);

    return new NextResponse('Saved a new post', { status: 201 });
  } catch (error) {
    if (error instanceof CustomError) {
      return new NextResponse(error.message, { status: error.status });
    } else {
      return new NextResponse("Internal error", { status: 500 });
    }
  }  
};