import { Calendar, FolderOpen, Layers, LayoutDashboard, MessageCircle, Plane, UsersRound } from "lucide-react";
import LogoSVG from "./LogoSvg";
import classes from "./SideNavBar.module.css";
export default function SideNavBar() {
  return (
    <div className={classes.navBar}>
      <div className={classes.navBarContentBox}>
        <div>
          <LogoSVG />
        </div>
        <div className={classes.neavigationMenu}>
          <div className={classes.neavigationMenuItems}><div><button><LayoutDashboard /> Dashboard</button></div><div style={{width:"4px",height:"100%",backgroundColor:"blue"}}></div></div>
          <div className={classes.neavigationMenuItems}><button><Layers/> Projects</button></div>
          <div className={classes.neavigationMenuItems}><button><Calendar/> Calender</button></div>
          <div className={classes.neavigationMenuItems}> <button><Plane/> Vacations</button></div>
          <div className={classes.neavigationMenuItems}><button><UsersRound/> employees</button></div>
          <div className={classes.neavigationMenuItems}><button><MessageCircle/> Messenger</button></div>
          <div className={classes.neavigationMenuItems}><button><FolderOpen/> Info Potal</button></div>
        </div>
        <div></div>
        <div>other misselious options</div>
      </div>
    </div>
  );
}
