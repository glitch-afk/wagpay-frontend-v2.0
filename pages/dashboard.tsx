/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/function-component-definition */
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
    BellIcon,
    MenuAlt2Icon,
    XIcon,
    DocumentTextIcon,
    CogIcon,
    ViewGridIcon,
    DocumentIcon,
    BeakerIcon,
    PaperAirplaneIcon,
    ReceiptTaxIcon,
    CreditCardIcon,
} from "@heroicons/react/outline";

import Overview from "../components/dashboard/overview";

const navigation = [
    { name: "Overview", href: "#", icon: ViewGridIcon, current: true },
    { name: "Pages", href: "#", icon: DocumentIcon, current: false },
    { name: "Products", href: "#", icon: BeakerIcon, current: false },
    {
        name: "Subscription",
        href: "#",
        icon: PaperAirplaneIcon,
        current: false,
    },
    { name: "Invoices", href: "#", icon: ReceiptTaxIcon, current: false },
    { name: "Transaction", href: "#", icon: CreditCardIcon, current: false },
];
const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Sign out", href: "#" },
];

const bottomNavigation = [
    { name: "Settings", href: "#", icon: CogIcon, current: false },
    {
        name: "Documentation",
        href: "#",
        icon: DocumentTextIcon,
        current: false,
    },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 flex z-40 md:hidden"
                    onClose={setSidebarOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                    <button
                                        type="button"
                                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none"
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <span className="sr-only">
                                            Close sidebar
                                        </span>
                                        <XIcon
                                            className="h-6 w-6 text-river-styx"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                            </Transition.Child>
                            <div className="flex-shrink-0 flex items-center px-4">
                                <span className="h-8 w-auto text-river-styx font-bold text-2xl">
                                    WagPay
                                </span>
                            </div>
                            <div className="mt-5 flex-1 h-0 overflow-y-auto">
                                <nav className="px-2 space-y-3">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? "bg-bright-greek text-white"
                                                    : "text-river-styx hover:bg-indigo-200 hover:text-bright-greek",
                                                "group flex items-center px-2 py-2 text-base"
                                            )}
                                        >
                                            <item.icon
                                                className={classNames(
                                                    item.current
                                                        ? "text-gray-300"
                                                        : "text-river-styx group-hover:text-bright-greek",
                                                    "mr-4 flex-shrink-0 h-6 w-6"
                                                )}
                                                aria-hidden="true"
                                            />
                                            {item.name}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            {/* sidebar bottom panel */}
                            <div className="py-3 border-t border-gray-200">
                                <nav className="px-2 space-y-3">
                                    {bottomNavigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? "bg-bright-greek text-white"
                                                    : "text-river-styx hover:bg-indigo-200 hover:text-bright-greek",
                                                "group flex items-center px-2 py-2 text-base"
                                            )}
                                        >
                                            <item.icon
                                                className={classNames(
                                                    item.current
                                                        ? "text-gray-300"
                                                        : "text-gray-400 group-hover:text-bright-greek",
                                                    "mr-4 flex-shrink-0 h-6 w-6"
                                                )}
                                                aria-hidden="true"
                                            />
                                            {item.name}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
                {/* Sidebar component */}
                <div className="flex-1 flex flex-col min-h-0 bg-white">
                    <div className="flex items-center h-16 flex-shrink-0 px-4">
                        <span className="h-8 w-auto text-river-styx font-extrabold text-xl">
                            WagPay
                        </span>
                    </div>

                    <div className="flex-1 flex flex-col overflow-y-auto">
                        <nav className="flex-1 px-2 py-4 space-y-3">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-bright-greek text-white "
                                            : "text-river-styx hover:bg-indigo-200 hover:text-bright-greek",
                                        "group flex items-center px-2 py-2 text-sm"
                                    )}
                                >
                                    <item.icon
                                        className={classNames(
                                            item.current
                                                ? "text-gray-300"
                                                : "text-river-styx group-hover:text-bright-greek",
                                            "mr-3 flex-shrink-0 h-6 w-6"
                                        )}
                                        aria-hidden="true"
                                    />
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                        {/* sidebar bottom panel desktop size */}
                        <div className="py-3 border-t border-gray-200">
                            <nav className="px-2 space-y-3">
                                {bottomNavigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? "bg-bright-greek text-white"
                                                : "text-river-styx hover:bg-indigo-200 hover:text-bright-greek",
                                            "group flex items-center px-2 py-2 text-base"
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                item.current
                                                    ? "text-gray-300"
                                                    : "text-gray-400 group-hover:text-bright-greek",
                                                "mr-4 flex-shrink-0 h-6 w-6"
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:pl-64 flex flex-col">
                <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white">
                    <button
                        type="button"
                        className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none md:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="flex-1 px-4 flex justify-end">
                        <div className="ml-4 flex items-center md:ml-6">
                            <button
                                type="button"
                                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="sr-only">
                                    View notifications
                                </span>
                                <BellIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>

                            {/* Profile dropdown */}
                            <Menu as="div" className="ml-3 relative">
                                <div>
                                    <Menu.Button className="max-w-xs bg-bright-greek text-white py-3 px-5 flex items-center text-sm focus:outline-none">
                                        <span className="sr-only">
                                            Open user menu
                                        </span>
                                        Gm, v3n0m
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        {userNavigation.map((item) => (
                                            <Menu.Item key={item.name}>
                                                {({ active }) => (
                                                    <a
                                                        href={item.href}
                                                        className={classNames(
                                                            active
                                                                ? "bg-gray-100"
                                                                : "",
                                                            "block px-4 py-2 text-sm text-gray-700"
                                                        )}
                                                    >
                                                        {item.name}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </div>

                <main className="flex-1">
                    <div className="py-6">
                        <div className="mx-auto px-4 sm:px-6 md:px-8">
                            <Overview />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
