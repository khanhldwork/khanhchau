import React from "react";

interface ImageItem {
    src: string;
    height?: number; // người dùng có thể truyền, mặc định 200
}

interface Section7Props {
    title?: string;
    description?: string;
    column1: ImageItem[]; // ảnh bên trái
    column2: ImageItem[]; // ảnh bên phải
    borderRadius?: number; // độ bo tròn của ảnh, mặc định 16 (tương đương rounded-xl)
}

const Section7: React.FC<Section7Props> = ({
    title = "Album Hình Cưới",
    description = "Khoảnh khắc yêu thương của chúng tôi.",
    column1 = [],
    column2 = [],
    borderRadius = 16, // px
}) => {
    const maxLength = Math.max(column1.length, column2.length);

    return (
        <section className="py-10 bg-white">
            <div className="w-[90%] mx-auto text-center">
                <h2 className="font-bold text-[28px] font-great-vibes text-[#0f3363]">{title}</h2>
                <p className="text-[14px] mb-6 mt-2 font-philosopher-noshadow text-gray-700">{description}</p>
            </div>

            <div className="w-[90%] mx-auto grid grid-cols-2 gap-2">
                {/* Cột trái */}
                <div className="flex flex-col gap-2">
                    {column1.map((img, idx) => (
                        <div
                            key={idx}
                            className="bg-center bg-cover"
                            style={{
                                backgroundImage: `url(${img.src})`,
                                height: `${img.height || 200}px`,
                                borderRadius: `${borderRadius}px`,
                            }}
                        ></div>
                    ))}
                </div>

                {/* Cột phải */}
                <div className="flex flex-col gap-2">
                    {column2.map((img, idx) => (
                        <div
                            key={idx}
                            className="bg-center bg-cover"
                            style={{
                                backgroundImage: `url(${img.src})`,
                                height: `${img.height || 200}px`,
                                borderRadius: `${borderRadius}px`,
                            }}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section7;
