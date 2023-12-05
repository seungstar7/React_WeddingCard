import React from 'react'
import {Navigate, useNavigate} from 'react-router'
const Main = () => {

    const navigate = useNavigate();
    const fnNavi = ( e ) => {
        navigate(`/${e.target.name}` )

    }
    return(
        <>
            <button name={"snake"} onClick={fnNavi}>test1</button>
            <button name={"matgo"} onClick={fnNavi}>test2</button>
        </>
    )
}
export default Main;
