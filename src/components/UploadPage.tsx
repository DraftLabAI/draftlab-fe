import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Progress } from "./ui/progress";
import {
  Upload,
  FileText,
  Link2,
  Sparkles,
  Check,
  Loader2,
  File,
  Download,
  Trash2,
} from "lucide-react";

export function UploadPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);

  const analyzedDocs = [
    {
      id: 1,
      name: "AI 트렌드 리포트 2025.pdf",
      size: "2.4 MB",
      uploadDate: "2025-11-18",
      status: "완료",
      summary:
        "2025년 AI 기술 동향과 산업별 적용 사례를 분석한 리포트. 생성형 AI의 급성장과 다양한 산업 분야로의 확산을 다룹니다.",
      keywords: ["생성형 AI", "산업 적용", "기술 동향", "시장 분석"],
      keyPoints: [
        "생성형 AI 시장이 2025년 300% 성장 예상",
        "금융, 의료, 교육 분야의 AI 도입 가속화",
        "AI 윤리 및 규제 프레임워크 강화 필요",
        "중소기업의 AI 접근성 개선",
      ],
    },
    {
      id: 2,
      name: "콘텐츠 마케팅 가이드.pdf",
      size: "1.8 MB",
      uploadDate: "2025-11-17",
      status: "완료",
      summary:
        "효과적인 콘텐츠 제작 및 배포 전략에 대한 종합 가이드. SEO 최적화와 오디언스 타겟팅 방법론을 제시합니다.",
      keywords: ["콘텐츠 마케팅", "SEO", "타겟 오디언스", "성과 측정"],
      keyPoints: [
        "타겟 오디언스 페르소나 정의의 중요성",
        "키워드 리서치와 SEO 최적화 전략",
        "다양한 콘텐츠 포맷 활용하기",
        "데이터 기반 성과 측정 및 개선",
      ],
    },
  ];

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-8">
      <div className="mb-8">
        <h2 className="text-gray-900 mb-2">문서 업로드 및 분석</h2>
        <p className="text-gray-600">
          PDF 문서나 웹 링크를 업로드하면 AI가 자동으로 핵심 내용을 분석해드립니다.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* PDF Upload */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-gray-900">PDF 파일 업로드</h3>
              <p className="text-gray-500">최대 10MB</p>
            </div>
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 hover:bg-blue-50 transition-colors cursor-pointer">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-700 mb-2">파일을 드래그하거나 클릭하여 업로드</p>
            <p className="text-gray-500">PDF, DOCX, TXT 지원</p>
          </div>
          <Button className="w-full mt-4">파일 선택</Button>
        </Card>

        {/* Link Upload */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Link2 className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-gray-900">웹 링크 분석</h3>
              <p className="text-gray-500">URL 입력</p>
            </div>
          </div>
          <Input
            placeholder="https://example.com/article"
            className="mb-4"
          />
          <div className="space-y-2 mb-4">
            <p className="text-gray-600">최근 분석한 링크:</p>
            <div className="space-y-1">
              {["medium.com/ai-trends", "blog.example.com/content-guide"].map((url, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-500 p-2 hover:bg-gray-50 rounded">
                  <Link2 className="w-4 h-4" />
                  <span className="flex-1 truncate">{url}</span>
                </div>
              ))}
            </div>
          </div>
          <Button className="w-full" onClick={handleAnalyze}>링크 분석하기</Button>
        </Card>
      </div>

      {/* Analysis Progress */}
      {isAnalyzing && (
        <Card className="p-6 mb-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
            <div>
              <h3 className="text-gray-900">문서 분석 중...</h3>
              <p className="text-gray-600">AI가 문서 내용을 분석하고 있습니다</p>
            </div>
          </div>
          <Progress value={progress} className="mb-2" />
          <p className="text-gray-600">{progress}% 완료</p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2">
              {progress >= 25 ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
              )}
              <span className="text-gray-700">텍스트 추출</span>
            </div>
            <div className="flex items-center gap-2">
              {progress >= 50 ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
              )}
              <span className="text-gray-700">내용 분석</span>
            </div>
            <div className="flex items-center gap-2">
              {progress >= 75 ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
              )}
              <span className="text-gray-700">키워드 추출</span>
            </div>
            <div className="flex items-center gap-2">
              {progress >= 100 ? (
                <Check className="w-4 h-4 text-green-600" />
              ) : (
                <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
              )}
              <span className="text-gray-700">요약 생성</span>
            </div>
          </div>
        </Card>
      )}

      {/* Analyzed Documents */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-900">분석 완료된 문서</h3>
          <Badge>{analyzedDocs.length}개</Badge>
        </div>

        <div className="space-y-6">
          {analyzedDocs.map((doc) => (
            <Card key={doc.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <File className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">{doc.name}</h4>
                    <div className="flex items-center gap-3 text-gray-500">
                      <span>{doc.size}</span>
                      <span>•</span>
                      <span>{doc.uploadDate}</span>
                      <span>•</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        {doc.status}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </Button>
                </div>
              </div>

              <Separator className="mb-4" />

              {/* AI Summary */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <h4 className="text-gray-900">AI 요약</h4>
                </div>
                <p className="text-gray-600">{doc.summary}</p>
              </div>

              {/* Keywords */}
              <div className="mb-4">
                <h4 className="text-gray-900 mb-2">핵심 키워드</h4>
                <div className="flex flex-wrap gap-2">
                  {doc.keywords.map((keyword, idx) => (
                    <Badge key={idx} variant="secondary">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Points */}
              <div>
                <h4 className="text-gray-900 mb-3">주요 내용</h4>
                <div className="space-y-2">
                  {doc.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-white">
                        {idx + 1}
                      </div>
                      <p className="text-gray-700 flex-1">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex items-center justify-between">
                <Button variant="outline" size="sm">
                  전체 내용 보기
                </Button>
                <Button size="sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  글쓰기에 활용하기
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
