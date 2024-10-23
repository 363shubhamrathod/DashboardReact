import { ArrowUp, Calendar, Image } from "lucide-react";
import classes from "./ProjectItems.module.css";
export default function ProjectItems() {
  return (
    <div className={classes.projectItems}>
      <div style={{borderRightWidth:"10px solid black"}}>
        <div style={{ display: "flex", flexDirection: "row", }}>
          <div>
            <Image />
          </div>
          <div>
            PN0001265
            <h5>Medical App (ios native)</h5>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div><Calendar/> Created At May 12,2020</div>
            <div><ArrowUp/> Medium</div>
        </div>
      </div>
      <div>
        <h4>Project Data</h4>
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{margin:".25rem"}}>
                <h5>All tasks</h5>
                <h5>34</h5>
            </div>
            <div style={{margin:".25rem"}}>
                <h5>Active Task</h5>
                <h5>13</h5>
            </div>
            <div style={{margin:".25rem"}}>
                <h5>Active Task</h5>
                <h5>5</h5>
            </div>
        </div>
      </div>
    </div>
  );
}
