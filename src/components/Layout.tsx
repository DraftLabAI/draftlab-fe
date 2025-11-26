import { Home, FileText, Upload, User, PenTool } from "lucide-react";
import { Button } from "./ui/button";

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-gray-900">AI Writing Platform</h1>
            <nav className="flex items-center gap-1">
              <Button
                variant={currentPage === "home" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => onNavigate("home")}
                className="gap-2"
              >
                <Home className="w-4 h-4" />
                홈
              </Button>
              <Button
                variant={currentPage === "editor" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => onNavigate("editor")}
                className="gap-2"
              >
                <PenTool className="w-4 h-4" />
                글쓰기
              </Button>
              <Button
                variant={currentPage === "upload" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => onNavigate("upload")}
                className="gap-2"
              >
                <Upload className="w-4 h-4" />
                문서 업로드
              </Button>
              <Button
                variant={currentPage === "mypage" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => onNavigate("mypage")}
                className="gap-2"
              >
                <User className="w-4 h-4" />
                마이페이지
              </Button>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              로그인
            </Button>
            <Button size="sm">회원가입</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {children}
    </div>
  );
}
