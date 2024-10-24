import NearestEventDetails from "./NearestEventDetails";
import classes from "./NearestEventDiv.module.css";

export default function NearestEventDiv() {
  return (
    <div className={classes.nearestEvent}>
      <h2 className={classes.title}>Nearest Event</h2>
      <NearestEventDetails />
    </div>
  );
}
