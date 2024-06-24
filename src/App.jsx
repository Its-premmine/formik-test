import React, { useState } from "react";
import "./App.css";
import { useFormik } from "formik";

const initialValues = {
    email: "",
    password: "",
    username: ""
    
}

const App = () => {
    // const [action,setAction] = useState("Sign-up");

    const {values,handleSubmit,handleChange} = useFormik({
        initialValues : initialValues,
        onSubmit : (values) => {
            console.log(values);
            alert("login successful")
        }
    })

    return(
        <div className="mainbody">
            
            <form className="contantdiv" onSubmit={handleSubmit}>
                <h1 className="myacctitle">My account</h1>
                
                <div className="spandiv"><span className="signinbox">Sign in</span><span className="creatacc">Create An Account</span></div>
                <input type="text" 
                    name="username"
                    className="inputField"
                    placeholder="Username"
                    value={values.username}
                    onChange={handleChange}
                />
                <input type="email" 
                    name = "email"
                    value={values.email}
                    onChange={handleChange}
                className="inputField" placeholder="Username or email address " />
                                
                <br />
                <input type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                className="inputFieldpassword" placeholder="password" />
                <br />
                
                <input type="checkbox" name="checkbox1" id="checkbox1" className="checkbox"/>
                <label htmlFor="checkbox1" className="checkbox">Subscribe to our newsletter</label>
                <br />
                <br />
                <p className="textBody">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                
                <input type="submit" className="passBut"  value="SIGN IN" />
                <br />

            </form>
            

            
            
        </div>
    )
}

export default App
