import { CloudUpload,  Pin } from "lucide-react";
import classes from "./ActivityStreamCard.module.css";
export default function ActivityStreamCard() {
  return (
    <div className={classes.MainDiv}>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <div
          style={{
            width: "3rem",
            height: "3rem",
            borderRadius: "50%",
            backgroundColor: "yellow",
            overflow: "hidden",
          }}
        >
          <img
            src="./download.png"
            alt="image"
            style={{
              borderRadius: "50%",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div>
          Oscar Holloway
          <br />
          UI/UX Designer
        </div>
      </div>
      <div style={{backgroundColor:"rgb(210, 223, 239)",borderRadius:".5rem",margin:".5rem",padding:".5rem"}}>
        <CloudUpload /> Updated the status of mind map task to in progress
      </div>
      <div style={{backgroundColor:"rgb(210, 223, 239)",borderRadius:".5rem",margin:".5rem",padding:".5rem"}}>
        <Pin /> Updated the status of mind map task to in progress
      </div>
    </div>
  );
}
