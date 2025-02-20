import React from "react";
import Title from "../Title/Title";
import member from "../../assets/images/member.jpg";
import bestMembersPhoto from "../../assets/images/Best Members.jpg";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const MembersOfMonth = () => {
    const queryClient = useQueryClient();

    const getMembersOfMonth = () => {
        return axios.get("/membersOfMonthData.json");
    };
    const { isLoading, data, isError, error } = useQuery({
        queryKey: ["membersOfMonth"],
        queryFn: getMembersOfMonth,
    });
    if (isLoading) {
        return (
            <div className="col w-full  xl:max-h-[80vh] lg:max-h-[80vh] md:min-h-[80vh] sm:min-h-[300vh] xs:min-h-[230vh] ">
                <Title title={"members of the month"} />
                <div className="text-center">
                    <div role="status">
                        <svg
                            aria-hidden="true"
                            className="inline w-[80px] h-[80px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                            />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="background relative flex flex-col items-center">
            <img
                src={bestMembersPhoto}
                alt="background"
                className="w-full object-cover opacity-15"
                style={{ height: "100%", position: "absolute", zIndex: 0 }}
            />
            <div className="container mx-auto max-w-screen-xl z-10 relative  px-8 py-8 flex flex-col items-center">
                <Title title={"members of the month"} />
                <div className="grid  lg:grid-cols-4 md:grid-cols-2 xs:px-20 py-8  lg:px-8  gap-24  ">
                    {data?.data?.map((card, idx) => (
                        <div
                            className="col  wow animate__flipInY"
                            data-wow-delay={`${idx * 0.2}s`}
                            key={idx}
                        >
                            <div className="bestMemberCard bg-white  shadow-2xl lg:h-3/5 md:h-3/2 relative wow animate__fadeIn before:z-0 before:absolute before:bg-sky-800 before:w-full before:rounded-2xl after:rounded-2xl rounded-2xl before:-rotate-6 before:h-full before:-top-5 before:-left-4 after:z-10 after:absolute after:bg-sky-600 after:w-full  after:rotate-6 after:h-full after:-top-5 after:-right-4">
                                <img
                                    src={member}
                                    alt="Why Join Us Photo"
                                    className="h-full object-cover w-full rounded-2xl z-50 relative "
                                />
                            </div>
                            <div className="memberDetails uppercase text-center mt-3 font-uni-sans-heavy text-sky-600">
                                <h3 className="text-3xl">{card.name}</h3>
                                <h3 className="mt-2 text-lg">
                                    {card.committee}
                                </h3>
                            </div>
                        </div>
                    ))}
                    {isError && console.log(error)}
                </div>
            </div>
        </div>
    );
};

export default MembersOfMonth;
