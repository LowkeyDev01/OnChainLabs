import { useState } from "react";
import { FaArrowRight, FaXTwitter, FaWhatsapp, FaTelegram } from "react-icons/fa6";
import LeftImage from "../assets/Left.png";
import RightImage from "../assets/Right.png";

export default function HeroSection() {
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
        <div
            id="home"
            className="relative flex h-screen min-h-[650px] w-full flex-col items-center overflow-hidden bg-purple-50/20"
        >

            {/* Purple Grid Background */}
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-40"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Main Content */}
            <div className="relative z-10 flex w-full max-w-6xl flex-col items-center px-5 pt-32 text-center sm:px-8 sm:pt-40">

                {/* Heading */}
                <p className="font-seven text-[3.2rem] font-bold leading-none tracking-tighter sm:text-[4.5rem] md:text-[5.5em]">
                    Reintroducing:
                </p>

                <p className="-mt-2 bg-linear-to-r from-blue-500 via-indigo-600 to-purple-600 bg-clip-text font-seven text-[3.3rem] font-bold leading-none tracking-tighter text-transparent sm:-mt-5 sm:text-[4.8rem] md:-mt-2 md:text-[5.9em]">
                    OnChain Labs
                </p>

                {/* Description */}
                <div className="mt-5 max-w-xl px-2 sm:mt-2">
                    <p className="text-sm leading-6 text-black/60 sm:text-base">
                        Connecting Web3 Projects, builders & developers.
                    </p>

                    <p className="text-sm leading-6 text-black/60 sm:text-base">
                        A community where ideas, talent and opportunities meet.
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 text-sm sm:w-auto sm:flex-row sm:gap-5">

                    <button
                        onClick={openCommunity}
                        className="flex w-full max-w-[240px] cursor-pointer items-center justify-center gap-1.5 rounded-full bg-blue-700 px-6 py-2.5 text-xs text-white transition hover:bg-blue-800 sm:w-auto"
                    >
                        <span>Join the Community</span>
                        <FaArrowRight className="-mb-0.5" />
                    </button>

                    <a
                        href="#contact"
                        className="flex w-full max-w-[240px] cursor-pointer items-center justify-center rounded-full border border-black/20 px-6 py-2.5 text-xs font-semibold text-blue-800 transition hover:bg-black/5 sm:w-auto"
                    >
                        Contact us
                    </a>

                </div>
            </div>

            {/* Left Decoration */}
            <img
                src={LeftImage}
                className="absolute bottom-0 left-[-80px] z-10 w-52 sm:left-[-40px] sm:w-64 md:bottom-10 md:left-0 md:w-80"
                alt="Left decoration"
            />

            {/* Right Decoration */}
            <img
                src={RightImage}
                className="absolute bottom-0 right-[-80px] z-10 w-52 sm:right-[-40px] sm:w-64 md:bottom-10 md:right-0 md:w-80"
                alt="Right decoration"
            />

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
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`w-full max-w-md rounded-3xl border border-black/5 bg-white p-5 text-left shadow-2xl transition-all duration-[400ms] ease-out sm:p-6 ${
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

        </div>
    );
}