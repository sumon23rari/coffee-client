import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateUser = () => {
    const coffee=useLoaderData();
    console.log(coffee)
    const {_id,coffeeName,chiefCoffee,supplier,taste,category,details,photo}=coffee;
    const handleUpdate=(e)=>{
        e.preventDefault()
        const form=e.target;
        const coffeeName=form.name.value;
        const chiefCoffee=form.chiefCoffee.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;
        const updateCoffee={coffeeName,chiefCoffee,supplier,taste,category,details,photo}
        fetch(`https://copy-server-l6uw3ypkp-sumon23rari.vercel.app/coffee/${_id}`,{
          method:'PUT',
          headers:{
            "Content-Type":"application/json"
          },
        body:JSON.stringify(updateCoffee)
        })
        .then((res)=>res.json())
        .then((data)=>{
          if (data.modifiedCount) {
            console.log(data)
Swal.fire({
  title: "successfully",
  text: "update coffee successfully",
  icon: "success",
  confirmButtonText:"cool"
});
          }

        })
   
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h3 className="text-center font-extrabold text-3xl">update a coffee:{coffeeName}</h3>
          <form onSubmit={handleUpdate}>
      
  <div className="grid grid-cols-2 gap-10 mx-auto my-5">

          <div className="form-control w-full max-w-xl">
          <label className="label">
            <span className="label-text">coffee Name</span>
         
          </label>
          <input type="text" name="name" placeholder="enter coffee name" defaultValue={coffeeName} className="input input-bordered  w-full max-w-xl" />
        </div>
        <div className="form-control w-full max-w-xl">
        <label className="label">
          <span className="label-text">Quantity</span>
       
        </label>
        <input type="number" name="chiefCoffee" placeholder="enter coffee quantity" defaultValue={chiefCoffee} className="input input-bordered  w-full max-w-xl" />
      </div>
          </div>
          <div className="grid grid-cols-2 gap-10 mx-auto">

          <div className="form-control w-full max-w-xl">
          <label className="label">
            <span className="label-text">supplier</span>
         
          </label>
          <input type="text" name="supplier" placeholder="enter supplie name" defaultValue={supplier} className="input input-bordered  w-full max-w-xl" />
        </div>
        <div className="form-control w-full max-w-xl">
        <label className="label">
          <span className="label-text">taste</span>
       
        </label>
        <input type="text" name="taste" placeholder="enter coffee taste" defaultValue={taste} className="input input-bordered  w-full max-w-xl" />
      </div>
          </div>
          <div className="grid grid-cols-2 gap-10 mx-auto my-5">

          <div className="form-control w-full max-w-xl">
          <label className="label">
            <span className="label-text">catagory</span>
         
          </label>
          <input type="text" name="category" placeholder="enter coffee category" defaultValue={category} className="input input-bordered  w-full max-w-xl" />
        </div>
        <div className="form-control w-full max-w-xl">
        <label className="label">
          <span className="label-text">details</span>
       
        </label>
        <input type="text" name="details" placeholder="enter coffee details" defaultValue={details} className="input input-bordered  w-full max-w-xl" />
      </div>
          </div>
          <div className="w-full mx-auto py-5">

      
        <div className="form-control w-full">
        <label className="label">
        <span className="label-text">photo url</span>
     
      </label>
        <input type="text" name="photo" placeholder="enter coffee photo" defaultValue={photo} className="input input-bordered  w-full" />
      </div>
          </div>
          <div className="w-full mx-auto">

      
        <div className="form-control w-full mt-5">
        <input type="submit" value={"update coffee"} className="btn btn-primary w-full"/>
    
      </div>
          </div>

          </form>
        </div>
    );
};

export default UpdateUser;