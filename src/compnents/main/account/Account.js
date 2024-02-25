import React, {useContext, useEffect, useState} from 'react'
import KakaoShare from "@/compnents/main/account/KakaoShare";
import {I18nContext} from "@/compnents/common/I18nContext";

const Account = () => {
    const [modalVertical, setModalVertical ] = useState(45);
    const [ opacity, setOpacity ] = useState(0.5);
    const [ modalState, setModalState ] = useState({isOpen : false , target : ""});
    const [ ani, setAni ] = useState(false);

    function copyToClipBoard( account ) {
        window.navigator.clipboard.writeText(account).then(() => {
            alert("복사 완료");
        });
    }
    const modalOpen = ( target ) => {
        setModalState({isOpen: true, target: target});
        setModalVertical(48);
        setOpacity(0.5)

    }
    useEffect(()=>{
        if(modalVertical<=50 && modalState.isOpen){
            setTimeout(()=>{
                setModalVertical(modalVertical+0.1 );
                setOpacity(opacity+0.03)
            },10)
        }
    },[modalVertical])
    return(
        <>
            <div data-v-72f9b44c="" data-v-227354f0="" className="bank-section">
                <div data-v-72f9b44c="" className="title"><span data-v-72f9b44c="">마음 전하기</span></div>
                <div data-v-72f9b44c="" className="buttons">
                    <div data-v-72f9b44c="">
                        <div data-v-72f9b44c="" className="bank-button" style={{alignContent:'center'}} onClick={()=>modalOpen("Gr")}>
                            <img data-v-72f9b44c="" src="./assets/images/img/account-groom-icon.96a3b3f.png" width="20" className="icon"/>
                            <div data-v-72f9b44c="" className="icon-title">
                                신랑 계좌번호
                            </div>
                        </div>
                    </div>
                    <div data-v-72f9b44c="">
                        <div data-v-72f9b44c="" className="bank-button" style={{alignContent:'center'}} onClick={()=>modalOpen("Br")}>
                            <img data-v-72f9b44c="" src="./assets/images/img/account-bride-icon.96e5c87.png" width="20" className="icon"/>
                            <div data-v-72f9b44c="" className="icon-title">
                                신부 계좌번호
                            </div>
                        </div>
                    </div>
                </div>
                {modalState.isOpen &&
                    <div data-v-72f9b44c="" className="bank-modal vm--container">
                        <div data-modal="bankmodal" aria-expanded="true" className="vm--overlay">
                            <div className="vm--top-right-slot"></div>
                        </div>
                        {modalState.target==='Br' &&
                            <div aria-expanded="true" role="dialog" aria-modal="true" className="vm--modal"
                                 style={{width: "450px",
                                     height: "450px",
                                     zIndex: "150",
                                     top: modalVertical + "%",
                                     left: "50%",
                                     opacity : opacity,
                                     transform: "translate(-50%, -50%)",
                                     justifyContent: "center"}}>
                                <div data-v-72f9b44c="" className="bank-modal-wrapper">
                                    <div data-v-72f9b44c="" className="content">
                                        <div data-v-72f9b44c="" className="title">
                                            <div data-v-72f9b44c="">신부 계좌</div>
                                            <div data-v-72f9b44c="" onClick={()=>copyToClipBoard("신한은행 110-535-5588324")} className="copy">
                                                복사하기
                                            </div>
                                        </div>
                                        <div data-v-72f9b44c="" className="name">
                                            <div data-v-72f9b44c="">신한은행 (예금주 : FUKUDA RIKO)</div>
                                        </div>
                                        <div data-v-72f9b44c="" className="number">
                                            <div data-v-72f9b44c="">110-291-256291</div>
                                        </div>
                                    </div>
                                    <div data-v-72f9b44c="" onClick={()=>setModalState({isOpen: false})} className="close-button"><span data-v-72f9b44c="">닫기</span></div>
                                </div>
                            </div>
                        }
                        {modalState.target==='Gr' &&
                            <div aria-expanded="true" role="dialog" aria-modal="true" className="vm--modal"
                                 style={{width: "450px",
                                     height: "450px",
                                     zIndex: "150",
                                     top: modalVertical + "%",
                                     left: "50%",
                                     opacity : opacity,
                                     transform: "translate(-50%, -50%)",
                                     justifyContent: "center"}}>
                                <div data-v-72f9b44c="" className="bank-modal-wrapper">
                                    <div data-v-72f9b44c="" className="content">
                                        <div data-v-72f9b44c="" className="title">
                                            <div data-v-72f9b44c="">신랑혼주 계좌</div>
                                            <div data-v-72f9b44c="" onClick={()=>copyToClipBoard("신한은행 110-394-039142")} className="copy">
                                                복사하기
                                            </div>
                                        </div>
                                        <div data-v-72f9b44c="" className="name">
                                            <div data-v-72f9b44c="">신한은행 (예금주 : 신미선)</div>
                                        </div>
                                        <div data-v-72f9b44c="" className="number">
                                            <div data-v-72f9b44c="">110-394-039142</div>
                                        </div>
                                    </div>
                                    <div data-v-72f9b44c="" className="content">
                                        <div data-v-72f9b44c="" className="title">
                                            <div data-v-72f9b44c="">신랑 계좌</div>
                                            <div data-v-72f9b44c="" onClick={()=>copyToClipBoard("신한은행 110-291-256291")} className="copy">
                                                복사하기
                                            </div>
                                        </div>
                                        <div data-v-72f9b44c="" className="name">
                                            <div data-v-72f9b44c="">신한은행 (예금주 : 김승현)</div>
                                        </div>
                                        <div data-v-72f9b44c="" className="number">
                                            <div data-v-72f9b44c="">110-291-256291</div>
                                        </div>
                                    </div>
                                    <div data-v-72f9b44c="" onClick={()=>setModalState({isOpen: false})} className="close-button"><span data-v-72f9b44c="">닫기</span></div>
                                </div>
                            </div>
                        }
                    </div>
                }

            </div>
            <div data-v-760883fe="" data-v-227354f0="" className="share">
                <div data-v-760883fe="" className="buttons">
                    <div data-v-760883fe="" className="button">
                        <img data-v-760883fe="" src="./assets/images/img/kakao_talk_icon_black.49f2b15.png" height="17px" className="icon"/>
                        <KakaoShare/>
                    </div>
                    <div data-v-760883fe="" className="button">
                        <svg data-v-760883fe="" aria-hidden="true" focusable="false" data-prefix="fa"
                             data-icon="link" role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 512 512" className="icon svg-inline--fa fa-link fa-w-16">
                            <path data-v-760883fe="" fill="currentColor" d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
                                  className="">
                            </path>
                        </svg>
                        <div data-v-760883fe="" onClick={()=>copyToClipBoard("https://seungstar7.github.io/React_WeddingCard")}>청첩장 주소 복사하기</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Account