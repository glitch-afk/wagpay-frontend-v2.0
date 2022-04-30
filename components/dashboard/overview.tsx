/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-constant-condition */
/* eslint-disable react/button-has-type */
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "@faker-js/faker";

const people = [
    {
        name: "Cosmix",
        amount: "100 USDC",
        paid_in: "SOL",
        chain: "Solana",
    },
    {
        name: "v3n0m",
        amount: "100 USDC",
        paid_in: "SOL",
        chain: "Eth",
    },
    {
        name: "Ray",
        amount: "100 USDC",
        paid_in: "SOL",
        chain: "Solana",
    },
    {
        name: "Rohan",
        amount: "100 USDC",
        paid_in: "SOL",
        chain: "Polygon",
    },
    {
        name: "Shivam",
        amount: "100 USDC",
        paid_in: "SOL",
        chain: "Eth",
    },
];

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "bottom" as const,
        },
        title: {
            display: false,
        },
    },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
    labels,
    datasets: [
        {
            label: "Dates",
            data: labels.map(() =>
                faker.datatype.number({ min: 0, max: 100000 })
            ),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
    ],
};

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const cards = [
    {
        name: "Total Revenue",
        href: "#",
        amount: "5000 USDC",
        bgColorClass: "bg-indigo-500",
    },
    {
        name: "Total Visits",
        href: "#",
        amount: "455 visits",
        bgColorClass: "bg-indigo-500",
    },
    {
        name: "Total Pages",
        href: "#",
        amount: "6 Pages",
        bgColorClass: "bg-indigo-500",
    },
    {
        name: "Total Pages",
        href: "#",
        amount: "6 Pages",
        bgColorClass: "bg-indigo-500",
    },
];

const Overview = () => {
    return (
        <div className="mt-8 font-avenir">
            <div className="mx-auto">
                <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {/* Card */}
                    {cards.map((card) => (
                        <div
                            key={card.name}
                            className={classNames(
                                card.bgColorClass,
                                "overflow-hidden shadow relative"
                            )}
                        >
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
                            >
                                <svg
                                    className="absolute inset-0 h-full w-full"
                                    preserveAspectRatio="xMidYMid slice"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 1463 360"
                                >
                                    <path
                                        className="text-bright-greek text-opacity-40"
                                        fill="currentcolor"
                                        d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                                    />
                                </svg>
                            </div>
                            <div className="p-5">
                                <div className="flex items-center">
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-medium font-semibold text-white truncate">
                                                {card.name}
                                            </dt>
                                            <dd>
                                                <div className="text-2xl font-bold text-white my-3">
                                                    {card.amount}
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pt-6 mx-auto ">
                <div className="grid grid-cols-1 xl:grid-cols-3 w-full space-y-8 xl:space-y-0 space-x-2">
                    {/* section #2 left side */}
                    <div className="w-full col-span-2 pb-6 md:pb-0 md:pr-6 h-max">
                        <div className="">
                            <Line options={options} data={data} />
                        </div>
                    </div>
                    {/* section #2 right side */}
                    <div className="w-full h-max col-span-1">
                        <div className="">
                            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                                <div className="aspect-w-10 bg-white aspect-h-6 sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none overflow-hidden shadow-xl lg:h-full">
                                    <div className="relative object-cover lg:h-full lg:w-full">
                                        <div className="z-50 flex h-full w-full flex-col items-center justify-center space-y-5 bg-[#6C7EE1]/25 p-5">
                                            <h1 className=" py-3 px-4 font-cerebri text-3xl text-center font-bold text-river-styx">
                                                Claim Username
                                            </h1>
                                            <input
                                                type="email"
                                                placeholder="example@email.com"
                                                className="w-full font-avenir border border-[#abaef8] py-4 pl-4 text-sm text-river-styx bg-white font-base outline-none"
                                            />
                                            <div className="flex w-full justify-between">
                                                <input
                                                    type="text"
                                                    placeholder="@username"
                                                    className="w-full font-avenir border border-[#abaef8] py-3 pl-4 text-river-styx text-sm font-base bg-white outline-none"
                                                />
                                                <button className="w-1/3 font-avenir bg-bright-greek py-3 px-4 font-medium text-white shadow hover:bg-indigo-700 focus:outline-none">
                                                    Check
                                                </button>
                                            </div>
                                            {true ? (
                                                <button className="flex w-full items-center bg-white justify-between border border-[#abaef8] p-3  font-base">
                                                    <span className="text-river-styx font-avenir">
                                                        Connect Ethereum Wallet
                                                    </span>
                                                    <img
                                                        src=""
                                                        alt=""
                                                        className="items-end"
                                                    />
                                                </button>
                                            ) : (
                                                <p className="w-20 truncate text-center lg:w-full">
                                                    eth
                                                </p>
                                            )}
                                            {true ? (
                                                <button className="font-avenir flex w-full text-river-styx bg-white items-center justify-between border border-[#abaef8] p-3  font-base">
                                                    Connect Sol Wallet
                                                    <img
                                                        src="/sol.png"
                                                        alt=""
                                                    />
                                                </button>
                                            ) : (
                                                <p className="w-20 truncate text-center lg:w-full">
                                                    Sol
                                                </p>
                                            )}
                                            <button className="w-full font-avenir bg-bright-greek py-3 px-4 font-medium text-white shadow  hover:bg-indigo-700 focus:outline-none">
                                                Claim
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* bottom table */}
            <div className="mt-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-2xl font-semibold text-river-styx">
                            Recent transactions
                        </h1>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center py-2 font-medium text-river-styx hover:underline hover:text-bright-greek"
                        >
                            View All Transactions
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                aria-hidden="true"
                                role="img"
                                className="iconify iconify--ci"
                                width="32"
                                height="32"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="m16 15l3-3l-3-3l-.707.707l1.793 1.793H5v1h12.086l-1.793 1.793L16 15Z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="mt-2 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-river-styx ring-opacity-5">
                                <table className="min-w-full divide-y divide-gray-900">
                                    <thead className="bg-river-styx font-avenir">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="py-3.5 pl-4 pr-3 text-center text-md text-white sm:pl-6"
                                            >
                                                Sr No.
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 pl-4 pr-3 text-center text-md text-white sm:pl-6"
                                            >
                                                Customer Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-center text-md text-white"
                                            >
                                                Amount
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-center text-md text-white"
                                            >
                                                Paid in
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-center text-md text-white"
                                            >
                                                Chain
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-center text-md text-white"
                                            >
                                                Transaction Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {people.map((person, idx) => (
                                            // eslint-disable-next-line react/no-array-index-key
                                            <tr key={idx}>
                                                <td className="whitespace-nowrap py-4 font-avenir pl-4 pr-3 text-sm text-center text-river-styx sm:pl-6">
                                                    {idx}
                                                </td>
                                                <td className="whitespace-nowrap py-4 font-avenir pl-4 pr-3 text-sm text-center text-river-styx sm:pl-6">
                                                    {person.name}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 font-avenir text-sm text-center text-river-styx">
                                                    {person.amount}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 font-avenir text-sm text-center text-river-styx">
                                                    {person.paid_in}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 font-avenir text-sm text-center text-river-styx">
                                                    {person.chain}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 font-avenir text-sm text-center text-river-styx">
                                                    Success
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
