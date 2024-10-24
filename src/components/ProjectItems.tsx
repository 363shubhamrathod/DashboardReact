import { ArrowUp, Calendar, Image } from "lucide-react";
import classes from "./ProjectItems.module.css";

export default function ProjectItems() {
  return (
    <div className={classes.projectItems}>
      <div className={classes.projectInfo}>
        <div className={classes.projectHeader}>
          <Image className={classes.projectIcon} />
          <div className={classes.projectTitle}>
            <h5>PN0001265</h5>
            <h5>Medical App (iOS Native)</h5>
          </div>
        </div>
        <div className={classes.projectDetails}>
          <div className={classes.projectDetail}>
            <Calendar className={classes.detailIcon} />
            <span className={classes.dateText}>Created At May 12, 2020</span>
          </div>
          <div className={classes.projectDetail}>
            <ArrowUp className={classes.detailIcon} /> Medium
          </div>
        </div>
      </div>
      <div className={classes.separator}></div>
      <div className={classes.projectData}>
        <h4>Project Data</h4>
        <div className={classes.dataContainer}>
          <div className={classes.dataItem}>
            <h5>All Tasks</h5>
            <h5>34</h5>
          </div>
          <div className={classes.dataItem}>
            <h5>Active Tasks</h5>
            <h5>13</h5>
          </div>
          <div className={classes.dataItem}>
            <h5>Assignees</h5>
            <div className={classes.assigneeContainer}>
              <img
                src="./download.png"
                alt="Assignee 1"
                className={classes.assigneeImage}
              />
              <img
                src="./download.png"
                alt="Assignee 2"
                className={classes.assigneeImage}
              />
              <img
                src="./download.png"
                alt="Assignee 3"
                className={classes.assigneeImage}
              />
              <span className={classes.plusSign}>+2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
