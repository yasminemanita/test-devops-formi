import React,{useState,useRef} from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginSuccess } from "../redux/actions/AuthActions";
import CryptoJS from 'crypto-js';
import {getUsername,getPassword} from "../components/FunctionsToTest"
export const useForm=()=>{
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState(false);
    const [token,setToken]=useState("n");
    const dispatch=useDispatch();
    const history=useHistory()
   
    const [showPassword, setShowPassword] = useState(false);
    //const inputRef = useRef(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };
      const handleMouseDownPassword = (event: React.MouseEvent<HTMLIonIconElement, MouseEvent>) => {
        event.preventDefault();
      };
      const signIn=(username:String,password:String,hash:String)=>{
    
        if(username =="admin"&& password=="m123456"){
          return hash
        }
        else{
         return undefined
          
        }
      }
    
      const handleSubmit=(e:any)=>{
        e.preventDefault();
        if(getUsername(username) && getPassword(password)!==null){
          let hash = CryptoJS.MD5(password).toString(); // create MD5 hash
          let token =hash
           token===undefined ? setToken(""):setToken(String(token))
           localStorage.setItem("authToken", String(token));
          dispatch(loginSuccess(String(token))) 
          localStorage.getItem("authToken")!== undefined && token!==undefined ? history.push("/home"): console.log("nnnnnnnnn") 
          return token; 
        }
        else{
          setToken("undefined")
        }
       console.log("token",token) 
      }
      
      const onChangeUserName=(e:any)=>{
        setUsername(e.target.value)
        console.log(username)
        return username;
    }
    const onChangePassword=(e:any)=>{
        setPassword(e.target.value)
    }



    return {username,password,onChangeUserName,onChangePassword,handleSubmit, handleClickShowPassword,handleMouseDownPassword,inputRef,showPassword,token}
  
}