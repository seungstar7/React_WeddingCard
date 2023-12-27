import React from "react";
export default function ({childProps}){
    const canvas = document.querySelector('.main-container');
    console.log(window.innerWidth)
    console.log(canvas)
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight; // 캔버스 가로, 세로를 전체 화면으로 지정
    // const ctx = canvas.getContext('2d'); // 아무것도 없는 도화지 캔버스에 그리기 도구 사용을 위해 불러옴
    //
    // const TOTAL = 150;
    // const petalArray = [];
    //
    // const petalImg = new Image();
    // petalImg.src = './assets/images/img/01.a4dd1c6.jp';
    // petalImg.onload = () => {
    //     for (let i = 0; i < TOTAL; i++) {
    //         petalArray.push(new Petal());
    //     }
    //     console.log(petalArray);
    //     render();
    // };
    //
    // function render() {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height); // 0, 0 부터 캔버스 가로 세로 길이를 지우기
    //     window.requestAnimationFrame(render); // 재귀함수를 통해 반복실행(브라우저마다 차이있지만 평균 초당 60)
    //     petalArray.forEach((petal) => {
    //         petal.animate();
    //     });
    // }
    //
    // window.addEventListener('resize', () => {
    //     // 윈도우 사이즈가 바뀔때마다 적용
    //     canvas.width = window.innerWidth;
    //     canvas.height = window.innerHeight;
    // });

// 벚꽃잎 클래스

    // class Petal {
    //     constructor() {
    //         this.x = Math.random() * canvas.width;
    //         this.y = Math.random() * canvas.height * 2 - canvas.height;
    //         this.w = 30 + Math.random() * 15;
    //         this.h = 20 + Math.random() * 10;
    //         this.opacity = this.w / 45;
    //         this.xSpeed = 2 + Math.random();
    //         this.ySpped = 1 + Math.random();
    //         this.flip = Math.random();
    //         this.flipSpeed = Math.random() * 0.03;
    //     }
    //
    //     draw() {
    //         if (this.y > canvas.height || this.x > canvas.width) {
    //             this.x = -petalImg.width;
    //             this.y = Math.random() * canvas.height * 2 - canvas.height;
    //             this.xSpeed = 2 + Math.random();
    //             this.ySpped = 1 + Math.random();
    //             this.flip = Math.random();
    //         }
    //
    //         ctx.globalAlpha = this.opacity;
    //         ctx.drawImage(petalImg, this.x, this.y, this.w * (0.66 + Math.abs(Math.cos(this.flip) / 3)), this.h * (0.8 + Math.abs(Math.sin(this.flip) / 2)));
    //     }
    //
    //     animate() {
    //         this.x += this.xSpeed;
    //         this.y += this.ySpped;
    //         this.draw();
    //         this.flip += this.flipSpeed;
    //     }
    // }
    return(
        <>
            <div id="__nuxt">
                <div id="__layout">
                    <div className="main-container">
                        <div data-v-227354f0="" className="template-basic ">
                            {childProps}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}