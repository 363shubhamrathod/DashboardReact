import classes from "./ActivityStream.module.css";
import ActivityStreamCard from "./ActivityStreamCard";

export default function ActivityStream() {
  return (
    <div className={classes.MainDiv}>
      <h2 className={classes.title}>Activity Stream</h2>
      <ActivityStreamCard />
      <button className={classes.viewMoreButton}>View More</button>
    </div>
  );
}
