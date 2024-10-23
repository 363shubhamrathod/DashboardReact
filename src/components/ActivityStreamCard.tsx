import { CloudUpload, Image, Pin } from "lucide-react";
import classes from "./ActivityStreamCard.module.css";
export default function ActivityStreamCard() {
  return <div className={classes.MainDiv}>
    <div style={{ display: "flex", justifyContent:"flex-start"  }}>
        <div style={{height:"2rem",width:"2rem"}}>
          <Image/>
        </div>
        <div>
          Oscar Holloway
          <br/>
          UI/UX Designer
        </div>
    </div>
    <div>
      <CloudUpload/> Updated the status of mind map task to in progress
    </div>
    <div>
      <Pin/> Updated the status of mind map task to in progress
    </div>
  </div>;
}
