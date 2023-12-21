import React from 'react'
import ChildContact from '@/compnents/main/Contact/childComponents/ChildContact'
import ParentContact from '@/compnents/main/Contact/childComponents/ParentContact'

const Contact = () => {
    return (
        <>
            {/*연락처 영역 시작*/}
            <div data-v-4752b0dc="" data-v-227354f0="" className="contacts">
                {/*자식 연락처 시작*/}
                <ChildContact/>
                <ParentContact/>
            </div>
            {/*연락처 영역 끝*/}
        </>
    )
}

export default Contact