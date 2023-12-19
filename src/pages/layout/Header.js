import React, {Component} from 'react'

class Header extends Component{

    render () {
        return(

            <>
                {/*메인 헤더영역*/}
                <div data-v-4de6baaa="" data-v-227354f0="" className="main">
                    <div data-v-4de6baaa="" className="header">
                        <div data-v-4de6baaa="" className="date">
                            03/18
                        </div>
                        <div data-v-4de6baaa="" className="names">
                            <div data-v-4de6baaa="">
                                <span data-v-4de6baaa="" name="강도현" phone="010-1234-1234">김 승 현</span>
                                <span data-v-4de6baaa="" className="and"></span>
                                <span data-v-4de6baaa="" name="이수진" phone="010-1234-1234">김 샛 별</span>
                            </div>
                        </div>
                        <div data-v-4de6baaa="" className="title">
                            결 혼 합 니 다.
                        </div>
                        <img data-v-4de6baaa="" src="./assets/images/img/main.e931123.jpg" width={'100%'} className="img"/>
                        <div data-v-4de6baaa="" className="time">2024. 04. 06. SAT AM 11:00</div>
                        <div data-v-4de6baaa="" className="location">베뉴지 B1 마리아 칼라스홀</div>
                    </div>
                </div>
                {/*메인 헤더영역 끝*/}
            </>
        )
    }
}

export default Header;