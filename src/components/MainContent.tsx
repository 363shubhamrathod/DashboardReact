import ActivityStream from "./ActivityStream";
import classes from "./MainContent.module.css";
import NearestEventDiv from "./NearestEventDiv";
import ProjectsDiv from "./ProjectsDiv";
import TopSearchBar from "./TopSearchBar";
import WelcomeDashboard from "./WelcomeDashbord"; // Fixed spelling
import WorkLoadDiv from "./WorkLoadDiv";

export default function MainContent() {
  return (
    <div className={classes.mainContent}>
      <TopSearchBar />
      <WelcomeDashboard />
      <div className={classes.flexContainer}>
        <WorkLoadDiv />
        <NearestEventDiv />
      </div>
      <div className={classes.flexContainer}>
        <ProjectsDiv />
        <ActivityStream />
      </div>
    </div>
  );
}
