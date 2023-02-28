import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <section className="bg-[#31333B] py-4">
        <h2 className="text-white text-4xl font-bold text-center my">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8  max-w-[1440px] mx-auto p-5">
        <div className="px-4 py-12 rounded-lg bg-[#3D3E42] text-center hover:bg-yellow-500 duration-400">
          <div className="w-1/2 mx-auto">
            <Image
              src={"/react.png"}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className="w-36 h-36"
            ></Image>
          </div>
          <h3 className="text-white">React</h3>
        </div>
        <div className="px-4 py-12 rounded-lg bg-[#3D3E42] text-center hover:bg-yellow-500 duration-400">
          <div className="w-1/2 mx-auto">
            <Image
              src={"/js.png"}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className="w-36 h-36"
            ></Image>
          </div>
          <h3 className="text-white">JS</h3>
        </div>
        <div className="px-4 py-12 rounded-lg bg-[#3D3E42] text-center hover:bg-yellow-500 duration-400">
          <div className="w-1/2 mx-auto">
            <Image
              src={"/firebase.png"}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className="w-36 h-36"
            ></Image>
          </div>
          <h3 className="text-white">Firebase</h3>
        </div>
        <div className="px-4 py-12 rounded-lg bg-[#3D3E42] text-center hover:bg-yellow-500 duration-400">
          <div className="w-1/2 mx-auto">
            <Image
              src={"/tailwind.png"}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className="w-36 h-36"
            ></Image>
          </div>
          <h3 className="text-white">Tailwind</h3>
        </div>
        <div className="px-4 py-12 rounded-lg bg-[#3D3E42] text-center hover:bg-yellow-500 duration-400">
          <div className="w-1/2 mx-auto">
            <Image
              src={"/bootstrap.png"}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className="w-36 h-36"
            ></Image>
          </div>
          <h3 className="text-white">Bootstrap</h3>
        </div>
        <div className="px-4 py-12 rounded-lg bg-[#3D3E42] text-center hover:bg-yellow-500 duration-400">
          <div className="w-1/2 mx-auto">
            <Image
              src={"/laravel.png"}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className="w-36 h-36"
            ></Image>
          </div>
          <h3 className="text-white">Laravel</h3>
        </div>
        <div className="px-4 py-12 rounded-lg bg-[#3D3E42] text-center hover:bg-yellow-500 duration-400">
          <div className="w-1/2 mx-auto">
            <Image
              src={"/node.png"}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className="w-36 h-36"
            ></Image>
          </div>
          <h3 className="text-white">Node Js</h3>
        </div>
        <div className="px-4 py-12 rounded-lg bg-[#3D3E42] text-center hover:bg-yellow-500 duration-400">
          <div className="w-1/2 mx-auto">
            <Image
              src={"/mongo.png"}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className="w-36 h-36"
            ></Image>
          </div>
          <h3 className="text-white">MongoDB</h3>
        </div>
        <div className="px-4 py-12 rounded-lg bg-[#3D3E42] text-center hover:bg-yellow-500 duration-400">
          <div className="w-1/2 mx-auto">
            <Image
              src={"/mysql.png"}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className="w-36 h-36"
            ></Image>
          </div>
          <h3 className="text-white">MySQL</h3>
        </div>
        <div className="px-4 py-12 rounded-lg bg-[#3D3E42] text-center hover:bg-yellow-500 duration-400">
          <div className="w-1/2 mx-auto">
            <Image
              src={"/php.png"}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className="w-36 h-36"
            ></Image>
          </div>
          <h3 className="text-white">PHP</h3>
        </div>
        <div className="px-4 py-12 rounded-lg bg-[#3D3E42] text-center hover:bg-yellow-500 duration-400">
          <div className="w-1/2 mx-auto">
            <Image
              src={"/nextjs-icon.png"}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className="w-36 h-36 object-fill"
            ></Image>
          </div>
          <h3 className="text-white">Next Js</h3>
        </div>
        <div className="px-4 py-12 rounded-lg bg-[#3D3E42] text-center hover:bg-yellow-500 duration-400">
          <div className="w-1/2 mx-auto">
            <Image
              src={"/git.png"}
              alt=""
              width="0"
              height="0"
              sizes="100vw"
              className="w-36 h-36 object-fill"
            ></Image>
          </div>
          <h3 className="text-white">Git</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;
