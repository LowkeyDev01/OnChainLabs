import { useState } from "react";
import Logo from "../assets/Logo.png";
import {
    FaArrowRight,
    FaXTwitter,
    FaWhatsapp,
    FaTelegram,
} from "react-icons/fa6";

export default function NavBar() {
    const [communityOpen, setCommunityOpen] = useState(false);
    const [communityVisible, setCommunityVisible] = useState(false);

    const openCommunity = () => {
        setCommunityOpen(true);

        requestAnimationFrame(() => {
            setCommunityVisible(true);
        });
    };

    const closeCommunity = () => {
        setCommunityVisible(false);

        setTimeout(() => {
            setCommunityOpen(false);
        }, 400);
    };

    return (
        <>
            {/* Navbar */}
            <nav className="absolute top-0 left-1/2 z-100 w-[92%] -translate-x-1/2 py-4 sm:w-[88%] md:w-4/5">
                <div className="grid grid-cols-[1fr_auto] items-center md:grid-cols-3">

                    {/* Logo */}
                    <div className="flex min-w-0 items-center gap-1">
                        <img
                            src={Logo}
                            alt="OnChain Labs"
                            className="h-8 w-8 shrink-0"
                        />

                        <p className="truncate bg-linear-to-r from-blue-800 to-purple-800 bg-clip-text font-six text-xs font-bold tracking-wide text-transparent sm:text-sm">
                            ONCHAIN LABS
                        </p>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center justify-around font-five text-xs md:flex">
                        <a
                            href="#home"
                            className="cursor-pointer transition-colors duration-300 hover:text-blue-600"
                        >
                            Home
                        </a>

                        <a
                            href="#about"
                            className="cursor-pointer transition-colors duration-300 hover:text-blue-600"
                        >
                            About
                        </a>

                        <a
                            href="#community"
                            className="cursor-pointer transition-colors duration-300 hover:text-blue-600"
                        >
                            Community
                        </a>

                        <a
                            href="#contact"
                            className="cursor-pointer transition-colors duration-300 hover:text-blue-600"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Join Community */}
                    <div className="flex justify-end">
                        <button
                            onClick={openCommunity}
                            className="group flex cursor-pointer items-center justify-center gap-1 rounded-xl px-3 py-2 font-ten text-[11px] text-blue-500 transition-all duration-300 hover:gap-2 sm:px-5 sm:py-2.5 sm:text-xs"
                        >
                            <span>Join Community</span>

                            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Community Modal */}
            {communityOpen && (
                <div
                    onClick={closeCommunity}
                    className={`fixed inset-0 z-999 flex items-center justify-center bg-black/20 px-4 backdrop-blur-sm transition-opacity duration-[400ms] ease-out sm:px-5 ${
                        communityVisible
                            ? "opacity-100"
                            : "opacity-0"
                    }`}
                >
                    {/* Modal */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`w-full max-w-md rounded-3xl border border-black/5 bg-white p-5 shadow-2xl transition-all duration-[400ms] ease-out sm:p-6 ${
                            communityVisible
                                ? "scale-100 opacity-100"
                                : "scale-[0.98] opacity-0"
                        }`}
                    >

                        {/* Header */}
                        <div className="mb-5">
                            <p className="font-seven text-lg font-semibold tracking-tight sm:text-xl">
                                Join our community
                            </p>

                            <p className="mt-1 font-five text-xs leading-5 text-black/50 sm:text-sm">
                                Connect with builders, creators, and the
                                OnChain Labs community.
                            </p>
                        </div>

                        {/* Community Options */}
                        <div className="flex flex-col gap-3">

                            {/* X */}
                            <a
                                href="https://x.com/TheOnChainLab"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex cursor-pointer items-center justify-between rounded-2xl border border-black/5 p-3.5 transition-all duration-300 hover:border-black/10 hover:bg-black/[0.02] sm:p-4"
                            >
                                <div className="flex min-w-0 items-center gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black text-white">
                                        <FaXTwitter className="text-sm" />
                                    </div>

                                    <div className="min-w-0">
                                        <p className="font-six text-sm font-semibold">
                                            X
                                        </p>

                                        <p className="truncate font-five text-[11px] text-black/45 sm:text-xs">
                                            Follow updates and join the conversation.
                                        </p>
                                    </div>
                                </div>

                                <FaArrowRight className="ml-2 shrink-0 text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black" />
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://chat.whatsapp.com/BXL05K85R4YD9pXy1Vys32?mode=gi_t"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex cursor-pointer items-center justify-between rounded-2xl border border-black/5 p-3.5 transition-all duration-300 hover:border-black/10 hover:bg-black/[0.02] sm:p-4"
                            >
                                <div className="flex min-w-0 items-center gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-500 text-white">
                                        <FaWhatsapp className="text-lg" />
                                    </div>

                                    <div className="min-w-0">
                                        <p className="font-six text-sm font-semibold">
                                            WhatsApp
                                        </p>

                                        <p className="truncate font-five text-[11px] text-black/45 sm:text-xs">
                                            Chat with the OnChain Labs community.
                                        </p>
                                    </div>
                                </div>

                                <FaArrowRight className="ml-2 shrink-0 text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black" />
                            </a>

                            {/* Telegram */}
                            <a
                                href="https://t.me/+U-NoHAZNrnpmYzE0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex cursor-pointer items-center justify-between rounded-2xl border border-black/5 p-3.5 transition-all duration-300 hover:border-black/10 hover:bg-black/[0.02] sm:p-4"
                            >
                                <div className="flex min-w-0 items-center gap-3">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-white">
                                        <FaTelegram className="text-lg" />
                                    </div>

                                    <div className="min-w-0">
                                        <p className="font-six text-sm font-semibold">
                                            Telegram
                                        </p>

                                        <p className="truncate font-five text-[11px] text-black/45 sm:text-xs">
                                            Connect with builders and creators.
                                        </p>
                                    </div>
                                </div>

                                <FaArrowRight className="ml-2 shrink-0 text-black/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-black" />
                            </a>

                        </div>

                        {/* Close */}
                        <button
                            onClick={closeCommunity}
                            className="mt-5 w-full cursor-pointer rounded-xl py-2.5 font-five text-xs text-black/40 transition-colors duration-300 hover:bg-black/[0.03] hover:text-black"
                        >
                            Close
                        </button>

                    </div>
                </div>
            )}
        </>
    );
}