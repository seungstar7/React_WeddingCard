import {CustomOverlayMap, Map, MapMarker, MapTypeId, Roadview} from 'react-kakao-maps-sdk'
import React, {useEffect, useState} from 'react'

const LocationV2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [roadViewIsOpen, setRoadViewIsOpen ] = useState(false);
    const [latLng, setLatlng ] = useState({});
    const [mapTypeId, setMapTypeId] = useState()

    useEffect(()=>{
        setLatlng({ lat: 37.56017552857142, lng: 126.83929504825824 })
    },[])

    return (
        <div data-v-f68ce4e0="" data-v-227354f0="" className="map">
            <div data-v-f68ce4e0="" className="title">
                오시는 길
            </div>
            {roadViewIsOpen &&
                <Roadview // 로드뷰를 표시할 Container
                    position={{
                        // 지도의 중심좌표
                        lat: 37.56017552857142,
                        lng: 126.83929504825824,
                        radius: 50,
                    }}
                    style={{
                        // 지도의 크기
                        width: "100%",
                        height: "450px",
                    }}
                />

            }

            {/*<RemovableCustomOverlayStyle />*/}
            <Map // 지도를 표시할 Container
                id={`map`}
                center={{
                    // 지도의 중심좌표
                    lat: 37.56017552857142, lng: 126.83929504825824
                }}
                style={{
                    // 지도의 크기
                    width: "100%",
                    height: "450px",
                }}
                level={3} // 지도의 확대 레벨
            >
                {mapTypeId && <MapTypeId type={mapTypeId}/>}
                <MapMarker position={{lat: 37.56017552857142, lng: 126.83929504825824 }} onClick={() => setIsOpen(true)} />
                {isOpen && (
                    <CustomOverlayMap position={{lat: 37.56017552857142, lng: 126.83929504825824 }}>
                        <div className="kakao-wrap">
                            <div className="info">
                                <div className="title">
                                    베뉴지 웨딩홀
                                    <div
                                        className="close"
                                        onClick={() => setIsOpen(false)}
                                        title="닫기"
                                    ></div>
                                </div>
                                <div className="body">
                                    <div className="img">
                                        <img
                                            src="//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/cfile/2170353A51B82DE005"
                                            width="73"
                                            height="70"
                                            alt="카카오 스페이스닷원"
                                        />
                                    </div>
                                    <div className="desc">
                                        <div className="ellipsis">
                                            제주특별자치도 제주시 첨단로 242
                                        </div>
                                        <div className="jibun ellipsis">
                                            (우) 63309 (지번) 영평동 2181
                                        </div>
                                        <div>
                                            <a
                                                href="https://www.kakaocorp.com/main"
                                                target="_blank"
                                                className="link"
                                                rel="noreferrer"
                                            >
                                                홈페이지
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ;
                    </CustomOverlayMap>
                )}
            </Map>
            <button
                onClick={() => {
                    setMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
                }}
            >
                교통정보 보기
            </button>
            <button
                onClick={() => {
                    setMapTypeId(kakao.maps.MapTypeId.ROADVIEW)
                }}
            >
                로드뷰 도로정보 보기
            </button>
            <button
                onClick={() => {
                    setMapTypeId(null);
                }}
            >
                새로고침
            </button>
            <button
                onClick={() => {setRoadViewIsOpen(!roadViewIsOpen);}}
            >
                로드뷰 {!roadViewIsOpen ? '보기' : '닫기'}
            </button>
        </div>
    )
}

export default LocationV2;