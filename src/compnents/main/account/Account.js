import React, {useEffect, useState} from 'react'

const Account = () => {
    const [modalVertical, setModalVertical ] = useState(0);
    const [ isOpen, setIsOpen ] = useState(false);

    const modalOpen = () => {
        setIsOpen(true);
        setModalVertical(45);

    }

    useEffect(()=>{
        if(modalVertical<=50){
            setTimeout(()=>{
                setModalVertical(modalVertical+1);
            },15)
        }
    },[modalVertical])
    return(
        <>
            <div data-v-72f9b44c="" data-v-227354f0="" className="bank-section">
                <div data-v-72f9b44c="" className="title"><span data-v-72f9b44c="">신랑 &amp; 신부에게 마음 전하기</span></div>
                <div data-v-72f9b44c="" className="description"><span data-v-72f9b44c="">축복의 의미로 축의금을 전달해보세요.</span>
                </div>
                <div data-v-72f9b44c="" className="buttons">
                    <div data-v-72f9b44c="">
                        <div data-v-72f9b44c="" className="bank-button" onClick={()=>modalOpen()}>
                            <img data-v-72f9b44c="" src="./assets/images/img/account-groom-icon.96a3b3f.png" width="20" className="icon"/>
                            <div data-v-72f9b44c="" className="icon-title">
                                신랑측 계좌번호
                            </div>
                        </div>
                    </div>
                    <div data-v-72f9b44c="">
                        <div data-v-72f9b44c="" className="bank-button" onClick={()=>setIsOpen(true)}>
                            <img data-v-72f9b44c="" src="./assets/images/img/account-bride-icon.96e5c87.png" width="20" className="icon"/>
                            <div data-v-72f9b44c="" className="icon-title">
                                신부측 계좌번호
                            </div>
                        </div>
                    </div>
                </div>
                {isOpen &&
                    <div data-v-72f9b44c="" className="bank-modal vm--container">
                        <div data-modal="bankmodal" aria-expanded="true" className="vm--overlay">
                            <div className="vm--top-right-slot"></div>
                        </div>
                        <div aria-expanded="true" role="dialog" aria-modal="true" className="vm--modal"
                             style={{width: "450px",
                                 height: "450px",
                                 zIndex: "150",
                                 position: "absolute",
                                 top: modalVertical + "%",
                                 left: "50%",
                                 transform: "translate(-50%, -50%)",
                                 borderRadius: "10px",
                                 boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
                                 backgroundColor: "white",
                                 justifyContent: "center",
                                 overflow: "hidden",}}>
                            <div data-v-72f9b44c="" className="bank-modal-wrapper">

                                <div data-v-72f9b44c="" className="content">
                                    <div data-v-72f9b44c="" className="title">
                                        <div data-v-72f9b44c="">신랑혼주 계좌</div>
                                        <div data-v-72f9b44c="" className="copy">
                                            복사하기
                                        </div>
                                    </div>
                                    <div data-v-72f9b44c="" className="name">
                                        <div data-v-72f9b44c="">KB국민 (예금주 : 강성택)</div>
                                    </div>
                                    <div data-v-72f9b44c="" className="number">
                                        <div data-v-72f9b44c="">000000-00-00000</div>
                                    </div>
                                </div>
                                <div data-v-72f9b44c="" className="content">
                                    <div data-v-72f9b44c="" className="title">
                                        <div data-v-72f9b44c="">신랑 계좌</div>
                                        <div data-v-72f9b44c="" className="copy">
                                            복사하기
                                        </div>
                                    </div>
                                    <div data-v-72f9b44c="" className="name">
                                        <div data-v-72f9b44c="">KB국민 (예금주 : 강도현)</div>
                                    </div>
                                    <div data-v-72f9b44c="" className="number">
                                        <div data-v-72f9b44c="">000000-00-00000</div>
                                    </div>
                                </div>
                                <div data-v-72f9b44c="" onClick={()=>setIsOpen(false)} className="close-button"><span data-v-72f9b44c="">닫기</span></div>
                            </div>
                        </div>
                    </div>
                }

            </div>
            <div data-v-760883fe="" data-v-227354f0="" className="share">
                <div data-v-760883fe="" className="buttons">
                    <div data-v-760883fe="" className="button">
                        <img data-v-760883fe="" src="./assets/images/img/kakao_talk_icon_black.49f2b15.png" height="17px" className="icon"/>
                        <div data-v-760883fe="">카카오톡으로 공유하기</div>
                    </div>
                    <div data-v-760883fe="" className="button">
                        <svg data-v-760883fe="" aria-hidden="true" focusable="false" data-prefix="fa"
                             data-icon="link" role="img" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 512 512" className="icon svg-inline--fa fa-link fa-w-16">
                            <path data-v-760883fe="" fill="currentColor" d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
                                  className="">

                            </path>
                        </svg>
                        <div data-v-760883fe="">청첩장 주소 복사하기</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Account