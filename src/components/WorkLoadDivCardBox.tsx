import { Image } from "lucide-react";
import classes from "./WorkLoadDivCardBox.module.css";
export default function WorkLoadDivCardBox() {
  return (
    <div className={classes.WorkLoadDivCard}>
      <div>
        <div style={{width:"3rem",height:"3rem",backgroundColor:"yellow"}}>
          <Image />
        </div>
          <h4>Name</h4>
          <h5>Desination</h5>
          <h5>seniority</h5>  
      </div>
    </div>
  );
}
