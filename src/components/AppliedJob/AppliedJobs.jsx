import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDatafromlocalStorage } from "../LocalStorage/localStorage";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
    const datas=useLoaderData()
    const [storageData,setStorageData]=useState([])

    useEffect(()=>{
     const lsData=   getDatafromlocalStorage()
     const lsDataForUse=datas.filter(data=>lsData.includes(data.id))
     setStorageData(lsDataForUse)

    },[datas])
// console.log(storageData);

  return (
    <div className="w-4/5 m-auto my-10 px-4">
      <div className="space-y-10">
        {storageData.map(job=><AppliedJob key={job.id} job={job}/>)}
      </div>
    </div>
  );
};

export default AppliedJobs;
