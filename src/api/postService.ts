import { backend } from "./backend";

export type PostInfo = {
  idx: number;
  userIdx: number;
  title: string;
  category: string;
  tag: string | null;
  contents: string;
  createdAt: string; // LocalDateTime -> string으로 넘어옴
  updatedAt: string;
};

export type ReadPostsResponse = {
  posts: PostInfo[];
};

export type CreatePostPayload = {
  userIdx: number;
  title: string;
  contents: string;
  category: string;
  tag?: string;
};

export const postService = {
  /** ✅ 목록 조회: { posts: [...] } */
  getList() {
    return backend.get<ReadPostsResponse>("/posts");
  },

  /** ✅ 생성 */
  create(payload: CreatePostPayload) {
    return backend.post("/posts", payload);
  },
};
