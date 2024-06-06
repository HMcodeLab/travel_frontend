import React from 'react'

const Policy = ({ data }) => {



    return (
        <div>
            <h2 className='text-2xl mb-3'>Payment Policy</h2>
            <div dangerouslySetInnerHTML={{ __html: data[0]?.terms[0]?.payment_policy }} />
        </div>
    )
}

export default Policy