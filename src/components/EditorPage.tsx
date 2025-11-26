import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import {
  Sparkles,
  Save,
  Eye,
  Plus,
  Search,
  Clock,
  FileText,
  MoreVertical,
  Send,
  Paperclip,
  Wand2,
  Trash2,
  Edit,
} from "lucide-react";
import { aiService } from "@/api/aiService";

export function EditorPage() {
  const [selectedDoc, setSelectedDoc] = useState(1);
  const [chatMessages, setChatMessages] = useState([
    {
      role: "assistant",
      content: "안녕하세요! 👋 AI 글쓰기 도우미입니다.\n\n어떤 주제로 글을 작성하시겠어요? 시작하기 위해 다음 중 하나를 제공해주세요:\n\n📄 PDF 문서 업로드\n🔗 참고할 웹 링크\n📝 간단한 주제나 키워드\n\n자료를 분석한 후 함께 글을 작성해드리겠습니다!",
      timestamp: "10:23",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const documents = [
    {
      id: 1,
      title: "AI가 변화시키는 콘텐츠 제작의 미래",
      preview: "인공지능 기술의 발전은 우리가 콘텐츠를 제작하고...",
      lastEdited: "방금 전",
      category: "기술",
      wordCount: 1234,
      status: "작성 중",
    },
    {
      id: 2,
      title: "효과적인 블로그 글쓰기 전략",
      preview: "독자의 시선을 사로잡는 글쓰기 노하우를...",
      lastEdited: "2시간 전",
      category: "마케팅",
      wordCount: 2341,
      status: "임시저장",
    },
    {
      id: 3,
      title: "Notion 활용 글쓰기 워크플로우",
      preview: "생산성 도구를 활용하여 글쓰기 프로세스를...",
      lastEdited: "어제",
      category: "개발",
      wordCount: 987,
      status: "임시저장",
    },
    {
      id: 4,
      title: "SEO 최적화 가이드",
      preview: "검색엔진에서 상위 노출되기 위한...",
      lastEdited: "2일 전",
      category: "마케팅",
      wordCount: 1876,
      status: "완료",
    },
    {
      id: 5,
      title: "기술 문서 작성 베스트 프랙티스",
      preview: "개발자를 위한 명확하고 간결한...",
      lastEdited: "3일 전",
      category: "개발",
      wordCount: 1543,
      status: "완료",
    },
  ];

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;

    // 유저 메시지 추가
    const newUserMessage = {
      role: "user" as const,
      content: chatInput,
      timestamp: new Date().toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setChatMessages((prev) => [...prev, newUserMessage]);

    // FastAPI 호출
    try {
      const response = await aiService.post("/api/draft", {
        topic: chatInput,
        target_audience: "일반 사용자",
        tone: "친근함",
        additional_info: "",
      });

      const aiContent = response.data.draft || response.data.response;

      const aiMessage = {
        role: "assistant" as const,
        content: aiContent,
        timestamp: new Date().toLocaleTimeString("ko-KR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setChatMessages((prev) => [...prev, aiMessage]);

    } catch (error) {
      console.error(error);

      const errorMessage = {
        role: "assistant" as const,
        content: "❌ FastAPI 호출 중 오류가 발생했습니다.",
        timestamp: new Date().toLocaleTimeString("ko-KR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setChatMessages((prev) => [...prev, errorMessage]);
    }

    setChatInput("");
  };


  const getAIResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    
    // 파일 업로드 시뮬레이션
    if (lowerInput.includes("http") || lowerInput.includes("www.")) {
      setUploadedFiles([...uploadedFiles, input]);
      return `🔗 링크를 분석했습니다!\n\n**핵심 내용:**\n• AI 기술의 급속한 발전\n• 콘텐츠 제작 자동화 트렌드\n• 창의성과 효율성의 조화\n\n이 내용을 바탕으로 어떤 글을 작성하시겠어요?\n\n1️⃣ 블로그 포스트 (일반 독자용)\n2️⃣ 기술 아티클 (전문가용)\n3️⃣ SNS 콘텐츠 (짧고 임팩트있게)\n\n번호를 선택하거나 원하는 방향을 말씀해주세요!`;
    }
    
    if (lowerInput.includes("pdf") || lowerInput.includes("문서") || lowerInput.includes("파일")) {
      return `📄 문서를 업로드해주세요!\n\n클립 아이콘(📎)을 클릭하여 PDF, DOCX, TXT 파일을 업로드할 수 있습니다.\n\n업로드하시면 AI가 자동으로:\n✓ 핵심 내용 분석\n✓ 주요 키워드 추출\n✓ 글쓰기 방향 제안\n\n을 진행해드립니다!`;
    }
    
    if (lowerInput.includes("1") || lowerInput.includes("블로그")) {
      return `좋습니다! 블로그 포스트로 작성하겠습니다. 📝\n\n**제안하는 구조:**\n\n1. 🎯 도입부: "당신의 글쓰기가 달라집니다"\n2. 💡 본문: AI 글쓰기 도구 3가지 활용법\n3. 📊 사례: 실제 성공 스토리\n4. 🚀 마무리: 오늘부터 시작하는 방법\n\n에디터에 초안을 작성해드릴까요? (예/아니오)`;
    }
    
    if (lowerInput.includes("예") || lowerInput.includes("초안") || lowerInput.includes("작성")) {
      return `✨ 초안을 에디터에 작성했습니다!\n\n에디터를 확인해보세요. 이제 다음을 도와드릴 수 있습니다:\n\n• "이 문단 개선해줘"\n• "더 구체적인 예시 추가해줘"\n• "톤을 더 친근하게 바꿔줘"\n• "제목 후보 제안해줘"\n\n어떤 부분을 수정하시겠어요?`;
    }
    
    if (lowerInput.includes("요약")) {
      return "현재 작성 중인 글을 요약해드리겠습니다:\n\n이 글은 AI 기술이 콘텐츠 제작 분야에 미치는 영향을 다루고 있습니다. 주요 내용은 AI 글쓰기 도구의 진화와 워크플로우 변화입니다.";
    }
    if (lowerInput.includes("개선") || lowerInput.includes("피드백")) {
      return "글을 검토했습니다! 몇 가지 개선 제안을 드립니다:\n\n1. 도입부를 더 강렬하게 시작하세요\n2. 문단 길이를 조금 더 짧게 나누면 가독성이 좋아집니다\n3. 구체적인 예시를 추가하면 설득력이 높아집니다";
    }
    if (lowerInput.includes("제목") || lowerInput.includes("타이틀")) {
      return "현재 글 내용에 어울리는 제목 후보를 제안합니다:\n\n1. 'AI와 함께하는 콘텐츠 제작 혁명'\n2. '글쓰기의 미래: AI가 바꾸는 창작의 세계'\n3. '콘텐츠 크리에이터를 위한 AI 활용 가이드'";
    }
    
    // 기본 응답
    return "네, 도와드리겠습니다! 먼저 글을 작성할 자료를 공유해주세요:\n\n📎 파일 첨부하기\n🔗 참고 링크 붙여넣기\n💭 주제나 키워드 알려주기";
  };

  const quickActions = [
    { icon: Paperclip, label: "파일 업로드", prompt: "PDF나 문서를 업로드하고 싶어요" },
    { icon: FileText, label: "링크 분석", prompt: "https://example.com/ai-trends-2025" },
    { icon: Sparkles, label: "주제 입력", prompt: "AI 글쓰기 도구에 대해 쓰고 싶어요" },
  ];

  return (
    <div className="flex h-[calc(100vh-64px)] bg-gray-50">
      {/* Left Sidebar - Document List */}
      <aside className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <Button className="w-full justify-start gap-2 mb-3">
            <Plus className="w-4 h-4" />
            새 글 작성
          </Button>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="글 검색..."
              className="pl-9"
            />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-2">
            {documents.map((doc) => (
              <div
                key={doc.id}
                onClick={() => setSelectedDoc(doc.id)}
                className={`p-3 rounded-lg mb-2 cursor-pointer transition-colors ${
                  selectedDoc === doc.id
                    ? "bg-blue-50 border border-blue-200"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-gray-900 flex-1 line-clamp-1">
                    {doc.title}
                  </h4>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                    <MoreVertical className="w-3 h-3" />
                  </Button>
                </div>
                <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                  {doc.preview}
                </p>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {doc.category}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className={`text-xs ${
                        doc.status === "작성 중"
                          ? "bg-green-100 text-green-700"
                          : doc.status === "임시저장"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {doc.status}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-500 mt-2">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {doc.lastEdited}
                  </span>
                  <span>{doc.wordCount.toLocaleString()}자</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>총 {documents.length}개의 글</span>
            <Button variant="ghost" size="sm">
              전체보기
            </Button>
          </div>
        </div>
      </aside>

      {/* Center - Editor */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Editor Toolbar */}
        <div className="border-b border-gray-200 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <Input
              placeholder="제목을 입력하세요"
              className="flex-1 max-w-2xl border-none shadow-none text-gray-900"
              defaultValue="AI가 변화시키는 콘텐츠 제작의 미래"
            />
          </div>
          <div className="flex items-center gap-2">
            <select className="px-3 py-2 border border-gray-300 rounded-md text-gray-700 text-sm">
              <option>기술</option>
              <option>비즈니스</option>
              <option>마케팅</option>
              <option>라이프스타일</option>
            </select>
            <Button variant="ghost" size="sm">
              <Save className="w-4 h-4 mr-2" />
              저장
            </Button>
            <Button variant="outline" size="sm">
              <Eye className="w-4 h-4 mr-2" />
              미리보기
            </Button>
            <Button size="sm">발행</Button>
          </div>
        </div>

        {/* Editor Content */}
        <ScrollArea className="flex-1 p-8">
          <div className="max-w-3xl mx-auto">
            <Textarea
              placeholder="당신의 이야기를 들려주세요...

AI 글쓰기 도우미와 대화하며 더 나은 글을 완성하세요."
              className="min-h-[calc(100vh-200px)] border-none shadow-none resize-none text-gray-700 p-0 focus-visible:ring-0"
              defaultValue={`인공지능 기술의 발전은 우리가 콘텐츠를 제작하고 소비하는 방식을 근본적으로 변화시키고 있습니다. 특히 글쓰기 영역에서 AI는 단순한 도구를 넘어 창의적인 파트너로 자리잡고 있습니다.

AI 글쓰기 도구의 진화

초기 AI 글쓰기 도구는 단순한 문법 교정이나 맞춤법 검사 수준이었습니다. 하지만 최근 GPT-4, Claude와 같은 대규모 언어 모델의 등장으로 상황이 완전히 달라졌습니다.

이제 AI는 문맥을 이해하고, 톤을 조절하며, 심지어 창의적인 아이디어까지 제안할 수 있습니다. 이는 작가들에게 더 많은 시간과 에너지를 창의적인 작업에 집중할 수 있게 해줍니다.

콘텐츠 제작 워크플로우의 변화

AI를 활용한 새로운 글쓰기 워크플로우는 다음과 같은 단계로 구성됩니다:

1. 아이디어 브레인스토밍 및 개요 작성
2. AI를 활용한 초안 작성
3. 인간의 편집 및 개선
4. AI 기반 피드백 및 최적화
5. 최종 검토 및 발행

이러한 프로세스를 통해 작가들은 생산성을 크게 향상시키면서도 콘텐츠의 품질을 유지하거나 오히려 개선할 수 있습니다.`}
            />
          </div>
        </ScrollArea>

        {/* Word Count Footer */}
        <div className="border-t border-gray-200 px-6 py-2 flex items-center justify-between text-sm text-gray-600">
          <span>1,234자 | 234단어</span>
          <span>마지막 저장: 방금 전</span>
        </div>
      </div>

      {/* Right Sidebar - AI Chat */}
      <aside className="w-96 bg-white border-l border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-gray-900">AI 어시스턴트</h3>
              <p className="text-xs text-gray-500">글쓰기를 도와드립니다</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <p className="text-xs text-gray-600 mb-2">빠른 작업</p>
          <div className="flex gap-2">
            {quickActions.map((action, idx) => (
              <Button
                key={idx}
                variant="outline"
                size="sm"
                className="flex-1 flex-col h-auto py-2 gap-1"
                onClick={() => setChatInput(action.prompt)}
              >
                <action.icon className="w-4 h-4" />
                <span className="text-xs">{action.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Chat Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {chatMessages.map((message, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${
                  message.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === "assistant"
                      ? "bg-gradient-to-br from-purple-600 to-blue-600"
                      : "bg-gray-300"
                  }`}
                >
                  {message.role === "assistant" ? (
                    <Sparkles className="w-4 h-4 text-white" />
                  ) : (
                    <span className="text-white text-sm">U</span>
                  )}
                </div>
                <div className={`flex-1 ${message.role === "user" ? "items-end" : ""}`}>
                  <div
                    className={`rounded-lg p-3 ${
                      message.role === "assistant"
                        ? "bg-gray-100 text-gray-900"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 px-1">
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Chat Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="flex-shrink-0">
              <Paperclip className="w-4 h-4" />
            </Button>
            <Input
              placeholder="AI에게 물어보세요..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              className="flex-1"
            />
            <Button
              size="sm"
              onClick={handleSendMessage}
              disabled={!chatInput.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Shift + Enter로 줄바꿈, Enter로 전송
          </p>
        </div>
      </aside>
    </div>
  );
}