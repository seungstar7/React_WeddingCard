import React, {useEffect} from 'react'
const { kakao } = window;
const Location = () => {
    useEffect(()=>{
        const container = document.getElementById("map");
        const options = {
            center: new kakao.maps.LatLng(33.450701,176.570667),
            level:3
        }
        const map = new kakao.maps.Map(container,options);
    },[])

    return (
        <>
            <p>로케이션 영역</p>
            <div id={"map"} style={{width:'500px',height:'500px'}}></div>

        </>
    )
}
export default Location;