import React from 'react'
import {useTranslation} from 'react-i18next'

const Gallery = () => {
    const { t, i18n } = useTranslation(["menu"]);

    const selectedIMG = () => {
        window.alert(t("준비 중 입니다"))
    }
    return(
        <>
            <div data-v-e42bfae6="" data-v-227354f0="" className="gallery">
                <div data-v-e42bfae6="" className="title">··· G a l l e r y ···</div>
                <div data-v-e42bfae6="" className="img-list">
                    <img data-v-e42bfae6="" onClick={selectedIMG} src="./assets/images/img/01.a4dd1c6.jpg" width="33%" height="120px" className="image " />
                    <img data-v-e42bfae6="" onClick={selectedIMG} src="./assets/images/img/02.d421e78.jpg" width="33%" height="120px" className="image "/>
                    <img data-v-e42bfae6="" onClick={selectedIMG} src="./assets/images/img/03.a1fe75f.jpg" width="33%" height="120px" className="image "/>
                    <img data-v-e42bfae6="" onClick={selectedIMG} src="./assets/images/img/04.a99c408.jpg" width="33%" height="120px" className="image "/>
                    <img data-v-e42bfae6="" onClick={selectedIMG} src="./assets/images/img/05.580e1ac.jpg" width="33%" height="120px" className="image "/>
                    <img data-v-e42bfae6="" onClick={selectedIMG} src="./assets/images/img/06.a591391.jpg" width="33%" height="120px" className="image "/>
                    <img data-v-e42bfae6="" onClick={selectedIMG} src="./assets/images/img/07.9d0c8e8.jpg" width="33%" height="120px" className="image "/>
                    <img data-v-e42bfae6="" onClick={selectedIMG} src="./assets/images/img/08.78d2df9.jpg" width="33%" height="120px" className="image "/>
                    <img data-v-e42bfae6="" onClick={selectedIMG} src="./assets/images/img/09.b20e21a.jpg" width="33%" height="120px" className="image "/>
                    <div data-v-e42bfae6="" onClick={selectedIMG}
                         style={{touchAction: 'none', userSelect: 'none'}}>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Gallery;