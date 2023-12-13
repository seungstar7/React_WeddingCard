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
                        <div data-v-227354f0="" class="template-basic ">
                            {/*메인 헤더영역*/}
                            <div data-v-4de6baaa="" data-v-227354f0="" className="main">
                                <div data-v-4de6baaa="" className="header">
                                    <div data-v-4de6baaa="" className="date">
                                        03/18
                                    </div>
                                    <div data-v-4de6baaa="" className="names">
                                        <div data-v-4de6baaa="">
                                            <span data-v-4de6baaa="" name="강도현" phone="010-1234-1234">누 으 으</span>
                                            <span data-v-4de6baaa="" className="and"></span>
                                            <span data-v-4de6baaa="" name="이수진" phone="010-1234-1234">테 스 트</span>
                                        </div>
                                    </div>
                                    <div data-v-4de6baaa="" className="title">
                                        슈 퍼 텍 스 트
                                    </div>
                                    <img data-v-4de6baaa="" src="/assets/images/img/main.e931123.jpg" width={'100%'} className="img"/>
                                        <div data-v-4de6baaa="" className="time">2028. 03. 18. SAT PM 1:00</div>
                                        <div data-v-4de6baaa="" className="location">누리시아웨딩홀 6층</div>
                                </div>
                            </div>
                            {/*메인 헤더영역 끝*/}
                            {/*<div data-v-2795477a="" data-v-227354f0="" className="message">*/}
                            {/*    <img data-v-2795477a="" src="/assets/images/img/rose.6092fbd.png" className="rose-img"/>*/}
                            {/*    <img data-v-2795477a="" src="/assets/images/img/rose-gold.53d3800.png" className="rose-img-gold"/>*/}
                            {/*    <img data-v-2795477a="" src="/assets/images/img/rose.6092fbd.png" className="rose-img-bottom"/>*/}
                            {/*        <div data-v-2795477a="" className="text">*/}
                            {/*            <div data-v-2795477a="" className="title">초대합니다</div>*/}
                            {/*            <div data-v-2795477a="" className="content">*/}
                            {/*                곁에 있을 때 가장<br/>*/}
                            {/*                나다운 모습이 되게 하는 한 사람<br/>*/}
                            {/*                서로의 최선이 될 수 있도록<br/>*/}
                            {/*                배려하고 힘이되어줄 사람<br/>*/}
                            {/*                그 사람과 삶의 여행을<br/>*/}
                            {/*                함께 떠나려 합니다.<br/><br/>*/}
                            {/*                저희의 출발점에 여러분을 초대하오니<br/>*/}
                            {/*                오셔서 많이 축복해 주시면<br/>*/}
                            {/*                큰 기쁨이겠습니다.*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardMain;