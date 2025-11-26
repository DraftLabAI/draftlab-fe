import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Heart, Share2, Bookmark, MessageCircle, Sparkles } from "lucide-react";

interface PostDetailPageProps {
  onNavigate: (page: string, postId?: number) => void;
}

export function PostDetailPage({ onNavigate }: PostDetailPageProps) {
  const relatedPosts = [
    {
      id: 2,
      title: "효과적인 블로그 글쓰기 전략",
      views: 2341,
      date: "2025-11-17",
    },
    {
      id: 3,
      title: "Notion 활용 글쓰기 워크플로우",
      views: 987,
      date: "2025-11-16",
    },
    {
      id: 4,
      title: "SEO 최적화 글쓰기 가이드",
      views: 1876,
      date: "2025-11-15",
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-8">
      <div className="flex gap-8">
        {/* Main Content */}
        <main className="flex-1 max-w-[800px]">
          <article>
            {/* Post Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge>기술</Badge>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">2025년 11월 18일</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">5분 읽기</span>
              </div>
              <h1 className="text-gray-900 mb-4">
                AI가 변화시키는 콘텐츠 제작의 미래
              </h1>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <div className="text-gray-900">김민준</div>
                    <div className="text-gray-500">콘텐츠 크리에이터</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Heart className="w-4 h-4 mr-2" />
                    89
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    12
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <Separator className="mb-8" />

            {/* Post Content */}
            <div className="prose prose-lg max-w-none mb-8">
              <div className="w-full h-96 bg-gray-200 rounded-lg mb-8"></div>

              <p className="text-gray-700">
                인공지능 기술의 발전은 우리가 콘텐츠를 제작하고 소비하는 방식을 근본적으로 변화시키고 있습니다. 
                특히 글쓰기 영역에서 AI는 단순한 도구를 넘어 창의적인 파트너로 자리잡고 있습니다.
              </p>

              <h2 className="text-gray-900 mt-8 mb-4">AI 글쓰기 도구의 진화</h2>
              <p className="text-gray-700">
                초기 AI 글쓰기 도구는 단순한 문법 교정이나 맞춤법 검사 수준이었습니다. 
                하지만 최근 GPT-4, Claude와 같은 대규모 언어 모델의 등장으로 상황이 완전히 달라졌습니다.
              </p>

              <p className="text-gray-700">
                이제 AI는 문맥을 이해하고, 톤을 조절하며, 심지어 창의적인 아이디어까지 제안할 수 있습니다. 
                이는 작가들에게 더 많은 시간과 에너지를 창의적인 작업에 집중할 수 있게 해줍니다.
              </p>

              <h2 className="text-gray-900 mt-8 mb-4">콘텐츠 제작 워크플로우의 변화</h2>
              <p className="text-gray-700">
                AI를 활용한 새로운 글쓰기 워크플로우는 다음과 같은 단계로 구성됩니다:
              </p>

              <ul className="text-gray-700 space-y-2">
                <li>아이디어 브레인스토밍 및 개요 작성</li>
                <li>AI를 활용한 초안 작성</li>
                <li>인간의 편집 및 개선</li>
                <li>AI 기반 피드백 및 최적화</li>
                <li>최종 검토 및 발행</li>
              </ul>

              <p className="text-gray-700">
                이러한 프로세스를 통해 작가들은 생산성을 크게 향상시키면서도 
                콘텐츠의 품질을 유지하거나 오히려 개선할 수 있습니다.
              </p>

              <h2 className="text-gray-900 mt-8 mb-4">미래 전망</h2>
              <p className="text-gray-700">
                앞으로 AI 글쓰기 도구는 더욱 정교해질 것입니다. 
                개인화된 글쓰기 스타일 학습, 실시간 협업 기능, 
                다양한 플랫폼과의 통합 등이 예상됩니다.
              </p>

              <p className="text-gray-700">
                중요한 것은 AI를 두려워하지 않고 적극적으로 활용하는 자세입니다. 
                AI는 인간 작가를 대체하는 것이 아니라, 
                더 나은 작가가 될 수 있도록 돕는 도구입니다.
              </p>
            </div>

            {/* AI Summary Section */}
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <h3 className="text-gray-900">AI 요약</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-gray-700 mb-2">핵심 내용</div>
                  <p className="text-gray-600">
                    AI 기술은 글쓰기 프로세스를 혁신하고 있으며, 
                    작가들의 생산성과 창의성을 향상시키는 도구로 활용되고 있습니다. 
                    AI와 인간의 협업을 통해 더 나은 콘텐츠를 만들 수 있습니다.
                  </p>
                </div>
                <Separator />
                <div>
                  <div className="text-gray-700 mb-2">주요 키워드</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">AI 글쓰기</Badge>
                    <Badge variant="secondary">콘텐츠 제작</Badge>
                    <Badge variant="secondary">대규모 언어 모델</Badge>
                    <Badge variant="secondary">워크플로우</Badge>
                    <Badge variant="secondary">생산성</Badge>
                  </div>
                </div>
                <Separator />
                <div>
                  <div className="text-gray-700 mb-2">예상 독서 시간</div>
                  <p className="text-gray-600">5분 (약 1,200자)</p>
                </div>
              </div>
            </Card>

            {/* Comments Section */}
            <div className="mb-8">
              <h3 className="text-gray-900 mb-4">댓글 12</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="p-4">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-gray-900">사용자{i}</span>
                          <span className="text-gray-500">2일 전</span>
                        </div>
                        <p className="text-gray-600">
                          정말 유익한 글이네요. AI를 활용한 글쓰기에 대해 많이 배웠습니다.
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                          <Button variant="ghost" size="sm">
                            <Heart className="w-3 h-3 mr-1" />
                            좋아요
                          </Button>
                          <Button variant="ghost" size="sm">답글</Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </article>
        </main>

        {/* Right Sidebar - Related Posts */}
        <aside className="w-80 flex-shrink-0">
          <Card className="p-4 sticky top-24">
            <h3 className="text-gray-900 mb-4">관련 글</h3>
            <div className="space-y-4">
              {relatedPosts.map((post) => (
                <div
                  key={post.id}
                  className="cursor-pointer hover:bg-gray-50 p-3 -mx-3 rounded-lg transition-colors"
                  onClick={() => onNavigate("post", post.id)}
                >
                  <div className="w-full h-32 bg-gray-200 rounded-lg mb-3"></div>
                  <h4 className="text-gray-900 mb-2">{post.title}</h4>
                  <div className="flex items-center text-gray-500">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>조회 {post.views.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-4" />

            <div>
              <h4 className="text-gray-900 mb-3">저자 소개</h4>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="text-gray-900">김민준</div>
                  <div className="text-gray-500">팔로워 1,234</div>
                </div>
              </div>
              <p className="text-gray-600 mb-3">
                AI와 기술에 관심이 많은 콘텐츠 크리에이터입니다.
              </p>
              <Button className="w-full">팔로우</Button>
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}
