import React,{useState, useEffect, useRef} from 'react';
import NewStudent from '../components/students/newStudent/newStudent';
import {Redirect} from 'react-router-dom';
const AddStudent = (props)=>{
  useEffect(()=>{
      console.log(props);
  },[])
  const[studentName,setStudentName]= useState('');
  const[studentClass,setStudentClass] = useState('');
  const[studentPhoneNumber,setStudentPhoneNumber] = useState('');
  const [studentEmail,setStudentEmail] = useState('');
  const[result,setResult] = useState(false);
  const studentNameHandler=(event)=>{
    setStudentName(event.target.value)
  }
  const studentClassHandler=(event)=>{
    setStudentClass(event.target.value)
  }
  const studentPhoneNumberHandler=(event)=>{
    setStudentPhoneNumber(event.target.value)
  }
  const studentEmailHandler=(event)=>{
    setStudentEmail(event.target.value);
  }
  const addStudent=()=>{
    alert('student added');
    //props.history.push('/');
    props.history.replace('/');
    //setResult(true)
  }
    let redirect = null;
    if(result){
      redirect = <Redirect to="/" />
    }
    return(
      <React.Fragment>
        {redirect}
        <NewStudent
        studentName={studentName}
        studentClass={studentClass}
        studentPhoneNumber={studentPhoneNumber}
        studentEmail={studentEmail}
        studentNameHandler={studentNameHandler}
        studentClassHandler={studentClassHandler}
        studentPhoneNumberHandler={studentPhoneNumberHandler}
        studentEmailHandler={studentEmailHandler}
        clicked={addStudent}
        
      />
      </React.Fragment>
        
    )
}
export default AddStudent;