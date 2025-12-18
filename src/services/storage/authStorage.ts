import type { Users } from "@/api/authService";

const KEY = "draftlab_user";

export const authStorage = {
  set(user: Users) {
    localStorage.setItem(KEY, JSON.stringify(user));
  },
  get(): Users | null {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as Users;
    } catch {
      localStorage.removeItem(KEY);
      return null;
    }
  },
  clear() {
    localStorage.removeItem(KEY);
  },
};
