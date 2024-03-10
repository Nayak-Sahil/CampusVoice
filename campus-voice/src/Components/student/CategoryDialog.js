"use client"
import React, { useEffect, useRef, useState } from 'react'
import { faArrowRight, faBriefcase, faBuildingColumns, faCircleNodes, faHashtag, faHotel, faLayerGroup, faPizzaSlice, faReceipt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBuilding, faCircleXmark, faCircleCheck, faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoryDialog = React.memo(({ isModalOpen, setModal, formState }) => {
    // console.warn("re-rendering child component")
    const categoryDialogBox = useRef();
    useEffect(()=>{
        if (isModalOpen) {
            categoryDialogBox.current.showModal();
        }
    }, [isModalOpen])

    const queryTicket = {
        queryDomain: null,
        querySubDomain: null,
        queryIssueType: null,
        status: "ON_DOMAIN"
    }

    const [ticket, setTicket] = useState(queryTicket);

    function nextToSubDomain(selectedDomain) {
        setTicket(prevState => ({
            ...prevState,
            status: "ON_SUBDOMAIN",
            queryDomain: selectedDomain
        }))
    }

    function nextToIssueType(selectedSubDomain) {
        setTicket(prevState => ({
            ...prevState,
            status: "ON_ISSUE_TYPE",
            querySubDomain: selectedSubDomain
        }))
    }
    
    function ticketSelectionDone(selectedIssueType){
        console.error(selectedIssueType);
        setTicket(prevState => ({
            ...prevState,
            status: "TICKET_SELECTION_COMPLETED",
            queryIssueType: selectedIssueType
        }))
        //* since state variable changing is asynchronous so we can't just update formstate after this line therefor we have to do it when it get completed changed
    }
    
    useEffect(()=>{
        if(ticket.status === "TICKET_SELECTION_COMPLETED"){
            formState.setCategoryData({
                ...formState.getCategoryData,
                selectedCategoryData: ticket,
                dataEntered: true
            });
        }
    }, [ticket.status])

    if(formState.dataEntered){
        categoryDialogBox.current.close();
        setModal(false);
    }

    const data = [{ issueType: "Hostel Problem" }, { issueType: "Water Problem" }, {issueType: "Food Probelm"}]

    return (
        <dialog className="w-[700px] h-max px-6 py-5 rounded shadow-md fixed m-auto" ref={categoryDialogBox} id="categoryDialogBox">
            <div className="flex items-center justify-between">
                <h2 className="text-lg text-slate-800 flex w-[450px] h-6 items-center">
                    <FontAwesomeIcon className="mr-2" width={15} icon={faLayerGroup} />
                    <span>Category</span>
                    <span className='ml-2 rounded-full bg-gray-500 bg-opacity-10 px-4 pt-1 text-sm text-gray-700 w-max flex items-center'>
                        {
                            (ticket.queryDomain) ?
                                ticket.queryDomain + 
                                ((ticket.querySubDomain) ? " / " + ticket.querySubDomain : "") +  
                                ((ticket.queryIssueType) ? " / " + ticket.queryIssueType : "") : ""
                        }
                    </span>
                </h2>
                <button
                    type="button"
                    className="text-red-600 text-base hover:scale-125 ease-linear"
                    onClick={() => {
                        categoryDialogBox.current.close();
                        setModal(false);
                        setTicket({
                            queryDomain: null,
                            querySubDomain: null,
                            queryIssueType: null,
                            status: "ON_DOMAIN",
                        })
                    }}
                    id="closeDocModel"
                >
                    <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                </button>
            </div>
            <main>
                {
                    ticket.status === "ON_DOMAIN" ?
                        <DomainsModal onSubmit={nextToSubDomain} />
                        : ticket.status === "ON_SUBDOMAIN" ?
                            <SubDomainsModal onSubmit={nextToIssueType} /> 
                            : ticket.status === "ON_ISSUE_TYPE" ? 
                                <IssueTypeModal onSubmit={ticketSelectionDone} data={data} /> 
                                : "Great Done!"
                }
            </main>
        </dialog>
    )
});

export default CategoryDialog;

export const DomainsModal = ({ onSubmit }) => {
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
            <div className="flex flex-col w-full mb-3 no-scrollbar">
                <div className='flex flex-col w-full h-max py-1'>
                    <p className='text-slate-800 mb-2'>Your Department:</p>
                    <div className="relative w-48 lg:w-64">
                        <input className="peer hidden" id="deptRadio" type="radio" name="radio" value="Information Technology" onChange={(e) => { handleCheckedDomain(e) }} />
                        <span className="peer-checked:border-campus-green peer-checked:border-opacity-80 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-4 border-gray-300 bg-white"></span>
                        <label className="peer-checked:shadow-inner peer-checked:bg-gray-50 flex items-center cursor-pointer select-none rounded-lg border border-opacity-20 border-gray-300 shadow py-2 px-3 pr-11" htmlFor="deptRadio">
                            <FontAwesomeIcon className='text-[21px] text-slate-800' icon={faBuildingColumns} />
                            <div className="ml-3">
                                <span className="mt-2 text-sm text-slate-800 font-semibold tracking-wide">Information Technology</span>
                                <p className="text-slate-500 text-sm leading-6">Academic.</p>
                            </div>
                        </label>
                    </div>
                </div>
                <div className='mt-3 flex flex-col w-full h-max py-2'>
                    <p className='text-slate-800 mb-2'>Other Categories:</p>
                    <div className='w-full h-max overflow-y-auto grid grid-flow-col auto-cols-max gap-3 pb-1'>
                        <div className="relative w-max lg:w-max">
                            <input className="peer hidden" id="placementRadio" type="radio" name="radio" value="Placement" onChange={(e) => { handleCheckedDomain(e) }} />
                            <span className="peer-checked:border-campus-green peer-checked:border-opacity-80 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-4 border-gray-300 bg-white"></span>
                            <label className="peer-checked:shadow-inner peer-checked:bg-gray-50 flex items-center cursor-pointer select-none rounded-lg border border-opacity-20 border-gray-300 shadow py-2 px-4 pr-14" htmlFor="placementRadio">
                                <FontAwesomeIcon className='text-xl text-slate-800' icon={faBriefcase} />
                                <div className="ml-3">
                                    <span className="mt-2 text-sm text-slate-800 font-semibold tracking-wide">Placement</span>
                                    <p className="text-slate-500 text-sm leading-6">Food.</p>
                                </div>
                            </label>
                        </div>
                        <div className="relative w-max lg:w-max">
                            <input className="peer hidden" id="HostelRadio" type="radio" name="radio" value="Hostel" onChange={(e) => { handleCheckedDomain(e) }} />
                            <span className="peer-checked:border-campus-green peer-checked:border-opacity-80 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-4 border-gray-300 bg-white"></span>
                            <label className="peer-checked:shadow-inner peer-checked:bg-gray-50 flex items-center cursor-pointer select-none rounded-lg border border-opacity-20 border-gray-300 shadow py-2 px-4 pr-14" htmlFor="HostelRadio">
                                <FontAwesomeIcon className='text-xl text-slate-800' icon={faBuilding} />
                                <div className="ml-3">
                                    <span className="mt-2 text-sm text-slate-800 font-semibold tracking-wide	">Hostel</span>
                                    <p className="text-slate-500 text-sm leading-6">Food.</p>
                                </div>
                            </label>
                        </div>
                        <div className="relative w-max lg:w-max">
                            <input className="peer hidden" id="canteenRadio" type="radio" name="radio" value="Canteen" onChange={(e) => { handleCheckedDomain(e) }} />
                            <span className="peer-checked:border-campus-green peer-checked:border-opacity-80 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-4 border-gray-300 bg-white"></span>
                            <label className="peer-checked:shadow-inner peer-checked:bg-gray-50 flex items-center cursor-pointer select-none rounded-lg border border-opacity-20 border-gray-300 shadow py-2 px-4 pr-14" htmlFor="canteenRadio">
                                <FontAwesomeIcon className='text-xl text-slate-800' icon={faPizzaSlice} />
                                <div className="ml-3">
                                    <span className="mt-2 text-sm text-slate-800 font-semibold tracking-wide	">Canteen</span>
                                    <p className="text-slate-500 text-sm leading-6">Food.</p>
                                </div>
                            </label>
                        </div>
                        <div className="relative w-max lg:w-max">
                            <input className="peer hidden" id="clubRadio" type="radio" name="radio" value="Club" onChange={(e) => { handleCheckedDomain(e) }} />
                            <span className="peer-checked:border-campus-green peer-checked:border-opacity-80 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-4 border-gray-300 bg-white"></span>
                            <label className="peer-checked:shadow-inner peer-checked:bg-gray-50 flex items-center cursor-pointer select-none rounded-lg border border-opacity-20 border-gray-300 shadow py-2 px-4 pr-14" htmlFor="clubRadio">
                                <FontAwesomeIcon className='text-xl text-slate-800' icon={faCircleNodes} />
                                <div className="ml-3">
                                    <span className="mt-2 text-sm text-slate-800 font-semibold tracking-wide	">Club</span>
                                    <p className="text-slate-500 text-sm leading-6">Food.</p>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
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

export const SubDomainsModal = ({ onSubmit }) => {
    const [checkedSubDomain, setCheckedSubDomain] = useState();

    function handleSubmit() {
        onSubmit(checkedSubDomain);
    }

    function handleCheckedSubDomain(e) {
        setCheckedSubDomain(e.target.value);
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
                <div className="grid grid-flow-col auto-cols-max gap-3 w-full h-[350px]  my-2 border-black">
                    <div className=' mb-2 shadow relative peer w-full flex h-12 items-center justify-between rounded-md text-slate-700 cursor-pointer'>
                        <input className='absolute peer' hidden type="radio" name="listRadio" id="listRadio" value="Academic" onChange={(e) => { handleCheckedSubDomain(e) }} />
                        <label onDoubleClick={handleSubmit} className='peer-checked:border-campus-green peer-checked:border-opacity-50 border-2 rounded-md flex w-full p-3 pr-10 duration-300 peer-checked:border-2' htmlFor='listRadio'>
                            <p className='w-max flex h-full items-center'>
                                <span className=''>Information Technology</span>
                            </p>
                        </label>
                        <FontAwesomeIcon className='absolute right-0 hidden mr-3 peer-checked:block peer-checked:text-campus-green' icon={faCircleCheck} />
                        <FontAwesomeIcon className='absolute block right-0 mr-3 peer-checked:hidden text-gray-500 peer-checked:text-campus-green' icon={faCircle} />
                    </div>
                </div>
            </div>
            <div className='flex w-full h-[50px] items-end justify-between'>
                <p className='text-red-500'>You have to select atleast one sub-domain.</p>
                <button onClick={handleSubmit} className="flex w-max items-center justify-center rounded-lg bg-slate-200 py-2 px-5 text-center text-slate-800">
                    <span className="mt-1 mr-2">Next</span>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
            </div>
        </>
    )
}

export const IssueTypeModal = ({ onSubmit, data }) => {
    const [checkedIssueType, setCheckedIssueType] = useState();
    const [getData, setData] = useState(data);

    function handleSubmit() {
        onSubmit(checkedIssueType);
    }

    function handleCheckedIssueType(e) {
        setCheckedIssueType(e.target.value);
    }

    function handleSearch(e){
        setData(data.filter((data)=>{
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
                    <input type="name" name="search" className="h-10 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-2 pt-3 pr-40 pl-12 shadow-sm font-normal outline-none focus:shadow-inner" placeholder="Search Sub-Domain Name" onKeyUp={(e) => {handleSearch(e)} } />
                </div>
                <div className="flex flex-col w-full h-[350px]  my-2 border-black">
                    {
                        getData.map((obj, index)=>{
                            return (
                                <div className={`group/item mb-2 relative peer w-full flex h-12 items-center justify-between rounded-md text-slate-700 cursor-pointer`}>
                                    <span className={`group-hover/item:visible invisible absolute right-28 rounded-full bg-gray-300 text-black px-3 pt-1 text-xs font-normal`}>It is about Food Related</span>
                                    <input key={index} className='absolute peer' hidden type="radio" name="IssueTyperadio" id={obj.issueType} value={obj.issueType} onChange={(e) => { handleCheckedIssueType(e) }} />
                                    <label className={` peer-checked:border-campus-green peer-checked:border-opacity-50 border-2 rounded-md flex w-full p-3 pr-10 duration-300 peer-checked:border-2`} htmlFor={obj.issueType}>
                                        <p className='w-max flex h-full items-center'>
                                            <FontAwesomeIcon icon={faHashtag} />
                                            <span className='ml-3 -mb-1'>{obj.issueType}</span>
                                        </p>
                                    </label>
                                    <FontAwesomeIcon className='absolute right-0 hidden mr-3 peer-checked:block peer-checked:text-campus-green' icon={faCircleCheck} />
                                    <FontAwesomeIcon className='absolute block right-0 mr-3 peer-checked:hidden text-gray-500 peer-checked:text-campus-green' icon={faCircle} />
                                </div>
                            )
                        })
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