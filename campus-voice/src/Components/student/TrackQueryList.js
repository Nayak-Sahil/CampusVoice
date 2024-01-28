import React from 'react'

export default function TrackQueryList() {
    return (
        <div className="w-full mx-auto my-2 max-w-screen-lg">
            <div className="sm:flex sm:items-center px-1 sm:justify-between flex-col sm:flex-row">
                <p className="flex-1 text-base font-bold text-gray-900">Your Queries</p>
                <div className="mt-4 sm:mt-0">
                    <div className="flex items-center justify-start sm:justify-end">
                        <div className="flex items-center">
                            <label htmlFor="" className="mr-2 flex-shrink-0 text-sm font-medium text-gray-900"> Sort by: </label>
                            <select name="" className="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm">
                                <option className="whitespace-no-wrap text-sm">Recent</option>
                            </select>
                        </div>

                        <button type="button" className="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow">
                            <svg className="mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" className=""></path>
                            </svg>
                            Export to CSV
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-3 bg-white overflow-hidden rounded-xl border shadow">
                <table className="min-w-full border-separate border-spacing-y-1">
                    <thead className="hidden border-b lg:table-header-group">
                        <tr className="">
                            <td width="50%" className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Queries</td>

                            <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Date</td>

                            <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Agreed Student</td>

                            <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Status</td>
                        </tr>
                    </thead>

                    <tbody className="lg:border-gray-300">
                        <tr className="hover:bg-gray-100 cursor-pointer">
                            <td width="50%" className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                                Queury Regarding Hostel Admission - Feb 2022
                                <div className="mt-1 lg:hidden">
                                    <p className="font-normal text-gray-500">07 February, 2022</p>
                                </div>
                            </td>

                            <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">07 February, 2022</td>

                            <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                                <span className='pl-10'>59</span>
                                <span className="rounded-full bg-yellow-200 px-2 py-0.5 text-xs font-medium text-yellow-700 lg:hidden">Sent to Resolver</span>
                            </td>

                            <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                <span className="rounded-full bg-yellow-200 px-2 py-0.5 text-xs font-medium text-yellow-700">Sent to Resolver</span>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-100 cursor-pointer">
                            <td width="50%" className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                                Safety and Security in College Hostels  - Jan 2022
                                <div className="mt-1 lg:hidden">
                                    <p className="font-normal text-gray-500">09 January, 2022</p>
                                </div>
                            </td>

                            <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">09 January, 2022</td>

                            <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                                <span className='pl-10'>20</span>
                                <span className="rounded-full bg-green-200 px-2 py-0.5 text-xs font-medium text-green-600 lg:hidden">Approved</span>
                            </td>

                            <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                <span className="rounded-full bg-green-200 px-2 py-0.5 text-xs font-medium text-green-600">Approved</span>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-100 cursor-pointer">
                            <td width="50%" className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                                Query related to Water Tank - Dec 2021
                                <div className="mt-1 lg:hidden">
                                    <p className="font-normal text-gray-500">15 December, 2021</p>
                                </div>
                            </td>

                            <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">15 December, 2021</td>

                            <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                                <span className='pl-10'>10</span>
                                <span className="rounded-full bg-yellow-200 px-2 py-0.5 text-xs font-medium text-yellow-700 lg:hidden">Sent to Resolver</span>
                            </td>

                            <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                <span className="rounded-full bg-yellow-200 px-2 py-0.5 text-xs font-medium text-yellow-700">Sent to Resolver</span>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-100 cursor-pointer">
                            <td width="50%" className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                                Vehicles Parking Problems - Nov 2021
                                <div className="mt-1 lg:hidden">
                                    <p className="font-normal text-gray-500">14 November, 2021</p>
                                </div>
                            </td>

                            <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">14 November, 2021</td>

                            <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                                <span className='pl-10'>80</span>
                                <span className="rounded-full bg-indigo-200 px-2 py-0.5 text-xs font-medium text-indigo-600 lg:hidden">Prending</span>
                            </td>

                            <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                <span className="rounded-full bg-indigo-200 px-2 py-0.5 text-xs font-medium text-indigo-600">Prending</span>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-100 cursor-pointer">
                            <td width="50%" className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                                College Cricket Ground - Oct 2021
                                <div className="mt-1 lg:hidden">
                                    <p className="font-normal text-gray-500">15 October, 2021</p>
                                </div>
                            </td>

                            <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">15 October, 2021</td>

                            <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                                <span className='pl-10'>38</span>
                                <span className="bg-slate-200 text-slate-600 rounded-full px-2 py-0.5 text-xs font-medium lg:hidden">Drafts</span>
                            </td>

                            <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                                <span className="bg-slate-200 text-slate-600 rounded-full px-2 py-0.5 text-xs font-medium">Drafts</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
