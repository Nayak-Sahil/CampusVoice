"use client";
import QueryContext from "@/Contexts/QueryContext";
import { QuerySchema } from "@/Schemas/QuerySchema";
import { faClose, faCloudArrowUp, faLayerGroup, faPaperclip, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import "../../app/globals.css"
import pdfIcon from "../../../public/icons/pdf.svg"
import wordIcon from "../../../public/icons/word.svg"
import CategoryDialog from "./CategoryDialog";

const initialValues = {
  QueryTitle: "",
  QueryCategory: "",
  QueryDetails: "",
};

export default function WriteQuery() {
  const imageInputRef = useRef(null);
  const contextQuery = useContext(QueryContext);
  const [selectedImages, setselectedImages] = useState([]);
  // * Document Attachment Dialog Modal
  let attachDocModel = useRef(null);
  // * Category Selection Dialog Modal
  const [isCategoryModalOpen, setCategoryModal] = useState(false);
  // * Category Error Label
  let categErrorLabel = useRef(null);
  // * Category Selection Data
  const categoryDataState = {
    selectedCategoryData: null,
    dataEntered: false
  }

  const [getCategoryData, setCategoryData] = useState(categoryDataState);
  console.warn(getCategoryData);

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: QuerySchema,
    onSubmit: (values) => {
      // console.log(values);
      if(getCategoryData.dataEntered === true){
        const queryDetailsObj = {
          ...contextQuery.queryData, ...values,
          QueryDataImages: selectedImages,
          QueryCategory: getCategoryData.selectedCategoryData
        };
        queryDetailsObj["FormState"] = "READ_DESTINATION";
        contextQuery.setQueryData(queryDetailsObj);
      }else{
        categErrorLabel.current.innerHTML = `<FontAwesomeIcon className="text-lg" icon={faTriangleExclamation} /> Please, Select Category.`
      }
    },
  });

  const handleImageInput = (e) => {
    const files = Array.from(e.target.files);
    if (selectedImages.length + files.length > 5) {
      /* show alert */
      alert("Cannot add more than 5 files!");
      return;
    }

    //remove files if not image
    const filteredFiles = files.filter(file => file.type.startsWith("image") || file.type.startsWith("application/pdf") || file.type.startsWith("application/vnd.openxmlformats-officedocument.wordprocessingml.document"));
    if (filteredFiles.length !== files.length) {
      alert("Only image, pdf and word files are allowed!");
      return;
    }


    setselectedImages(prevImages => [...prevImages, ...files]);
  }

  const removeImage = (index) => {
    setselectedImages(e => { const updateImgs = [...e]; updateImgs.splice(index, 1); return updateImgs; });
    imageInputRef.current.value = "";
  }

  function openDocModal() {
    attachDocModel.current.showModal();
  }

  function openCategoryModal() {
    setCategoryModal(true);
    setCategoryData(categoryDataState);
  }

  return (
    <>
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
              <label htmlFor="QueryTitle" className="mb-2 text-gray-800 flex">
                Regarding
                {touched.QueryTitle && errors.QueryTitle ?
                  <p className="ml-2 text-red-500">
                    <FontAwesomeIcon className="text-lg" icon={faTriangleExclamation} /> {errors.QueryTitle}
                  </p> : ""}
              </label>
              <input className={`appearance-none w-full rounded-lg border px-2 py-2 shadow-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring ${errors.QueryTitle ? "focus:outline-none focus:shadow-outline focus:ring-red-300" : "focus:ring-campus-green focus:ring-opacity-40"}`}
                name="QueryTitle"
                id="QueryTitle"
                type="text"
                placeholder="Express Your Complaint"
                value={values.QueryTitle}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="w-[30%] mb-3 flex flex-col sm:col-span-3">
              <label className="mb-2 text-gray-800 flex" htmlFor="QueryCategory">
                Category
                <span className="ml-2 text-red-500 block" ref={categErrorLabel}></span>
              </label>
              <button
                type="button"
                onClick={openCategoryModal}
                className="group order-1 flex w-full items-center justify-center rounded-lg bg-gray-100 py-[6px] text-center text-gray-600 outline-none transition 
                sm:w-full focus:ring focus:ring-campus-green focus:ring-opacity-40 hover:bg-gray-200"
              >
                <FontAwesomeIcon icon={faLayerGroup}></FontAwesomeIcon>
                <span className="ml-2 mt-1">{(!getCategoryData.dataEntered) ? "Select Category" : "Update Selection"}</span>
              </button>
            </div>
          </div>
          <div className="w-full mb-1 flex flex-col sm:col-span-3">
            <label className="mb-2 text-gray-800 flex" htmlFor="QueryDetails">
              Message
              {touched.QueryDetails && errors.QueryDetails ? <p className="ml-2 text-red-500"><FontAwesomeIcon className="text-lg" icon={faTriangleExclamation} /> {errors.QueryDetails}</p> : ""}
            </label>

            <textarea
              className={`appearance-none w-full rounded-lg border px-2 py-2 shadow-smtext-gray-700 leading-tight focus:outline-none focus:ring focus:shadow-outline ${errors.QueryDetails ? "focus:outline-none focus:shadow-outline focus:ring-red-300" : "focus:ring-campus-green focus:ring-opacity-40"}`}
              name="QueryDetails"
              id="QueryDetails"
              type="text"
              placeholder="Message... ..."
              rows="7"
              value={values.QueryDetails}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col justify-between sm:flex-row-reverse">
          <button
            type="button"
            onClick={openDocModal}
            className="group order-1 my-2 flex w-full items-center justify-center rounded-lg bg-gray-100 py-2 text-center text-gray-600 outline-none transition sm:w-44 focus:ring hover:bg-gray-200"
          >
            <FontAwesomeIcon icon={faPaperclip}></FontAwesomeIcon>
            <span className="ml-2 mt-1">Attach Document</span>
          </button>
          <div className="w-[350px] flex flex-col justify-between sm:flex-row">
            <button
              type="button"
              className="group order-1 my-2 flex w-full items-center justify-center rounded-lg bg-gray-100 py-2 text-center font-bold text-gray-600 outline-none transition sm:w-40 hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="group my-2 flex w-full items-center justify-center rounded-lg bg-campus-green py-2 text-center text-white outline-none transition sm:order-1 sm:w-40 focus:ring"
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
        </div>
      </form>
      {/* Document Attachment Dialog */}
      <dialog className="w-[700px] h-max p-5 rounded fixed m-auto" ref={attachDocModel} id="attachDocModel">
        <div className="flex items-center justify-between">
          <h2 className="text-lg">Attach Document.</h2>
          <button type="button" className="text-red-600 text-base hover:scale-125 ease-linear" onClick={() => { attachDocModel.current.close() }} id="closeDocModel"><FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon></button>
        </div>
        <main>
          <div className="w-full mt-3 mb-1 flex flex-col sm:col-span-3">
            <label
              className="mb-2 text-campus-green"
            >
              Select multiple files and upload it with your query.
            </label>
          </div>
          <div className="flex w-full overflow-scroll mb-5 no-scrollbar border-2 border-gray-300 border-dashed rounded-lg">
            <label htmlFor="dropzone-file" style={selectedImages?.length > 0 ? { backgroundColor: "white" } : { alignItems: "center", justifyContent: "center" }} className="flex flex-col w-full h-64  cursor-pointer bg-gray-50 hover:bg-gray-100 ">
              {selectedImages?.length > 0 ?
                <div className="flex flex-wrap m-5">
                  {
                    selectedImages.map((file, index) => (
                      file.type.startsWith("image") ?
                        <div className="justify-normal items-start z-30 px-1 relative overflow-hidden" key={index}>
                          <Image
                            key={index}
                            src={URL.createObjectURL(file)}
                            alt={`${file}`}
                            className="rounded-lg border my-4 mx-4 z-30"
                            width={150}
                            height={100}
                            style={{ minWidth: "150px", minHeight: "100px" }}
                          />
                          <p className="w-28 text-center truncate">{file.name}</p>
                          <FontAwesomeIcon className="absolute delay-100 text-campus-dark py-[6px] px-[8px] rounded-full z-50 top-1 right-2 bg-gray-100" onClick={(e) => { e.preventDefault(); removeImage(index) }} onMouseOver={(e) => e.target.style.scale = "1.2"} onMouseOut={(e) => e.target.style.scale = "1.0"} icon={faClose} />
                        </div>
                        :
                        file.type.startsWith("application/pdf") ?
                          <div className="justify-normal items-start z-30 px-1 relative overflow-hidden" key={index}>
                            <Image
                              key={index}
                              src={pdfIcon}
                              alt={`${file}`}
                              className="rounded-lg border p-5 my-4 mx-4 z-30"
                              width={80}
                              height={80}
                              style={{ minWidth: "100px", minHeight: "80px" }}
                            />
                            <p className="w-28 text-center truncate">{file.name}</p>
                            <FontAwesomeIcon className="absolute delay-100 text-campus-dark py-[6px] px-[8px] rounded-full z-50 top-1 right-2 bg-gray-100" onClick={(e) => { e.preventDefault(); removeImage(index) }} onMouseOver={(e) => e.target.style.scale = "1.2"} onMouseOut={(e) => e.target.style.scale = "1.0"} icon={faClose} />
                          </div>
                          :
                          file.type.startsWith("application/vnd.openxmlformats-officedocument.wordprocessingml.document") ?
                            <div className="justify-normal items-start z-30 px-1 relative overflow-hidden" key={index}>
                              <Image
                                key={index}
                                src={wordIcon}
                                alt={`${file}`}
                                className="rounded-lg border p-5 my-4 mx-4 z-30"
                                width={80}
                                height={80}
                                style={{ minWidth: "100px", minHeight: "80px" }}
                              />
                              <p className="w-28 text-center truncate">{file.name}</p>
                              <FontAwesomeIcon className="absolute delay-100 text-campus-dark py-[6px] px-[8px] rounded-full z-50 top-1 right-2 bg-gray-100" onClick={(e) => { e.preventDefault(); removeImage(index) }} onMouseOver={(e) => e.target.style.scale = "1.2"} onMouseOut={(e) => e.target.style.scale = "1.0"} icon={faClose} />
                            </div>
                            :
                            (
                              null
                            )
                    ))
                  }
                </div>
                :
                <>
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 ">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                </>
              }
              <input ref={imageInputRef} onInput={handleImageInput} multiple="multiple" accept="image/*,.pdf,.docx" id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
          <div className="w-full h-[30px] items-center mt-3 mb-1 flex justify-between sm:col-span-3">
            <p className="text-campus-green">You can select only 5 document.</p>
            <button className="flex w-max items-center justify-center rounded-lg bg-campus-green py-2 px-5 text-center text-white" onClick={()=>{
              //set selectedImages
              attachDocModel.current.close();
            }}>
              <FontAwesomeIcon icon={faCloudArrowUp}></FontAwesomeIcon>
              <span className="mt-1 ml-2">Upload</span>
            </button>
          </div>
        </main>
      </dialog>

      {/* One thing remember that when we pass state variable into child component then everytime unnecessary child component get re-render */}
      {
        getCategoryData.dataEntered === false ? 
        <CategoryDialog formState={{getCategoryData, setCategoryData}} isModalOpen={isCategoryModalOpen} setModal={setCategoryModal} />
        : ""
      }
    </>
  );
}
