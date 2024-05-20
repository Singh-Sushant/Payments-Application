import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import {Users}  from "../components/Users"
import axios from "axios"

const Dashboard = () => {

    const [balance, setBalance] = useState(0)

    useEffect(()=>{
        console.log(localStorage.getItem('token'));
        axios.get("http://localhost:4000/api/v1/account/balance",{
            headers:{
                "Authorization" : "Bearer "+localStorage.getItem("token"),
            }
        }).then((res)=>{
             console.log(res.data);
             setBalance(res.data.balance.toFixed(2))
        })
        
        
        
    },[])
    return <div>

        <Appbar />
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}

export default Dashboard