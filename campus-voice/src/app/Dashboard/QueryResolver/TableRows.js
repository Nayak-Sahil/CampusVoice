"use client"
import "../../tailwind.css"
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const TableRows = () => {
    const queries = JSON.parse(localStorage.getItem("queries"));
    console.log(queries)
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
    return (
        <>
            {
                queries ?
                    queries.map((obj, index) => (
                        <tr className="">
                            <td className="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                                {
                                    formattedDate
                                }
                                <div className="mt-1 flex flex-col text-xs font-medium lg:hidden">
                                    <div className="flex items-center">
                                        Arjav
                                    </div>
                                    <div className="flex items-center">
                                        {obj.QueryCategory}
                                    </div>
                                    <div className="">{obj.QueryTitle}</div>
                                </div>
                            </td>

                            <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">{obj.UserIdentity.IsMasked ? "User@Z1236" : "Arjav"}</td>

                            <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">{obj.QueryCategory}</td>

                            <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">{obj.QueryTitle}</td>

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
                    ))
                    :
                    console.log(queries)
            }
        </>
    )
}

export default TableRows