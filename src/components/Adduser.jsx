import Swal from 'sweetalert2'

const Adduser = () => {
    const handleCopy=(e)=>{
        e.preventDefault()
        const form=e.target;
        const coffeeName=form.name.value;
        const chiefCoffee=form.chiefCoffee.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;
        const newCoffee={coffeeName,chiefCoffee,supplier,taste,category,details,photo}
        fetch(`https://coffee-project-4fccf.web.app/coffee`,{
          method:'POST',
          headers:{
            "Content-Type":"application/json"
          },
        body:JSON.stringify(newCoffee)
        })
        .then((res)=>res.json())
        .then((data)=>{
          if (data.insertedId) {
            console.log(data)
Swal.fire({
  title: "successfully",
  text: "User added successfully",
  icon: "success",
  confirmButtonText:"cool"
});
          }

        })
   
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h3 className="text-center font-extrabold text-3xl">Enter add a coffee</h3>
          <form onSubmit={handleCopy}>
      
  <div className="grid grid-cols-2 gap-10 mx-auto my-5">

          <div className="form-control w-full max-w-xl">
          <label className="label">
            <span className="label-text">coffee Name</span>
         
          </label>
          <input type="text" name="name" placeholder="enter coffee name" className="input input-bordered  w-full max-w-xl" />
        </div>
        <div className="form-control w-full max-w-xl">
        <label className="label">
          <span className="label-text">Quantity</span>
       
        </label>
        <input type="number" name="chiefCoffee" placeholder="enter coffee quantity" className="input input-bordered  w-full max-w-xl" />
      </div>
          </div>
          <div className="grid grid-cols-2 gap-10 mx-auto">

          <div className="form-control w-full max-w-xl">
          <label className="label">
            <span className="label-text">supplier</span>
         
          </label>
          <input type="text" name="supplier" placeholder="enter supplie name" className="input input-bordered  w-full max-w-xl" />
        </div>
        <div className="form-control w-full max-w-xl">
        <label className="label">
          <span className="label-text">taste</span>
       
        </label>
        <input type="text" name="taste" placeholder="enter coffee taste" className="input input-bordered  w-full max-w-xl" />
      </div>
          </div>
          <div className="grid grid-cols-2 gap-10 mx-auto my-5">

          <div className="form-control w-full max-w-xl">
          <label className="label">
            <span className="label-text">catagory</span>
         
          </label>
          <input type="text" name="category" placeholder="enter coffee category" className="input input-bordered  w-full max-w-xl" />
        </div>
        <div className="form-control w-full max-w-xl">
        <label className="label">
          <span className="label-text">details</span>
       
        </label>
        <input type="text" name="details" placeholder="enter coffee details" className="input input-bordered  w-full max-w-xl" />
      </div>
          </div>
          <div className="w-full mx-auto py-5">

      
        <div className="form-control w-full">
        <label className="label">
        <span className="label-text">photo url</span>
     
      </label>
        <input type="text" name="photo" placeholder="enter coffee photo" className="input input-bordered  w-full" />
      </div>
          </div>
          <div className="w-full mx-auto">

      
        <div className="form-control w-full mt-5">
        <input type="submit" value={"add copyee"} className="btn btn-primary w-full"/>
    
      </div>
          </div>

          </form>
        </div>
    );
};

export default Adduser;