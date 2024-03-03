"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface profileData {
  name: string;
  title: string;
  url: string;
  Date: string;
  period: string;
}

const Work = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/work");
      console.log(response);
      const Data = await response.json();
      setDatas(Data);
    };
    fetchData();
  }, []);
  return (
    <>
      <section className="bg-workColor py-[40px] px-[20px] dark:bg-black">
        <h1 className="mb-[20px] text-4xl text-center font-bold">
          Work Experience{" "}
        </h1>
        <div className="max-w-[500px] border-l-2 border-black m-auto pl-[32px] dark:border-l-2 dark:border-white ">
          {datas.map((data: profileData) => (
            <div className="job">
              <h1 className="text-xl">{data.name}</h1>
              <h3 className="text-base text-[#9c27b0] font-bold my-4">
                {data.title}
              </h3>
              <h3 className="text-base text-black ">{data.period}</h3>
              <Image
                src={data.url}
                alt="trend_go"
                width={70}
                height={70}
                className="absolute top-[60px] right-[10px] object-contain "
              />
              <div
                className="absolute font-bold left-[-140px] top-[30%]  translate-y-2/4 
                              dark:text-white"
              >
                {data.Date}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Work;
