import { Button, FormControlLabel, Radio, TextField, RadioGroup } from '@mui/material'
import { ErrorMessage, Field, Form, Formik, validateYupSchema } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { loginUserAction, registerUserAction } from '../../redux/Auth/auth.action';
import { useNavigate } from 'react-router-dom';


const initialValues={firstname:"", lastname:"",email:"", password:"", gender:""}
const validationSchema={email:Yup.string().email("Invalid Email!").required("Email is required!"),
    password:Yup.string().min(6,"Password should be atleast 6 characters!").required("Password is required!")
}
const Register = () => {

    const [gender, setGender] = useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleSubmit=(values)=>{
      values.gender=gender
        console.log("Handle Submit",values)
        dispatch(registerUserAction({data:values}))
    }

    const handleChange = (event) => {
      setGender(event.target.value);
    };

    return (
    <>

        <Formik
            onSubmit={handleSubmit}
            //validationSchema={validationSchema}
            initialValues={initialValues}
        >

            <Form className='space-y-5'>

                <div className='space-y-5'>

                    <div>
                        <Field
                            as={TextField}
                            name="firstname"
                            placeholder="Enter Firstname"
                            type="text"
                            variant="outlined"
                            fullWidth
                        />

                        <ErrorMessage
                            name="email"
                            component={"div"}
                            className="text-red-500"
                        />

                    </div>

                    <div>
                        <Field
                            as={TextField}
                            name="lastname"
                            placeholder="Enter Lastname"
                            type="text"
                            variant="outlined"
                            fullWidth
                        />

                        <ErrorMessage
                            name="email"
                            component={"div"}
                            className="text-red-500"
                        />

                    </div>

                    <div>
                        <Field
                            as={TextField}
                            name="email"
                            placeholder="Enter Email"
                            type="email"
                            variant="outlined"
                            fullWidth
                        />

                        <ErrorMessage
                            name="email"
                            component={"div"}
                            className="text-red-500"
                        />

                    </div>

                    <div>
                        <Field
                            as={TextField}
                            name="password"
                            placeholder="Enter Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                        />

                        <ErrorMessage
                            name="password"
                            component="div"
                            className="text-red-500"
                        />

                    </div>

                    <div>
                      <RadioGroup onChange={handleChange} row aria-label="gender" name="gender">
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <ErrorMessage
                            name="gender"
                            component="div"
                            className="text-red-500"
                        />
                      </RadioGroup>
                    </div>

                </div>

                <Button
                    sx={{padding:"0.8rem 0 rem"}}
                    fullWidth type='submit'
                    variant='contained'
                    color='primary'
                >Register</Button>
            </Form>

        </Formik>

        <div className='flex gap-2 items-center justify-center pt-5'>
            <p>
                Already have an account?
            </p>
            <Button onClick={()=>navigate("/login")}>Login</Button>
        </div>

    </>
  )
}

export default Register
