import React, {useEffect, useMemo, useState} from 'react'
import CardMain from "@/compnents/cardMain/CardMain";
// import {Navigate, useNavigate} from 'react-router'
const Main = () => {

    const [ testBtn, setTestBtn ] = useState(1);

    // const navigate = useNavigate();
    const fnNavi = ( e ) => {
        // navigate(`/${e.target.name}` )

    }

    return(
        <>
            < CardMain />
        </>
    )
}
export default Main;
