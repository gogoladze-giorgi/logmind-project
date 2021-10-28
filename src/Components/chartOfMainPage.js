import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import moment from 'moment'


const ChartOfMainPage=(props)=> {
    const data = props.filteredBarChartbyData



    return (
        <ResponsiveContainer width="100%" height={250}>
            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <defs>
                </defs>
                <CartesianGrid horizontal={false} vertical={false} />
                <XAxis dataKey="timeStamp" tickFormatter={timeStr => moment(timeStr).format('MMM Do YY ')}/>
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="count" stackId="1" stroke="#8884d8"  />
                <Area type="monotone" dataKey="severity" stackId="1" stroke="#82ca9d"  />
            </AreaChart>
        </ResponsiveContainer>
    );

}
export default ChartOfMainPage;


