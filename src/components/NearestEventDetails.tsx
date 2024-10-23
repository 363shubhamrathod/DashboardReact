import { Clock } from "lucide-react";
import classes from "./NearestEventDetails.module.css";
export default function NearestEventDetails() {
  return (
    <div style={{ display: "flex", flexDirection: "row" ,justifyContent:"flex-start" }}>
        <div style={{height:"100%",width:"2px",backgroundColor:"blue",paddingTop:"1rem",paddingBottom:"1rem"}}></div>
      <div className={classes.nearestEventDetails}>
        <div>
          <h4>Presentation of new department</h4>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          <div>Today | 6PM</div>
          <div><Clock/> 4h</div>
        </div>
      </div>
    </div>
  );
}
