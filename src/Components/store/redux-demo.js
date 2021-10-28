import {createStore} from 'redux';
const Data = [{
    id: '0',
    timeStamp:'2020-11-04 06:25:11',
    count:'3500',
    severity:'height',

},
    {
        id: '1',
        name: 'Jan',
        timeStamp:'2020-11-04 06:25:10',
        count:'1000',
        severity:'medium',

    },
    {
        id: '2',
        name: 'Feb',
        timeStamp:'2020-11-04 06:25:09',
        count:'6000',
        severity:'low',

    },
    {
        id: '3',
        name: 'March',
        timeStamp:'2020-11-04 06:25:08',
        count:'9000',
        severity:'height',

    },
    {
        id: '4',
        name: 'Apr',
        timeStamp:'2020-10-04 06:25:07',
        count:'5000',
        severity:'low',

    },
    {
        id: '5',
        name: 'May',
        timeStamp:'2020-10-04 06:25:06',
        count:'4000',
        severity:'medium',

    },
    {
        id: '6',
        name: 'Jun',
        timeStamp:'2020-10-04 06:25:05',
        count:'4300',
        severity:'low',

    },
    {
        id: '7',
        name: 'Jul',
        timeStamp:'2020-10-04 06:25:04',
        count:'2000',
        severity:'height',

    },
    {
        id: '8',
        name: 'Aug',
        timeStamp:'2020-10-04 06:25:03',
        count:'3000',
        severity:'height',

    },
    {
        id: '9',
        name: 'Sec',
        timeStamp:'2020-10-04 06:25:02',
        count:'4000',
        severity:'height',

    },
]

const ManagedReducer =(state=Data,)=>{
    return state;
}
const store = createStore(ManagedReducer)

export default store;

