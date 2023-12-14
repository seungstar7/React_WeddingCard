import React, {useEffect, useState} from "react";

const CardMain = () =>{

    const [ imgSize, setImgSize ] = useState(10);


    // useEffect(()=>{
    //     setTimeout(()=>{
    //         if(imgSize<100)setImgSize(imgSize+1);
    //     },1)
    // },[imgSize])

    return(
        <>
            <div id="__nuxt">
                <div id="__layout">
                    <div className="main-container">
                        <div data-v-227354f0="" className="template-basic ">
                            {/*메인 헤더영역*/}
                            <div data-v-4de6baaa="" data-v-227354f0="" className="main">
                                <div data-v-4de6baaa="" className="header">
                                    <div data-v-4de6baaa="" className="date">
                                        03/18
                                    </div>
                                    <div data-v-4de6baaa="" className="names">
                                        <div data-v-4de6baaa="">
                                            <span data-v-4de6baaa="" name="강도현" phone="010-1234-1234">김 승 현</span>
                                            <span data-v-4de6baaa="" className="and"></span>
                                            <span data-v-4de6baaa="" name="이수진" phone="010-1234-1234">김 샛 별</span>
                                        </div>
                                    </div>
                                    <div data-v-4de6baaa="" className="title">
                                        결 혼 합 니 다.
                                    </div>
                                    <img data-v-4de6baaa="" src="/assets/images/img/main.e931123.jpg" width={'100%'} className="img"/>
                                        <div data-v-4de6baaa="" className="time">2024. 04. 06. SAT AM 11:00</div>
                                        <div data-v-4de6baaa="" className="location">베뉴지 B1 마리아 칼라스홀</div>
                                </div>
                            </div>
                            {/*메인 헤더영역 끝*/}
                            {/*소개 영역 시작*/}
                            <div data-v-2795477a="" data-v-227354f0="" className="message">
                                <img data-v-2795477a="" src="/assets/images/img/rose.6092fbd.png" className="rose-img"/>
                                <img data-v-2795477a="" src="/assets/images/img/rose-gold.53d3800.png" className="rose-img-gold"/>
                                <img data-v-2795477a="" src="/assets/images/img/rose.6092fbd.png" className="rose-img-bottom"/>
                                    <div data-v-2795477a="" className="text">
                                        <div data-v-2795477a="" className="title">초대합니다</div>
                                        <div data-v-2795477a="" className="content">
                                            곁에 있을 때 가장<br/>
                                            나다운 모습이 되게 하는 한 사람<br/>
                                            서로의 최선이 될 수 있도록<br/>
                                            배려하고 힘이되어줄 사람<br/>
                                            그 사람과 삶의 여행을<br/>
                                            함께 떠나려 합니다.<br/><br/>
                                            저희의 출발점에 여러분을 초대하오니<br/>
                                            오셔서 많이 축복해 주시면<br/>
                                            큰 기쁨이겠습니다.
                                        </div>
                                    </div>
                            </div>
                            {/*소개 영역 끝*/}
                            {/*콘텐츠 영역 시작*/}
                            <div data-v-4752b0dc="" data-v-227354f0="" className="contacts">
                                <div data-v-4752b0dc="" className="bride-groom ">
                                    <div data-v-dcbd09b2="" data-v-4752b0dc="" className="groom-and-bride">
                                        <div data-v-dcbd09b2="" className="title-wrapper">
                                            <div data-v-dcbd09b2="" className="title">신랑</div>
                                            <div data-v-dcbd09b2="">강도현</div>
                                        </div>
                                        <div data-v-dcbd09b2="" className="icons">
                                            <a data-v-dcbd09b2="" href="tel:010-1234-1234">
                                            <svg data-v-dcbd09b2="" aria-hidden="true" focusable="false"
                                                 data-prefix="fas"
                                                 data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 512 512" className="svg-inline--fa fa-phone fa-w-16">
                                                <path data-v-dcbd09b2="" fill="currentColor"
                                                      d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                                                      className=""></path>
                                            </svg>
                                        </a> <a data-v-dcbd09b2="" href="sms:010-1234-1234">
                                            <svg data-v-dcbd09b2="" aria-hidden="true" focusable="false"
                                                 data-prefix="fas"
                                                 data-icon="sms" role="img" xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 512 512" className="svg-inline--fa fa-sms fa-w-16">
                                                <path data-v-dcbd09b2="" fill="currentColor"
                                                      d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7 1.3 3 4.1 4.8 7.3 4.8 66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128.2 304H116c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h12.3c6 0 10.4-3.5 10.4-6.6 0-1.3-.8-2.7-2.1-3.8l-21.9-18.8c-8.5-7.2-13.3-17.5-13.3-28.1 0-21.3 19-38.6 42.4-38.6H156c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8h-12.3c-6 0-10.4 3.5-10.4 6.6 0 1.3.8 2.7 2.1 3.8l21.9 18.8c8.5 7.2 13.3 17.5 13.3 28.1.1 21.3-19 38.6-42.4 38.6zm191.8-8c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-68.2l-24.8 55.8c-2.9 5.9-11.4 5.9-14.3 0L224 227.8V296c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V192c0-8.8 7.2-16 16-16h16c6.1 0 11.6 3.4 14.3 8.8l17.7 35.4 17.7-35.4c2.7-5.4 8.3-8.8 14.3-8.8h16c8.8 0 16 7.2 16 16v104zm48.3 8H356c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h12.3c6 0 10.4-3.5 10.4-6.6 0-1.3-.8-2.7-2.1-3.8l-21.9-18.8c-8.5-7.2-13.3-17.5-13.3-28.1 0-21.3 19-38.6 42.4-38.6H396c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8h-12.3c-6 0-10.4 3.5-10.4 6.6 0 1.3.8 2.7 2.1 3.8l21.9 18.8c8.5 7.2 13.3 17.5 13.3 28.1.1 21.3-18.9 38.6-42.3 38.6z"
                                                      className=""></path>
                                            </svg>
                                            </a>
                                        </div>
                                        </div>
                                    <div data-v-dcbd09b2="" data-v-4752b0dc="" className="groom-and-bride">
                                        <div data-v-dcbd09b2="" className="title-wrapper">
                                            <div data-v-dcbd09b2="" className="title">
                                                신부
                                            </div>
                                            <div data-v-dcbd09b2="">이수진</div>
                                        </div>
                                        <div data-v-dcbd09b2="" className="icons"><a data-v-dcbd09b2=""
                                                                                     href="tel:010-1234-1234">
                                            <svg data-v-dcbd09b2="" aria-hidden="true" focusable="false"
                                                 data-prefix="fas"
                                                 data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 512 512" className="svg-inline--fa fa-phone fa-w-16">
                                                <path data-v-dcbd09b2="" fill="currentColor"
                                                      d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                                                      className=""></path>
                                            </svg>
                                        </a> <a data-v-dcbd09b2="" href="sms:010-1234-1234">
                                            <svg data-v-dcbd09b2="" aria-hidden="true" focusable="false"
                                                 data-prefix="fas"
                                                 data-icon="sms" role="img" xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 512 512" className="svg-inline--fa fa-sms fa-w-16">
                                                <path data-v-dcbd09b2="" fill="currentColor"
                                                      d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7 1.3 3 4.1 4.8 7.3 4.8 66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128.2 304H116c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h12.3c6 0 10.4-3.5 10.4-6.6 0-1.3-.8-2.7-2.1-3.8l-21.9-18.8c-8.5-7.2-13.3-17.5-13.3-28.1 0-21.3 19-38.6 42.4-38.6H156c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8h-12.3c-6 0-10.4 3.5-10.4 6.6 0 1.3.8 2.7 2.1 3.8l21.9 18.8c8.5 7.2 13.3 17.5 13.3 28.1.1 21.3-19 38.6-42.4 38.6zm191.8-8c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-68.2l-24.8 55.8c-2.9 5.9-11.4 5.9-14.3 0L224 227.8V296c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V192c0-8.8 7.2-16 16-16h16c6.1 0 11.6 3.4 14.3 8.8l17.7 35.4 17.7-35.4c2.7-5.4 8.3-8.8 14.3-8.8h16c8.8 0 16 7.2 16 16v104zm48.3 8H356c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h12.3c6 0 10.4-3.5 10.4-6.6 0-1.3-.8-2.7-2.1-3.8l-21.9-18.8c-8.5-7.2-13.3-17.5-13.3-28.1 0-21.3 19-38.6 42.4-38.6H396c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8h-12.3c-6 0-10.4 3.5-10.4 6.6 0 1.3.8 2.7 2.1 3.8l21.9 18.8c8.5 7.2 13.3 17.5 13.3 28.1.1 21.3-18.9 38.6-42.3 38.6z"
                                                      className=""></path>
                                            </svg>
                                            </a> </div>
                                   </div>
                                </div>

                            </div>

                            {/*콘텐츠 영역 끝*/}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardMain;