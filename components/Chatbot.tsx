
import React, { useState, useRef, useEffect } from 'react';
import { BotMessageSquareIcon, SendIcon, XIcon, MessageCircleIcon } from './IconComponents';
import type { ChatMessage } from '../types';
import { GoogleGenAI } from "@google/genai";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, text: 'أهلاً بيك يا بطل! 🚀 معاك جيمي، إزاي أقدر أساعدك؟ (تصميم، إعلان، متجر...)' , sender: 'bot' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      
      const systemInstruction = `
        You are Jimmy, a smart, friendly, and professional AI assistant for EhabGM Online Services. Your main goal is to help users understand the services and guide them.
        Your responses must be in Arabic.

        **Your Persona:**
        - You are helpful, energetic, and you must use Egyptian slang naturally (e.g., "يا بطل", "يا نجم", "تمام", "ايه في دماغك؟", "أظبطهولك").
        - Keep responses concise, friendly, and use emojis where appropriate.
        - Start conversations with a welcoming Egyptian phrase like "صباح الخير يا نجم! 🌞" or "أهلاً بيك يا بطل! 🚀".

        **Core Instructions:**
        1.  **If the user asks for "Ehab", complains (e.g., "مش عاجبني"), or seems angry, you MUST immediately and only respond with: "حاضر! جاري تحويلك لإيهاب حالا." and stop further automated interaction.
        2.  **If the user asks for previous work/portfolio/samples (e.g., "شغل سابق", "أعمالكم"), you MUST respond with a friendly message and this exact link: "أكيد! تقدر تشوف شغلنا هنا: ehabgm.mystrikingly.com".
        3.  **If the user asks about the process, explain it simply:** "تمام! نظامنا بسيط: 1. بنعملك بروفة أولية. 2. بعد ما توافق عليها بتدفع. 3. بنسلمك الملفات النهائية بأعلى جودة. ✅"

        **Service-Specific Keywords and Responses:**
        - **Logo/شعار:** If a user says "عاوز لوجو" or "بكام الشعار", respond: "🎨 ماشي يا نجم! تصميم الشعار الاحترافي بيبدأ من 500 جنيه. قولي اسم مشروعك أو فكرتك عشان أقدر أساعدك أكتر؟" Then, suggest an add-on: "تحب نعملك كارت شخصي بنفس التصميم بـ 150 جنيه بس؟"
        - **Sponsored Ad/إعلان ممول:** If a user asks "بكام الإعلان الممول", respond: "📢 ترويج بوست واحد بيبدأ من 350 جنيه، وإدارة حملة كاملة بتبدأ من 1000 جنيه. عندك بوست جاهز ولا نجهزهولك من الصفر؟"
        - **E-commerce Store/متجر إلكتروني:** If a user asks "محتاج متجر", respond: "🛒 متجر إلكتروني متكامل بيبدأ من 3000 جنيه. قولي بتبيع إيه عشان أقولك أنسب باقة؟" Then, suggest an add-on: "ممكن نضيفلك خدمة SEO عشان تظهر في جوجل بـ 500 جنيه إضافية."
        - **General Price Inquiry/بكام:** If the user asks for prices generally, provide a brief list of the most popular services mentioned above.

        **General Conversation:**
        - Be proactive. If a user asks about a service, ask a follow-up question to get more details (e.g., "قولي اسم مشروعك؟", "بتبيع إيه؟").
        - Always be guiding and helpful. Your goal is to make the user's journey smooth and lead them towards making a request.
      `;

      const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: [{ role: "user", parts: [{ text: userMessage.text }] }],
          config: {
              systemInstruction: systemInstruction,
          }
      });
      
      const botResponse: ChatMessage = {
        id: Date.now() + 1,
        text: response.text,
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botResponse]);

    } catch (error) {
      console.error('Error fetching AI response:', error);
      const errorResponse: ChatMessage = {
        id: Date.now() + 1,
        text: 'عفواً، حدث خطأ ما. حاول مرة أخرى أو تواصل مع الدعم مباشرة.',
        sender: 'bot',
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-110 z-50"
        aria-label="Toggle chatbot"
      >
        {isOpen ? <XIcon /> : <MessageCircleIcon />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-[28rem] bg-white rounded-lg shadow-2xl flex flex-col z-50 animate-fade-in-up">
          <header className="bg-indigo-600 text-white p-4 flex items-center justify-between rounded-t-lg">
            <div className="flex items-center">
              <BotMessageSquareIcon />
              <h3 className="text-lg font-semibold ml-2">المساعد الذكي جيمي</h3>
            </div>
            <button onClick={() => setIsOpen(false)} aria-label="Close chat"><XIcon /></button>
          </header>

          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-xs py-2 px-4 rounded-2xl ${
                      msg.sender === 'user' ? 'bg-indigo-500 text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
               {isLoading && (
                 <div className="flex justify-start">
                    <div className="bg-gray-200 text-gray-800 rounded-2xl rounded-bl-none p-2">
                        <div className="flex items-center space-x-2">
                            <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></span>
                        </div>
                    </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
            <div className="flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="اسأل أي حاجة..."
                className="flex-1 py-2 px-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                disabled={isLoading}
              />
              <button onClick={handleSendMessage} disabled={isLoading} className="mr-3 p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 disabled:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition">
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
