import React, {useState} from "react";
import Select from 'react-select';
import './summary.css';


// const actions =[
//     { value: 'jp nagar', label: 'Jp Nagar' },
//     { value: 'alkapuri', label: 'Alkapuri' },
//     { value: 'pink city', label: 'Pink City' }
// ]
const actions =[
    {
        lable :"Jp Nagar",
        storeAddress :"Near phone booth,10th Road",
        phone:"+91 009911563328"
    },
    {
        lable :"Alkapuri",
        storeAddress :"Near J-D Hall,11th striet",
        phone:"+91 900916743326"
    },
    {
        lable :"Pink City",
        storeAddress :"Near phone booth,10th Road",
        phone:"+91 8009115633280"
    }
]

const SummaryPg =()=>{
    const [inputVal , setVal]= useState('');
    const [selectedVal, setSelectedVal] = useState(null);

    const handleInputChange = value =>{
        setVal(value);
    }

    const handleChange = value =>{
        setSelectedVal(value);
        console.log(value);
    }
    return(
        <>
        <div id="summaryBack">
        <div id="orderDetail">
            <div className="head">
                <p>Summary</p>
                <span class="close">&times;</span>
            </div>
            <div className="storeDetail">
                <div className="location">
                    <p><b>Store Location</b></p>
                    <Select style={{boder:"none", width:"15%"}} options={actions}  value={selectedVal} onInputChange={handleInputChange} onChange={handleChange}/> 
                
                    {/* <input style={{boder:"none"}} type="select" options={actions}></input>
                    <select style={{boder: "0px"}}>
                        <option>a</option>
                        <option>b</option>
                    </select> */}
                </div>
                <div className="address">
                    <p><b>Store Address</b></p>
                    <p>hello{JSON.stringify(setSelectedVal || {}, null, 2)}</p>
                </div>
                <div className="phone">
                    <p><b>PhoneNo.</b></p>
                    <p>8766</p>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>
        
        </>
    )
}

export default SummaryPg;