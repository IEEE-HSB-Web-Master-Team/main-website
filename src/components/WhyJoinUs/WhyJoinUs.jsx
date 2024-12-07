import React from "react";
import Title from "../Title/Title";

const data = [
    {
        photo: "/whyJoinUs/whyJoinUs1.svg",
        content: "Gain hands-on experience in your field.",
    },
    {
        photo: "/whyJoinUs/whyJoinUs2.svg",
        content: "Connect with mentors and peers.",
    },
    {
        photo: "/whyJoinUs/whyJoinUs3.svg",
        content: "Develop leadership and teamwork.",
    },
    {
        photo: "/whyJoinUs/whyJoinUs4.svg",
        content: "Grow through projects and mentorship.",
    },
];
const WhyJoinUs = () => {
    return (
        <section
            className="WhyJoinUs bg-sky-50  min-h-[80vh]   "
            id="WhyJoinUs"
        >
            <div className="container mx-auto max-w-screen-xl ">
                <Title title={"why join us"} />
                <div className="grid  lg:grid-cols-4 md:grid-cols-2 p-4 sm:px-6 lg:px-8  gap-4">
                    {data.map((card, idx) => (
                        <div
                            key={idx}
                            className="col wow animate__fadeInUp card bg-white p-5 text-3xl font-uni-sans-heavy uppercase text-sky-700 rounded-2xl shadow-2xl"
                            data-wow-delay={`${0.2 * idx}s`}
                        >
                            <div className="whyJoinUsPhoto">
                                <img
                                    src={card.photo}
                                    alt="Why Join Us Photo"
                                    className="p-4"
                                />
                            </div>
                            <h3 className="text-center">{card.content}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyJoinUs;
