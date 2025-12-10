import { backend } from "./backend";

export const postService = {
  getAllPosts: async () => {
    const res = await backend.get("/posts");
    return res.data;
  },

  getPost: async (id: number) => {
    const res = await backend.get(`/posts/${id}`);
    return res.data;
  },

  createPost: async (data: any) => {
    const res = await backend.post("/posts", data);
    return res.data;
  }
};
