import { Clock } from "lucide-react";
import classes from "./NearestEventDetails.module.css";

export default function NearestEventDetails() {
  return (
    <div className={classes.container}>
      <div className={classes.sideLine}></div>
      <div className={classes.nearestEventDetails}>
        <div>
          <h4>Presentation of new department</h4>
        </div>
        <div className={classes.eventInfo}>
          <div>Today | 6PM</div>
          <div className={classes.clockContainer}>
            <Clock className={classes.clockIcon} />
            <span>4h</span>
          </div>
        </div>
      </div>
    </div>
  );
}
