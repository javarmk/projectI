import { useState } from "react"
import { useEffect } from "react"
import { MenuItem } from "../../header/menu"
export default  function NotificationElement(props){
    

    const [style,setStyle]=useState(
        {
            ...props.style            
        }
    )
 
    const[data,setData]=useState({url:props.url,text:props.text,alt:props.alt})


    return(
        <MenuItem  
            style={{display:'grid',gridTemplateColumns:'max-content max-content',...style}}
            onHoverStyle={{backgroundColor: 'red'}}
        >
            <div style={{width:'50px',height:'50px'}}>
                <img 
                    src={data.url}
                    alt={data.alt}
                    style={{objectFit:"contain",height:'100%',borderRadius:'50%'}} 
                />
            </div>
            <div style={{display:'grid',paddingLeft:'10px',gridAutoRows:'50px',width:'170px'}}>
                <div style={{height:'100%'}}>
                    {data.text}
                </div>
            </div>
        
        </MenuItem>
        
    
    )
} 