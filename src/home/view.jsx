import HeaderFixed from "./component/header/headerfixed";
import Menu, { MenuItem } from "./component/header/menu";
import { useState, useContext, useEffect } from "react";
import NotificationContainer from "./component/tools/notification/notificationcontainer";
import MessageContainer from "./component/tools/message/messagecontainer";

import Theater from "./component/layout/theater/theater";

import { deviceContext } from "./system/system";
import TextCenter from "./component/tools/textcenter";

const HeaderThisPage = () => {
  //handle responsive
  const mobileHeader = () => {
    return (
      <HeaderFixed>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Menu style={{ display: "flex", height: "100%" }}>
            <div
              style={{
                height: "100%",
                textAlign: "center",
                padding: "2px 0px 0px 0px",
                fontSize: "34px",
              }}
            >
              ChillwithME
            </div>
          </Menu>
        </div>
      </HeaderFixed>
    );
  };
  const laptopHeader = () => {
    return (
      <HeaderFixed>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Menu style={{ display: "flex", height: "100%" }}>
            <MenuItem keyValue={-1} style={{ marginRight: "0px" }}>
              Blog
            </MenuItem>
            <MenuItem keyValue={0} style={{ marginRight: "0px" }}>
              Short
            </MenuItem>
            <MenuItem keyValue={1} style={{ marginRight: "0px" }}>
              Cinema
            </MenuItem>
            <MenuItem keyValue={2}>Streaming</MenuItem>
            <div
              style={{
                height: "100%",
                textAlign: "center",
                padding: "2px 0px 0px 0px",
                margin: "0 50px 0 50px",
                fontSize: "34px",
              }}
            >
              ChillwithME
            </div>
            <MenuItem keyValue={3} style={{ marginRight: "0px" }}>
              Communicate
            </MenuItem>
            <MenuItem keyValue={4}>For Fun</MenuItem>
            <MenuItem keyValue={5}>Group</MenuItem>
            {/* <MenuItem keyValue={6}>
                Friend
              </MenuItem> */}
          </Menu>
        </div>
      </HeaderFixed>
    );
  };
  const device = useContext(deviceContext);
  useEffect(() => {
    switch (device) {
      case "mobile":
        setRenderElement(mobileHeader());
        break;
      case "tablet":
        setRenderElement(mobileHeader());
        break;
      case "laptop":
        setRenderElement(laptopHeader());
        break;
      case "dektop":
        setRenderElement(laptopHeader());
        break;
      case "tv":
        setRenderElement(laptopHeader());
        break;
    }
  }, [device]);

  const [renderElement, setRenderElement] = useState(<div></div>);

  return renderElement;
};

export default function View(properties) {
  const props = { ...properties };

  const [leftSideContent, setLeftSideContent] = useState(<div></div>);
  const [contentSelectingIndex, setContentSelectingInex] = useState(0);
  const changeLeftContentHandle = (index) => {
    switch (index) {
      case 1:
        if (contentSelectingIndex == index) {
          setLeftSideContent(<div></div>);
          setContentSelectingInex("nothing");
        } else {
          setLeftSideContent(NotificationContainer);
          setContentSelectingInex(index);
        }
        break;
      case 2:
        if (contentSelectingIndex == index) {
          setLeftSideContent(<div></div>);
          setContentSelectingInex("nothing");
        } else {
          setLeftSideContent(MessageContainer);
          setContentSelectingInex(index);
        }
        break;
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "max-content auto",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "grid",
          height: "100vh",
          gridTemplateColumns: "max-content auto",
          borderRight: "2px solid rgba(228, 228, 228, 0.6)",
        }}
      >
        <div
          style={{
            width: "48px",
            borderRight: "1px solid rgba(228, 228, 228, 0.4)",
          }}
        >
          <Menu>
            <MenuItem
              keyValue={1}
              style={{
                paddingLeft: "5px",
                paddingRight: "5px",
                textAlign: "center",
                height: "50px",
              }}
              onClickedFunction={changeLeftContentHandle}
            >
              <TextCenter>mes</TextCenter>
            </MenuItem>
            <MenuItem
              keyValue={2}
              style={{
                paddingLeft: "5px",
                paddingRight: "5px",
                textAlign: "center",
                height: "50px",
              }}
              onClickedFunction={changeLeftContentHandle}
            >
              <TextCenter>noti</TextCenter>
            </MenuItem>
          </Menu>
        </div>
        {leftSideContent}
      </div>
      <div>
        <HeaderThisPage />
        <div>
          {/* this is container */}
          <div>{props.content}</div>
          <Theater />
        </div>
      </div>
    </div>
  );
}
