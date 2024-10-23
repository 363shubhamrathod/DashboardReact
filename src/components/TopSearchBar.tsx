import classes from "./TopSearchBar.module.css";
import { Bell,Image } from "lucide-react";
export default function TopSearchBar() {
  return (
    <div className={classes.MainDiv}>
      <div>
        <input
          placeholder= "search"
          className={classes.searchInput}
        />
      </div>
      <div
        className={classes.SideDiv}
      >
        <div ><button style={{padding:".5rem", borderRadius:".25rem"}}><Bell /></button></div>
        <div
         className={classes.RightSmallBar}
        >
          <div style={{margin:".5rem"}}>Name</div>
          <div style={{margin:".5rem"}}><Image /></div>
        </div>
      </div>
    </div>
  );
}
