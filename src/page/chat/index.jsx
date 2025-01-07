import Header from "../../components/Header";
import UserChat from "../../components/userChat";
import { useState } from "react";
import "./style.css";
import AdminChat from "../../components/adminChat";
import textModel from "../../model/text_model";

export default function Chat() {
    const [messages, setMessages] = useState([{ type: "admin", text: textModel.texts[0] }]); // 첫 메시지는 관리자 메시지
    const [inputText, setInputText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(1); // 다음 관리자 메시지 인덱스
    const getchat = async () => {
        setIsLoading(true);
        try {
          const response = await axios.get(`http://10.150.150.252:8080/location/save`,{
            headers: {
              'Content-Type': 'application/json',
            },
          });
          console.log(response.data);
          alert("데이터가 성공적으로 저장되었습니다!");
        } catch (error) {
          console.error(error);
          alert("데이터 저장 중 오류가 발생했습니다.");
        } finally {
          setIsLoading(false);
        }
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (inputText.trim() !== "") {
            // 유저 메시지 추가
            setMessages((prev) => [...prev, { type: "user", text: inputText }]);
            setInputText("");
            setIsLoading(true);

            // 딜레이 후 관리자 메시지 추가
            const delay = Math.random() * 1000 + 1000;
            await new Promise((resolve) => setTimeout(resolve, delay));
            if (currentIndex < textModel.texts.length) {
                setMessages((prev) => [...prev, { type: "admin", text: textModel.texts[currentIndex] }]);
                setCurrentIndex(currentIndex + 1);
            }
            setIsLoading(false);
        }
    };

    return (
        <div className="ChatBack">
            <Header />
            <div className="ChatContainer">
                <div className="messages">
                    {messages.map((message, index) => (
                        message.type === "admin" ? (
                            <AdminChat key={`admin-${index}`} text={message.text} />
                        ) : (
                            <UserChat key={`user-${index}`} text={message.text} />
                        )
                    ))}
                    {isLoading && <div className="loading">솔루션을 불러오는 중...</div>}
                </div>

                <form onSubmit={handleSubmit} className="chatting">
                    <input
                        type="text"
                        className="chatinput"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <button className="chatbutton">입력</button>
                </form>
            </div>
        </div>
    );
}
