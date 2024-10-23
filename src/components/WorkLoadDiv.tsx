import classes from "./WorkLoadDiv.module.css";
import WorkLoadDivCardBox from "./WorkLoadDivCardBox";



export default function WorkLoadDiv() {
  return (
    <div className={classes.WorkLoadDiv}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Workload</h2>
        <h4>
          <button>View All</button>
        </h4>
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
