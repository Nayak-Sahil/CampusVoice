"use client"
import React, { useRef } from 'react'
import { faArrowRight, faBriefcase, faBuildingColumns, faCircleNodes, faHotel, faLayerGroup, faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { faBuilding, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoryDialog = React.memo(({ isModalOpen, setModal }) => {
    // console.warn("re-rendering child component")
    const categoryDialogBox = useRef();
    if (isModalOpen) {
        categoryDialogBox.current.showModal();
    }
    return (
        <dialog className="w-[700px] h-max px-6 py-5 rounded shadow-md" ref={categoryDialogBox} id="categoryDialogBox">
            <div className="flex items-center justify-between">
                <h2 className="text-lg text-slate-800 flex w-[300px] h-6 items-center">
                    <FontAwesomeIcon className="mr-2" width={15} icon={faLayerGroup} />
                    <span>Category</span>
                </h2>
                <button
                    type="button"
                    className="text-red-600 text-base hover:scale-125 ease-linear"
                    onClick={() => {
                        categoryDialogBox.current.close();
                        setModal(false);
                    }}
                    id="closeDocModel"
                >
                    <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                </button>
            </div>
            <main>
                <div className="w-full mt-3 mb-1 flex flex-col sm:col-span-3">
                    <label
                        className="text-campus-green"
                    >
                        Please choose the specific category in which you encountered an issue.
                    </label>
                </div>
                <div className="flex flex-col w-full mb-3 no-scrollbar">
                    <div className='flex flex-col w-full h-max py-1'>
                        <p className='text-slate-800 mb-2'>Your Department:</p>
                        <div className="relative w-48 lg:w-64">
                            <input className="peer hidden" id="deptRadio" type="radio" name="radio" />
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
                                <input className="peer hidden" id="placementRadio" type="radio" name="radio"  />
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
                                <input className="peer hidden" id="HostelRadio" type="radio" name="radio"  />
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
                                <input className="peer hidden" id="canteenRadio" type="radio" name="radio"  />
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
                                <input className="peer hidden" id="clubRadio" type="radio" name="radio"  />
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
                    <button className="flex w-max items-center justify-center rounded-lg bg-slate-200 py-2 px-5 text-center text-slate-800">
                        <span className="mt-1 mr-2">Next</span>
                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </div>
            </main>
        </dialog>
    )
});

export default CategoryDialog;