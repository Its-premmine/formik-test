import React from "react";
import { useFormik } from "formik";


const initialValues={
    name:"",
    email:""
}

const App = () => {



    const {values,handleSubmit,handleChange} = useFormik({
        initialValues:initialValues,
        onSubmit : (values) => {
         console.log(values);   
        }
    })
    
    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name"
                    value={values.name}
                    onChange={handleChange}
                />

                <br />
                <input type="email" name="email"
                    value={values.email}
                    onChange={handleChange}
                />
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default App