import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import {Users}  from "../components/Users"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    const navigate = useNavigate();
   
    

    const [balance, setBalance] = useState(0)

    useEffect(()=>{
        const token = localStorage.getItem("token") 
        if(!token) navigate('/signin')
            
        axios.get("http://localhost:4000/api/v1/account/balance",{
            headers:{
                "Authorization" : "Bearer "+ token,
            }
        }).then((res)=>{
             console.log(res.data);
             setBalance(res.data.balance.toFixed(2))
        // eslint-disable-next-line no-unused-vars
        })
        
        
        
    },[])
    return(
        <>
            <div>
            
            <Appbar />
            <div className="m-8">
                <Balance value={balance} />
                <Users />
            </div>
          </div>
        </>
    )
}

export default Dashboard