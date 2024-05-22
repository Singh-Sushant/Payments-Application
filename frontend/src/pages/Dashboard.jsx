import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import {Users}  from "../components/Users"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../services/helper"

const Dashboard = () => {
    const navigate = useNavigate();
   
    

    const [balance, setBalance] = useState(0)

    useEffect(()=>{
        const token = localStorage.getItem("token") 
        if(token==null || token == undefined) navigate('/signin')

        axios.get(`${BASE_URL}/api/v1/account/balance`,{
            headers:{
                "Authorization" : "Bearer "+ token,
            }
        }).then((res)=>{
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