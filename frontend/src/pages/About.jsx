import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At Velvyna, we believe fashion is more than just clothing—it's an
            expression of individuality. Our mission is to bring you
            hand-picked, high-quality apparel that combines comfort, style, and
            timeless elegance.
          </p>
          <p>
            From casual wear to signature collections, we curate designs that
            reflect your unique story and elevate everyday fashion with
            effortless flair.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            To inspire confidence through fashion that fits your lifestyle.
            We’re dedicated to offering ethically sourced pieces that embrace
            both sustainability and sophistication.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className=" text-gray-600 ">
            Every piece goes through strict quality checks to ensure premium
            stitching, lasting fabrics, and vibrant prints.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            A seamless shopping experience—simple navigation, secure checkout,
            and fast delivery, right to your door.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Our friendly team is always ready to help with styling advice, order
            tracking, and hassle-free returns.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
