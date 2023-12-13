import React, {useEffect, useRef, useState} from 'react'
import {
    Animator,
    batch,
    Fade,
    FadeIn,
    MoveIn,
    ScrollContainer,
    ScrollPage,
    Sticky,
    StickyIn,
    ZoomIn
} from 'react-scroll-motion'

const ScrollComponent = () => {
    const [ weddingDate, setWeddingDate ] = useState(0);
    const viewRef = useRef();
    useEffect(()=>{
        viewRef.current
        const today = new Date();
        const birthDate = new Date('2024-04-06');
        console.log(today)
        console.log(birthDate)
        const diffTime = Math.abs(today - birthDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setWeddingDate(diffDays);
        console.log(diffDays)
        console.log(new Date())
    },[])

    const ZoomInVar = batch(StickyIn(), FadeIn(), ZoomIn());

    const btnHandler = () => {
        window.alert("준비중입니다");
    }


    return(
        <>
            <ScrollContainer>
                {/* Page 1 */}
                <ScrollPage>
                    <Animator animation={batch(Sticky(), Fade())}>
                        <h1 style={{textAlign:'center' }} ref={viewRef} >Wedding Day</h1>
                        <br/>
                        {/*<img data-v-4de6baaa="" src="/assets/images/img/main.e931123.jpg" width={'100%'} className="img"/>*/}
                        {/*<CardMain/>*/}
                        {/*<div data-v-4de6baaa="" className="time">2028. 03. 18. SAT PM 1:00</div>*/}
                        {/*<div data-v-4de6baaa="" className="location">누리시아웨딩홀 6층</div>*/}
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={ZoomInVar}>
                        <h1 style={{textAlign:'center' }}>D - {weddingDate}</h1>
                    </Animator>
                </ScrollPage>
                <ScrollPage/>
                <ScrollPage>
                    <Animator animation={ZoomInVar}> 
                        <img data-v-4de6baaa="" src="./assets/images/scrollIMG/KakaoTalk_20231212_155500557_05.jpg" width={'100%'} className="img"/>
                    </Animator>
                </ScrollPage>
                <ScrollPage/>
                {/*Page 2*/}
                <ScrollPage>
                    <Animator animation={ZoomInVar}>
                        <img data-v-4de6baaa="" src="./assets/images/scrollIMG/KakaoTalk_20231212_155431969_09.jpg" width={'100%'} className="img"/>
                    </Animator>
                </ScrollPage>
                <ScrollPage/>
                <ScrollPage>
                    <Animator animation={ZoomInVar}>
                        <img data-v-4de6baaa="" src="./assets/images/scrollIMG/KakaoTalk_20231212_155431969_12.jpg" width={'100%'} className="img"/>
                    </Animator>
                </ScrollPage>
                <ScrollPage/>
                <ScrollPage>
                    <Animator animation={ZoomInVar}> 
                        <img data-v-4de6baaa="" src="./assets/images/scrollIMG/KakaoTalk_20231212_155431969_14.jpg" width={'100%'} className="img"/>
                    </Animator>
                </ScrollPage>
                <ScrollPage/>
                {/* Page 3*/}
                <ScrollPage>
                    <Animator animation={StickyIn()}>
                        <Animator animation={MoveIn(0, 1000)}>
                            <h1 style={{textAlign:'center' }}>2024. 04. 06. SAT AM 11:00</h1>
                        </Animator>
                        <br />
                        <Animator animation={MoveIn(-1000, 0)}>
                            <h1 style={{textAlign:'center' }}>김승현 ♡ 후쿠다리코</h1>
                        </Animator>
                        <br />
                        <Animator animation={MoveIn(1000, 0)}>
                            <h1 style={{textAlign:'center' }}>베뉴지웨딩홀 B1 마리아 칼라스홀</h1>
                        </Animator>
                        <Animator animation={MoveIn(1000, 0)}>
                            <div style={{ marginTop: '2rem'}} className="button-list">
                                <button
                                    className={"custom-btn btn-11"}
                                    style={{
                                        width:'auto',
                                        height:'3rem',
                                        margin:'auto',
                                        display:'block'
                                }} onClick={btnHandler}>
                                    show detail
                                </button>
                            </div>
                        </Animator>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>

        </>
    )

}

export default ScrollComponent;