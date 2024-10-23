import {
  Calendar,
  FolderOpen,
  Layers,
  LayoutDashboard,
  MessageCircle,
  Plane,
  UsersRound,
} from "lucide-react";
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
          <div className={classes.neavigationMenuItems}>
            <div>
              <button>
                <LayoutDashboard /> 
                <h5>Dashboard</h5>
              </button>
            </div>
            <div
              style={{ width: "4px", height: "100%", backgroundColor: "blue" }}
            ></div>
          </div>
          <div className={classes.neavigationMenuItems}>
            <button>
              <Layers /> <h5>Projects</h5>
            </button>
          </div>
          <div className={classes.neavigationMenuItems}>
            <button>
              <Calendar /> <h5>Projects</h5>
            </button>
          </div>
          <div className={classes.neavigationMenuItems}>
            {" "}
            <button>
              <Plane /> <h5>Vacations</h5>
            </button>
          </div>
          <div className={classes.neavigationMenuItems}>
            <button>
              <UsersRound /> <h5>employees</h5>
            </button>
          </div>
          <div className={classes.neavigationMenuItems}>
            <button>
              <MessageCircle /><h5>employees</h5>
            </button>
          </div>
          <div className={classes.neavigationMenuItems}>
            <button>
              <FolderOpen /> <h5>Info Potal</h5>
            </button>
          </div>
        </div>
        <div></div>
        {/* <div>other misselious options</div> */}
      </div>
    </div>
  );
}
