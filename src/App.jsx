 
import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Components/CoffeCard/CoffeeCard";
import { useState } from "react";

function App() {
   const loaderCoffee = useLoaderData()
//    const [coffees,setCoffees] = useState(loaderCoffee)
//    const [coffees,setCoffees]=useState(loaderCoffee)
          const [coffees, setCoffees] = useState(loaderCoffee);

  return (
    <>
     <div className="w-96 mx-auto mt-10">
     <Link to='/addCoffee'>
      <button className="btn btn-outline btn-success mr-9">AddCoffee</button>
      </Link>
      <Link to='/updateCoffee'>
      <button className="btn btn-outline btn-success">updateCoffee</button>
      </Link>
     </div>
     <h1 className="text-center text-6xl text-green-500">Coffee shop</h1>
     <h3 className="text-center text-5xl mt-6 text-purple-800">Hot and Cold Coffee:{loaderCoffee.length}</h3>
     <div className='grid md:grid-cols-2 gap-4 container mx-auto mt-20'>
          {
               loaderCoffee.map(coffee=><CoffeeCard
               key={coffee._id}
               coffee={coffee}
               coffees={coffees}
               setCoffees={setCoffees}
               ></CoffeeCard>)
          }
     </div>
    </>
  );
}

export default App;
