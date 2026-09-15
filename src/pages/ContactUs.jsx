import { FaArrowRight, FaXTwitter, FaWhatsapp, FaTelegram } from "react-icons/fa6";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="relative w-full overflow-hidden bg-purple-50/20"
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

            {/* Contact Content */}
            <div className="relative z-10 mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col items-center justify-center px-6 py-24 text-center sm:px-10">

                {/* Label */}
                <div className="flex w-fit items-center gap-2 rounded-full border border-blue-600 px-3 py-1 font-seven text-xs tracking-wider text-blue-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <span>Contact</span>
                </div>

                {/* Heading */}
                <h2 className="mt-6 max-w-3xl font-seven text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-[4rem]">
                    Have a project that{" "}
                    <span className="bg-linear-to-r from-blue-500 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        needs builders?
                    </span>
                </h2>

                {/* Description */}
                <p className="mt-6 max-w-xl font-five text-sm leading-6 tracking-wide text-black/60 sm:text-base">
                    Tell us what you're building. We'll see how we can help
                    bring it to life.
                </p>

                {/* CTA */}
                <a
                    href="https://x.com/TheOnchainLab"
                    target="_blank"
                    className="group mt-3 inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 font-five text-sm text-white transition-all duration-300 hover:bg-blue-800"
                >
                    <span>Start a project</span>

                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                {/* Supporting Text
                <p className="mt-4 max-w-md font-five text-xs leading-5 text-black/40">
                    Looking for developers, collaborators, or a team to help
                    execute your Web3 idea? Let's talk.
                </p> */}
            </div>

            {/* Footer */}
            <footer className="relative z-10 border-t border-black/10">

                <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-10 sm:px-10 md:flex-row md:items-center md:justify-between">

                    {/* Brand */}
                    <div>
                        <p className="bg-linear-to-r from-blue-800 to-purple-800 bg-clip-text font-six text-sm font-bold tracking-wide text-transparent">
                            ONCHAIN LABS
                        </p>

                        <p className="mt-2 max-w-xs font-five text-xs leading-5 text-black/45">
                            Bridging the gap between Web3 projects,
                            builders & developers.
                        </p>
                    </div>

                    
                    {/* Socials */}
                    <div className="flex items-center gap-3">

                        <a
                            href="https://x.com/TheOnChainLab"
                            target="_blank"
                            aria-label="X"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-black/50 transition-all duration-300 hover:border-black/20 hover:bg-black hover:text-white"
                        >
                            <FaXTwitter className="text-sm" />
                        </a>

                        <a
                            href="https://chat.whatsapp.com/BXL05K85R4YD9pXy1Vys32?mode=gi_t"
                            target="_blank"
                            aria-label="WhatsApp"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-black/50 transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:text-white"
                        >
                            <FaWhatsapp className="text-sm" />
                        </a>

                        <a
                            href="https://t.me/+U-NoHAZNrnpmYzE0"
                            target="_blank"
                            aria-label="Telegram"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-black/50 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
                        >
                            <FaTelegram className="text-sm" />
                        </a>

                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-black/5">
                    <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-5 sm:px-10 md:flex-row md:items-center md:justify-between">
                        <p className="font-five text-[11px] text-black/35">
                            © 2026 OnChain Labs. All rights reserved.
                        </p>

                        <p className="font-five text-[11px] text-black/35">
                            Built for the next generation of Web3.
                        </p>
                    </div>
                </div>

            </footer>
        </section>
    );
}