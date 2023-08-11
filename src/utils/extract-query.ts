import { IPost } from "@/interfaces";

export const extractQuery = (path: string) => {
  const url = new URL(path);

  const params = url.searchParams;
  const allParams: Partial<IPost> = {};

  for (const [key, value] of params) {
    allParams[key] = value;
  }

  return allParams;
}