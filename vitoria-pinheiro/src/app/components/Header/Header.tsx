import React from "react";
import Image from "next/image";

const BannerSection = () => {
    return <section>
        <div className="grid grid-cols1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">Hi, I'm Vitória!</h1>
                <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
                    I'm a software developer and I love to create apps that make people's lives easier.My current focus is on accessibility, security, and iOS platforms. My love for gaming complements my work with web applications, but my primary dedication lies in crafting innovative and user-friendly mobile experiences. My goal is to contribute positively to technology, making it accessible, safe and enjoyable for all.
                </p>
                <div>
                    <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">Hire me</button>
                    <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">Download CV</button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg=[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src="/assets/vivi-dev.png"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                        alt="Avatar of 3D Vitória Pinheiro programming"
                    />
                </div>
            </div>
        </div>
    </section>;
};

export default BannerSection;
