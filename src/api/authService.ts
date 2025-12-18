import { backend } from "@/api/backend";

export type Users = {
  idx: number;
  name: string;
  email?: string | null;
};

export const authService = {
  /**
   * 더미 로그인
   * 서버에서 "첫 번째 유저"를 반환
   */
  async loginDummy(): Promise<Users> {
    const res = await backend.get<Users>("/users");

    if (!res.data) {
      throw new Error("로그인 가능한 더미 유저가 없습니다.");
    }

    return res.data;
  },
};
