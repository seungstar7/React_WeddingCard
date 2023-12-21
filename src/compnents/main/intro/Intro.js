import React from 'react'
import {useTranslation} from 'react-i18next'

const Intro = () => {

    const { t, i18n } = useTranslation(["menu"]);
    return(
        <>
            {/*소개 영역 시작*/}
            <div data-v-2795477a="" data-v-227354f0="" className="message">
                <img data-v-2795477a="" src="./assets/images/img/rose.6092fbd.png" className="rose-img"/>
                <img data-v-2795477a="" src="./assets/images/img/rose-gold.53d3800.png" className="rose-img-gold"/>
                <img data-v-2795477a="" src="./assets/images/img/rose.6092fbd.png" className="rose-img-bottom"/>
                <div data-v-2795477a="" className="text">
                    <div data-v-2795477a="" className="title" style={{textAlign:'center'}}>{t("초대합니다")}</div>
                    <div data-v-2795477a="" className="content" style={{textAlign:'center'}}>
                        {t("곁에 있을 때 가장")}<br/>
                        {t("나다운 모습이 되게 하는 한 사람")}<br/>
                        {t("서로의 최선이 될 수 있도록")}<br/>
                        {t("배려하고 힘이되어줄 사람")}<br/>
                        {t("그 사람과 삶의 여행을")}<br/>
                        {t("함께 떠나려 합니다.")}<br/><br/>
                        {t("저희의 출발점에 여러분을 초대하오니")}<br/>
                        {t("오셔서 많이 축복해 주시면")}<br/>
                        {t("큰 기쁨이겠습니다.")}
                    </div>
                </div>
            </div>
            {/*소개 영역 끝*/}
        </>
    )
}
export default Intro;