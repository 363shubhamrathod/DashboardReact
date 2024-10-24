import { CloudUpload, Pin } from "lucide-react";
import classes from "./ActivityStreamCard.module.css";

export default function ActivityStreamCard() {
  return (
    <div className={classes.MainDiv}>
      <div className={classes.userInfo}>
        <div className={classes.profilePic}>
          <img
            src="./download.png"
            alt="Profile of Oscar Holloway"
            className={classes.image}
          />
        </div>
        <div className={classes.userDetails}>
          <strong>Oscar Holloway</strong>
          <br />
          <span className={classes.userRole}>UI/UX Designer</span>
        </div>
      </div>
      <div className={classes.activityItem}>
        <CloudUpload /> Updated the status of mind map task to in progress
      </div>
      <div className={classes.activityItem}>
        <Pin /> Updated the status of mind map task to in progress
      </div>
    </div>
  );
}
