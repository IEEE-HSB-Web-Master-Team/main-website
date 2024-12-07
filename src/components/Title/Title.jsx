import React from "react";

const Title = ({ title }) => {
    return (
        <div className="title w-fit mx-auto p-6">
            <h2 className="title  text-3xl pb-2 text-center uppercase font-uni-sans-heavy text-sky-700 ">
                {title}
            </h2>
            <div className="hr w-[88%] h-1 bg-sky-700 rounded mx-auto mb-6"></div>
        </div>
    );
};

export default Title;
