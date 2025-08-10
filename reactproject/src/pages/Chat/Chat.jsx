import React, { useState, useEffect, useRef } from 'react';
import './chat.css';

function Chat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: '你好！我是AI助手，请输入你的问题，我会将请求发送到后端处理。',
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
    }
  ])
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // 滚动到底部
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // 获取当前时间
  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
  };

  // 添加消息到状态
  const addMessage = (text, sender) => {
    const newMessage = {
      id: Date.now(),
      text: text,
      sender: sender,
      timestamp: getCurrentTime()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  // 发送消息到后端
  const sendMessage = async () => {
    const message = inputValue.trim();
    if (!message || isLoading) return;

    // 添加用户消息
    addMessage(message, 'user');
    const userMessage = message;
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8080/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          timestamp: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // 添加AI回复
      addMessage(data.reply || '后端返回了空回复', 'bot');
      
    } catch (error) {
      // 显示错误消息
      addMessage('抱歉，后端服务暂时不可用，请稍后再试。', 'bot');
      console.error('API调用错误:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // 处理回车键发送
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  // 聚焦输入框
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="chat-container">
      <div className="chat-header">
        AI 智能对话
      </div>
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender}-message`}>
            <div className="message-content">{msg.text}</div>
            <div className="timestamp">{msg.timestamp}</div>
          </div>
        ))}
        {isLoading && (
          <div className="message bot-message typing-indicator">
            <div className="typing-indicator-text">后端正在处理中...</div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyUp={handleKeyPress}
          placeholder="请输入您的问题..."
          autoComplete="off"
          disabled={isLoading}
        />
        <button 
          onClick={sendMessage} 
          disabled={isLoading || !inputValue.trim()}
        >
          发送
        </button>
      </div>
    </div>
  );
}

export default Chat;