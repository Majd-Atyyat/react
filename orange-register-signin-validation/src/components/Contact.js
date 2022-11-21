import React, { useState } from 'react';
import logo from './images/logo.svg';




function Contact() {
    // empty values from the form (names)
    const initialValues={phone:"",email:"",password:""};

// useState
    const [formValues,setFormValues]=useState(initialValues);
    const [formErrors,setFormErrors]= useState({});
    const [isSubmit,setIsSubmit]=useState(false);
    const [message, setMessage] = useState("");


    //on change 
  const handleChange=(e)=>{
    console.log(e.target);
    const{name,value}=e.target;
    setFormValues({...formValues,[name]:value});
    console.log(formValues);
  }
  //on submit
  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

// save data
let formData = JSON.parse(localStorage.getItem("formData")) || [];

if (localStorage.getItem("formData") === null) {
    formData.push({
        email: formValues.email,
        password:formValues.password,
        phone: formValues.phone,
    });
    localStorage.setItem("formData", JSON.stringify(formData));

    setMessage("Registration successful");
} else {
    let found = false;
    formData.forEach((item) => {
        if (item.email === formValues.email) {
            setMessage("Email already exists");
            found = true;

        }
    });
    if (!found) {
        formData.push({
            email: formValues.email,
            password: formValues.password,
            phone: formValues.phone,
        });
        localStorage.setItem("formData", JSON.stringify(formData));
        setMessage("Registration successful");

    }

}

  };

  // validitation for empty forms and  email regex , password length 
  const validate=(values)=>{
const errors={};
const regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(!values.phone){
   errors.phone="phone is required"; 
}
if(!values.email){
    errors.email="email is required"; 
 }else if(!regex.test(values.email)){
    errors.email="email not valid"; 
 }
 if(!values.password){
    errors.password="password is required"; 
 }else if(values.password.length<4){
    errors.password="the password is short"; 
 }
 else if(values.password.length>18){
    errors.password="the password must be between 6 and 18 characters"; 
 }
 return errors;


  }
  return (
    
   
 <div class="col-lg-8 col-sm-12">
     {message == "Registration successful" ? <div className="alert alert-success" role="alert">{message}</div> : null}
 <nav role="navigation" id="mainNav"
                    class="navbar navbar-light bg-white navbar-expand-md pt-2 border-bottom pb-0 mb-2 pt-1"
                    aria-label="Main navigation">
                    <div class="container-fluid">
                        <a href="/">
                            <img id="imgw" src={logo}
                                class="d-inline-block align-bottom mr-3" alt="Back to homepage" title="Back to homepage"
                                height="70" loading="lazy"/>
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#orange-navbar-collapse" aria-controls="orange-navbar-collapse"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="navbar-collapse justify-content-end collapse" id="orange-navbar-collapse">
                            <ul class="navbar-nav">
                                <li class="nav-item"><a class="nav-link" href="#" target="_blank">Help </a></li>
                                <li class="nav-item"><a class="nav-link" href="#" target="_blank"> Terms &amp;
                                        Conditions</a></li>
                            </ul>
                            <ul class="navbar-nav">
                            </ul>
                        </div>
                    </div>
                </nav>

         <form id="form-reg" onSubmit={handleSubmit}>
    <h1>create an account</h1>

    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address<span>*</span></label>
        <input type="" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" value={formValues.email} onChange={handleChange}/>
        <div class="error" id="emailErr">{formErrors.email}</div>
        {message === "Email already exists" ? <div className="alert alert-warning" role="alert">{message}</div> : null}

        <small>eg:username@domain.com</small>
        
    </div>
    <div class="mb-3">
        <label for="mobile" class="form-label">mobile<span>*</span></label>
        <input type="number" class="form-control" name="phone" id="mobile" value={formValues.phone} onChange={handleChange}/>
        <div class="error" id="mobileErr">{formErrors.phone}</div>
        <small>eg:077*********</small>
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">create Password<span>*</span></label>
        <div class="eye">
            <i class="bi bi-eye-slash" id="togglePassword" ></i>
              <input type="password" name="password" class="form-control" id="exampleInputPassword1" value={formValues.password} onChange={handleChange}/>
          </div>
     
        <div class="error" id="passErr">{formErrors.password}</div>
        <small>The Password should be between 6-18 characters.</small>
        
    </div>
    {/*<div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">I agree to the terms & conditions
            Orange.</label><br/>
            <small class="error" id="checkErr"></small>
            <br/>
        <input type="checkbox" class="form-check-input" id="exampleCheck2"/>
        <label class="form-check-label" for="exampleCheck1">Receive Coding Academy Newsletter.</label><br/>
        <small class="error" id="checkErr2"></small>
  </div>*/}
    <div class="d-grid gap-2">
        <button type="submit" value="Submit" id="btn" class="form-control btn sign-up" name="submit">sign up</button>
        <button type="button" class="btn btn-outline-dark form-control" id="log"><a href="sign_in.html">Already have account?login</a></button>
    </div>

   </form>


</div>
  )
}
export default Contact;