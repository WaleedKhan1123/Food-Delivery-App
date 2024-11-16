const Cards = () => {
  return (
    <div>
      <div className="max-w-sm   bg-white border border-gray-200 rounded-lg shadow  mx-auto mt-14">
        <div>
          <img
            src="https://images.unsplash.com/photo-1731410612759-d93cede4edbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
            className="w-full h-56 object-cover rounded-t-lg"
            alt="..."
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Card title
          </h5>

          <p className="mb-3 font-normal text-gray-700">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <div className=" flex  space-x-4">
            <select className="bg-emerald-500 text-white  rounded-md h-7 px-2 ">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {" "}
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="bg-emerald-500 text-white  rounded-md px-2">
              <option value={"Half"}>Half </option>

              <option value={"Full"}>Full </option>
            </select>
            <div className="font-bold ">
              <h3>Total Price</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
