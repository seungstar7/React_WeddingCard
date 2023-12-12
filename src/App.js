import React from 'react';
import {
    Animator,
    batch,
    Fade,
    FadeIn, MoveIn,
    MoveOut,
    ScrollContainer,
    ScrollPage,
    Sticky,
    StickyIn, ZoomIn
} from "react-scroll-motion";
import CardMain from '@/compnents/cardMain/CardMain'
function App() {
    const ZoomInVar = batch(StickyIn(), FadeIn(), ZoomIn());
    return (
        <>

        <ScrollContainer>
            {/* Page 1 */}
            <ScrollPage>
                <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -300))}>
                    <h2>Welcome to the series of Scroll Animations 👾</h2>
                </Animator>
            </ScrollPage>
            {/* Page 2*/}
            <ScrollPage>
                <Animator animation={ZoomInVar}> /* Using Variable */
                    <h2>Introducing the react-motion-scroll dependency 🌟</h2>
                    <h3> Wooo - hoooo </h3>
                </Animator>
            </ScrollPage>
            {/* Page 3*/}
            <ScrollPage>
                <Animator animation={StickyIn()}>
                    <Animator animation={MoveIn(0, 1000)}>
                        <h2>This is awesome 🤩</h2>
                    </Animator>
                    <br />
                    <Animator animation={MoveIn(-1000, 0)}>
                        <h2>Left Slide</h2>
                    </Animator>
                    <br />
                    <Animator animation={MoveIn(1000, 0)}>
                        <h2>Right Slide</h2>
                    </Animator>
                </Animator>
            </ScrollPage>
        </ScrollContainer>
        <CardMain/>
        </>
    );
}
export default App;