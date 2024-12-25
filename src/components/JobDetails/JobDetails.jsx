import React from 'react';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { useLoaderData, useParams } from 'react-router-dom';
import { MdOutlineSubtitles } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import { saveJobApplication } from '../../utility/localstorage';



const JobDetails = () => {
    const jobs = useLoaderData();
    const{id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    const handleApplyJob = () =>{
        saveJobApplication(idInt);
        toast('You applieed Successfully!');
    }
    return (
        <div>
            <h2 className='text-4xl text-center mb-10'>Job Details</h2>
            <div className=' grid gap-4 md:grid-cols-4'>
                <div className='col-span-3 '>
                <p className='mb-5'><span className='font-bold'> Job Description: </span>{job.job_description}</p>
                <p className='mb-5'><span className='font-bold'> Job Responsibility: </span>{job.job_responsibility}</p>
                <p className='mb-5'><span className='font-bold'> Educational Requirement: </span>{job.educational_requirements}</p>
                <p className='mb-5'><span className='font-bold'> Experience: </span>{job.experiences}</p>

                </div>
                <div className=''>
                    <h2 className="font-bold mb-5">Job Details</h2>
                    <h2 className='flex mb-5'><AiOutlineDollarCircle className='text-xl mr-1'></AiOutlineDollarCircle>Salary: {job.salary} (Per Month)</h2>
                    <h2 className='flex mb-5'><MdOutlineSubtitles className='text-xl mr-1'></MdOutlineSubtitles>Job Title: {job.job_title} (Per Month)</h2>
                    <h2 className="font-bold mb-5">Contact Information</h2>
                    <h2 className='flex mb-5'><FiPhone className='text-xl mr-1'></FiPhone>Phone: {job.contact_information.phone}</h2>
                    <h2 className='flex mb-5'><MdOutlineMail className='text-xl mr-1'></MdOutlineMail>Email: {job.contact_information.email}</h2>
                    <h2 className='flex mb-5'><MdLocationOn className='text-xl mr-1'></MdLocationOn>Location: {job.contact_information.address}</h2>
                    <button onClick={handleApplyJob} className='w-full btn btn-primary '>Apply Now</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;