import React,{useEffect} from 'react';
import Button from '../components/UI/button/button';
import './style/editStudent.css'
const EditStudent = (props)=>{
    useEffect(()=>{
        console.log(props.match.params);
        
    },[])
    const editStudent = ()=>{
        alert('successfull');
        //fetch(http://192.168.121.19/editstudent.php?id=studentid)
    }
    return(
        <div className="NewPost">
                <h1>ویرایش دانش آموز</h1>
                <label>نام و نام خانوادگی</label>
                <input type="text"  />
                <label>کلاس</label>
                <input type="number"  />
                <label>شماره تلفن</label>
                <input type="number"  />
                <label>ایمیل</label>
                <input type="email" />
                <Button clicked={editStudent} btnType="danger">ویرایش اطلاعات</Button>
        </div>
    )
}
export default EditStudent;