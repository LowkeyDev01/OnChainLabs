import { FaArrowRight } from "react-icons/fa6";
import AboutImage from "../assets/AboutImage.png";

export default function AboutSection() {
    return (
        <section
            id="about"
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

                {/* Text */}
                <div className="w-full md:w-3/5">

                    {/* Label */}
                    <div className="flex w-fit items-center gap-2 rounded-full border border-blue-600 px-3 py-1 font-seven text-xs tracking-wider text-blue-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                        <span>About us</span>
                    </div>

                    {/* Heading */}
                    <h2 className="mt-5 max-w-3xl font-seven text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl lg:text-[3.55rem]">
                        Building the community
                        <span className="block">
                            behind the{" "}
                            <span className="bg-linear-to-r from-blue-500 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                next generation
                            </span>
                        </span>

                        <span className="block bg-linear-to-r from-blue-500 via-purple-600 to-purple-600 bg-clip-text text-transparent">
                            of Web3.
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mt-5 max-w-xl font-five text-sm leading-6 tracking-wide text-black/60">
                        OnChain Labs connects builders, developers, creators, and
                        Web3 projects to collaborate, learn, and create
                        opportunities together.
                    </p>

                    {/* CTA */}
                    <a
                        href="#community"
                        className="group mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full border border-blue-600 px-5 py-2.5 font-five text-sm text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                    >
                        <span>Join the community</span>

                        <FaArrowRight
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </a>
                </div>

                {/* Image */}
                <div className="flex w-full justify-center md:w-2/5">
                    <img
                        src={AboutImage}
                        alt="About OnChain Labs"
                        loading="lazy"
                        className="h-auto w-full max-w-xl object-contain"
                    />
                </div>

            </div>
        </section>
    );
}