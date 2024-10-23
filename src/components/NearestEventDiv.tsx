import NearestEventDetails from "./NearestEventDetails";
import classes from "./NearestEventDiv.module.css";
export default function NearestEventDiv() {
  return (
      <div className={classes.nearestEvent}>
      <h3>Nearest Event</h3>
        <NearestEventDetails />
      </div>
  );
}
