import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

function PopularServices() {
    const router = useRouter();
    const popularServicesData = [
        {
            name: "Ai artists",
            label: "Add talents to AI",
            image: "/service1.png",
        },
        {
            name: "Logo Design",
            label: "Build your brand",
            image: "/service2.jpeg",
        },
        {
            name: "WordPress",
            label: "Customize your site",
            image: "/service3.jpeg",
        },
        {
            name: "Voice Over",
            label: "Share your message",
            image: "/service4.jpeg",
        },
        {
            name: "Social Media",
            label: "Reach more audience",
            image: "/service5.jpeg",
        },
        {
            name: "SEO",
            label: "Unlock growth online",
            image: "/service6.jpeg",
        },
        {
            name: "Illustration",
            label: "Bring your dreams to life",
            image: "/service7.jpeg",
        },
        {
            name: "Translation",
            label: "Go global",
            image: "/service8.jpeg",
        },
    ];

    return (
        <div className="mx-20 my-16">
            <h2 className="text-4xl mb-10 text-[#404145] font-bold">
                Popular Services
            </h2>
            <ul className="grid grid-cols-4 gap-10">
                {popularServicesData.map(({ name, label, image }) => (
                    <li
                        key={name}
                        className="relative cursor-pointer"
                        onClick={() =>
                            router.push(`/search?q=${(name || "default").toLowerCase()}`)
                        }
                    >
                        <div className="absolute z-10 text-white left-5 top-4">
                            <span>{label}</span>
                            <h6 className="font-extrabold text-2xl">{name}</h6>
                        </div>
                        <div className="h-80 w-72">
                            <Image src={image} fill alt="service" className="object-cover" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PopularServices;
