import { backend } from "../api/backend";
import { aiService } from "../api/aiService";
import { useState } from "react";

export default function Test() {
  const [bootResult, setBootResult] = useState("");
  const [aiResult, setAiResult] = useState("");

  const callBoot = async () => {
    const res = await backend.get("/hello");
    setBootResult(JSON.stringify(res.data));
  };

  const callAi = async () => {
    const res = await aiService.post("/ai/chat", { text: "안녕하세요" });
    setAiResult(JSON.stringify(res.data));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>API 테스트</h2>

      <button onClick={callBoot}>Spring Boot 호출</button>
      <pre>{bootResult}</pre>

      <button onClick={callAi}>FastAPI 호출</button>
      <pre>{aiResult}</pre>
    </div>
  );
}
