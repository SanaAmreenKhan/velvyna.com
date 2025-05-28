import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className=" text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          className="w-full md:max-w-[480px]"
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500 leading-relaxed">
            1234, Queen Lisa Road <br />
            Washington Palace, Jeddah, Saudi Arabia
          </p>

          {/* Contact Info */}
          <p className="text-gray-500 leading-relaxed">
            Tel: +966 55 123 4567 <br />
            Email:{" "}
            <a
              href="mailto:admin@velvyna.com"
              className="underline hover:text-black"
            >
              admin@velvyna.com
            </a>
          </p>

          {/* Careers Info */}
          <p className="font-semibold text-xl text-gray-600">
            Careers at Velvyna
          </p>
          <p className="text-gray-500">
            We're always looking for creative minds to join our growing fashion
            team.
          </p>
          <button className="cursor-pointer border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
