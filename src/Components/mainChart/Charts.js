import { Line } from 'react-chartjs-2'
import {useSelector} from 'react-redux';



const DataChart =(props)=>{

    const Data = useSelector(state=>state)
    let TimeStamp = Data.map((value)=>value.timeStamp)
    let count = Data.map((value)=>value.count)
    let Yaxsis = props.Yaxsis;
    let Xaxsis = props.Xaxsis

    const Axis =(value)=> {
        if(value.toString()  ==='timeStamp'){
            return TimeStamp;

        }
        if(value.toString() === 'count'){
            return count
        }
        return ['1', '2', '3', '4', '5', '6'];
    }



    return <div><Line
        type= 'line'
        data={{
                labels: Axis(Xaxsis),
                fontsize:'400',
                datasets: [
                    {
                        label: 'count',
                        data:Axis(Yaxsis),
                        backgroundColor:'white',
                        borderColor: 'rgb(160,236,231)'
                    },
                ]
            }}
            options={{
                maintainAspectRatio:false,
                scales: {

                    x: {
                        ticks: {
                            display:props.Checkbox,

                        }
                    },
                    y:{
                        ticks: {
                            display:props.Checkbox,
                        }

                    }
                }
            }}
            height={300}
            width={700}

        />
    </div>
}
export default DataChart;
