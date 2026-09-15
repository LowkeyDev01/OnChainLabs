import { useState } from "react";
import {
    FaArrowRight,
    FaXTwitter,
    FaWhatsapp,
    FaTelegram,
} from "react-icons/fa6";
import CommImage from "../assets/ComImage.png";

export default function CommSection() {
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
            <section
                id="community"
                className="relative min-h-screen w-full overflow-hidden bg-purple-50/20"
            >

                {/* Purple Grid Background */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-0 opacity-40"
                    style={{
                        backgroundImage: `
                            linear-gradient(
                                to right,
                                rgba(168, 85, 247, 0.05) 1px,
                                transparent 1px
                            ),
                            linear-gradient(
                                to bottom,
                                rgba(168, 85, 247, 0.05) 1px,
                                transparent 1px
                            )
                        `,
                        backgroundSize: "40px 40px",
                    }}
                />

                {/* Main Content */}
                <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-12 px-6 py-20 md:flex-row md:gap-8 md:px-10 lg:px-16">

                    {/* Content */}
                    <div className="w-full md:w-1/2">

                        {/* Section Label */}
                        <div className="flex w-fit items-center gap-2 rounded-full border border-blue-600 px-3 py-1 font-seven text-xs tracking-wider text-blue-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                            <span>Community</span>
                        </div>

                        {/* Heading */}
                        <h2 className="mt-5 max-w-xl font-seven text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-[3.55rem]">
                            A supportive
                            <span className="block bg-linear-to-r from-blue-500 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                community, always.
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mt-5 max-w-lg font-five text-sm leading-6 tracking-wide text-black/60">
                            Join a growing community of builders, creators, and learners
                            from around the world. Share ideas, get support, and grow
                            together on OnChain Labs.
                        </p>

                        {/* CTA */}
                        <button
                            onClick={openCommunity}
                            className="group mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full border border-blue-600 px-5 py-2.5 font-five text-sm text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                        >
                            <span>Join the community</span>

                            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </div>

                    {/* Image */}
                    <div className="flex w-full justify-center md:w-1/2">
                        <img
                            src={CommImage}
                            alt="OnChain Labs community"
                            loading="lazy"
                            className="w-full max-w-xl object-contain"
                        />
                    </div>

                </div>
            </section>

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