import Header from "../../components/Header";
import "./style.css";

export default function Onboard(){
    return(
        <>
            <Header />
            <div className="OnboardBack">
                <div className="OnboardLayout">
                    <div className="OnbaordText">
                        당신의 근로계약서를 책임져 드립니다.
                    </div>
                    <div className="OnboardButton">
                        <div className="OnboardContainer" onClick={() => document.getElementById('fileInput').click()}>
                            <input 
                                type="file" 
                                id="fileInput" 
                                style={{ display: 'none' }}
                            />
                            <img src="/file.svg" alt="file" className="file"/>
                            <div className="OboardContainerText">
                                PDF 파일을 넣어주세요
                            </div>
                        </div>
                        <div className="upload">
                            업로드 완료
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}