import Image from "next/image";
import React from "react";
import { BsCheckCircle } from "react-icons/bs";
function Everything() {
    const everythingData = [
        {
            title: "stick to ur budget",
            subtitle:
            "find right service for evry price point. Hourl;y rates?. provider sets pricing,"
        },
        {
            Title: "Pay when u happy or service completed",
            subtitle: "upront payment to the provider",
        },
        {
            Title: "Count on 24/7 support",
            subtitle: "roumd the clock indian call centres at your convenience",
        },
    ];
    return (
        <div className="bg-[#f1fdf7] flex py-20 justify-between px-24">
            <div>
                <h2 className="text-4xl mb 5 text-[#404145] font-bold">
                    The best part? !!RACISM!!
                </h2>
                <ul className="flex flex-col gap-10">
                    {everythingData.map(({ title, subtitle}) => {
                        return (
                            <li key={title}>
                                <div className="flex gap-2 items-center text-xl">
                                    <BsCheckCircle className="text-[#62646a]"/>
                                    <h4>{title}</h4>
                                </div>
                                <p className="text-[#62646a]">{subtitle}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="relative h-96 w-2/4">
                <Image src="/everything.webp" fill alt="evrything"/>
            </div>
        </div>
    );
}

export default Everything;