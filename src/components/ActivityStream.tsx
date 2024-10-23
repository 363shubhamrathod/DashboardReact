import classes from "./ActivityStream.module.css";
import ActivityStreamCard from "./ActivityStreamCard";
export default function ActivityStream() {
  return (
    <div className={classes.MainDiv}>
      <h3> Activity Stream</h3>
      <ActivityStreamCard />
      <button>View More</button>
    </div>
  );
}
