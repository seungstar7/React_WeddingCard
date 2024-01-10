import React from 'react'
import {useTranslation} from "react-i18next";

const Footer = () => {
    const { t, i18n } = useTranslation(["menu"]);

    return(
        <div data-v-3c88c551="" data-v-227354f0="" className="footer">
            <div data-v-3c88c551="" className="message">2024. 04. 06. {t('초대합니다')}</div>
            {/*<div data-v-3c88c551="" className="madebykye">*/}
            {/*    made by kim*/}
            {/*</div>*/}
        </div>
    )
}

export default Footer