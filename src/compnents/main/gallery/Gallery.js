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
            "./assets/images/fixedIMG/MKH00019.jpg",
            "./assets/images/fixedIMG/MKH00170.jpg",
            "./assets/images/fixedIMG/MKH00193.jpg",
            "./assets/images/fixedIMG/MKH00282.jpg",
            "./assets/images/fixedIMG/MKH00344.jpg",
            "./assets/images/fixedIMG/MKH00387.jpg",
            "./assets/images/fixedIMG/MKH00420.jpg",
            "./assets/images/fixedIMG/MKH00451.jpg",
            "./assets/images/fixedIMG/MKH00513.jpg",
            // "./assets/images/fixedIMG/MKH00520.jpg",
            // "./assets/images/fixedIMG/MKH00556.jpg",
            // "./assets/images/fixedIMG/MKH00609.jpg",
            // "./assets/images/fixedIMG/MKH00662.jpg",
            // "./assets/images/fixedIMG/MKH00820.jpg",
            // "./assets/images/fixedIMG/MKH00865.jpg",
            // "./assets/images/fixedIMG/MKH00912.jpg",
            // "./assets/images/fixedIMG/MKH00932.jpg",
            // "./assets/images/fixedIMG/MKH00964.jpg",
            // "./assets/images/fixedIMG/MKH001103.jpg",
            // "./assets/images/fixedIMG/MKH001132.jpg",
            // "./assets/images/fixedIMG/MKH001176.jpg",
            // "./assets/images/fixedIMG/MKH001183.jpg",
            // "./assets/images/fixedIMG/MKH001306.jpg",
            // "./assets/images/fixedIMG/MKH001409.jpg",
            // "./assets/images/fixedIMG/MKH001578.jpg",
            // "./assets/images/fixedIMG/MKH001644.jpg",
            // "./assets/images/fixedIMG/MKH001663.jpg",

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