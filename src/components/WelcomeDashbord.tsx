import classes from "./WelcomeDashbord.module.css";
import { CalendarMinus2 } from "lucide-react";
export default function WelcomeDashbord() {
  return (
    <div className={classes.MainDiv}>
      <div className={classes.welcomeText}>
        <h4>Welcome Back Evan!</h4>
      </div>
      <div className={classes.heading}>
        <div>
          <h2>Dashboard</h2>
        </div>
        <div style={{alignItems:"center"}}>
          <CalendarMinus2 />
          Nov 16,2023-Dec 16,2023
        </div>
      </div>
    </div>
  );
}
