import React,{useState, useEffect, useRef} from 'react';
import Students from '../components/students/students';
import Button from '../components/UI/button/button';
// import ScrollTop from '../components/scrollTop/ScrollTop'
// import ScrollArrow from '../components/scrollTop/Scroll'
const StudentsPage = (props)=>{
    const inputEl = useRef(null);
    const [searchBarValue,setSearchBarValue] = useState('');
    const[studentsState,setStudents]=useState([
        {id:0,name:'Saeed',classNumber:204,phoneNumber:1234,email:'saeed@gmail.com'},
        {id:1,name:'Ali',classNumber:214,phoneNumber:12345,email:'ali@gmail.com'},
        {id:2,name:'Saman',classNumber:224,phoneNumber:123456,email:'saman@gmail.com'},
        {id:3,name:'Amir',classNumber:234,phoneNumber:1234567,email:'amir@gmail.com'},
        {id:3,name:'Mahdi',classNumber:234,phoneNumber:1234567,email:'mahdi@gmail.com'},
        {id:3,name:'Mohammad',classNumber:234,phoneNumber:1234567,email:'mohammad@gmail.com'},
      ]);
    const [arrayHolder,setArrayHolder] = useState([]);
    const[toggle,setToggle]=useState(false);

    const searchFilterFunction=(event)=>{
        const itemData = arrayHolder.filter((item)=>{
        const itemData = item.name.toUpperCase();
        const textData = event.target.value.toUpperCase();
        return itemData.indexOf(textData)>-1
          
        })
        setStudents(itemData);
        setSearchBarValue(event.target.value)
    
    }
      useEffect(()=>{
        setArrayHolder(studentsState);
        inputEl.current.focus();
        console.log(props);
      },[])
      const nameChangeHandler=(event,id)=>{
        const studentIndex = studentsState.findIndex(student=>{
          return student.id===id;
        })
        //console.log(studentIndex);
        const student={...studentsState[studentIndex]};
        //console.log(student);
        student.name=event.target.value;
        const students = [...studentsState];
        students[studentIndex]=student;
        setStudents(students);
      }
      const deleteStudent=(index)=>{
        const students=[...studentsState];
        students.splice(index,1);
        setStudents(students)
      }
      const toggleHandler=()=>{
        console.log(toggle)
        setToggle(!toggle)
      }

      const toTop = () => {
        window.scrollTo(0, 0)
      }
      console.log(toTop)

      const edited = (id)=>{
          //console.log(props);
          //props.history.push({pathname:'/student/'+id});
          props.history.push('/student/'+id)
      }
    return(
        <React.Fragment>
          {/* <ScrollTop /> */}
            <input type="text" value={searchBarValue} onChange={searchFilterFunction} className="search-bar" ref={inputEl} style={{marginTop:'70px'}} />
            <Button
                btnType="success"
                clicked={toggleHandler}
                >
                    تغییر وضعیت نمایش 
            </Button>
            <Students
                studentsList={studentsState}
                nameChanged={nameChangeHandler}
                deleted={deleteStudent}
                toggle={toggle}
                edited={edited}
            />
            {/* {
              window.scrollY > 20 ? 
              <Button btnType="primary" clicked={toTop}>Go to top</Button>
              : null
            } */}
        </React.Fragment>
    )
}
export default StudentsPage;
