import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../../utility/localstorage';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayedJobs,setDisplayedJobs] = useState([]);

    const handleJobsFilter = filter =>{
        if(filter==='all'){
            setDisplayedJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayedJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Onsite");
            setDisplayedJobs(onsiteJobs);
        }
    }


    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobApplied = jobs.filter(job => storedJobIds.includes(job.id))
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }

            }
            setAppliedJobs(jobsApplied);
            setDisplayedJobs(jobsApplied);
        }
    }, [])
    return (
        <div>
            <div className="dropdown flex justify-end">
                <div tabIndex={0} role="button" className="btn m-1">Filter</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>On site</a></li>
                </ul>
            </div>
            <div className='mb-5'>
                {
                    displayedJobs.map(job => <AppliedJob key={appliedJobs.id} job={job}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;