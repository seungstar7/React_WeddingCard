import React, {Component} from 'react'
import {useTranslation} from 'react-i18next'

const Header = () => {

    const { t, i18n } = useTranslation(["menu"]);
    return(

        <>
            {/*메인 헤더영역*/}
            <div data-v-4de6baaa="" data-v-227354f0="" className="main">
                <div data-v-4de6baaa="" className="header">
                    <div data-v-4de6baaa="" className="date">
                        03/18
                    </div>
                    <div data-v-4de6baaa="" className="names">
                        <div data-v-4de6baaa="">
                            <span data-v-4de6baaa="" name="강도현" phone="010-1234-1234">{t('김 승 현')}</span>
                            <span data-v-4de6baaa="" className="and"></span>
                            <span data-v-4de6baaa="" name="이수진" phone="010-1234-1234">{t('리 코')}</span>
                        </div>
                    </div>
                    <div data-v-4de6baaa="" className="title">
                        {t('결 혼 합 니 다.')}
                    </div>
                    <img data-v-4de6baaa="" src="./assets/images/scrollIMG/KakaoTalk_20231212_155500557_09.jpg" width={'100%'} className="img"/>
                    <div data-v-4de6baaa="" className="time">2024. 04. 06. SAT AM 11:00</div>
                    <div data-v-4de6baaa="" className="location">{t('베뉴지')} B1 {t('마리아 칼라스홀')}</div>
                </div>
            </div>
            {/*메인 헤더영역 끝*/}
        </>
    )

}

export default Header;