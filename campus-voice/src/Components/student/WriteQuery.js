"use client";
import QueryContext from "@/Contexts/QueryContext";
import { QuerySchema } from "@/Schemas/QuerySchema";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";


const initialValues = {
  QueryTitle: "",
  QueryCategory: "",
  QueryDetails: "",
};

export default function WriteQuery() {

  const contextQuery = useContext(QueryContext);
  console.warn(contextQuery.setQueryData)
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: QuerySchema,
    onSubmit: (values) => {
      console.log(values);
      const queryDetailsObj = {...contextQuery.queryData, ...values};
      queryDetailsObj["FormState"] = "READ_DESTINATION";
      contextQuery.setQueryData(queryDetailsObj);
    },
  });



  return (
    <form className="flex w-full flex-col" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-semibold">Convey Your Query </h1>
      <p className="mt-2 text-gray-500">
        Please feel free to express your query and ask any question.{" "}
        <span className="text-[#23B679] font-semibold">
          Don't worry, you can mask your identity.
        </span>
      </p>
      <div className="mt-4 flex flex-col items-center w-full">
        <div className="w-full mb-1 flex justify-between sm:col-span-3">
          <div className="w-[68%] mb-3 flex flex-col sm:col-span-3">
            <label
              htmlFor="QueryTitle"
              className="mb-2 text-gray-800"
            >
              Regarding
            </label>
            <input
              className="appearance-none border w-full rounded-lg border px-2 py-2 shadow-sm text-gray-700 leading-tight focus:outline-none focus:ring focus:shadow-outline"
              name="QueryTitle"
              id="QueryTitle"
              type="text"
              placeholder="Express Your Complaint"
              value={values.QueryTitle}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.QueryTitle && errors.QueryTitle ? <p className="mt-2 text-red-500">{errors.QueryTitle}</p> : ""}
          </div>
          <div className="w-[30%] mb-3 flex flex-col sm:col-span-3">
            <label
              className="mb-2 text-gray-800"
              htmlFor="QueryCategory"
            >
              Category
            </label>
            <select
              className="rounded-lg border px-2 py-2 shadow-sm outline-none focus:ring pr-5"
              name="QueryCategory"
              id="QueryCategory"
              value={values.QueryCategory}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Select Category</option>
              <option value="Lab">Lab</option>
              <option value="Parking">Parking</option>
              <option value="Study">Study</option>
              <option value="Department">Department</option>
            </select>
            {touched.QueryCategory && errors.QueryCategory ? <p className="mt-2 text-red-500">{errors.QueryCategory}</p> : ""}
          </div>
        </div>
        <div className="w-full mb-1 flex flex-col sm:col-span-3">
          <label
            className="mb-2 text-gray-800"
            htmlFor="QueryDetails"
          >
            Message
          </label>
          {touched.QueryDetails && errors.QueryDetails ? <p className="mb-2 text-red-500">{errors.QueryDetails}</p> : ""}
          <textarea
            className="appearance-none border w-full rounded-lg border px-2 py-2 shadow-smtext-gray-700 leading-tight focus:outline-none focus:ring focus:shadow-outline"
            name="QueryDetails"
            id="QueryDetails"
            type="text"
            placeholder="Message... ..."
            rows="12"
            value={values.QueryDetails}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
        </div>
      </div>
      <div className="flex flex-col justify-between sm:flex-row">
        <button
          type="submit"
          className="group order-1 my-2 flex w-full items-center justify-center rounded-lg bg-gray-200 py-2 text-center font-bold text-gray-600 outline-none transition sm:w-40 focus:ring hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="group my-2 flex w-full items-center justify-center rounded-lg bg-blue-700 py-2 text-center font-bold text-white outline-none transition sm:order-1 sm:w-40 focus:ring"
        >
          Continue
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:translate-x-2 ml-4 h-4 w-4 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
