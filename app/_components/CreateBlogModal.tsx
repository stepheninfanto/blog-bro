"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { fetchAPI } from "../utils/fetch-api";

interface IFormInput {
  heading: string;
  subHeading: string;
  content: string;
  bannerImage: any;
}

export const FormStyles = {
  input:
    "flex w-full items-start gap-2.5 self-stretch border border-cardBorder px-3 py-2 rounded-[5px] border-solid bg-cardColor",
  label: "text-darkFont text-sm font-semibold leading-5 gap-2",
  titleText: "text-xl not-italic font-medium leading-7 text-darkFont",
  stepText:
    "text-darkFont text-right text-base not-italic font-medium leading-6",
  dualDiv: "flex flex-row gap-6",
  radio: "w-5 h-5",
  divBtn: "flex flex-row-reverse",
};
function CreateBlogModal({ isOpen, setModalStatus }: any) {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    let { bannerImage, ...data1 } = data;
    let tempObj = { ...data1, bannerImage: {} };
    const result = await fetchAPI(
      "/blogs",
      {},
      {
        tempObj,
        method: "POST",
        headers: {
          Authorization: `Bearer +${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(result);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 
      bg-white rounded-md p-8  drop-shadow-lg ${
        isOpen ? "visible" : "hidden"
      } `}
    >
      {/* overlay */}
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={() => setModalStatus()}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            () => setModalStatus();
          }
        }}
        role="menu"
        tabIndex={0}
        aria-label="Close"
      />

      <div
        className="bg-white p-6 rounded shadow-md max-w-lg w-full
      sm:w-auto sm:max-w-sm md:max-w-md
      lg:min-w-[800px]  relative z-10  h-[600px] flex flex-col space-y-24"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <label className={FormStyles.label}>Heading</label>
          <input
            type="text"
            className={FormStyles.input}
            {...register("heading")}
          />

          <label className={FormStyles.label}>Sub Heading</label>
          <input
            type="text"
            className={FormStyles.input}
            {...register("subHeading")}
          />

          <label className={FormStyles.label}>Content</label>
          <textarea
            className={FormStyles.input}
            maxLength={1000}
            rows={5}
            cols={40}
            {...register("content")}
          />

          <label className={FormStyles.label}>Banner Image</label>
          <input
            type="file"
            className={FormStyles.input}
            {...register("bannerImage")}
          />

          <div className="flex flex-row-reverse">
            <button
              onClick={() => setModalStatus()}
              type="submit"
              className="p-5 bg-green-100 flex justify-center w-20 h-50 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBlogModal;
