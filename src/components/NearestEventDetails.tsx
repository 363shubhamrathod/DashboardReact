import classes from "./NearestEventDetails.module.css";
export default function NearestEventDetails(){
    return (
        <div className={classes.nearestEventDetails}>
            <div><h4>Presentation of new department</h4></div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"1rem"}}>
                <div>Today | 6PM</div>
                <div>4h</div>
            </div>
        </div>
    );
}