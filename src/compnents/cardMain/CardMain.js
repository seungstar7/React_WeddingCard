import React, {useEffect, useState} from "react";
import Header from '@/pages/layout/Header'
import Content from '@/pages/layout/Content'

const CardMain = () =>{

    const [ imgSize, setImgSize ] = useState(10);


    // useEffect(()=>{
    //     setTimeout(()=>{
    //         if(imgSize<100)setImgSize(imgSize+1);
    //     },1)
    // },[imgSize])

    return(
        <>
            <Header/>
            <Content/>
        </>
    )
}

export default CardMain;