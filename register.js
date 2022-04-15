import { useNavigate } from 'react-router-dom';
import services from "../services/services";
import "../css/register.css"

function Alumni_SignUp_Page(){

    const navigate = useNavigate();
    function handleClicktt() {
        navigate("/register");
      }
      function handleClickyy() {
        navigate("/login");
      }
     

   const onSubmit= (props)=>{
       props.preventDefault();
    const formData = new FormData();
    formData.append("firstname",props.target.firstname.value);
    formData.append("lastname",props.target.lastname.value);
    formData.append("email",props.target.email.value);
    formData.append("phone",props.target.phone.value);
    formData.append("enrollmentno",props.target.enrollmentno.value);
    formData.append("department",props.target.department.value);
    formData.append("branch",props.target.branch.value);
    formData.append("state",props.target.state.value);
    formData.append("city",props.target.city.value);
    formData.append("password",props.target.password.value);

    //    const company ={
    //        user_name:props.target.user_name.value,
    //        company_name:props.target.company_name.value,
    //        email:props.target.email.value,
    //        phone:props.target.phone.value,
    //        company_registration:props.target.company_registration.value,
    //        located_based:props.target.located_based.value,
    //        password:props.target.password.value,
    //        file:props.target.file.files[0]
    //    }

       console.log(formData);
       services.register(formData).then(result=>{
           console.log(result);
          if(result.data.error){
              alert(result.data.data);
          }else{
              navigate("/welcome")
          }
       }).catch(err=>{
           console.log(err);
       })
    }
 
   
  
    return(
        <div className="wrapper-9">
             <div class="blp">
             <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
            </div>
          
                
                <form className="form-wrapper-9" onSubmit={(props)=>{onSubmit(props)}}>
                <div class="god">
                <button class="button-998 button340" onClick={handleClicktt}>Sign Up</button>
                <button class="button-998 button341" onClick={handleClickyy} >Log In</button>
                </div>
                
                <div className="name">
                <div className="firstname">
                      
                        <input type="firstname"  id="firstname" name="firstname" placeholder="First-Name"/>
                </div>
               <div className="lastname">
                        
                        <input type="lastname"  id="lastname" name="lastname" placeholder="Last-Name"/>
                </div>
                </div>
                    <div className="email">
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email"  placeholder="E-mail"/>
                        <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="number">
                        <input type="number" className="form-control" id="phone" name="phone" placeholder="Mobile Number"/>
                    </div>
                    <div className="enrollmentno">
                        <input type="enrollmentno" className="form-control" id="enrollmentno." name="enrollmentno" placeholder="Enrollment No"/>
                    </div>
                    <div className="department">
                      
                        <input type="department"  id="department" name="department" placeholder="Department"/>
                </div>
                <div className="branch">
                      
                        <input type="branch"  id="branch" name="branch" placeholder="Branch"/>
                </div>
                    <div className="location">
                    <div className="location">
                        <input type="location" className="form-control" id="state" name="state" placeholder="State"/>
                    </div>
                    <div className="district">
                        <input type="district" className="form-control" id="district" name="district" placeholder="District" />
                    </div>
                    <div className="city">
                        <input type="city" className="form-control" id="city" name="city" placeholder="city" />
                    </div>
                    </div>
                    <div className="password">
                        <input type="password" autoComplete="false" className="form-control" id="exampleInputPassword1" name="password" placeholder="Password"/>
                    </div>
                    <div className="password">
                        <input type="password" autoComplete="false" className="form-control" id="confirmpwd" name="confirmpwd" placeholder="Confirm-Password"/>
                    </div>
                    


                    <div className="createAccount">
              <button type="submit">Sign Up</button>
              
            </div>
                    </form>
                    <div class="terms">
            <p>By signing up you agree to our Terms of Service and Privacy Policy
                </p>
            </div>
                
          </div>
       
    )
}

export default  Alumni_SignUp_Page;