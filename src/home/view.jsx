import HeaderFixed from "./component/header/headerfixed"
import Menu from "./component/header/menu"
import { MenuItem ,SubMenu} from "./component/header/menu"
import { useState } from "react"
import NotificationContainer from "./component/tools/notification/notificationcontainer"
import MessageContainer from "./component/tools/message/messagecontainer"

import Theater from "./component/layout/theater/theater"



export default function View(){
  const[leftSideContent,setLeftSideContent]=useState(<div></div>)
  const [contentSelectingIndex,setContentSelectingInex]=useState(0)
  const changeLeftContentHandle=(index)=>{
    switch(index){
      case 1:
        if(contentSelectingIndex==index){
          setLeftSideContent(<div></div>)
          setContentSelectingInex ('nothing')
        }else{
          setLeftSideContent(NotificationContainer)
          setContentSelectingInex(index)
        }
        break;
      case 2:
        if(contentSelectingIndex==index){
          setLeftSideContent(<div></div>)
          setContentSelectingInex ('nothing')
        }else{
          setLeftSideContent(MessageContainer)
          setContentSelectingInex(index)
        }
        break;
    }
  }
  return(
    <div style={{display:'grid',gridTemplateColumns:'max-content auto',width:'100%'}}>
      <div style={{display:'grid',gridTemplateColumns:'max-content auto'}}> 
        <div style={{width:'48px'}}>
            <Menu>
                <MenuItem 
                  keyValue={1} 
                  style={{paddingLeft:'5px',paddingRight: '5px',textAlign:'center'}}
                  onClickedFunction={changeLeftContentHandle}
                >
                    nav1
                </MenuItem>
                <MenuItem 
                  keyValue={2} 
                  style={{paddingLeft:'5px',paddingRight: '5px',textAlign:'center'}}
                  onClickedFunction={changeLeftContentHandle}
                >
                    nav2
                </MenuItem>
            </Menu>
        </div>
        {leftSideContent}
      </div>
      <div>
        <HeaderFixed > 
          <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
            <Menu style={{display:'flex',height:'100%'}}>
              <MenuItem keyValue={-1} style={{marginRight: '0px'}}>
                Blog
              </MenuItem>  
              <MenuItem keyValue={0} style={{marginRight: '0px'}}>
                Short
              </MenuItem>  
              <MenuItem keyValue={1} style={{marginRight: '0px'}}>
                Theater
              </MenuItem>
              <MenuItem keyValue={2}>
                Streaming
              </MenuItem>
              <div style={{height:'100%',textAlign:'center',padding:'2px 0px 0px 0px',margin:'0 50px 0 50px',fontSize:'34px',}}>
              ChillwithME
              </div>
              <MenuItem keyValue={3} style={{marginRight: '0px'}}>
                Communicate
              </MenuItem>
              <MenuItem keyValue={4}>
                For Fun
              </MenuItem>
              <MenuItem keyValue={5}>
                Group
              </MenuItem>
              <MenuItem keyValue={6}>
                Friend
              </MenuItem>
            </Menu>
          </div>
        </HeaderFixed>
        <div>
            {/* this is container */}
            something great!
            <div>
              <Theater/>
            </div>
        </div>
      </div>
    </div>
  )
}


