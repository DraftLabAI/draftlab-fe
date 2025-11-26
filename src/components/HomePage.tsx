import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { TrendingUp, Clock, BookOpen } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string, postId?: number) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const categories = [
    { name: "전체", count: 1234, active: true },
    { name: "기술", count: 342 },
    { name: "비즈니스", count: 456 },
    { name: "라이프스타일", count: 289 },
    { name: "개발", count: 567 },
    { name: "마케팅", count: 234 },
    { name: "디자인", count: 178 },
  ];

  const posts = [
    {
      id: 1,
      title: "AI가 변화시키는 콘텐츠 제작의 미래",
      excerpt: "인공지능 기술이 글쓰기 프로세스를 어떻게 혁신하고 있는지 살펴봅니다. 효율성과 창의성의 완벽한 조화...",
      author: "김민준",
      date: "2025-11-18",
      readTime: "5분",
      category: "기술",
      views: 1234,
      likes: 89,
    },
    {
      id: 2,
      title: "효과적인 블로그 글쓰기 전략 10가지",
      excerpt: "독자의 시선을 사로잡는 글쓰기 노하우를 공유합니다. 제목 작성부터 마무리까지 단계별 가이드...",
      author: "이서연",
      date: "2025-11-17",
      readTime: "7분",
      category: "마케팅",
      views: 2341,
      likes: 156,
    },
    {
      id: 3,
      title: "Notion을 활용한 글쓰기 워크플로우",
      excerpt: "생산성 도구를 활용하여 글쓰기 프로세스를 체계화하는 방법을 소개합니다...",
      author: "박지호",
      date: "2025-11-16",
      readTime: "4분",
      category: "개발",
      views: 987,
      likes: 67,
    },
    {
      id: 4,
      title: "SEO 최적화를 위한 글쓰기 가이드",
      excerpt: "검색엔진에서 상위 노출되기 위한 콘텐츠 작성 전략과 키워드 활용 팁...",
      author: "최유진",
      date: "2025-11-15",
      readTime: "6분",
      category: "마케팅",
      views: 1876,
      likes: 134,
    },
    {
      id: 5,
      title: "기술 문서 작성 베스트 프랙티스",
      excerpt: "개발자를 위한 명확하고 간결한 기술 문서 작성 방법론을 다룹니다...",
      author: "정한솔",
      date: "2025-11-14",
      readTime: "8분",
      category: "개발",
      views: 1543,
      likes: 98,
    },
    {
      id: 6,
      title: "스토리텔링으로 브랜드 가치 전달하기",
      excerpt: "효과적인 스토리텔링 기법을 통해 독자와 감정적으로 연결되는 방법...",
      author: "강민서",
      date: "2025-11-13",
      readTime: "5분",
      category: "비즈니스",
      views: 2103,
      likes: 187,
    },
  ];

  const aiRecommended = [
    {
      title: "ChatGPT 프롬프트 엔지니어링 완벽 가이드",
      author: "김태현",
      readTime: "10분",
    },
    {
      title: "콘텐츠 마케팅을 위한 AI 활용법",
      author: "이지은",
      readTime: "6분",
    },
    {
      title: "글쓰기 실력을 높이는 5가지 습관",
      author: "박성민",
      readTime: "4분",
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-8">
      <div className="flex gap-8">
        {/* Left Sidebar - Categories */}
        <aside className="w-64 flex-shrink-0">
          <Card className="p-4">
            <h3 className="mb-4 text-gray-900">카테고리</h3>
            <div className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-left transition-colors ${
                    category.active
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="text-gray-500">{category.count}</span>
                </button>
              ))}
            </div>
          </Card>

          <Card className="p-4 mt-4">
            <h3 className="mb-4 text-gray-900">태그</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">AI</Badge>
              <Badge variant="secondary">글쓰기</Badge>
              <Badge variant="secondary">마케팅</Badge>
              <Badge variant="secondary">SEO</Badge>
              <Badge variant="secondary">블로그</Badge>
              <Badge variant="secondary">개발</Badge>
              <Badge variant="secondary">디자인</Badge>
              <Badge variant="secondary">비즈니스</Badge>
            </div>
          </Card>
        </aside>

        {/* Main Content - Post List */}
        <main className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-gray-900 mb-1">전체 글</h2>
              <p className="text-gray-600">최신 글을 둘러보세요</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                인기순
              </Button>
              <Button variant="outline" size="sm">
                <Clock className="w-4 h-4 mr-2" />
                최신순
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {posts.map((post) => (
              <Card
                key={post.id}
                className="p-6 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => onNavigate("post", post.id)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-500">{post.date}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-gray-500">{post.readTime} 읽기</span>
                    </div>
                    <h3 className="text-gray-900 mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-gray-500">
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-4 text-gray-500">
                        <span>조회 {post.views.toLocaleString()}</span>
                        <span>좋아요 {post.likes}</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-32 h-32 bg-gray-200 rounded-lg flex-shrink-0"></div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <Button variant="outline">더 보기</Button>
          </div>
        </main>

        {/* Right Sidebar - AI Recommendations */}
        <aside className="w-80 flex-shrink-0">
          <Card className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-gray-900">AI 추천 글</h3>
            </div>
            <p className="text-gray-600 mb-4">
              당신의 관심사를 기반으로 선별한 추천 콘텐츠
            </p>
            <div className="space-y-3">
              {aiRecommended.map((rec, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-white rounded-lg cursor-pointer hover:shadow-sm transition-shadow"
                >
                  <h4 className="text-gray-900 mb-1">{rec.title}</h4>
                  <div className="flex items-center text-gray-500">
                    <span>{rec.author}</span>
                    <span className="mx-2">•</span>
                    <span>{rec.readTime} 읽기</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4 mt-4">
            <h3 className="mb-4 text-gray-900">인기 태그</h3>
            <div className="space-y-2">
              {["AI 글쓰기", "콘텐츠 마케팅", "SEO 최적화", "블로그 운영", "카피라이팅"].map(
                (tag, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-gray-600"
                  >
                    <span>#{tag}</span>
                    <span>{Math.floor(Math.random() * 500) + 100}</span>
                  </div>
                )
              )}
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}
