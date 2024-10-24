import classes from "./WorkLoadDivCardBox.module.css";
import { useState } from "react";

export default function WorkLoadDivCardBox() {
  const [progress, setProgress] = useState<number>(75);

  return (
    <div className={classes.WorkLoadDivCard}>
      <div className={classes.contentDiv}>
        <div className={classes.itemsDisplay}>
          {/* Circular Progress Background */}
          <div
            className={classes.progressBar}
            style={{
              background: `conic-gradient(#2196f3 ${progress}%, #ddd 0)`,
              zIndex: 1,
            }}
          ></div>

          {/* Image in center */}
          <div className={classes.imageDiv}>
            <img
              src="./download.png"
              alt="image"
              className={classes.imageElement}
            />
          </div>
        </div>
        <h4>Oscar Holloway</h4>
        <h5>UI/UX Designer</h5>
        <h5 style={{ border: "1px solid gray", borderRadius: ".2rem" }}>
          Middle
        </h5>
      </div>
    </div>
  );
}
