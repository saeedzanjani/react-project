import React from 'react';
import myappLogo from '../../../assets/images/logo.png';
import Button from '../../UI/button/button';
import './signIn.css';
const SignIn =(props)=>(
    <React.Fragment>
        <img src={myappLogo} alt="reactapp.ir" className="formImg" />
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <Button>ورود</Button>
    </React.Fragment>
)
export default SignIn;













// import React,{useState,useEffect,useContext} from 'react';
// import './signIn.css';
// import signinlogo from '../../../assets/images/logo.png';
// import Button from '../../UI/button/button';
// import reloadimage from '../../../assets/images/reload_image.jpg';
// import {AuthContext} from '../../context/Auth/AuthContext';
// const SignIn=(props)=>{
//     const[randomNumber1,setRandomNumber1]= useState(0);
//     const[randomNumber2,setRandomNumber2]= useState(0);
//     const[sumHolder,setSumHolder]= useState(0);
//     const[captchaValue,setCaptchaValue]= useState(0);
//     const[errorMessage,setErrorMessage]= useState('');
//     const[username,setUsername]= useState('');
//     const[password,setPassword]= useState('');
//     const {dispatch} = useContext(AuthContext);

//     useEffect(()=>{
//         generateCaptcha();
//     },[])

//     const generateCaptcha=()=>{
//         let number1= Math.floor(Math.random()*10)+1;
//         let number2= Math.floor(Math.random()*10)+1;
//         setRandomNumber1(number1);
//         setRandomNumber2(number2);
//         let sum= number1+number2;
//         setSumHolder(sum);
//     }

//     const captchaHandler=(event)=>{
//         setCaptchaValue(Number(event.target.value));
//     }

//     const validate=()=>{
//         if(username===''){
//             setErrorMessage('username empty');
//             return false;
//         }
//         else if(!username.includes('@') || !username.includes('.')){
//             setErrorMessage('username invalid');
//             return false;
//         }
//         else if(password===''){
//             setErrorMessage('password empty');
//             return false;
//         }
//         else if(password.length<5){
//             setErrorMessage('password invalid');
//             return false;
//         }
    
//         setErrorMessage('');
//         return true;
        
//     }

//     const loginHandler=()=>{
//         if(sumHolder===captchaValue){
//             setErrorMessage('')
//             const validateResult= validate();
//             if(validateResult){
//                 fetch('http://192.168.43.54/student/user_login.php',{
//                     // mode: "no-cors",
//                     method:'POST',
//                     headers:{
//                         'Accept':'application/json',
//                         'Content-Type':'application/json',
//                     },
//                     body:JSON.stringify({
//                         email:username,
//                         password:password
//                     })
//                 }).then((response)=>response.json())
//                     .then((responseJson)=>{
//                         if(responseJson==="Data Matched"){
//                             dispatch({type:'login',payload:username});
//                         }
//                         else{
//                             setErrorMessage(responseJson)
//                         }
//                     }).catch((error)=>{
//                         alert(error)
//                     })

//             }
//         }else{
//             setErrorMessage('captcha invalid');
//             return false;
//         }
//     }

//     const usernameHandler=(event)=>{
//         setUsername(event.target.value)
//     }

//     const passwordHandler=(event)=>{
//         setPassword(event.target.value)
//     }
//     return(
//         <React.Fragment>
//             <p style={{color:'red', fontSize:'56'}}>{errorMessage}</p>
//             <img src={signinlogo} alt="reactlogo" className="formImg"/>
//             <input type="text" placeholder="username" value={username} onChange={usernameHandler}/>
//             <input type="password" placeholder="password" value={password} onChange={passwordHandler}/>
//             <div className="captcha_view">
//             <img src={reloadimage} alt="captchaimage" onClick={generateCaptcha}/>
//             <input type="text" onChange={captchaHandler}/>
//             <p>{randomNumber1}+{randomNumber2}=</p>
//             </div>
//             <Button clicked={loginHandler} btnType="success" className="signBtn">ورود</Button>
//         </React.Fragment>
//     )
// }
// export default SignIn;