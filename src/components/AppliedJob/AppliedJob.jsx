import { BiLocationPlus } from 'react-icons/bi';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const AppliedJob = ({job}) => {
    return (
        <div>
             <div className="card  bg-base-100 shadow-md ">
        <figure>
          <img
            src={job.logo}
            alt="image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job.job_title}</h2>
          <p>{job.company_name}</p>
          <div className="flex items-center gap-5">
            <span className="border p-2 rounded-md border-blue-400 text-blue-500 font-bold">{job.remote_or_onsite}</span>
            <span className="border p-2 rounded-md border-blue-400 text-blue-500 font-bold">{job.job_type}</span>
          </div>

          {/*  */}
          <div className='flex items-center gap-5'>
            <div className='flex items-center gap-2'><span> <BiLocationPlus/></span> <span>{job.location}</span></div>
            <div className='flex items-center gap-2'><span> <AiOutlineDollarCircle/></span> <span>salary : {job.salary}</span></div>
        
          </div>

          <div className="card-actions ">
            <Link to={`/jobDetails/${job.id}`} ><button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
            
        </div>
    );
};

export default AppliedJob;