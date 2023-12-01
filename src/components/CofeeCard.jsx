import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types'; 



    
    
    const CofeeCard = ({ coffee, coffees, setCoffees }) => {
       
 
        const { _id,coffeeName,supplier,taste,photo } = coffee;
    
        const handleDelete = id => {
        
            console.log(id);
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
    
    
                    fetch(`https://copy-server-l6uw3ypkp-sumon23rari.vercel.app/coffee/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your Coffee has been deleted.',
                                    'success'
                                )
                                const remaining = coffees.filter(cof=>cof._id!==_id)
                                setCoffees(remaining);
                            }
                        })
    
                }
            })
        }
    
    return (
        <div className="card card-side bg-base-100 shadow-xl w-full">
        <figure><img src={photo} alt="Shoes" className="w-[100px] h-[120px]"/></figure>
        <div className="flex justify-between w-full ml-[30px] text-center mt-7">
         <div>
         <h3>coffeeBrandName:{coffeeName}</h3>
         <h3>supplierName:{supplier}</h3>
         <h3>taste:{taste}</h3>
         </div>
        
          <div className=" space-y-[15px]">
            <button className="btn block px-5">view</button>
 <Link to={`/updateCoffee/${_id}`}>update</Link>
 <button
 onClick={() => handleDelete(_id)}
 className="btn block bg-orange-500">X</button>
          </div>
        </div>
      </div>
    );
};
export default CofeeCard;
CofeeCard.propTypes={
    coffee:PropTypes.object,
     coffees:PropTypes.array,
     setCoffees:PropTypes.function
}