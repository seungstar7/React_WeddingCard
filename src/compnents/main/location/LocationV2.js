import {CustomOverlayMap, Map, MapMarker, MapTypeId, Roadview} from 'react-kakao-maps-sdk'
import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'

const LocationV2 = () => {
    const { t, i18n } = useTranslation(["menu"]);
    const [isOpen, setIsOpen] = useState(false);
    const [isError, setIsError] = useState(false)
    const [roadViewIsOpen, setRoadViewIsOpen ] = useState(false);
    const [pan, setPan] = useState(80)
    const [center, setCenter] = useState({
        lat: 37.56017552857142,
        lng: 126.83929504825824
    })
    const [roadViewCenter, setRoadViewCenter ] = useState({
        lat: 37.56017552857142,
        lng: 126.83929504825824})
    const [mapTypeId, setMapTypeId] = useState()

    const getAngleClassName = (angle) => {
        const threshold = 22.5 //이미지가 변화되어야 되는(각도가 변해야되는) 임계 값
        for (let i = 0; i < 16; i++) {
            //각도에 따라 변화되는 앵글 이미지의 수가 16개
            if (angle > threshold * i && angle < threshold * (i + 1)) {
                //각도(pan)에 따라 아이콘의 class명을 변경
                return "m" + i
            }
        }
    }

    return (
        <div data-v-f68ce4e0="" data-v-227354f0="" className="map">
            <div data-v-f68ce4e0="" className="title">
                {t("오시는 길")}
            </div>
            {roadViewIsOpen &&
                <Roadview // 로드뷰를 표시할 Container
                    position={{
                        // 지도의 중심좌표
                        ...roadViewCenter,
                        radius: 50,
                    }}
                    style={{
                        // 지도의 크기
                        width: "100%",
                        height: "450px",
                    }}
                    pan={pan}
                    onViewpointChange={(roadview) => setPan(roadview.getViewpoint().pan)}
                    onPositionChanged={(roadview) =>
                        setRoadViewCenter({
                            lat: roadview.getPosition().getLat(),
                            lng: roadview.getPosition().getLng(),
                        })
                    }
                    onErrorGetNearestPanoId={() => setIsError(true)}
                />

            }

            {/*<RemovableCustomOverlayStyle />*/}
            <Map // 지도를 표시할 Container
                id={`map`}
                center={center}
                style={{
                    // 지도의 크기
                    width: "100%",
                    height: "450px",
                }}
                level={3} // 지도의 확대 레벨
            >
                {mapTypeId && <MapTypeId type={mapTypeId}/>}
                <MapMarker position={center} onClick={() => setIsOpen(true)} />
                {roadViewIsOpen &&
                    <MapMarker
                        position={roadViewCenter}
                        draggable={true}
                        onDragEnd={(marker) => {
                            setRoadViewCenter({
                                // @ts-ignore
                                lat: marker.getPosition().getLat(),
                                // @ts-ignore
                                lng: marker.getPosition().getLng(),
                            })
                            setIsError(false)
                        }}
                        image={{
                            src: "https://t1.daumcdn.net/localimg/localimages/07/2018/pc/roadview_minimap_wk_2018.png",
                            size: { width: 26, height: 46 },
                            options: {
                                spriteSize: { width: 1666, height: 168 },
                                spriteOrigin: { x: 705, y: 114 },
                                offset: { x: 13, y: 46 },
                            },
                        }}
                    />
                }
                {isOpen && (
                    <CustomOverlayMap position={center}>
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
                {t("교통정보")} {t("보기")}

            </button>
            {/*<button*/}
            {/*    onClick={() => {*/}
            {/*        setMapTypeId(kakao.maps.MapTypeId.ROADVIEW)*/}
            {/*    }}*/}
            {/*>*/}
            {/*    로드뷰 도로정보 보기*/}
            {/*</button>*/}
            {/*<button*/}
            {/*    onClick={() => {*/}
            {/*        setMapTypeId(null);*/}
            {/*    }}*/}
            {/*>*/}
            {/*    새로고침*/}
            {/*</button>*/}
            <button
                onClick={() => {setRoadViewIsOpen(!roadViewIsOpen);setMapTypeId(roadViewIsOpen ? null : kakao.maps.MapTypeId.ROADVIEW );}}
            >
                {t("로드뷰")}
                {!roadViewIsOpen ? t("보기") : t("닫기")}
            </button>
        </div>
    )
}

export default LocationV2;