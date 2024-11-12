"use client";
import React from "react";
import emailjs from "emailjs-com";
import { translateArray } from "./translate";
import { useLangContext } from "../context/LangContext";

export default function ContactEmail() {
  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const userID = process.env.NEXT_PUBLIC_USER_ID;

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    emailjs
      .sendForm(serviceID!, templateID!, e.target as HTMLFormElement, userID!)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    const target = e.target as HTMLFormElement;
    target.reset();
  }

  const { lang } = useLangContext();
  const translate = translateArray.find((item) => item.lang === lang)?.translate
    .contact;

  const emailSender = [
    {
      name: translate?.input[0].name,
      type: "text",
      inputName: "from_name",
      placeholder: translate?.input[0].placeholder,
    },
    {
      name: translate?.input[1].name,
      type: "email",
      inputName: "email_us",
      placeholder: translate?.input[1].placeholder,
    },
    {
      name: translate?.input[2].name,
      type: "phone",
      inputName: "telefone",
      placeholder: translate?.input[2].placeholder,
    },
    {
      name: translate?.input[3].name,
      type: "text",
      inputName: "assunto",
      placeholder: translate?.input[3].placeholder,
    },
    {
      name: translate?.input[4].name,
      type: "text",
      inputName: "message",
      placeholder: translate?.input[4].placeholder,
    },
  ];

  return (
    <div className="mx-auto">
      <form onSubmit={sendEmail} className="flex flex-col items-end gap-6">
        <div className="max-[580px]:flex items-start justify-center max-[580px]:flex-col grid grid-cols-2 gap-6 max-[580px]:ga-3">
          {emailSender.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col space-y-1 w-full ${
                  item.inputName == "message" && "col-span-2"
                }`}
              >
                <label htmlFor={item.inputName} className="text-lg">
                  {item.name}
                </label>

                {item.inputName == "message" ? (
                  <textarea
                    name={item.inputName}
                    placeholder={item.placeholder}
                    rows={3}
                    className={`border bg-gray-600/15 border-gray-600 p-3 rounded-lg resize-none`}
                  />
                ) : (
                  <input
                    type={item.type}
                    name={item.inputName}
                    placeholder={item.placeholder}
                    className={`border bg-gray-600/15 border-gray-600 p-3 rounded-lg`}
                  />
                )}
              </div>
            );
          })}
        </div>
        <input
          type="submit"
          value={translate?.button}
          className="text-lg font-bold cursor-pointer px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg"
        />
      </form>
    </div>
  );
}
