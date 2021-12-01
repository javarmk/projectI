import { useState,useEffect } from "react"
import { MenuItem } from "../../header/menu"

// this require style and padding just for performance
export default function MessageElement(properties){
    const [style,setStyle]=useState(
        {
            ...properties.style
        }
    )

    const [data,setData]=useState(
        {
            url:properties.url,
            chatName:properties.chatName,
            lastMessage:properties.lastMessage,
            alt:properties.alt,
        }
    )

    return(
        <MenuItem  
            style={{display:'grid',gridTemplateColumns:'max-content max-content',...style}}
            onHoverStyle={{backgroundColor: 'rgba(255, 107, 114, 0.8)'}}
        >
            <div style={{width:'50px',height:'50px'}}>
                <img src={data.url}
                    alt={data.alt}
                    style={{objectFit:"contain",height:'100%',borderRadius:'50%'}} 
                />
            </div>
            <div style={{display:'grid',paddingLeft:'10px',gridAutoRows:'20px 16px',width:'170px',}}>
                <div>
                    <div>
                        {data.chatName}
                    </div>
                </div>
                <div>
                    <div>
                        {data.lastMessage}
                    </div>
                </div>
            </div>
        </MenuItem>
    )

}