import React, {useEffect, useRef, useState} from 'react'
const { kakao } = window;
const Location = () => {
    const [mapState , setMapState ] = useState();
    const [mapOption , setMapOption ] = useState(0);
    useEffect(()=>{
        const container = document.getElementById("map");
        let markerPosition = new kakao.maps.LatLng(37.56017552857142, 126.83929504825824);
        const options = {
            center: markerPosition,
            level:5
        }
        const map = new kakao.maps.Map(container,options);
        let marker = new kakao.maps.Marker({
            position: markerPosition,
        });
      //   const content = `
      // <div class="customoverlay">
      //   <span>포썸</span>
      // </div>`;
      //   new kakao.maps.CustomOverlay({
      //       map,
      //       markerPosition,
      //       content
      //   });
        marker.setMap(map);
        setMapState(map);
        // container.addEventListener('click',(mouseEvent)=>{
        //     let latlng = mouseEvent;
        //     console.log(latlng)
        //     alert("!@#!@#!@#")
        // })
        // map.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);
    },[])

    // const useDidMountEffect = (func, deps) => {
    //     const didMount = useRef(false);
    //
    //     useEffect(() => {
    //         if (didMount.current) func();
    //         else didMount.current = true;
    //     }, deps);
    // };

    const setMapType = ( type ) => {
        let changeMapType;
        const map = mapState;
        if(type==='traffic'){
            changeMapType = kakao.maps.MapTypeId.TRAFFIC;
        }
        else if(type==='roadView'){
            changeMapType = kakao.maps.MapTypeId.ROADVIEW;
        }else changeMapType = 0
        map.addOverlayMapTypeId(changeMapType);
        if(mapOption){
            map.removeOverlayMapTypeId(mapOption);
        }
        setMapOption(changeMapType)
        setMapState(map)
    }
    //
    // kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
    //
    //     // 클릭한 위도, 경도 정보를 가져옵니다
    //     var latlng = mouseEvent.latLng;
    //
    //     // 마커 위치를 클릭한 위치로 옮깁니다
    //     marker.setPosition(latlng);
    //
    //     var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
    //     message += '경도는 ' + latlng.getLng() + ' 입니다';
    //
    //     console.log(message)
    //
    //     // var resultDiv = document.getElementById('clickLatlng');
    //     // resultDiv.innerHTML = message;
    //
    // });
    // useDidMountEffect(() => {
    //     // kakao.maps.event.addListener(mapState, 'click', function(mouseEvent) {
    //     //
    //     // })
    //
    // })
    // kakao.maps.event.addListener(mapState, 'click', function(mouseEvent) {
    //
    // })

    return (
        <>
            <p>로케이션 영역</p>
            <div data-v-f68ce4e0="" data-v-227354f0="" className="map">
                <div data-v-f68ce4e0="" className="title">
                    오시는 길
                </div>
                <div id={"map"} style={{width:' 360px',height:'270px'}}></div>
            </div>
            <button onClick={()=>setMapType('traffic')}>교통정보 보기</button>
            <button onClick={()=>setMapType('roadView')}>로드뷰 도로정보 보기</button>
            <button onClick={()=>setMapType()}>새로고침</button>
        </>
    )
}
export default Location;