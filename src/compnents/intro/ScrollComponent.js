import React, {useContext, useEffect, useMemo, useRef, useState} from 'react'
import { TConductorInstance } from "react-canvas-confetti";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

import {
    Animator,
    batch,
    Fade,
    FadeIn,
    MoveIn, MoveOut,
    ScrollContainer,
    ScrollPage,
    Sticky,
    StickyIn,
    ZoomIn
} from 'react-scroll-motion'
import {MenuContext} from '@/compnents/common/MenuContext'
import {I18nContext} from '@/compnents/common/I18nContext'
// import {useNavigate} from 'react-router'

const ScrollComponent = ({ menuDef }) => {
    const [conductor, setConductor] = useState(TConductorInstance);
    const onInit = ({ conductor }) => {
        setConductor(conductor);
    };
    // const navigation = useNavigate();
    const [ weddingDate, setWeddingDate ] = useState(0);
    const viewRef = useRef();
    const { menu , changeMenu } = useContext(MenuContext);

    useEffect(()=>{
        const today = new Date();
        const birthDate = new Date('2024-04-06');
        const diffTime = Math.abs(today - birthDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setWeddingDate(diffDays);
    },[])

    const ZoomInVar = batch(Sticky(), Fade(), ZoomIn());

    const btnHandler = () => {
        conductor?.shoot();

        setTimeout(()=>{
            window.scrollTo({top:0})
            changeMenu('main');
        },1000)
    }

    return(
        <>

            <Fireworks onInit={onInit} />
            <ScrollContainer>
                {/* Page 1 */}
                <ScrollPage style={{heigh : '100%'}}>
                    <Animator animation={batch(Sticky(), Fade())}>
                        <h1 style={{textAlign:'center' }} ref={viewRef} >Wedding Day</h1>
                        <br/>
                        {/*<img data-v-4de6baaa="" src="/assets/images/img/main.e931123.jpg" width={'100%'} className="img"/>*/}
                        {/*<main/>*/}
                        {/*<div data-v-4de6baaa="" className="time">2028. 03. 18. SAT PM 1:00</div>*/}
                        {/*<div data-v-4de6baaa="" className="location">누리시아웨딩홀 6층</div>*/}
                    </Animator>
                </ScrollPage>
                <ScrollPage style={{heigh : '100%'}}>
                    <Animator animation={ZoomInVar}>
                        <h1 style={{textAlign:'center' }}>D - {weddingDate}</h1>
                    </Animator>
                </ScrollPage>
                <ScrollPage/>
                {/*"./assets/images/fixedIMG/main/jpeg-optimizer_03_MKH00452_2.jpg",*/}
                {/*"./assets/images/fixedIMG/main/jpeg-optimizer_13_MKH00518-2.jpg",*/}
                {/*"./assets/images/fixedIMG/main/jpeg-optimizer_34_MKH01663-2.jpg",*/}
                {/*"./assets/images/fixedIMG/main/jpeg-optimizer_08_MKH00123-2.jpg",*/}
                {/*"./assets/images/fixedIMG/main/jpeg-optimizer_09_MKH00095-2.jpg",*/}
                <ScrollPage style={{heigh : '100%'}}>
                    <Animator animation={batch(Sticky(), Fade(), ZoomIn(),MoveOut(0,0))}>
                        <img src="./assets/images/fixedIMG/main/jpeg-optimizer_03_MKH00452_2.jpg" width={'100%'} className="img"/>
                    </Animator>
                </ScrollPage>
                <ScrollPage/>
                {/*Page 2*/}
                <ScrollPage style={{heigh : '100%'}}>
                    <Animator animation={batch(Sticky(), Fade(), ZoomIn(),MoveOut(-1000,0))}>
                        <img data-v-4de6baaa="" src="./assets/images/fixedIMG/main/jpeg-optimizer_13_MKH00518-2.jpg" width={'100%'} className="img"/>
                    </Animator>
                </ScrollPage>
                <ScrollPage/>
                <ScrollPage style={{heigh : '100%'}}>
                    <Animator animation={ZoomInVar}>
                        <img data-v-4de6baaa="" src="./assets/images/fixedIMG/main/jpeg-optimizer_34_MKH01663-2.jpg" width={'100%'} className="img"/>
                    </Animator>
                </ScrollPage>
                <ScrollPage/>
                <ScrollPage style={{heigh : '100%'}}>
                    <Animator animation={ZoomInVar}>
                        <img data-v-4de6baaa="" src="./assets/images/fixedIMG/main/jpeg-optimizer_36_MKH01571_2.jpg" width={'100%'} className="img"/>
                    </Animator>
                </ScrollPage>
                <ScrollPage/>
                {/* Page 3*/}
                <ScrollPage style={{heigh : '100%'}}>
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
                            <button className="button" onClick={btnHandler}>
                                <span>🎉</span>
                                <span>축하히기</span>
                            </button>
                            <div style={{ marginTop: '2rem'}} className="button-list">
                                {/*<button*/}
                                {/*    className={"custom-btn btn-11"}*/}
                                {/*    style={{*/}
                                {/*        width:'auto',*/}
                                {/*        height:'3rem',*/}
                                {/*        margin:'auto',*/}
                                {/*        display:'block'*/}
                                {/*}} onClick={btnHandler}>*/}
                                {/*    show detail*/}
                                {/*</button>*/}

                            </div>
                        </Animator>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>
        </>
    )

}

export default ScrollComponent;