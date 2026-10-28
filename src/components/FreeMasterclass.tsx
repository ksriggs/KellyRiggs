"use client"

import React, { useRef, useState } from 'react';
import { FaPlay, FaUser, FaEnvelope } from 'react-icons/fa6';

/**
 * Free Masterclass landing experience.
 *
 * Gated video: a muted ~5s preview loop plays in the background as a teaser,
 * the audience clicks play, enters name + email, and the real Vidello player
 * (with sound) is revealed. Leads are posted to our own /api/masterclass-lead
 * route, which forwards them server-side to the WordPress lead endpoint.
 */

const PLAYER_IFRAME = "https://embed.vidello.com/416/12xv2mfa0xkd739k/player.html";
const PREVIEW_MP4 = "https://embed.vidello.com/416/12xv2mfa0xkd739k/video/1280/video.mp4";
const POSTER = "https://embed.vidello.com/416/12xv2mfa0xkd739k/video/splash.jpg";
const PREVIEW_LOOP_SECONDS = 5;

type Stage = "idle" | "form" | "unlocked";

const inputClassName = `
    block w-full rounded-lg border border-card-light bg-card-light
    pl-10 p-2.5 text-sm font-semibold text-text
    placeholder:text-muted outline-none
    focus:border-primary focus:ring-primary
`;

const ctaClassName = `
    inline-flex items-center justify-center gap-2 rounded-md
    bg-accent text-background font-bold
    px-8 py-3 text-lg
    transition-all duration-150 hover:bg-accent/80
    disabled:opacity-50 disabled:pointer-events-none
    cursor-pointer
`;

export default function FreeMasterclass() {

    const [stage, setStage] = useState<Stage>("idle");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState(""); // honeypot
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const previewRef = useRef<HTMLVideoElement | null>(null);

    const openForm = () => {
        if (stage === "idle") {
            setStage("form");
        }
    };

    const handlePreviewTime = () => {
        const video = previewRef.current;
        if (video && video.currentTime >= PREVIEW_LOOP_SECONDS) {
            try {
                video.currentTime = 0;
            }
            catch {
                // ignore seek errors
            }
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError("");

        const trimmedName = name.trim();
        const trimmedEmail = email.trim();

        if (!trimmedName || !trimmedEmail) {
            setError("Please enter your name and email.");
            return;
        }

        setSubmitting(true);

        try {
            const res = await fetch("/api/masterclass-lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: trimmedName, email: trimmedEmail, website })
            });

            const data = await res.json().catch(() => ({}));

            if (!res.ok || !data?.ok) {
                setError(data?.error || "Something went wrong. Please try again.");
                setSubmitting(false);
                return;
            }

            setStage("unlocked");
        }
        catch {
            setError("Something went wrong. Please try again.");
            setSubmitting(false);
        }
    };

    return (
        <div className="w-full max-w-3xl flex flex-col items-center gap-10">

            {/* Heading */}
            <div className="flex flex-col items-center text-center gap-4">
                <span className="uppercase tracking-[0.2em] text-xs font-bold text-accent">
                    Free Masterclass
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                    Stop Rescue-Selling
                </h1>
                <p className="text-base md:text-lg text-muted max-w-xl">
                    Three leadership shifts that turn you from the person who saves every deal
                    into the leader of a team that owns the number.
                </p>
                <p className="text-sm text-muted">
                    Hosted by <span className="text-text font-semibold">Kelly Riggs</span> · Sales leadership coach &amp; author
                </p>
            </div>

            {/* Player */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-card-light bg-card shadow-xl">
                {stage === "unlocked" ? (
                    <iframe
                        src={`${PLAYER_IFRAME}?autoplay=1`}
                        title="Free Masterclass"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full border-0"
                    />
                ) : (
                    <button
                        type="button"
                        onClick={openForm}
                        aria-label="Watch the Free Masterclass"
                        className="group absolute inset-0 w-full h-full cursor-pointer"
                    >
                        <video
                            ref={previewRef}
                            className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
                            src={PREVIEW_MP4}
                            poster={POSTER}
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="auto"
                            onTimeUpdate={handlePreviewTime}
                        />
                        <span className="absolute left-4 top-4 z-10 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold text-text">
                            Free · 17 min
                        </span>
                        <span className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-background/40 to-background/70 px-6 text-center">
                            <span className="uppercase tracking-[0.2em] text-xs font-bold text-accent">
                                Free Masterclass
                            </span>
                            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-accent text-background shadow-lg transition-transform duration-200 group-hover:scale-110">
                                <FaPlay className="ml-1 h-6 w-6" />
                            </span>
                            <span className="text-xl font-bold text-text">
                                Watch the Masterclass
                            </span>
                            <span className="text-sm text-muted">
                                Click to play, quick sign-in to unlock
                            </span>
                        </span>
                    </button>
                )}
            </div>

            {/* Form */}
            {stage === "form" && (
                <div className="w-full md:w-9/12 rounded-xl border-2 border-background bg-card p-6 md:p-8">
                    <h2 className="text-xl font-bold text-center">Get instant access</h2>
                    <p className="text-sm text-muted text-center mt-1">
                        Enter your details and the masterclass starts right here.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
                        <div className="relative">
                            <FaUser className="pointer-events-none absolute inset-y-0 left-0 my-auto ml-3 h-4 w-4 text-primary" />
                            <input
                                type="text"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                placeholder="Your name"
                                autoComplete="name"
                                className={inputClassName}
                            />
                        </div>
                        <div className="relative">
                            <FaEnvelope className="pointer-events-none absolute inset-y-0 left-0 my-auto ml-3 h-4 w-4 text-primary" />
                            <input
                                type="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="you@email.com"
                                autoComplete="email"
                                className={inputClassName}
                            />
                        </div>

                        {/* Honeypot: real people leave this empty */}
                        <input
                            type="text"
                            value={website}
                            onChange={(event) => setWebsite(event.target.value)}
                            name="website"
                            tabIndex={-1}
                            autoComplete="off"
                            aria-hidden="true"
                            className="hidden"
                        />

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <button type="submit" disabled={submitting} className={`${ctaClassName} w-full`}>
                            {submitting ? "Unlocking..." : "Watch the Free Masterclass"}
                        </button>

                        <p className="text-center text-xs text-muted">
                            We respect your inbox. No spam, just your access and a follow-up.
                        </p>
                    </form>
                </div>
            )}

            {stage === "idle" && (
                <button type="button" onClick={openForm} className={ctaClassName}>
                    Watch the Free Masterclass
                </button>
            )}
        </div>
    );
};
