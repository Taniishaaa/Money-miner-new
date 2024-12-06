import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./MoneyMiner.css";

function MoneyMiner() {
  const [chatHistory, setChatHistory] = useState([]);
  const [question, setQuestion] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  async function generateAnswer(e) {
    e.preventDefault();
    if (!question.trim()) return;

    setGeneratingAnswer(true);
    const currentQuestion = question;
    setQuestion("");

    setChatHistory((prev) => [...prev, { type: "question", content: currentQuestion }]);

    try {
      const response = await axios({
        url: `your_gemini_url`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: currentQuestion }] }],
        },
      });

      const aiResponse =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";
      setChatHistory((prev) => [...prev, { type: "answer", content: aiResponse }]);
    } catch (error) {
      console.error("Error generating answer:", error);
      setChatHistory((prev) => [
        ...prev,
        { type: "answer", content: "Error: Unable to fetch response. Please try again." },
      ]);
    }

    setGeneratingAnswer(false);
  }

  useEffect(() => {                                         //currently not working, integration issues
    const script = document.createElement("script");
    script.src =
      "dialogflow_src";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="chat-container">
      <header className="chat-header">
        <h1>MoneyMiner</h1>
      </header>

      <div className="chat-history" ref={chatContainerRef}>
        {chatHistory.length === 0 ? (
          <p className="welcome-message">Welcome to MoneyMiner! Ask me anything.</p>
        ) : (
          chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`chat-bubble ${chat.type === "question" ? "question" : "answer"}`}
            >
              {chat.content}
            </div>
          ))
        )}
        {generatingAnswer && (
          <div className="chat-bubble answer typing">Typing...</div>
        )}
      </div>

      <form className="chat-input-form" onSubmit={generateAnswer}>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question here..."
          rows="2"
          disabled={generatingAnswer}
        ></textarea>
        <button type="submit" disabled={generatingAnswer}>
          Send
        </button>
      </form>

      {/* Dialogflow Messenger */}
      <df-messenger
  project-id="your_project_id"
  agent-id="your_agent_id"
  language-code="en"
  max-query-length="-1">
  <df-messenger-chat-bubble
   chat-title="MINERMONEY">
  </df-messenger-chat-bubble>
</df-messenger>
    </div>
  );
}

export default MoneyMiner;
