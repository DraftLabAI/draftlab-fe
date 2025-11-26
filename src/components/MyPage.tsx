import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  FileText,
  Clock,
  Eye,
  Heart,
  Sparkles,
  TrendingUp,
  BarChart3,
  Edit,
  Trash2,
  MoreVertical,
} from "lucide-react";

interface MyPageProps {
  onNavigate: (page: string, postId?: number) => void;
}

export function MyPage({ onNavigate }: MyPageProps) {
  const myPosts = [
    {
      id: 1,
      title: "AI가 변화시키는 콘텐츠 제작의 미래",
      status: "published",
      date: "2025-11-18",
      category: "기술",
      views: 1234,
      likes: 89,
      comments: 12,
    },
    {
      id: 2,
      title: "효과적인 블로그 글쓰기 전략 10가지",
      status: "published",
      date: "2025-11-17",
      category: "마케팅",
      views: 2341,
      likes: 156,
      comments: 23,
    },
    {
      id: 3,
      title: "Notion을 활용한 글쓰기 워크플로우",
      status: "published",
      date: "2025-11-16",
      category: "개발",
      views: 987,
      likes: 67,
      comments: 8,
    },
  ];

  const draftPosts = [
    {
      id: 4,
      title: "미완성 - 디지털 마케팅 트렌드 2025",
      lastEdited: "2025-11-19 14:23",
      wordCount: 1234,
    },
    {
      id: 5,
      title: "미완성 - 개발자를 위한 글쓰기 가이드",
      lastEdited: "2025-11-18 09:15",
      wordCount: 567,
    },
    {
      id: 6,
      title: "미완성 - AI 윤리에 대한 고찰",
      lastEdited: "2025-11-17 16:42",
      wordCount: 2103,
    },
  ];

  const aiUsageHistory = [
    {
      date: "2025-11-19",
      feature: "문장 개선",
      count: 23,
      savedTime: "15분",
    },
    {
      date: "2025-11-18",
      feature: "문서 요약",
      count: 5,
      savedTime: "45분",
    },
    {
      date: "2025-11-18",
      feature: "톤 변경",
      count: 12,
      savedTime: "8분",
    },
    {
      date: "2025-11-17",
      feature: "오류 탐지",
      count: 34,
      savedTime: "20분",
    },
    {
      date: "2025-11-16",
      feature: "AI 요약 생성",
      count: 8,
      savedTime: "30분",
    },
  ];

  const stats = {
    totalPosts: 15,
    totalViews: 12345,
    totalLikes: 678,
    followers: 234,
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-8">
      {/* Profile Header */}
      <div className="mb-8">
        <Card className="p-6">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div className="flex-1">
              <h2 className="text-gray-900 mb-2">김민준</h2>
              <p className="text-gray-600 mb-4">
                AI와 기술에 관심이 많은 콘텐츠 크리에이터입니다. 새로운 기술을 글로 풀어내는 것을 즐깁니다.
              </p>
              <div className="flex items-center gap-4">
                <Button size="sm">프로필 수정</Button>
                <Button variant="outline" size="sm">
                  설정
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-gray-900 mb-1">{stats.totalPosts}</div>
                <div className="text-gray-600">작성한 글</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-gray-900 mb-1">{stats.totalViews.toLocaleString()}</div>
                <div className="text-gray-600">총 조회수</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-gray-900 mb-1">{stats.totalLikes}</div>
                <div className="text-gray-600">받은 좋아요</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-gray-900 mb-1">{stats.followers}</div>
                <div className="text-gray-600">팔로워</div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="posts" className="gap-2">
            <FileText className="w-4 h-4" />
            내 글
          </TabsTrigger>
          <TabsTrigger value="drafts" className="gap-2">
            <Clock className="w-4 h-4" />
            임시저장
          </TabsTrigger>
          <TabsTrigger value="ai-usage" className="gap-2">
            <Sparkles className="w-4 h-4" />
            AI 사용 기록
          </TabsTrigger>
          <TabsTrigger value="analytics" className="gap-2">
            <BarChart3 className="w-4 h-4" />
            통계
          </TabsTrigger>
        </TabsList>

        {/* Published Posts */}
        <TabsContent value="posts">
          <div className="space-y-4">
            {myPosts.map((post) => (
              <Card key={post.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-700"
                      >
                        발행됨
                      </Badge>
                    </div>
                    <h3
                      className="text-gray-900 mb-2 cursor-pointer hover:text-blue-600"
                      onClick={() => onNavigate("post", post.id)}
                    >
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-4 text-gray-500">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {post.views.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </span>
                      <span>{post.comments}개 댓글</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Draft Posts */}
        <TabsContent value="drafts">
          <div className="space-y-4">
            {draftPosts.map((draft) => (
              <Card key={draft.id} className="p-6 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="bg-yellow-100 text-yellow-700">
                        임시저장
                      </Badge>
                    </div>
                    <h3 className="text-gray-900 mb-2">{draft.title}</h3>
                    <div className="flex items-center gap-4 text-gray-500">
                      <span>마지막 수정: {draft.lastEdited}</span>
                      <span>•</span>
                      <span>{draft.wordCount.toLocaleString()}자</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      onClick={() => onNavigate("editor")}
                    >
                      <Edit className="w-4 h-4 mr-2" />
                      계속 쓰기
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* AI Usage History */}
        <TabsContent value="ai-usage">
          <Card className="p-6 mb-6 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900">AI 사용 통계</h3>
                <p className="text-gray-600">이번 주 AI 기능 사용 현황</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg">
                <div className="text-gray-900 mb-1">82회</div>
                <div className="text-gray-600">총 사용 횟수</div>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <div className="text-gray-900 mb-1">118분</div>
                <div className="text-gray-600">절약된 시간</div>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <div className="text-gray-900 mb-1">5개</div>
                <div className="text-gray-600">분석한 문서</div>
              </div>
            </div>
          </Card>

          <div className="space-y-3">
            {aiUsageHistory.map((item, idx) => (
              <Card key={idx} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-gray-900">{item.feature}</div>
                      <div className="text-gray-500">{item.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="text-gray-900">{item.count}회</div>
                      <div className="text-gray-500">사용</div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-700">{item.savedTime}</div>
                      <div className="text-gray-500">절약</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Analytics */}
        <TabsContent value="analytics">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <h3 className="text-gray-900">조회수 추이</h3>
              </div>
              <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">조회수 그래프 영역</p>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-gray-900">4.2K</div>
                  <div className="text-gray-500">이번 주</div>
                </div>
                <div>
                  <div className="text-gray-900">12.3K</div>
                  <div className="text-gray-500">이번 달</div>
                </div>
                <div>
                  <div className="text-green-700">+23%</div>
                  <div className="text-gray-500">증가율</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                <h3 className="text-gray-900">인기 글</h3>
              </div>
              <div className="space-y-3">
                {myPosts.slice(0, 3).map((post, idx) => (
                  <div key={post.id} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-900">{post.title}</div>
                      <div className="text-gray-500">조회 {post.views.toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <h3 className="text-gray-900 mb-4">독자 통계</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-gray-900 mb-1">65%</div>
                <div className="text-gray-600">재방문율</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-gray-900 mb-1">3.2분</div>
                <div className="text-gray-600">평균 체류시간</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-gray-900 mb-1">4.2%</div>
                <div className="text-gray-600">참여율</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-gray-900 mb-1">234</div>
                <div className="text-gray-600">총 팔로워</div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
