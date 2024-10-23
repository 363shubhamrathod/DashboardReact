import classes from "./TopSearchBar.module.css";
import { Bell, ChevronDown } from "lucide-react";
export default function TopSearchBar() {
  return (
    <div className={classes.MainDiv}>
      <div>
        <input placeholder="search" className={classes.searchInput} />
      </div>
      <div className={classes.SideDiv}>
        <div>
          <button style={{ padding: "1rem", borderRadius: ".25rem",backgroundColor:"rgb(220, 228,241)",borderWidth:"0px" }}>
            <Bell />
          </button>
        </div>
        <div className={classes.RightSmallBar}>
          <div style={{ margin: ".5rem" }}>Oscar Holloway</div>
          <div
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              backgroundColor: "yellow",
              overflow: "hidden",
            }}
          >
            <img
              src="./download.png"
              alt="image"
              style={{
                borderRadius: "50%",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div>
          <button ><ChevronDown/></button>
          </div>
        </div>
      </div>
    </div>
  );
}
