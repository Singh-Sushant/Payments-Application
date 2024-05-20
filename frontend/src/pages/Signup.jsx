import { useState } from "react"
import BottomWarning from "../components/BottomWarning"
import Button from "../components/Button"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import  axios  from "axios"
import { useNavigate } from "react-router-dom"

const Signup = () => {
  const navigate = useNavigate();
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="flex justify-center  h-screen bg-slate-300 items-center">
      <div className="text-center bg-white w-[400px] rounded-lg p-7 h-max  shadow-2xl">
        <Heading title={"Sign Up"}/>
        <SubHeading text={"Enter your info to open an account"}/>
        <InputBox label={"First Name"} placeholder={"John"}  onChange={e=>{setfirstName(e.target.value)}} />
        <InputBox label={"Last Name"} placeholder={"Doe"} onChange={e=>{setlastName(e.target.value)}} />
        <InputBox label={"Email"} placeholder={"johndoe@gmail.com"}  onChange={e=>{setUsername(e.target.value)}}/>
        <InputBox label={"Password"} placeholder={"123456 (minimum length 6)"}    onChange={e=>{setPassword(e.target.value)}}/>
        <div>
          <Button onClick={async ()=>{
            const response = await axios.post("http://localhost:4000/api/v1/user/signup" , {
              firstName,
              lastName,
              username,
              password 
            })
            localStorage.setItem("token" , response.data.token)
            navigate("/dashboard")
          }} text={"Sign Up"} />
        </div>
        <BottomWarning label = {"Already have an account? "} linkText={"Sign In"} to={"/signin"}/>
    </div>
    </div>  
  )
}

export default Signup