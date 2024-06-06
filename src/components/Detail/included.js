import React from 'react'

const Included = ({ data }) => {
    if (data === undefined) {
        return (
            <>Loading...</>
        )
    }
    console.log(data[0].special_inc_meta)
    return (
        <div className='flex flex-col gap-[13px]'>
            <h1 className='text-[1.5rem] '>INCLUDED</h1>
            <p dangerouslySetInnerHTML={{ __html: data[0]?.special_inc_meta }} />
            <hr />
            <div className='flex flex-col gap-[10px]'>
                <h1 className='text-[1.3rem] '>TOUR INCLUSIONS</h1>
                <div dangerouslySetInnerHTML={{ __html: data[0]?.inc_meta }} />
            </div>
            <div className='flex flex-col gap-[10px]'>
                <h1 className='text-[1.3rem] '>TOUR EXCLUSIONS</h1>
                <div dangerouslySetInnerHTML={{ __html: data[0]?.exc_meta }} />
            </div>

        </div>
    )
}

export default Included