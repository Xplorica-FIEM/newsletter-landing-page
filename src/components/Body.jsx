"use client";

import { useState, useRef } from "react";
import { Facebook, Instagram, Linkedin, Youtube, Globe } from "lucide-react";

const Body = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const [formState, setFormState] = useState({
        status: "idle", // idle, loading, success, error
        message: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        setFormState({ status: "loading", message: "" });

        const name = nameRef.current?.value.trim();
        const email = emailRef.current?.value.trim();

        console.log("Submitting:", { name, email });

        if (!name || !email) {
            setFormState({
                status: "error",
                message: "Please enter both your name and email.",
            });
            return;
        }

        const API = process.env.NEXT_PUBLIC_API_URL;
        const params = {
            method: "POST",
            body: JSON.stringify({ name, email }),
        };

        console.log("API URL:", API);
        console.log("Request Params:", params);

        try {
            const response = await fetch(API, params);
            const data = await response.json();

            if (response.ok && data.status === "success") {
                setFormState({
                    status: "success",
                    message: "You've been successfully subscribed to our Newsletter!",
                });
                if (nameRef.current) nameRef.current.value = "";
                if (emailRef.current) emailRef.current.value = "";
                return;
            }

            // Handle API errors or non-success status from the backend
            setFormState({
                status: "error",
                message: "An error occurred. Please try again later.",
            });
        } catch (error) {
            // Handle network errors or if response isn't valid JSON
            console.error("Subscription API call failed:", error);
            setFormState({
                status: "error",
                message: "Failed to connect. Please check your network and try again.",
            });
        }
    };

    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-x-hidden p-4">
            <div className="absolute inset-0 z-0 background-grid"></div>
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
            <main className="relative z-20 flex flex-col items-center text-center w-full max-w-4xl px-4">
                <div className="mb-8">
                    <img
                        src="/xplorica-logo.webp"
                        alt="Xplorica Logo"
                        width="96"
                        height="96"
                        className="w-24 h-24 [filter:drop-shadow(0_0_0.5rem_rgba(19,127,236,0.5))] transition-transform duration-800 ease-in-out hover:scale-125 hover:rotate-[360deg]"
                    />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tighter">
                    Unlock Your Potential with{" "}
                    <span className="text-primary">XplOriCa</span>
                </h1>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                    Stay ahead of the curve with the XplOriCa's Newsletter.
                    <br />
                    We cover
                    everything from Technology, Non-Tech, Gaming, and Photography to fuel
                    your curiosity. New Edition coming soon!
                </p>
                <div className="w-full max-w-xl">
                    {formState.status === "success" ? (
                        <div className="text-center p-4 bg-green-500/20 border border-green-500 rounded-lg">
                            <p className="font-bold text-white">{formState.message}</p>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="w-full flex flex-col sm:flex-row gap-2"
                        >
                            <input
                                className="flex-grow w-full px-4 py-3 bg-white/10 dark:bg-black/20 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                                placeholder="Your Name"
                                type="text"
                                ref={nameRef}
                                required
                                disabled={formState.status === "loading"}
                            />
                            <input
                                className="flex-grow w-full px-4 py-3 bg-white/10 dark:bg-black/20 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
                                placeholder="Enter your email"
                                type="email"
                                ref={emailRef}
                                required
                                disabled={formState.status === "loading"}
                            />
                            <button
                                className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-all duration-200 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                type="submit"
                                disabled={formState.status === "loading"}
                            >
                                {formState.status === "loading"
                                    ? "Subscribing..."
                                    : "Subscribe Now"}
                            </button>
                        </form>
                    )}
                    {formState.status === "error" && (
                        <p className="mt-2 text-red-400 text-center">{formState.message}</p>
                    )}
                </div>
            </main>
            <footer className="relative z-20 w-full mt-16 text-center text-gray-500 dark:text-gray-400">
                <div className="flex justify-center gap-6 mb-4">
                    <a className="transition-colors hover:text-[#1877F2]" href="https://www.facebook.com/XplOriCa.fiem" target="_blank" rel="noopener noreferrer">
                        <Facebook size={24} />
                    </a>
                    <a className="transition-colors hover:text-[#E4405F]" href="https://www.instagram.com/xplorica.fiem" target="_blank" rel="noopener noreferrer">
                        <Instagram size={24} />
                    </a>
                    <a className="transition-colors hover:text-[#0A66C2]" href="https://www.linkedin.com/company/xplorica" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={24} />
                    </a>
                    <a className="transition-colors hover:text-[#FF0000]" href="https://www.youtube.com/@xplorica-fiem" target="_blank" rel="noopener noreferrer">
                        <Youtube size={24} />
                    </a>
                    <a className="transition-colors hover:text-primary" href="https://xplorica.in" target="_blank" rel="noopener noreferrer">
                        <Globe size={24} />
                    </a>
                </div>
                <p className="text-sm">© 2025 Xplorica. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Body;