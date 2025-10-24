import React from "react";

export const Section4: React.FC = () => {
    return (
        <section className="bg-white text-center text-[#054658] py-5">
            <div className="max-w-[90%] mx-auto flex flex-col gap-10">
                {/* Lễ Thành Hôn */}
                <div className=" ">
                    <div className="w-[150px] h-[2px] bg-black mx-auto mb-5"></div>
                    <h2 className="text-[19px] font-semibold tracking-wide mb-2 font-philosopher-noshadow">
                        LỄ THÀNH HÔN
                    </h2>
                    <p className="mb-6 text-sm font-philosopher-noshadow">Vào Chủ Nhật - 11:45</p>

                    <div className="flex justify-center items-center  font-philosopher-noshadow">
                        <span className="text-base mr-4 w-[80px]">Tháng 4</span>
                        <span className="text-4xl font-bold border-x-2 border-primary px-6 text-primary font-rajdhani">
                            06
                        </span>
                        <span className="text-base ml-4 font-philosopher-noshadow w-[80px]">2026</span>
                    </div>

                    <p className="mt-5 text-sm italic">
                        (Tức ngày 08 Tháng 03 Năm Bính Ngọ)
                    </p>
                </div>

                <div className=" ">
                    <div className="w-[150px] h-[2px] bg-black rounded mx-auto mb-5"></div>
                    <h2 className="text-[19px] font-semibold tracking-wide mb-2 font-philosopher-noshadow">
                       LỄ RƯỚC DÂU
                    </h2>
                    <p className="mb-6 text-sm font-philosopher-noshadow">Vào Chủ Nhật - 11:00</p>

                    <div className="flex justify-center items-center font-philosopher-noshadow">
                        <span className="text-base mr-4 w-[80px]">Tháng 4</span>
                        <span className="text-4xl font-bold border-x-2 border-primary px-6 text-primary font-rajdhani">
                            06
                        </span>
                        <span className="text-base ml-4 font-philosopher-noshadow w-[80px]">2026</span>
                    </div>

                    <p className="mt-5 text-sm italic">
                        (Tức ngày 08 Tháng 03 Năm Bính Ngọ)
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Section4;
