import ProjectItems from "./ProjectItems";
import classes from "./ProjectsDiv.module.css";
export default function ProjectsDiv() {
  return (
    <div className={classes.MainDiv}>
      <div style={{ display: "flex", justifyContent: "space-between"  }}>
        <h3>Projects</h3>
        <h4>
          <button>View All</button>
        </h4>
      </div>
      <ProjectItems/>
    </div>
  );
}
