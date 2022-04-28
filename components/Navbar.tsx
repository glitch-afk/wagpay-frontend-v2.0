// eslint-disable-next-line no-use-before-define
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [show, setshow] = useState(false);
    return (
        <div className="bg-white font-avenir">
            <div className="2xl:container 2xl:mx-auto lg:px-7 sm:px-6 py-6 px-4">
                <nav>
                    <div className=" flex flex-row justify-between">
                        <div className=" flex space-x-3 items-center">
                            <Link href="/">
                                <a className="font-bold text-2xl font-cerebri leading-6 text-river-styx">
                                    WagPay
                                </a>
                            </Link>
                        </div>

                        <div className=" hidden sm:flex xl:pl-4 lg:pl-3 justify-end flex-row sm:space-x-4 md:space-x-6 lg:space-x-3 xl:space-x-4">
                            <a className="flex space-x-2 w-24 h-10 font-normal font-avenir text-base leading-3 text-river-styx cursor-pointer justify-center items-center hover:text-bright-greek">
                                <p>Dashboard</p>
                            </a>
                            <a className="rounded-md flex space-x-2 w-24 h-10 font-normal font-avenir text-base leading-3 text-river-styx cursor-pointer justify-center items-center hover:text-bright-greek">
                                <p>Docs</p>
                            </a>
                            <a className="rounded-md flex space-x-2 w-24 h-10 font-normal font-avenir text-base leading-3 text-river-styx cursor-pointer justify-center items-center hover:text-bright-greek">
                                <p>Use Cases</p>
                            </a>
                            {/* Save button */}
                            <Link href="/signup">
                                <a className="rounded flex space-x-2 w-44 h-10 font-normal font-avenir cursor-pointer text-base leading-3 text-white bg-bright-greek focus:outline-none focus:bg-indigo-800 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-600 duration-150 justify-center items-center">
                                    <p>Getting Started</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        className="iconify iconify--ic"
                                        width="18"
                                        height="18"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"
                                        />
                                    </svg>
                                </a>
                            </Link>
                        </div>
                        {/* Burger Icon */}

                        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                        <div
                            id="bgIcon"
                            onClick={() => setshow(!show)}
                            className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  block sm:hidden cursor-pointer"
                        >
                            <svg
                                className={`${show ? "hidden" : ""}`}
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    className=" transform duration-150"
                                    d="M4 6H20"
                                    stroke="#121823"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M4 12H20"
                                    stroke="#121823"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    className=" transform duration-150"
                                    d="M4 18H20"
                                    stroke="#121823"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <svg
                                className={`${show ? "block" : "hidden"}`}
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18 6L6 18"
                                    stroke="#121823"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M6 6L18 18"
                                    stroke="#121823"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Mobile and Small devices Navigation */}
                    <div
                        id="MobileNavigation"
                        className={`${
                            show ? "block" : "hidden"
                        } transform duration-150 sm:hidden mt-4`}
                    >
                        <hr className=" w-full bg-river-styx" />
                        <div className="flex flex-col gap-4 mt-4 max-w-sm mx-auto ">
                            <a className="cursor-pointer rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-river-styx focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                <p>Dashboard</p>
                            </a>
                            <hr className="w-full bg-river-styx" />
                            <a className="cursor-pointer rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-river-styx focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                <p>Docs</p>
                            </a>
                            <a className="cursor-pointer rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-river-styx focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
                                <p>Use Cases</p>
                            </a>
                            {/* Getting Started button */}
                            <Link href="/signup">
                                <a className="cursor-pointer rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-bright-greek focus:outline-none focus:bg-indigo-800 hover:bg-indigo-800 duration-150 justify-center items-center">
                                    <p>Getting Started</p>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        className="iconify iconify--ic"
                                        width="18"
                                        height="18"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"
                                        />
                                    </svg>
                                </a>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
