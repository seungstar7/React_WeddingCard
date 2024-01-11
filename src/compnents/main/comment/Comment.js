import React from "react";
import axios from "axios";

const Comment = () => {

    axios.get("http://localhost:14402/api/weddingCard").then((res)=>{
        console.log(res)
    })

    axios.get("http://112.157.208.34:14402/api/weddingCard").then((res)=>{
        console.log(res)
    })
    // fetch("http://localhost:14402/api/weddingCard", { headers }).then((res)=>{
    //     console.log(res)
    // })

    return(
        <>
            <div>
                <p>코멘트 입니다</p>
            </div>

        </>
    )

}

export default Comment;