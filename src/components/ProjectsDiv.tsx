import ProjectItems from "./ProjectItems";
import classes from "./ProjectsDiv.module.css";

export default function ProjectsDiv() {
  return (
    <div className={classes.MainDiv}>
      <div className={classes.header}>
        <h3>Projects</h3>
        <button className={classes.viewAllButton}>View All</button>
      </div>
      <ProjectItems />
    </div>
  );
}
