import React from 'react'
import GroomParentContact
    from '@/compnents/main/Contact/childComponents/parentContactChildComponent/GroomParentContact'
import BrideParentContact
    from '@/compnents/main/Contact/childComponents/parentContactChildComponent/BrideParentContact'

const ParentContact = () => {
    return(
        <>
            <div data-v-4752b0dc="" className="parents ">
                <GroomParentContact/>
                <BrideParentContact/>
            </div>
        </>
    )
}

export default ParentContact;