import classes from "./ActivityStream.module.css";
import ActivityStreamCard from "./ActivityStreamCard";
export default function ActivityStream() {
  return (
    <div className={classes.MainDiv}>
      <h2 style={{margin:"1rem"}}>Activity Stream</h2>
      <ActivityStreamCard />
      <button>View More</button>
    </div>
  );
}
