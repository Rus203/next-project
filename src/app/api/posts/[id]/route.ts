import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { IPost } from '@/interfaces';
import { postService } from '@/services';
import { CustomError } from '@/utils';

interface IContext {
  params: {
    id: string
  }
}

export const GET = async (request: NextRequest, context: IContext) => {
  try {
    const id: string = context.params.id;
    const post = await postService.getOnePost({ _id: id });
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    if (error instanceof CustomError) {
      return new NextResponse(error.message, { status: error.status });
    } else {
      return new NextResponse("Internal error", { status: 500 });
    }
  }

};

export const DELETE = async (request: NextRequest, context: IContext) => {
  try {
    const id: string = context.params.id;
    await postService.deletePostById(id);
    return new NextResponse('Post was deleted', { status: 204 });
  } catch (error) {
    if (error instanceof CustomError) {
      return new NextResponse(error.message, { status: error.status });
    } else {
      return new NextResponse("Internal error", { status: 500 });
    }
  }
};

export const PATCH = async (request: NextRequest, context: IContext) => {
  try {
    const id: string = context.params.id;
    const parameters = request.body as unknown as Omit<IPost, '_id'>;
    await postService.findOneAndUpdate({ _id: id }, parameters);
    return new NextResponse('', { status: 200 });
  } catch (error) {
    if (error instanceof CustomError) {
      return new NextResponse(error.message, { status: error.status });
    } else {
      return new NextResponse("Internal error", { status: 500 });
    }
  }
};


