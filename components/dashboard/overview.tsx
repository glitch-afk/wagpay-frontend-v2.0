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
        bgColorClass: "bg-pink-400",
    },
    {
        name: "Total Visits",
        href: "#",
        amount: "455 visits",
        bgColorClass: "bg-indigo-400",
    },
    {
        name: "Total Pages",
        href: "#",
        amount: "6 Pages",
        bgColorClass: "bg-green-300",
    },
    {
        name: "Total Pages",
        href: "#",
        amount: "6 Pages",
        bgColorClass: "bg-red-400",
    },
];

const Overview = () => {
    return (
        <div className="mt-8">
            <div className="mx-auto">
                <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {/* Card */}
                    {cards.map((card) => (
                        <div
                            key={card.name}
                            className={classNames(
                                card.bgColorClass,
                                "overflow-hidden shadow rounded"
                            )}
                        >
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
                    <div className="w-full col-span-2 pb-6 md:pb-0 md:pr-6 h-max bg-red-100">
                        <div className="rounded">
                            <Line
                                options={options}
                                data={data}
                                className="w-2/3"
                            />
                        </div>
                    </div>
                    {/* section #2 right side */}
                    <div className="w-full  bg-green-100 h-max">
                        <div className="rounded">
                            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                                <div className="aspect-w-10 bg-white aspect-h-6 sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none overflow-hidden rounded shadow-xl lg:h-full">
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
                                            <div className="flex w-full justify-between rounded">
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
                        <h1 className="text-xl font-semibold text-gray-900">
                            Recent transactions
                        </h1>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-river-styx"
                        >
                            View All Transactions
                        </button>
                    </div>
                </div>
                <div className="mt-2 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
                                            >
                                                Sr No.
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
                                            >
                                                Customer Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                            >
                                                Amount
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                            >
                                                Paid in
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                            >
                                                Chain
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                                            >
                                                Transaction Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {people.map((person, idx) => (
                                            // eslint-disable-next-line react/no-array-index-key
                                            <tr key={idx}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-center font-medium text-gray-900 sm:pl-6">
                                                    {idx}
                                                </td>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-center font-medium text-gray-900 sm:pl-6">
                                                    {person.name}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">
                                                    {person.amount}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">
                                                    {person.paid_in}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">
                                                    {person.chain}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-center text-gray-500">
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
