import Header from "../../components/Header";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./style.css";

export default function Onboard(){
    const navigate = useNavigate();
    const [isFileUploaded, setIsFileUploaded] = useState(false);

    return(
        <>
            <Header />
            <div className="OnboardBack">
                <div className="OnboardLayout">
                    
                    <div className="OnbaordText">
                        당신의 근로계약서를 책임져 드립니다.
                        
                    </div>
                    <img src="/lines.svg" alt="line" className="lines"/>
                    <div className="OnboardButton">
                        <div className="OnboardContainer" onClick={() => document.getElementById('fileInput').click()}>
                            <input 
                                type="file" 
                                id="fileInput" 
                                accept=".pdf" 
                                style={{ display: 'none' }}
                                onChange={(e) => {
                                    if (e.target.files && e.target.files[0]) {
                                        setIsFileUploaded(true);
                                    }
                                }}
                            />
                            <img 
                                src={isFileUploaded ? "/check.svg" : "/file.svg"} 
                                alt="file" 
                                className="file"
                            />
                            <div className="OboardContainerText">
                                {!isFileUploaded?"PDF 파일을 넣어주세요":"PDF 파일이 입력되었습니다."}
                            </div>
                        </div>
                        <div 
                            className="upload" 
                            onClick={() => {
                                navigate('/chat');
                            }}
                        >
                            업로드 완료
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}