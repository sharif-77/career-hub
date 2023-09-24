import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./job.css";
import {  setDataToLocalstorage } from "../LocalStorage/localStorage";

const JobDetails = () => {
  
  const datas = useLoaderData();
  const { id } = useParams();
  const [job, setJob] = useState({});
  console.log(job);
  useEffect(() => {
    const findData = datas.find((data) => data.id == id);
    if (findData) {
      setJob(findData);
    }
  }, [id, datas]);

  console.log(datas);

  return (
    <div>
      <div className="bg h-[300px] w-full relative top-0 -z-20 "></div>

      <div className="w-4/5  m-auto  mt-40">
        <div className="grid grid-cols-12 gap-10 ">
          <div className="col-span-8 shadow-lg p-5 space-y-5 rounded-md">
            <div>
              <span className="font-bold">Job Description</span>:{" "}
              {job.job_description}
            </div>
            <div>
              <span className="font-bold">Job Description</span>:{" "}
              {job.job_responsibility}
            </div>
            <div>
              <h2 className="font-bold">Educational Requirements:</h2>
              <p>{job.educational_requirements}</p>
            </div>
            <div>
              <h2 className="font-bold">Experiences:</h2>
              <p>{job.experiences}</p>
            </div>
          </div>

          <div className="col-span-4  bg-gray-100 p-5 rounded-md flex flex-col">
            <div className="border-b border-black pb-3 mb-5">
              <h1 className="font-bold">Job Details</h1>
            </div>
            <div>
              <p>
                <span className="font-bold">Salary:</span> {job.salary} (per
                moth)
              </p>
              <p>
                <span className="font-bold">Job Title:</span> {job.job_title}{" "}
              </p>
            </div>

            <div className="border-b border-black pb-3 my-5">
              <h1 className="font-bold">Contact Information</h1>
            </div>

            <div className="flex-grow">
              <p>
                <span className="font-bold">Phone:</span>{" "}
                {job?.contact_information?.phone}
              </p>
              <p>
                <span className="font-bold">Email:</span>{" "}
                {job?.contact_information?.email}{" "}
              </p>
              <p>
                <span className="font-bold">Address:</span>{" "}
                {job.contact_information?.address}{" "}
              </p>
            </div>

            <div className="text-center">
              
                <button 
                onClick={()=>setDataToLocalstorage(job.id)} className=" py-2 px-4 text-white rounded-md font-bold w-full bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
                  Apply Now
                </button>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
