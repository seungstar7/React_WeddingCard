import React from 'react'
import {useTranslation} from 'react-i18next'

const GroomParentContact = () => {

    const { t, i18n } = useTranslation(["menu"]);
    return(
        <>
            {/*신랑측 혼주 영역 시작*/}
            <div data-v-0470861c="" data-v-4752b0dc="" className="parents-contact">
                <span data-v-0470861c="" className="title">{t("신랑측 혼주")}</span>
                <div data-v-0470861c="" father="[object Object]" mother="[object Object]"
                     className="parents-wrap">
                    <div data-v-39c2c16b="" data-v-0470861c="" className="parent">
                        <div data-v-39c2c16b="" className="name">
                            <div data-v-39c2c16b="" className="text">故{t("김종화")}</div>
                        </div>
                    </div>
                    <div data-v-39c2c16b="" data-v-0470861c="" className="parent">
                        <div data-v-39c2c16b="" className="name">
                            <div data-v-39c2c16b="" className="text">{t("신미선")}</div>
                        </div>

                    </div>
                </div>
            </div>
            {/*신랑측 혼주 영역 끝*/}

        </>
    )
}

export default GroomParentContact;