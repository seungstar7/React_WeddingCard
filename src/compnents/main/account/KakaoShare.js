import React, { useEffect } from 'react'

export default function KakaoShare() {
    useEffect(() => {
        kakaoButton()
    }, [])

    const kakaoButton = () => {
        if (window.Kakao) {
            const kakao = window.Kakao

            if (!kakao.isInitialized()) {
                kakao.init('40c51a6ccfbf2ef6f1c6f9576606daea')
            }

            Kakao.Share.createDefaultButton({
                container: '#kakaotalk-sharing-btn',
                objectType: 'location',
                address: '서울 강서구 강서로 388',
                addressTitle: '더 베뉴지 서울',
                content: {
                    title: '김승현 ♥︎ 후쿠다리코',
                    description: '승현과 리코의 결혼이 n일 남았어요! \n 모두 축하해 주세요',
                    imageUrl:
                        'https://seungstar7.github.io/React_WeddingCard/assets/images/scrollIMG/KakaoTalk_20231212_155500557_09.jpg',
                    link: {
                        mobileWebUrl: 'https://seungstar7.github.io/React_WeddingCard',
                        webUrl: 'https://seungstar7.github.io/React_WeddingCard',
                    },
                },
                social: {
                    likeCount: 286,
                    commentCount: 45,
                    sharedCount: 845,
                },
                buttons: [
                    {
                        title: '웹으로 보기',
                        link: {
                            mobileWebUrl: 'https://seungstar7.github.io/React_WeddingCard',
                            webUrl: 'https://seungstar7.github.io/React_WeddingCard',
                        },
                    },
                ],
            });
        }
    }
    // <button onClick={kakaoButton} id='kakaotalk-sharing-btn'>KakaoShare</button>

    return (
        <div data-v-760883fe="" onClick={kakaoButton} id='kakaotalk-sharing-btn'>카카오톡으로 공유하기</div>

    )
}