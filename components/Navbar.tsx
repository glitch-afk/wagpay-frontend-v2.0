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
                            <Link href="/dashboard">
                                <a className="flex space-x-2 w-24 h-10 font-normal font-avenir text-base leading-3 text-river-styx cursor-pointer justify-center items-center hover:text-bright-greek">
                                    <p>Dashboard</p>
                                </a>
                            </Link>
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
                            <Link href="/dashboard">
                                <a className="cursor-pointer rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-river-styx focus:outline-none focus:bg-bright-greek hover:bg-bright-greek duration-150 justify-center items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        aria-hidden="true"
                                        role="img"
                                        className="iconify iconify--ic"
                                        width="24"
                                        height="24"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
                                        />
                                    </svg>
                                    <p>Dashboard</p>
                                </a>
                            </Link>
                            <hr className="w-full bg-river-styx" />
                            <a className="cursor-pointer rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-river-styx focus:outline-none focus:bg-bright-greek hover:bg-bright-greek duration-150 justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="iconify iconify--ion"
                                    width="24"
                                    height="24"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M428 224H288a48 48 0 0 1-48-48V36a4 4 0 0 0-4-4h-92a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h224a64 64 0 0 0 64-64V228a4 4 0 0 0-4-4Zm-92 160H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32Zm0-80H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32Z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M419.22 188.59L275.41 44.78a2 2 0 0 0-3.41 1.41V176a16 16 0 0 0 16 16h129.81a2 2 0 0 0 1.41-3.41Z"
                                    />
                                </svg>
                                <p>Docs</p>
                            </a>
                            <a className="cursor-pointer rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-river-styx focus:outline-none focus:bg-bright-greek hover:bg-bright-greek duration-150 justify-center items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className="iconify iconify--ic"
                                    width="24"
                                    height="24"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="m21.67 18.17l-5.3-5.3h-.99l-2.54 2.54v.99l5.3 5.3c.39.39 1.02.39 1.41 0l2.12-2.12a.996.996 0 0 0 0-1.41z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="m17.34 10.19l1.41-1.41l2.12 2.12a3 3 0 0 0 0-4.24l-3.54-3.54l-1.41 1.41V1.71l-.7-.71l-3.54 3.54l.71.71h2.83l-1.41 1.41l1.06 1.06l-2.89 2.89l-4.13-4.13V5.06L4.83 2.04L2 4.87L5.03 7.9h1.41l4.13 4.13l-.85.85H7.6l-5.3 5.3a.996.996 0 0 0 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0l5.3-5.3v-2.12l5.15-5.15l1.06 1.05z"
                                    />
                                </svg>
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
