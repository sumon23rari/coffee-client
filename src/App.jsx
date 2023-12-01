import './App.css'
import { useLoaderData } from 'react-router-dom'
import CofeeCard from './components/CofeeCard'
import { useState } from 'react'

function App() {

const loadCoffes=useLoaderData()
const [coffees, setCoffees] = useState(loadCoffes);
  return (
<div className='mt-20'>

<h2 className='text-center'>{coffees.length}</h2>
<div className='grid md:grid-cols-2 gap-5'>

{
  coffees.map((coffee)=><CofeeCard
   key={coffee._id}
   coffee={coffee}
   coffees={coffees}
   setCoffees={setCoffees}
   ></CofeeCard>)
}
</div>
</div>
  )
}

export default App
