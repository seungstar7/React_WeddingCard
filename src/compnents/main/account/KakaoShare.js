import React, {useEffect, useState} from 'react'

export default function KakaoShare() {

    const [ weddingDate, setWeddingDate ] = useState(0);
    useEffect(()=>{
        const today = new Date();
        const birthDate = new Date('2024-04-06');
        const diffTime = Math.abs(today - birthDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setWeddingDate(diffDays);
    },[])
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
                    title: '승현 ♥︎ 리코',
                    description: `승현과 리코의 결혼이 ${weddingDate}일 남았어요! 
 모두 축하해 주세요`,
                    imageUrl:
                        'https://seungstar7.github.io/React_WeddingCard/assets/images/fixedIMG/main/MKH00608.jpg',
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