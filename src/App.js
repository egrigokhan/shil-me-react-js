import "./styles.css";

import { useEffect, useRef, useState } from "react";
import { PanZoom } from "react-easy-panzoom";

import Navbar from "./Components/Navbar";
import RoomDesignDialog from "./Components/RoomDesignDialog";
import EditItemDialog from "./Components/EditItemDialog";
import NavigationControllerView from "./Components/NavigationControllerView";
import RoomItem from "./Components/RoomItem";
import StaticRoomItem from "./Components/StaticRoomItem";
import NonDraggableRoomItem from "./Components/NonDraggableRoomItem";

export default function App({ props }) {
  var content = useRef(null);

  const [roomIndex, setRoomIndex] = useState(0);

  useEffect(() => {
    console.log(roomIndex);
  }, [roomIndex]);
  return (
    <div
      style={{
        padding: "16px",
        margin: "0px",
        zIndex: "-1 !important"
      }}
    >
      <Navbar style={{ zIndex: "-2 !important" }} />
      <NavigationControllerView
        props={props}
        roomIndex={roomIndex}
        setRoomIndex={setRoomIndex}
      />
      <PanZoom
        id="panner"
        preventPan={(event, x, y) => {
          if (event.target.className === "non-interactable-image") {
            return true;
          }
          return false;
        }}
        boundaryRatioVertical={1}
        boundaryRatioHorizontal={1}
        enableBoundingBox={false}
        style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          overflow: "hidden",
          height: "100vh",
          width: "100vw",
          zIndex: "-1",
          background: props.rooms[roomIndex].background_color
        }}
      >
        {props.rooms[roomIndex].items.map((item) => (
          <NonDraggableRoomItem
            props={{ ...props }}
            shadow={props.rooms[roomIndex].shadow}
            item={item}
            ref={content}
            onClose={() => {}}
            show={true}
          />
        ))}
      </PanZoom>
    </div>
  );
}
