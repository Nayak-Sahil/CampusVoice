import React from 'react'
import "../../tailwind.css"
import Sidebar from '@/Components/dashboard/Sidebar';
import Navbar from '@/Components/dashboard/Navbar';
import MobileNav from '@/Components/dashboard/MobileNav';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import TableRows from './TableRows';

const sideNavList = [
  {
    listName: "Dashboard",
    icon: "fa-solid fa-table-columns",
    link: "#",
  },
  {
    listName: "Mention",
    icon: "fa-solid fa-at",
    link: "#",
  },
  {
    listName: "Solved Query",
    icon: "fa-regular fa-circle-check",
    link: "#",
  },
  {
    listName: "Announcement",
    icon: "fa-solid fa-bullhorn",
    link: "#",
  },
]

const page = () => {
  return (
    <div className='bg-gray-100 flex'>
      <Sidebar activeList="1" navList={sideNavList} />

      <div className="w-full flex flex-col h-screen overflow-y-hidden">
        {/* Upper Header for Desktop */}
        <Navbar role="Query Resolver" />

        <MobileNav />

        <div className="w-full overflow-x-hidden border-t flex flex-col bg-gray-50">
          <div className="w-full px-6">
            <h1 className="mt-10 px-5 text-xl font-semibold text-gray-900">Student Queries:</h1>
            <div className="max-w-screen-xl px-2 py-5">
              <div className="mt-1 w-full">
                <div className="flex w-full flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0">
                  <form className="relative flex w-full max-w-2xl items-center">
                    <svg className="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" className=""></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
                    </svg>
                    <input type="name" name="search" className="h-12 w-full border-b-gray-400 bg-transparent py-4 pl-12 text-sm outline-none focus:border-b-2" placeholder="Search by Student ID, Date, Query Name" />
                  </form>

                  <button type="button" className="relative mr-auto inline-flex cursor-pointer items-center rounded-full border border-gray-200 bg-white px-5 py-2 text-center text-sm font-medium text-gray-800 hover:bg-gray-100 focus:shadow sm:mr-0">
                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                    <svg className="mr-2 h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                    Filter
                  </button>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-xl bg-white px-6 shadow lg:px-4">
                <table className="min-w-full border-collapse border-spacing-y-2 border-spacing-x-2">
                  <thead className="hidden border-b lg:table-header-group">
                    <tr className="">
                      <td className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
                        Date
                      </td>

                      <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Student Identity</td>

                      <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Category</td>

                      <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Query</td>

                      <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Action</td>

                      <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Status</td>
                    </tr>
                  </thead>

                  <tbody className="bg-white lg:border-gray-300">
                    <TableRows />
                    <tr className="">
                      <td className="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                        November 13, 2023
                        <div className="mt-1 flex flex-col text-xs font-medium lg:hidden">
                          <div className="flex items-center">
                            Jane Doeson
                          </div>
                          <div className="flex items-center">
                            Parking
                          </div>
                          <div className="">Parking At Annexe Building</div>
                        </div>
                      </td>

                      <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">Arjav</td>

                      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">Parking</td>

                      <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">Parking At Annexe Building</td>

                      <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                        <Link className='mr-2' href="/">View</Link>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </td>

                      <td className="whitespace-no-wrap py-4 text-right text-sm text-gray-600 sm:px-3 sm:hidden lg:text-left">
                        <span className="mt-1 block w-fit whitespace-nowrap rounded-full bg-purple-100 px-2 py-0.5 text-center text-xs text-purple-800 lg:hidden">Action Required</span>
                      </td>

                      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-3 lg:table-cell">
                        <span className="ml-2 mr-3 whitespace-nowrap rounded-full bg-green-100 px-2 py-0.5 text-green-800">Solved</span>
                      </td>
                    </tr>
                    <tr className="">
                      <td className="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                        November 13, 2023
                        <div className="mt-1 flex flex-col text-xs font-medium lg:hidden">
                          <div className="flex items-center">
                            Jane Doeson
                          </div>
                          <div className="flex items-center">
                            Parking
                          </div>
                          <div className="">Parking At Annexe Building</div>
                        </div>
                      </td>

                      <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">Arjav</td>

                      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">Parking</td>

                      <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">Parking At Annexe Building</td>

                      <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                        <Link className='mr-2' href="/">View</Link>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </td>

                      <td className="whitespace-no-wrap py-4 text-right text-sm text-gray-600 sm:px-3 sm:hidden lg:text-left">
                        <span className="mt-1 block w-fit whitespace-nowrap rounded-full bg-purple-100 px-2 py-0.5 text-center text-xs text-purple-800 lg:hidden">Action Required</span>
                      </td>

                      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-3 lg:table-cell">
                        <span className="ml-2 mr-3 whitespace-nowrap rounded-full bg-purple-100 px-2 py-0.5 text-purple-800">Action Required</span>
                      </td>
                    </tr>
                    <tr className="">
                      <td className="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                        November 13, 2023
                        <div className="mt-1 flex flex-col text-xs font-medium lg:hidden">
                          <div className="flex items-center">
                            Jane Doeson
                          </div>
                          <div className="flex items-center">
                            Parking
                          </div>
                          <div className="">Parking At Annexe Building</div>
                        </div>
                      </td>

                      <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">Arjav</td>

                      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">Parking</td>

                      <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">Parking At Annexe Building</td>

                      <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                        <Link className='mr-2' href="/">View</Link>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </td>

                      <td className="whitespace-no-wrap py-4 text-right text-sm text-gray-600 sm:px-3 sm:hidden lg:text-left">
                        <span className="mt-1 block w-fit whitespace-nowrap rounded-full bg-purple-100 px-2 py-0.5 text-center text-xs text-purple-800 lg:hidden">Action Required</span>
                      </td>

                      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-3 lg:table-cell">
                        <span className="ml-2 mr-3 whitespace-nowrap rounded-full bg-blue-100 px-2 py-0.5 text-blue-800">Pending</span>
                      </td>
                    </tr>
                    <tr className="">
                      <td className="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                        November 13, 2023
                        <div className="mt-1 flex flex-col text-xs font-medium lg:hidden">
                          <div className="flex items-center">
                            Jane Doeson
                          </div>
                          <div className="flex items-center">
                            Parking
                          </div>
                          <div className="">Parking At Annexe Building</div>
                        </div>
                      </td>

                      <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">Arjav</td>

                      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">Parking</td>

                      <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">Parking At Annexe Building</td>

                      <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                        <Link className='mr-2' href="/">View</Link>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      </td>

                      <td className="whitespace-no-wrap py-4 text-right text-sm text-gray-600 sm:px-3 sm:hidden lg:text-left">
                        <span className="mt-1 block w-fit whitespace-nowrap rounded-full bg-purple-100 px-2 py-0.5 text-center text-xs text-purple-800 lg:hidden">Action Required</span>
                      </td>

                      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-3 lg:table-cell">
                        <span className="ml-2 mr-3 whitespace-nowrap rounded-full bg-purple-100 px-2 py-0.5 text-purple-800">Action Required</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page;