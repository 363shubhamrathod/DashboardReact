import classes from "./TopSearchBar.module.css";
import { Bell, ChevronDown } from "lucide-react";

export default function TopSearchBar() {
  return (
    <div className={classes.MainDiv}>
      <div className={classes.SearchContainer}>
        <input placeholder="Search" className={classes.searchInput} />
      </div>
      <div className={classes.SideDiv}>
        <button className={classes.bellButton}>
          <Bell />
        </button>
        <div className={classes.RightSmallBar}>
          <div className={classes.profilePic}>
            <img
              src="./download.png"
              alt="profile"
              className={classes.profileImage}
            />
          </div>
          <div className={classes.userName}>Oscar Holloway</div>
          <button className={classes.chevronButton}>
            <ChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
}
