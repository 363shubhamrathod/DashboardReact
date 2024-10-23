import ActivityStream from "./ActivityStream";
import classes from "./MainContent.module.css";
import NearestEventDiv from "./NearestEventDiv";
import ProjectsDiv from "./ProjectsDiv";
import TopSearchBar from "./TopSearchBar";
import WelcomeDashbord from "./WelcomeDashbord";
import WorkLoadDiv from "./WorkLoadDiv";

export default function MainContent() {
  return (
    <div className={classes.mainContent}>
      <TopSearchBar />
      <WelcomeDashbord />
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <WorkLoadDiv />
          <NearestEventDiv />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin:"2rem"
        }}
      >
        <ProjectsDiv />
        <ActivityStream />
      </div>
    </div>
  );
}
