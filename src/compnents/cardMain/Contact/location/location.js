import React, {useEffect} from 'react'
const { kakao } = window;
const Location = () => {
    useEffect(()=>{
        const container = document.getElementById("map");
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level:3
        }
        const map = new kakao.maps.Map(container,options);
    },[])

    return (
        <>
            <p>로케이션 영역</p>
            <div data-v-f68ce4e0="" data-v-227354f0="" className="map">
                <div data-v-f68ce4e0="" className="title">
                    오시는 길
                </div>
                <div id={"map"} style={{width:' 360px',height:'270px'}}></div>
            </div>
        </>
    )
}
export default Location;