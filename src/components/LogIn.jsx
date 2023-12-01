import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const LogIn = () => {
  const {logInUser}=useContext(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        logInUser(email,password)
        .then(result=>{
          console.log(result)
          const user={
            email,
            lastLoggedAt:result.user?.metadata?.lastSignInTime
          }
          fetch(`http://localhost:7000/user`,{
            method:"PATCH",
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(user)
          })
          .then((res)=>res.json())
          .then((data)=>{
            console.log(data)
          })
        })
        .catch(error=>{
          console.log(error)
        })
    }
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold pb-5">please register now!</h1>
           
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleRegister}>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default LogIn;