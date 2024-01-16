import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUs() {
  const form = useRef();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_f8wusml",
        "template_jtzburs",
        form.current,
        "ZO9IDZ7nza5i_ZW8c"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitting(false);
          toast("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
          setIsSubmitting(false);
          toast("There was an issue. Check your connection and try again");
        }
      );
  };

  return (
    <div
      id="contact"
      className="w-full px-10 lg:px-20 py-10 text-[#E3583D] tracking-3"
    >
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className=" h-[500px]  flex flex-col  gap-5 w-full lg:w-1/2 ">
          <p className="text-3xl lg:text-[70px] font-bold mb-20">Contact Us</p>
          <p className="text-md lg:text-2xl belinda-font">
            The ideal fusion of tranquility and relishing scrumptious eats.
          </p>
          <p className="text-sm lg:text-md">
            House A , Grace court, Royal pine estate, orchid, lekki
          </p>
          <p className="text-md">+234-8146-586-857</p>
        </div>
        <div className="w-full lg:w-1/2  ">
          <form
            ref={form}
            onSubmit={sendEmail}
            action=""
            className="flex flex-col gap-10"
          >
            <div className="flex flex-col gap-3">
              <label htmlFor="fullName">Full name</label>
              <input
                id="fullName"
                className="p-4 border border-1 focus:border-[#E3583D] rounded-md"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="email">Email</label>
              <input
                className="p-4 border border-1 focus:border-[#E3583D] rounded-md"
                id="email"
                type="email"
              />
            </div>
            <textarea
              className="p-4 border border-1 focus:border-[#E3583D] rounded-md"
              name="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <input
              className={`px-6 py-4 bg-[#E3583D] text-white duration-200 cursor-pointer hover:-translate-y-1 ${
                isSubmitting && "opacity-[0.8]"
              }`}
              type="submit"
              value={isSubmitting ? "Sending..." : "Send"}
              disabled={isSubmitting}
            />
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ContactUs;
