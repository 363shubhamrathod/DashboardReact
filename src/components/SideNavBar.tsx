import {
  Calendar,
  FolderOpen,
  Layers,
  LayoutDashboard,
  LogOut,
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
        <div className={classes.logoContainer}>
          <LogoSVG />
        </div>
        <div className={classes.navigationMenu}>
          <div className={`${classes.navigationMenuItem} ${classes.active}`}>
            <button>
              <LayoutDashboard />
              <h5>Dashboard</h5>
            </button>
            <div className={classes.sideBarIndicator}></div> {/* Blue bar */}
          </div>
          <div className={classes.navigationMenuItem}>
            <button>
              <Layers />
              <h5>Projects</h5>
            </button>
          </div>
          <div className={classes.navigationMenuItem}>
            <button>
              <Calendar />
              <h5>Calendar</h5>
            </button>
          </div>
          <div className={classes.navigationMenuItem}>
            <button>
              <Plane />
              <h5>Vacations</h5>
            </button>
          </div>
          <div className={classes.navigationMenuItem}>
            <button>
              <UsersRound />
              <h5>Employees</h5>
            </button>
          </div>
          <div className={classes.navigationMenuItem}>
            <button>
              <MessageCircle />
              <h5>Messages</h5>
            </button>
          </div>
          <div className={classes.navigationMenuItem}>
            <button>
              <FolderOpen />
              <h5>Info Portal</h5>
            </button>
          </div>
        </div>
        <div className={classes.logoutContainer}>
          <button className={classes.logoutButton}>
            <LogOut className={classes.logoutIcon} />
            <h5>Logout</h5>
          </button>
        </div>
      </div>
    </div>
  );
}
