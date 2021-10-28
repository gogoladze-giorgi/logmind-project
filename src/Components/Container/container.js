import SideBar from "../SideBar";
import MainBar from "../MainBar";
import classes from './container.module.css'
const Container=()=>{
    return <div className={classes.flexContainer}>
        <SideBar/>
        <MainBar/>
    </div>

}
export default Container;
