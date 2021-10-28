import React, {useState} from 'react';
import ChartOfMainPage from "./chartOfMainPage";
import {IoAppsSharp} from "react-icons/io5";
import {BiLineChart} from "react-icons/bi";
import DataTable from './Table/DataTable'
import classes from './Mainbar.module.css'
import {useSelector} from 'react-redux';
import ChangeDate from './mainChart/changeDataOfChart'


const MainBar = () => {
    const dataList = useSelector( state => state )
    const [page, setPage] = useState(true);
    const [data, setData] = useState(dataList);

    const ChangeChartHandler = () => {
        setPage(false)

    }

    const Table = () => {
        setPage(true)
    }


    const ColorOfResults=(value)=>{
        if(value === 0){
            return {color: 'red'}
        }else{
            return {color: 'green'}
        }
    }
    return <div className={classes.container}>
        <input onChange={(event) => {
            let filteredDataList = dataList.filter(d => d.severity.toString().includes(event.target.value));
            setData(filteredDataList);
        }
        } type="text" placeholder="Search by keyword..."
               name="search" className={classes.search}/>
        <div style={ColorOfResults(data.length)}> {data.length} Results found</div>
        <ChartOfMainPage filteredBarChartbyData = {data} />
        <div className={classes.chart}>
            <IoAppsSharp className={classes.page_one} onClick={Table}/>
            <BiLineChart className={classes.page_two} onClick={ChangeChartHandler}/>
        </div>
        {!page && <ChangeDate />}
        {page && <DataTable rows={data}/>}
    </div>
}
export default MainBar;
