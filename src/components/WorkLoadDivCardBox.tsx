import classes from "./WorkLoadDivCardBox.module.css";
export default function WorkLoadDivCardBox() {
  return (
    <div className={classes.WorkLoadDivCard}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
        <h4>Oscar Holloway</h4>
        <h5>UI/UX Designer</h5>
        <h5 style={{border:"1px solid gray",borderRadius:".2rem"}}>Middle</h5>
      </div>
    </div>
  );
}
