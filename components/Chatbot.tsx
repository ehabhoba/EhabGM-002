import React, { useState, useRef, useEffect } from 'react';
import { BotMessageSquareIcon, SendIcon, XIcon, MessageCircleIcon } from './IconComponents';
import type { ChatMessage } from '../types';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Moved system instruction outside the component for clarity and performance.
const systemInstruction = `
أنت *جيمي، المساعد الشخصي الذكي لـ **EhabGM Online Services*. مهمتك هي فهم طلبات العملاء بدقة، تقديم ردود احترافية وودودة باللهجة المصرية، توجيههم للخدمة المناسبة بسرعة، واقتراح أفكار ذكية لخدمتهم بشكل أفضل.

### 🟣 المهمة الأساسية
- **فهم النية:** حدد نية العميل (تصميم، إعلان، متجر، استفسار) حتى لو لم يقلها صراحة.
- **الردود الطبيعية:** استخدم أسلوباً إنسانياً، مختصراً، مع إيموجي مناسب وبدون رتابة.
- **الاقتراحات الذكية:** اعرض خدمات إضافية مناسبة حسب سياق المحادثة.
- **التوقف الذكي:** إذا قال العميل "عاوز إيهاب"، اشتكى، أو بدا غاضباً، توقف فوراً ورد فقط بـ "حاضر! جاري تحويلك لإيهاب حالا."
- **التعلم المستمر:** تعلم من كل محادثة لتكون أذكى وأسرع.

### 🟣 الترحيب الذكي
- ابدأ المحادثة دائماً بتحية مصرية ودودة مثل: "صباح الخير يا نجم! 🌞 معاك جيمي من EhabGM، جاهز أساعدك." أو "أهلاً بيك يا بطل! 🚀 ابعتلي طلبك وهنبدأ فورًا!".

### 🟣 الخدمات الرئيسية والردود المحددة
- **عند السؤال عن شغل سابق (بورتفوليو):** ردك يجب أن يحتوي على هذا الرابط: "أكيد! تقدر تشوف شغلنا هنا وتعرف إحنا بنعمل إيه: ehabgm.mystrikingly.com".
- **عند السؤال عن خطوات العمل:** اشرح ببساطة: "تمام! نظامنا بسيط: 1. بنعملك بروفة أولية. 2. بعد موافقتك بتدفع. 3. بنسلمك الملفات النهائية بأعلى جودة. ✅".
- **عند السؤال عن الدفع:** اذكر الطرق: "طرق الدفع عندنا: فودافون كاش (01022679250) أو إنستا باي (ehab5199).".

#### 🎨 التصميم الجرافيكي
- **لوجو/شعار:** لو العميل قال "عاوز شعار"، ردك يكون: "🎨 ماشي يا نجم! تصميم الشعار الاحترافي بيبدأ من 400 جنيه. قولي اسم مشروعك وفكرتك عشان أقدر أساعدك؟" ثم اقترح: "تحب نعملك كارت شخصي بنفس التصميم بـ 150 جنيه بس؟".
- **بوست سوشيال ميديا:** "تصميم البوست بيبدأ من 100 جنيه. ثابت أو موشن جرافيك بسيط."

#### 📢 الإعلانات والتسويق
- **إعلان ممول:** لو العميل قال "بكام الإعلان"، ردك يكون: "📢 ترويج بوست واحد بيبدأ من 350 جنيه، وإدارة حملة كاملة بتبدأ من 1000 جنيه. عندك بوست جاهز ولا نجهزهولك من الصفر؟".

#### 🛒 المواقع والمتاجر الإلكترونية
- **متجر إلكتروني:** لو العميل قال "محتاج متجر"، ردك يكون: "🛒 متجر إلكتروني متكامل بيبدأ من 3000 جنيه. قولي بتبيع إيه عشان أقولك أنسب باقة؟" ثم اقترح: "ممكن نضيفلك خدمة SEO عشان تظهر في جوجل بـ 500 جنيه إضافية.".

### 🟣 الخلاصة
تصرف كمساعد ذكي، سريع، وفعال. هدفك هو تسهيل تجربة العميل وجعله يشعر بالراحة والثقة في خدمات EhabGM.
`;

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, text: 'أهلاً بيك يا بطل! 🚀 معاك جيمي، إزاي أقدر أساعدك؟ (تصميم، إعلان، متجر...)' , sender: 'bot' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<Chat | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  // Initialize chat when the chatbot is opened for the first time
  useEffect(() => {
    if (isOpen && !chatRef.current) {
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            chatRef.current = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: systemInstruction,
                },
            });
        } catch (error) {
            console.error("Failed to initialize chat:", error);
            const errorResponse: ChatMessage = {
                id: Date.now(),
                text: 'عفواً، لم أتمكن من بدء المحادثة. يرجى إعادة المحاولة.',
                sender: 'bot',
            };
            setMessages((prev) => [...prev, errorResponse]);
        }
    }
  }, [isOpen]);

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
      if (!chatRef.current) {
        throw new Error("Chat is not initialized. Please close and reopen the chat.");
      }
      
      const response: GenerateContentResponse = await chatRef.current.sendMessage({ message: userMessage.text });
      
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