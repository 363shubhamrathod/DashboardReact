import classes from "./WelcomeDashbord.module.css";
import { CalendarMinus2 } from "lucide-react";

export default function WelcomeDashbord() {
  return (
    <div className={classes.MainDiv}>
      <div className={classes.welcomeText}>
        <h4>Welcome Back, Evan!</h4>
      </div>
      <div className={classes.heading}>
        <h2>Dashboard</h2>
        <div className={classes.dateContainer}>
          <CalendarMinus2 className={classes.calendarIcon} />
          <span>Nov 16, 2023 - Dec 16, 2023</span>
        </div>
      </div>
    </div>
  );
}
