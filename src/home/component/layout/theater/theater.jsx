import { useState, useEffect, useContext, useCallback } from "react";
import TextCenter from "../../tools/textcenter";
import Button from "../../elementevent/button";
import { deviceContext } from "../../../system/system"; // dnag la thiet bi gi
import { getFilms } from "../../../system/api/cinemaApi";
import axios from "axios";

export default function Theater() {
  //handle responsive
  const device = useContext(deviceContext);

  useEffect(() => {
    switch (device) {
      case "mobile":
        var newStyle1 = {
          width: "auto",
          height: "70vw",
          display: "grid",
          gridTemplateColumns: "50vw auto",
          marginBottom: "20px",
          backgroundColor: "rgba(243, 243, 243, 0.8)",
          borderRadius: "0 5px 5px 0",
        };
        setStyle1(newStyle1);
        var newStyle = { ...style };
        newStyle.padding = "10px 10px 10px 10px";
        setStyle(newStyle);
        break;
      case "tablet":
        var newStyle1 = {
          width: "auto",
          height: "70vw",
          display: "grid",
          gridTemplateColumns: "50vw auto",
          marginBottom: "50px",
          marginRight: "20px",
          backgroundColor: "rgba(243, 243, 243, 0.8)",
          borderRadius: "0 5px 5px 0",
        };
        setStyle1(newStyle1);
        var newStyle = { ...style };
        newStyle.padding = "10px 10px 10px 10px";
        setStyle(newStyle);
        break;
      case "laptop":
        var newStyle1 = {
          width: "320px",
          height: "220px",
          display: "grid",
          gridTemplateColumns: "160px auto",
          marginBottom: "50px",
          backgroundColor: "rgba(243, 243, 243, 0.8)",
          borderRadius: "0 5px 5px 0",
        };
        setStyle1(newStyle1);
        var newStyle = { ...style };
        newStyle.padding = "10px 10px 10px 100px";
        setStyle(newStyle);
      default:
        var newStyle1 = {
          width: "320px",
          height: "250px",
          display: "grid",
          marginRight: "20px",
          gridTemplateColumns: "160px auto",
          marginBottom: "50px",
          backgroundColor: "rgba(243, 243, 243, 0.8)",
          borderRadius: "0 5px 5px 0",
        };
        setStyle1(newStyle1);
        var newStyle = { ...style };
        newStyle.padding = "10px 10px 10px 100px";
        setStyle(newStyle);
        break;
    }
  }, [device]);

  const [style, setStyle] = useState({
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "left",
    padding: "10px 10px 10px 10px",
  });
  //responsive
  const [style1, setStyle1] = useState({});
  const [style2, setStyle2] = useState({
    // objectFit: 'scale-down',
    width: "100%",
    height: "100%",
    borderRadius: "5px",
  });

  const [films, setFilms] = useState([
    // model
    {
      name: "Spiderman no wayhome",
      rating: "9",
      last: 120,
      waiting: 1000,
      imgUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQZ_0AdmXp96pgajLBpvHVocGRZCIGDSYgE9_crqdF0-pu2xtos",
      videoUrl:
        "https://cdn81.awsindstream.com/content/stream/indfilms/Spider.Man.No.Way.Home.2021.720p.TS.VNM.SUB.1XBET.mp4",
    },
  ]);

  const customSetCinemaData = useCallback(
    (data) => {
      if (typeof data === undefined) {
        return;
      }
      if (!Array.isArray(data)) {
        return;
      }
      setFilms(data);
    },
    [films]
  );

  const filmsElement = useCallback((elementData, index) => {
    if (typeof elementData === undefined) {
      return;
    }
    if (typeof elementData.name === undefined) {
      return;
    }
    if (typeof elementData.rating === undefined) {
      return;
    }
    if (typeof elementData.last === undefined) {
      return;
    }
    if (typeof elementData.waiting === undefined) {
      return;
    }
    if (typeof elementData.imgUrl === undefined) {
      return;
    }
    const index1 = index;
    return (
      <div style={style1}>
        <img src={elementData.imgUrl} alt="anh" style={style2} />
        <div>
          <TextCenter style={{ height: "50px" }}>{elementData.name}</TextCenter>
          <TextCenter style={{ height: "50px" }}>
            {elementData.rating + "/10"}
          </TextCenter>
          <TextCenter style={{ height: "50px" }}>
            {elementData.last + "p"}
          </TextCenter>
          <TextCenter style={{ height: "50px" }}>
            {elementData.waiting}
          </TextCenter>
          <TextCenter style={{ height: "50px", cursor: "pointer" }}>
            <Button
              style={{
                padding: "5px 10px 5px 10px",
                backgroundColor: "rgba(121, 175, 251, 0.8)",
                transition: "0.3s",
              }}
              onClickedFunction={() => {
                var newDisplay = {
                  disPlay: "block",
                  index: 0,
                };
                setDisPlay(newDisplay);
              }}
            >
              Vào rạp
            </Button>
          </TextCenter>
        </div>
      </div>
    );
  });

  useEffect(async () => {
    var a = await getFilms();
    customSetCinemaData(a.data);
  }, []);

  function Films(props) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          zIndex: "1001",
          backgroundColor: "rgba(100, 100, 100, 0.3)",
        }}
      >
        <div style={{ width: "auto" }}>
          <div style={{ disPlay: "block", width: "100%" }}>
            <Button
              style={{ backgroundColor: "rgba(255, 85, 140, 0.8)" }}
              onClickedFunction={() => {
                var newDisplay = { ...disPlay };
                newDisplay.index = -10;
                setDisPlay(newDisplay);
              }}
            >
              Thoat
            </Button>
          </div>

          <video controls muted="muted" autoPlay name="media">
            <source src={props.url} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
  const [disPlay, setDisPlay] = useState({
    index: -10,
    disPlay: "none",
  });
  return (
    <div style={{ ...style }}>
      {films.map((elementData, index) => {
        // alert(elementData.videoUrl);

        if (index == disPlay.index) {
          return (
            <div>
              {filmsElement(elementData, index)}

              <div
                style={{
                  position: "fixed",
                  top: "0",
                  left: "0",
                  margin: "auto",
                  height: "100vh",
                  width: "100vw",
                }}
              >
                <Films url={elementData.videoUrl} />
              </div>
            </div>
          );
        }

        return <div>{filmsElement(elementData)}</div>;
      })}
    </div>
  );
}
