import { useState } from "react"
import BottomWarning from "../components/BottomWarning"
import Button from "../components/Button"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Signin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="flex items-center bg-slate-300 h-screen justify-center">
      <div className="bg-white shadow-2xl rounded-lg p-7 text-center">
      <Heading title={"Sign In"}/>
      <SubHeading text={"Enter credentials to access your account"}/>
      <InputBox placeholder={'johndoe@gmail.com'} label={"Email"} onChange={(e)=>{setUsername(e.target.value)}}/>
      <InputBox placeholder={'123456'} label={"Password"} onChange={(e)=>{setPassword(e.target.value)}}/>
      <div>
        <Button onClick={async()=>{
            const res = await axios.post("http://localhost:4000/api/v1/user/signin",{
            username,
            password
          })  
          

          const logged = res.data.in;
          if(logged == true){
            localStorage.setItem("token" , res.data.token)
            navigate('/dashboard')
          }
          else{
            alert("Username / Password incorrect")
          }
        }} text={"Sign In"}/>
      </div>
      <BottomWarning label={"Don't have an account? "} linkText={"Sign Up"} to={"/signup"} />
    </div>
    </div>
  )
}

export default Signin