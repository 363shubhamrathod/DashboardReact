import classes from "./app.module.css";
import MainContent from "./components/MainContent";
import SideNavBar from "./components/SideNavBar";

function App() {
  return (
    <div className={classes.mainPageStyle}>
      <SideNavBar />
      <MainContent />
    </div>
  );
}

export default App;
