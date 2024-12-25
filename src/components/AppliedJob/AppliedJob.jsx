import React from 'react';
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";

const AppliedJob = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        <div className="card card-side bg-base-100 shadow-xl mb-5 flex items-center justify-between">
            <div>
                <figure>
                    <img
                        src={logo}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] mr-4">{job_type}</button>
                    </div>
                    <div className='flex'>
                        <h2 className='flex mr-2'><MdLocationOn className='text-xl mr-1'></MdLocationOn> {location}</h2>
                        <h2 className='flex'><AiOutlineDollarCircle className='text-xl mr-1'></AiOutlineDollarCircle> {salary}</h2>
                    </div>
                </div>
            </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary mr-10">View detail</button>
                </div>
            
        </div>
    );
};

export default AppliedJob;