import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className={`md:flex md:justify-between py-24 md:py-60 px-5 bg-[url('https://i.ibb.co/VN0jT73/amt2.png')] bg-no-repeat bg-center bg-cover`}
    >
      <div className="w-full flex flex-col md:flex-row max-w-[1440px] mx-auto p-5">
        <div className="w-full md:w-1/2">
            <h1 className="text-white">I&#39;m <span className="text-4xl font-bold text-yellow-500">Amit Kumar</span></h1>
            <h2 className="text-white my-3  text-xl">Full Stack Web Developer</h2>
            <Link href={'/'} className="inline-block border border-yellow-500 text-yellow-500 px-6 py-2 rounded-md backdrop-blur-md shadow-sm shadow-yellow-500 hover:bg-yellow-500 hover:text-white duration-500">Contact Me</Link>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
