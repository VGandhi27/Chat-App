import React, { useState } from 'react'
import { CiImageOn } from "react-icons/ci";
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth,storage ,db} from '../Firebase';
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { Outlet, Link,useNavigate} from "react-router-dom";
import { auth, db, storage } from "../Firebase";
const Register = () => {
  const [err,setErr]=useState(false);
  const navigate =useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    console.log("displayName---", displayName, "email-----", email, "password-----", password, "file------", file);

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/login");   
                        
          } catch (err) {
            console.log(err);
            setErr(true);
          }
        });
      });
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div>
     <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Real ChatApp</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}   >
                 <input type="text" placeholder='Display name'/>
                 <input type="email" placeholder='Email'/>
                 <input type="password" placeholder='Password' />
                 <input 
                //  style={{display:"none"}}
                  type="file" id="file" />
                 <label htmlFor="file" >
                 <CiImageOn size={40}/>
                 <span>Add an avatar</span>
                 </label>
                 <button>Sign up</button>
                 {err && <span>Something went wrong</span>}
            </form>
            
            <p><Link to="/login">You do have an Account? Login</Link></p>
        </div>
     </div>
    </div>
  )
}

export default Register
