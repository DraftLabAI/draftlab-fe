import { useState } from "react";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { PostDetailPage } from "./components/PostDetailPage";
import { EditorPage } from "./components/EditorPage";
import { UploadPage } from "./components/UploadPage";
import { MyPage } from "./components/MyPage";
import type { Users } from "@/api/authService";

type Page = "home" | "post" | "editor" | "upload" | "mypage";

export default function App() {
  const [currentUser, setCurrentUser] = useState<Users | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  const handleNavigate = (page: string, postId?: number) => {
    setCurrentPage(page as Page);
    if (postId !== undefined) {
      setSelectedPostId(postId);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "post":
        return <PostDetailPage onNavigate={handleNavigate} />;
      case "editor":
        return <EditorPage currentUser={currentUser} />;
      case "upload":
        return <UploadPage />;
      case "mypage":
        return <MyPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={handleNavigate} currentUser={currentUser} onLogin={setCurrentUser}>
      {renderPage()}
    </Layout>
  );
}
