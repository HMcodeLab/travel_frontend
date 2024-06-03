import React from 'react'

const Overview = ({data}) => {
    // console.log(data);
    // console.log(data ? JSON?.parse(data?.daywise_meta): "");
    return (<>
        <div dangerouslySetInnerHTML= {{__html:`<p style=\\\"outline: 0px; font-family: Lato, sans-serif; padding: 0px; border: 0px; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; font-size: 14px; vertical-align: baseline; line-height: inherit; color: red; margin-right: 0px !important; margin-bottom: 8px !important; margin-left: 0px !important;\\\">On your arrival at the Delhi airport railway station, you will be received by an agent\\u2019s representative who will escort you to ISBT Kashmere Gate. From there, you will board the volvo bus reserved for your travel to Shimla at 8 p.m. It is a journey of approximately 340 kilometers and it takes around 14 to 15 hours to reach Shimla.</p><p style=\\\"outline: 0px; font-family: Lato, sans-serif; padding: 0px; border: 0px; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial; font-size: 14px; vertical-align: baseline; line-height: inherit; color: red; margin-right: 0px !important; margin-bottom: 8px !important; margin-left: 0px !important;\\\">This Shimla tour package provides you an opportunity to cherish a leisurely road trip through one of the best national highways, and the majestic Himalayan expressway which carves through the Shivalik mountains. Unlike other hilly roads, the route to Shimla is quite smooth and consistent. The overnight journey also gives you an opportunity to savour the food from roadside dhabas where the bus would stop for the passengers to freshen up</p>`}}></div>
    </>
    )
}

export default Overview