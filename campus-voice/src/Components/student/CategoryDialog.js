"use client"
import React, { useContext, useEffect, useRef, useState } from 'react'
import { faArrowRight, faBriefcase, faBuildingColumns, faCircleNodes, faHashtag, faHotel, faLayerGroup, faPizzaSlice, faReceipt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBuilding, faCircleXmark, faCircleCheck, faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QueryContext from '@/Contexts/QueryContext';
import '../../app/globals.css'

const CategoryDialog = React.memo(({ isModalOpen, setModal, formState }) => {
    // console.warn("re-rendering child component")

    const queryContext = useContext(QueryContext);
    const { getDomains, domains, getSubDomains, subDomains, issueTypes, getIssueTypes, ticket, setTicket } = queryContext;
    const categoryDialogBox = useRef(null);

    //get initial domains
    useEffect(() => {
        console.error(ticket)
        if (!isModalOpen && ticket.status != "ON_DOMAIN") {
            setTicket({
                queryDomain: null,
                querySubDomain: null,
                queryIssueType: null,
                status: "ON_DOMAIN",
            })
        }

        if(isModalOpen && ticket.status == "ON_DOMAIN"){
            categoryDialogBox.current.showModal();
            getDomains();
        }
    }, [isModalOpen, ticket])

    useEffect(() => {
        if (ticket.status === "TICKET_SELECTION_COMPLETED") {
            formState.setCategoryData({
                ...formState.getCategoryData,
                selectedCategoryData: ticket,
                dataEntered: true
            });
        }
    }, [ticket.status])

    function closeModal() {
        categoryDialogBox.current.close();
        setModal(false);
    }

    function nextToSubDomain(selectedDomain_id) {
        //taking name of selected domain
        const selectedDomain =
            selectedDomain_id < 55 ?
                domains.departmentDomain[0]
                :
                domains.otherDomains.find((domain) => domain.domain_id === parseInt(selectedDomain_id));

        setTicket(prevState => ({
            ...prevState,
            status: "ON_SUBDOMAIN",
            queryDomain: selectedDomain
        }))

        //fetch subdomains of selected domain
        getSubDomains(selectedDomain_id);
    }

    function nextToIssueType(selectedSubDomain) {
        //taking name of selected subdomain
        selectedSubDomain = subDomains.find((subDomain) => subDomain.subdomain_id === parseInt(selectedSubDomain));

        if (selectedSubDomain.issues.length === 0) {
            setTicket(prevState => ({
                ...prevState,
                status: "TICKET_SELECTION_COMPLETED",
                querySubDomain: selectedSubDomain,
                queryIssueType: { issue_id: selectedSubDomain.subdomain_id + "00", issue_type: "NO_ISSUE_TYPE", subdomain_id: selectedSubDomain.subdomain_id, issue_desc: "No issue type found for this sub-domain." }
            }))
            closeModal();
        } else {
            setTicket(prevState => ({
                ...prevState,
                status: "ON_ISSUE_TYPE",
                querySubDomain: selectedSubDomain
            }))
            getIssueTypes(selectedSubDomain.subdomain_id);
        }

    }

    function ticketSelectionDone(selectedIssueId) {
        //get selected issue type
        const selectedIssueType = issueTypes.find((issueType) => issueType.issue_id === selectedIssueId);

        setTicket(prevState => ({
            ...prevState,
            status: "TICKET_SELECTION_COMPLETED",
            queryIssueType: selectedIssueType
        }))
        closeModal();
    }

    // if (formState.dataEntered) {
    //     closeModal();
    // }

    return (
        <dialog className="w-[700px] h-max px-6 py-5 rounded shadow-md fixed m-auto" ref={categoryDialogBox} id="categoryDialogBox">
            <div className="flex items-center justify-between">
                <h2 className="text-lg text-slate-800 flex w-[450px] h-6 items-center">
                    <FontAwesomeIcon className="mr-2" width={15} icon={faLayerGroup} />
                    <span>Category</span>
                    <span className='ml-2 rounded-full bg-gray-500 bg-opacity-10 px-4 pt-1 text-sm text-gray-700 w-max flex items-center'>
                        {
                            (ticket.queryDomain) ?
                                ticket.queryDomain.domain_name +
                                ((ticket.querySubDomain) ? " / " + ticket.querySubDomain.subdomain_name : "") +
                                ((ticket.queryIssueType) && (ticket.queryIssueType.issue_id !== ticket.querySubDomain.subdomain_id + "00") ? " / " + ticket.queryIssueType.issue_type : "") : ""
                        }
                    </span>
                </h2>
                <button
                    type="button"
                    className="text-red-600 text-base hover:scale-125 ease-linear"
                    onClick={closeModal}
                    id="closeDocModel"
                >
                    <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                </button>
            </div>
            <main>
                {
                    ticket.status === "ON_DOMAIN" ?
                        <DomainsModal domains={domains} onSubmit={nextToSubDomain} />
                        : ticket.status === "ON_SUBDOMAIN" ?
                            <SubDomainsModal subDomains={subDomains} onSubmit={nextToIssueType} />
                            : ticket.status === "ON_ISSUE_TYPE" ?
                                <IssueTypeModal onSubmit={ticketSelectionDone} data={issueTypes} />
                                : "Great Done!"
                }
            </main>
        </dialog>
    )
});

export default CategoryDialog;

export const DomainsModal = ({ onSubmit, domains }) => {
    const [checkedDomain, setCheckedDomain] = useState();

    function handleSubmit() {
        onSubmit(checkedDomain);
    }

    function handleCheckedDomain(e) {
        setCheckedDomain(e.target.value);
    }

    return (
        <>
            <div className="w-full mt-3 mb-1 flex flex-col sm:col-span-3">
                <label
                    className="text-gray-500"
                >
                    Please choose the specific category in which you encountered an issue.
                </label>
            </div>
            {
                // if domains are not fetched
                !domains.departmentDomain && (
                    <div className='w-full m-auto flex justify-center h-[350px] items-center'>
                        <div role="status">
                            <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-campus-green" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                )
            }

            {
                // if domains are fetched
                domains.departmentDomain && domains.otherDomains && (
                    <div className="flex flex-col w-full mb-3 no-scrollbar">
                        <div className='flex flex-col w-full h-max py-1'>
                            <p className='text-slate-800 mb-2'>Your Department:</p>
                            <div className="group relative w-48 lg:w-64">
                                <input className="peer hidden" id={domains.departmentDomain[0].domain_id} type="radio" name="radio" value={domains.departmentDomain[0].domain_id} onChange={(e) => { handleCheckedDomain(e) }} />
                                <span className="peer-checked:border-campus-green peer-checked:border-opacity-80 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-4 border-gray-300 bg-white"></span>
                                <label className="peer-checked:shadow-inner peer-checked:bg-gray-50 flex items-center cursor-pointer select-none rounded-lg border border-opacity-20 border-gray-300 shadow py-2 px-3 pr-11" htmlFor={domains.departmentDomain[0].domain_id}>
                                    <FontAwesomeIcon className='text-[21px] text-slate-800' icon={faBuildingColumns} />
                                    <div className="ml-3">
                                        <span className="mt-2 text-sm text-slate-800 font-semibold tracking-wide w-full">{domains.departmentDomain[0].domain_name}</span>
                                        <p className="text-slate-500 text-sm leading-6 w-3/5 truncate">{domains.departmentDomain[0].domain_desc}</p>
                                        <span className='absolute bg-gray-600 text-xs -bottom-8 text-white px-5 py-1 group-hover:visible invisible ease-in-out duration-600 rounded-md'>{domains.departmentDomain[0].domain_desc}</span>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div className='mt-3 flex flex-col w-full h-max py-2'>
                            <p className='text-slate-800 mb-2'>Other Categories:</p>
                            <div className='w-full h-max overflow-y-auto grid grid-flow-row auto-cols-max gap-3 pb-1 grid-cols-3 no-scrollbar'>
                                {
                                    domains.otherDomains ? (
                                        domains.otherDomains.map((domain, index) => {
                                            return (
                                                <div className="group relative w-max max-w-[200px] lg:w-max" key={index}>
                                                    <input className="peer hidden" id={domain.domain_id} type="radio" name="radio" value={domain.domain_id} onChange={(e) => { handleCheckedDomain(e) }} />
                                                    <span className="peer-checked:border-campus-green peer-checked:border-opacity-80 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-4 border-gray-300 bg-white"></span>
                                                    <label className="peer-checked:shadow-inner peer-checked:bg-gray-50 flex items-center cursor-pointer select-none rounded-lg border border-opacity-20 border-gray-300 shadow py-2 px-4 pr-14" htmlFor={domain.domain_id}>
                                                        <FontAwesomeIcon className='text-xl text-slate-800' icon={faBuilding} />
                                                        <div className="ml-3">
                                                            <span className="mt-2 text-sm text-slate-800 font-semibold tracking-wide">{domain.domain_name}</span>
                                                            <p className="text-slate-500 text-sm leading-6 w-4/5 truncate">{domain.domain_desc}</p>
                                                            <span className='absolute bg-gray-600 text-xs -bottom-8 text-white px-5 py-1 group-hover:visible invisible ease-in-out duration-600 rounded-md z-30'>{domain.domain_desc}</span>
                                                        </div>
                                                    </label>
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <p className='text-red-500'>No other domains found.</p>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
            }
            <div className='flex w-full h-[50px] items-center justify-between'>
                <p className='text-campus-green'>Select any one domain where you face problem.</p>
                <button onClick={handleSubmit} className="flex w-max items-center justify-center rounded-lg bg-slate-200 py-2 px-5 text-center text-slate-800">
                    <span className="mt-1 mr-2">Next</span>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
            </div>
        </>
    )
}

export const SubDomainsModal = ({ onSubmit, subDomains }) => {
    const [checkedSubDomain, setCheckedSubDomain] = useState();
    const [isIssueEmpty, setIsIssueEmpty] = useState(false);

    function handleSubmit() {
        onSubmit(checkedSubDomain);
    }

    function handleCheckedSubDomain(e) {
        setCheckedSubDomain(e.target.value);
        const selectedSubDomain = subDomains.find((subDomain) => subDomain.subdomain_id === parseInt(e.target.value));
        setIsIssueEmpty(selectedSubDomain.issues.length === 0);
    }

    return (
        <>
            <div className="w-full mt-3 mb-1 flex flex-col sm:col-span-3">
                <label
                    className="text-gray-500"
                >
                    Now, Select any sub-domain that is related to your problem.
                </label>
            </div>
            <div className="flex flex-col w-full mb-3 no-scrollbar">
                <div className="relative mt-1 mb-2 w-full flex  items-center justify-between rounded-md shadow-sm">
                    <FontAwesomeIcon className='text-slate-500 absolute left-4' icon={faSearch} />
                    <input type="name" name="search" className="h-10 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-2 pt-3 pr-40 pl-12 shadow-sm font-normal outline-none focus:shadow-inner" placeholder="Search Sub-Domain Name" />
                </div>
                {
                    subDomains ? (
                        // if subdomains are fetched and not empty
                        subDomains.length > 0 ? (
                            <div className="grid grid-flow-col auto-cols-max gap-3 w-full h-[350px]  my-2 border-black">
                                {
                                    subDomains.map((obj, index) => {
                                        return (
                                            <div className=' mb-2 relative peer w-full flex h-12 items-center justify-between rounded-md text-slate-700 cursor-pointer' key={index}>
                                                <input className='absolute peer' hidden type="radio" name="listRadio" id={obj.subdomain_id} value={obj.subdomain_id} onChange={(e) => { handleCheckedSubDomain(e) }} />
                                                <label className='peer-checked:border-campus-green peer-checked:border-opacity-50 border-2 rounded-md flex w-full p-3 pr-10 duration-300 peer-checked:border-2' htmlFor={obj.subdomain_id}>
                                                    <p className='w-max flex h-full items-center'>
                                                        <span className=''>{obj.subdomain_name}</span>
                                                    </p>
                                                </label>
                                                <FontAwesomeIcon className='absolute right-0 hidden mr-3 peer-checked:block peer-checked:text-campus-green' icon={faCircleCheck} />
                                                <FontAwesomeIcon className='absolute block right-0 mr-3 peer-checked:hidden text-gray-500 peer-checked:text-campus-green' icon={faCircle} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        ) : (
                            // if subdomains are fetched and empty
                            <p className='text-red-500'>No sub-domains found.</p>
                        )
                    ) :
                        // if subdomains are not fetched
                        (
                            <div className='w-full m-auto flex justify-center h-[350px] items-center'>
                                <div role="status">
                                    <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-campus-green" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                        )
                }
            </div>
            <div className='flex w-full h-[50px] items-end justify-between'>
                <p className='text-red-500'>You have to select atleast one sub-domain.</p>
                {
                    isIssueEmpty ? (
                        <button onClick={handleSubmit} className="flex w-max items-center justify-center rounded-lg bg-slate-200 py-2 px-5 text-center text-slate-800">
                            <span className="mt-1 mr-2">Finally Done.</span>
                            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    ) : (
                        <button onClick={handleSubmit} className="flex w-max items-center justify-center rounded-lg bg-slate-200 py-2 px-5 text-center text-slate-800">
                            <span className="mt-1 mr-2">Next</span>
                            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    )
                }
            </div>
        </>
    )
}

export const IssueTypeModal = ({ onSubmit, data, }) => {
    const [checkedIssueType, setCheckedIssueType] = useState();

    function handleSubmit() {
        onSubmit(checkedIssueType);
    }

    function handleCheckedIssueType(e) {
        setCheckedIssueType(e.target.value);
    }

    function handleSearch(e) {
        setData(data.filter((data) => {
            return data.issueType.includes(e.target.value);
        }))
    }

    return (
        <>
            <div className="w-full mt-3 mb-1 flex flex-col sm:col-span-3">
                <label
                    className="text-gray-500"
                >
                    Now, Select any IssueType that is related to your problem.
                </label>
            </div>
            <div className="flex flex-col w-full mb-3 no-scrollbar">
                <div className="relative mt-1 mb-2 w-full flex  items-center justify-between rounded-md shadow-sm">
                    <FontAwesomeIcon className='text-slate-500 absolute left-4' icon={faSearch} />
                    <input type="name" name="search" className="h-10 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-2 pt-3 pr-40 pl-12 shadow-sm font-normal outline-none focus:shadow-inner" placeholder="Search Sub-Domain Name" onKeyUp={(e) => { handleSearch(e) }} />
                </div>
                <div className="flex flex-col w-full h-[350px]  my-2 border-black">
                    {
                        data && (
                            data.length === 0 ?
                                <div className=' mb-2 relative peer w-full flex h-12 items-center justify-between rounded-md text-slate-700 cursor-pointer' key={"00"}>
                                    <input className='absolute peer' hidden type="radio" name="listRadio" id={"00"} value={"00"} onChange={(e) => { handleCheckedIssueType(e) }} />
                                    <label className='peer-checked:border-campus-green peer-checked:border-opacity-50 border-2 rounded-md flex w-full p-3 pr-10 duration-300 peer-checked:border-2' htmlFor={"00"}>

                                        <p className='w-max flex h-full items-center'>
                                            <span className=''>{"Other"}</span>
                                        </p>
                                    </label>
                                    <FontAwesomeIcon className='absolute right-0 hidden mr-3 peer-checked:block peer-checked:text-campus-green' icon={faCircleCheck} />
                                    <FontAwesomeIcon className='absolute block right-0 mr-3 peer-checked:hidden text-gray-500 peer-checked:text-campus-green' icon={faCircle} />
                                </div>
                                :
                                data.map((obj) => {
                                    return (
                                        <div className=' mb-2 relative peer w-full flex h-12 items-center justify-between rounded-md text-slate-700 cursor-pointer' key={obj.issue_id}>
                                            <input className='absolute peer' hidden type="radio" name="listRadio" id={obj.issue_id} value={obj.issue_id} onChange={(e) => { handleCheckedIssueType(e) }} />
                                            <label className='peer-checked:border-campus-green peer-checked:border-opacity-50 border-2 rounded-md flex w-full p-3 pr-10 duration-300 peer-checked:border-2' htmlFor={obj.issue_id}>
                                                <p className='w-max flex h-full items-center'>
                                                    <span className=''>{obj.issue_type}</span>
                                                </p>
                                            </label>
                                            <FontAwesomeIcon className='absolute right-0 hidden mr-3 peer-checked:block peer-checked:text-campus-green' icon={faCircleCheck} />
                                            <FontAwesomeIcon className='absolute block right-0 mr-3 peer-checked:hidden text-gray-500 peer-checked:text-campus-green' icon={faCircle} />
                                        </div>
                                    )
                                })
                        )
                    }

                </div>
            </div>
            <div className='flex w-full h-[50px] items-end justify-between'>
                <p className='text-red-500'>You have to select atleast one IssueType.</p>
                <button onClick={handleSubmit} className="flex w-max items-center justify-center rounded-lg bg-slate-200 py-2 px-5 text-center text-slate-800">
                    <span className="mt-1 mr-2">Finally Done.</span>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
            </div>
        </>
    )
}