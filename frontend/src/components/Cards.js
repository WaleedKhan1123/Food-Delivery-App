
const Cards = () => {


return(


<div>




 

<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  mx-auto mt-14">
  <div>
   <img src="..." className="" alt="..."/>
  </div>
    
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Card title</h5>
    
    <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <div  className=" flex  space-x-4">
        <select className="bg-emerald-500 text-white  rounded-md h-7 px-2 ">
          {

            Array.from(Array(6),(e,i) =>{

              return( <option key={i+1} value={i+1}> {i+1}</option>)


            })
          }


        </select>
        <select className="bg-emerald-500 text-white  rounded-md px-2">
          

           

               <option  value={"Half"}>Half </option>


               <option  value={"Full"}>Full </option>          


        </select>
        <div className="font-bold ">
        <h3>Total Price</h3>
     
       </div>
       
    </div>
    
</div>



  </div>);
}
export default Cards;