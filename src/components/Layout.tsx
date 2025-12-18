import { Home, FileText, Upload, User, PenTool, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect } from "react";
import { authService } from "@/api/authService";
import { authStorage } from "@/services/storage/authStorage";
import type { Users } from "@/api/authService";

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
  currentUser: Users | null;
  onLogin: React.Dispatch<React.SetStateAction<Users | null>>;
}

export function Layout({ children, currentPage, onNavigate, onLogin, currentUser }: LayoutProps) {
  
  useEffect(() => {
    const storedUser = authStorage.get();
    if (storedUser && !currentUser) {
      onLogin(storedUser);
    }
  }, []);
  
  const handleLogin = async () => {
    try {
      const user = await authService.loginDummy();

      authStorage.set(user);   // ✅ storage 저장
      onLogin(user);           // ✅ 전역 state 반영

      console.log("✅ 로그인 성공 & storage 저장:", user);
    } catch (e) {
      console.error(e);
      alert("로그인 실패");
    }
  };

  const navigationItems = [
    { 
      page: "home", 
      icon: Home, 
      label: "홈" 
    },
    { 
      page: "editor", 
      icon: PenTool, 
      label: "글쓰기" 
    },
    { 
      page: "upload", 
      icon: Upload, 
      label: "문서 업로드" 
    },
    { 
      page: "mypage", 
      icon: User, 
      label: "마이페이지" 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* 로고 섹션 */}
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-blue-600" />
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">
              DraftLAB
            </h1>
          </div>

          {/* 네비게이션 */}
          <nav className="flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Button
                key={item.page}
                variant={currentPage === item.page ? "secondary" : "ghost"}
                size="sm"
                onClick={() => onNavigate(item.page)}
                className={`
                  gap-2 
                  hover:bg-blue-50 
                  ${currentPage === item.page 
                    ? "bg-blue-50 text-blue-700" 
                    : "text-gray-600 hover:text-blue-700"}
                  transition-all duration-200 ease-in-out
                `}
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.label}</span>
              </Button>
            ))}
          </nav>

          {/* 인증 버튼 */}
          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleLogin}
              className="
                text-gray-700 
                border-gray-300 
                hover:bg-gray-100 
                hover:border-gray-400 
                transition-colors
              "
            >
              로그인
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="
                text-gray-700 
                border-gray-300 
                hover:bg-gray-100 
                hover:border-gray-400 
                transition-colors
              "
            >
              회원가입
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto py-2">
        {children}
      </main>
    </div>
  );
}