import { useLoaderData } from "react-router-dom";
import Item from "../Item/Item";
import { useState } from "react";

const Home = () => {
  const jobs = useLoaderData();
  const [situation,setSituation]=useState(true)
  console.log(jobs);
  return (
    <div>
      <div className="flex items-center justify-between gap-5 rounded-md p-5 bg-green-50">
        <div className="space-y-10">
          <h1 className="text-5xl font-bold">
            One Step Closer To Your{" "}
            <span className="text-[#7E90FE]">Dream Job</span>
          </h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>

          <button className="bg-[#6678e8] text-white py-2 px-5 rounded-md text-lg ">
            Get Started
          </button>
        </div>

        {/* image */}
        <div>
          <img src="/src/assets/images/user.png" alt="" />
        </div>
      </div>
      {/* banner end */}

      <div className="mt-10 w-4/5 m-auto">
        <div className="m-auto text-center">
          <h1 className=" text-3xl font-bold mb-2">Job Category List</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        {/* four cards */}
        <div className=" mt-10 flex gap-5 justify-between items-center">
          <div className="bg-gray-100 p-7 rounded-md space-y-1">
            <img src="/src/assets/icons/accounts.png" alt="" />
            <h1 className=" text-lg font-bold">Account & Finance</h1>
            <p>300 Jobs Available</p>
          </div>
          <div className="bg-gray-100 p-7 rounded-md space-y-1">
            <img src="/src/assets/icons/creative.png" alt="" />
            <h1 className=" text-lg font-bold">Creative Design</h1>
            <p>100+ Jobs Available</p>
          </div>
          <div className="bg-gray-100 p-7 rounded-md space-y-1">
            <img src="/src/assets/icons/marketing.png" alt="" />
            <h1 className=" text-lg font-bold">Marketing & Sales</h1>
            <p>150 Jobs Available</p>
          </div>
          <div className="bg-gray-100 p-7 rounded-md space-y-1">
            <img src="/src/assets/icons/chip.png" alt="" />
            <h1 className=" text-lg font-bold">Engineering Job</h1>
            <p>224 Jobs Available</p>
          </div>
        </div>
      </div>
      {/* four small card end */}

      <div className=" mt-20 w-4/5 m-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {situation?jobs.slice(0,4).map((job) => (<Item key={job.id} job={job} />)):jobs.map((job) => (<Item key={job.id} job={job} />))}
        </div>
      </div>

      <div className="m-auto w-fit mt-10">
        <button onClick={()=>setSituation(!situation)} className="bg-[#6678e8] text-white py-2 px-5 rounded-md text-lg ">
         {situation?' See All jobs':' See Less jobs'}
        </button>
      </div>
    </div>
  );
};

export default Home;
