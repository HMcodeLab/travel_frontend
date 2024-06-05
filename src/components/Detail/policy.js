import React from 'react'

const Policy = ({ data }) => {

    console.log(data[0]?.terms)

    return (
        <div>
            <h2 className='text-2xl mb-3'>Payment Policy</h2>
            <div dangerouslySetInnerHTML={{ __html: data[0]?.terms?.payment_policy }} />
        </div>
    )
}

export default Policy