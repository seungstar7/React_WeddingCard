import React, {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'

const Gallery = () => {

    const { t, i18n } = useTranslation(["menu"]);
    const [ isOpen, setIsOpen ] = useState(false);
    const [ selectedImg, setSelectedImg ] = useState(0);
    const [ imgObj , setImgObj ] = useState([]);

    useEffect(()=>{
        // fs.readdir("./", (err, files) => {
        //     if (err) throw err;
        //     files.forEach((item) => {
        //         console.log(item);
        //     });
        //     console.log("readdir");
        // });
        let tmpObj = [
            // "./assets/images/fixedIMG/03_MKH00452_2.jpg",
            // "./assets/images/fixedIMG/13_MKH00518-2.jpg",
            // "./assets/images/fixedIMG/34_MKH01663-2.jpg",
            // "./assets/images/fixedIMG/09_MKH00095-2.jpg",
            // "./assets/images/fixedIMG/08_MKH00123-2.jpg",
            "./assets/images/fixedIMG/main/jpeg-optimizer_03_MKH00452_2.jpg",
            "./assets/images/fixedIMG/main/jpeg-optimizer_13_MKH00518-2.jpg",
            "./assets/images/fixedIMG/main/jpeg-optimizer_34_MKH01663-2.jpg",
            "./assets/images/fixedIMG/main/jpeg-optimizer_08_MKH00123-2.jpg",
            "./assets/images/fixedIMG/main/jpeg-optimizer_09_MKH00095-2.jpg",
            "./assets/images/fixedIMG/jpeg-optimizer_MKH00019.jpeg",
            "./assets/images/fixedIMG/jpeg-optimizer_MKH00170.jpeg",
            "./assets/images/fixedIMG/jpeg-optimizer_MKH00193.jpeg",
            "./assets/images/fixedIMG/jpeg-optimizer_MKH00282.jpeg",
            "./assets/images/fixedIMG/jpeg-optimizer_MKH00344.jpeg",
            "./assets/images/fixedIMG/jpeg-optimizer_MKH00387.jpeg",
            "./assets/images/fixedIMG/jpeg-optimizer_MKH00420.jpeg",
            //"./assets/images/fixedIMG/jpeg-optimizer_MKH00451.jpeg",
            "./assets/images/fixedIMG/jpeg-optimizer_MKH00513.jpg",
            "./assets/images/fixedIMG/jpeg-optimizer_MKH00556.jpeg",
            "./assets/images/fixedIMG/jpeg-optimizer_MKH00609.jpeg",
            "./assets/images/fixedIMG/jpeg-optimizer_MKH00662.jpeg",
            "./assets/images/fixedIMG/jpeg-optimizer_MKH00820.jpeg",
            "./assets/images/fixedIMG/jpeg-optimizer_MKH00865.jpeg",
            "./assets/images/fixedIMG/jpeg-optimizer_MKH00912.jpeg",
            "./assets/images/fixedIMG/jpeg-optimizer_MKH00932.jpeg",
            "./assets/images/fixedIMG/jpeg-optimizer_MKH00964.jpeg",
            "./assets/images/fixedIMG/jpeg-optimizer_MKH01032.jpeg",
            "./assets/images/fixedIMG/jpeg-optimizer_MKH01076.jpeg",
            "./assets/images/fixedIMG/jpeg-optimizer_MKH01306.jpg",
            "./assets/images/fixedIMG/jpeg-optimizer_MKH01409.jpg",
            "./assets/images/fixedIMG/jpeg-optimizer_MKH01644.jpg",

        ]



        setImgObj(tmpObj);
    },[])

    const selectedIMG = (event) => {
        const {name ,value} = event.target;
        setSelectedImg(Number(name));
        setIsOpen(true);

    }

    const prevNextBtn = ( type ) => {
        if(type==='prev'){
            if(selectedImg==0){
                window.alert("뒤로 갈  수 없습니다");
                return;
            }
            setSelectedImg(selectedImg-1);
        }else if(type==='next'){
            if(!imgObj[selectedImg+1]){
                window.alert("앞으로 갈  수 없습니다");
                return;
            }
            setSelectedImg(selectedImg+1);
        }
    }

    const closePop = () => {
        setIsOpen(false)
    }
    return(
        <>
            <div data-v-e42bfae6="" data-v-227354f0="" className="gallery">
                <div data-v-e42bfae6="" className="title">··· G a l l e r y ···</div>
                <div data-v-e42bfae6="" className="img-list">
                    {imgObj.map((item, idx)=>{
                        return(
                            <img data-v-e42bfae6="" key={idx} name={idx} onClick={selectedIMG} src={item} width="33%" height="120px" className="image " />
                        )
                    })}
                    <div data-v-e42bfae6="" style={{touchAction: 'none', userSelect: 'none'}}>
                        {isOpen &&
                            <div data-v-e42bfae6="" className="vgs">
                                <button type="button" className="vgs__close" onClick={closePop}>
                                    ×
                                </button>
                                <button type="button" onClick={()=>prevNextBtn('prev')} className="vgs__prev">
                                    ‹
                                </button>
                                <div className="vgs__container">
                                    <img src={imgObj[selectedImg]} alt="" className="vgs__container__img"/>
                                </div>
                                <button type="button" onClick={()=>prevNextBtn('next')} className="vgs__next">
                                    ›
                                </button>
                                <div className="vgs__gallery">
                                    <div className="vgs__gallery__title">
                                        6 / 9
                                    </div>
                                    <div className="vgs__gallery__container" style={{transform: 'translate(-600px, 0px)'}}>
                                        {imgObj.map((item, idx)=>{
                                            return(
                                                <img key={idx} src={item} alt="" className={`vgs__gallery__container__img" ${ idx==selectedImg && "vgs__gallery__container__img--active"}`}/>
                                                // <img data-v-e42bfae6="" name={idx} onClick={selectedIMG} src={item} width="33%" height="120px" className="image " />
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default Gallery;