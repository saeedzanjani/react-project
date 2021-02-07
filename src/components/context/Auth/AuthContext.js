import React,{useReducer} from 'react';
export const AuthContext = React.createContext();
const authReducer=(state,action)=>{
    switch (action.type) {
        case 'login':{
            const userInfo={
                username:action.payload,
                authenticated:true
            };
            localStorage.setItem('user',JSON.stringify(userInfo))
            return{authenticated:true}
        }

            case 'logout':
                {
                    localStorage.removeItem('user')
                    break;
                }
    
        default:
            return state;
    }
}
const AuthContextProvider = (props)=>{
const[authenticated,dispatch]= useReducer(authReducer,false)
// const login=()=>{
//     setAuthenticated(true)
// }
// const logout=()=>{
//     setAuthenticated(false)
// }
return(
    <AuthContext.Provider value={{authenticated,dispatch}}>
        {props.children}
    </AuthContext.Provider>
)
}
export default AuthContextProvider;