import React, {useEffect, useState} from 'react'
// import {Navigate, useNavigate} from 'react-router'
const Main = () => {
    const [ testBtn, setTestBtn ] = useState(1);

    // const navigate = useNavigate();
    const fnNavi = ( e ) => {
        // navigate(`/${e.target.name}` )

    }

    const btnTest = () => {
        setTestBtn(testBtn + 1);
    }

    useEffect(()=>{
        console.log("react working")
    },[])
    return(
        <>
            <p>{testBtn}</p>
            <button name={"snake"} onClick={btnTest}>test1</button>
            <button name={"matgo"} onClick={fnNavi}>test2</button>
        </>
    )
}
export default Main;
