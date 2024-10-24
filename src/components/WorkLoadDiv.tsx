import classes from "./WorkLoadDiv.module.css";
import WorkLoadDivCardBox from "./WorkLoadDivCardBox";

export default function WorkLoadDiv() {
  return (
    <div className={classes.WorkLoadDiv}>
      <div className={classes.header}>
        <h2>Workload</h2>
        <button className={classes.viewAllButton}>View All</button>
      </div>
      <div className={classes.WorkLoadDivCardBox}>
        <WorkLoadDivCardBox />
        <WorkLoadDivCardBox />
        <WorkLoadDivCardBox />
        <WorkLoadDivCardBox />
      </div>
    </div>
  );
}
