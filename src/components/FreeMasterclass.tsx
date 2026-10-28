"use client"

import React, { useRef, useState } from 'react';
import { FaPlay, FaUser, FaEnvelope } from 'react-icons/fa6';

/**
 * Free Masterclass landing experience.
 *
 * Faithful port of the original api.kellyriggs.com/free-masterclass page,
 * restyled with the kellyriggs.com design tokens:
 *   1. Hero with gated video (muted ~5s teaser loop → name/email gate → full player)
 *   2. "What's inside the masterclass" — three shift cards
 *   3. The Five Power Moves book promotion
 *   4. Free 30-minute call CTA
 *
 * Leads POST to /api/masterclass-lead, which forwards them server-side to the
 * WordPress lead endpoint (stores the lead, sends confirmation + admin emails).
 */

const PLAYER_IFRAME = "https://embed.vidello.com/416/12xv2mfa0xkd739k/player.html";
const PREVIEW_MP4 = "https://embed.vidello.com/416/12xv2mfa0xkd739k/video/1280/video.mp4";
const POSTER = "https://embed.vidello.com/416/12xv2mfa0xkd739k/video/splash.jpg";
const PREVIEW_LOOP_SECONDS = 5;

const HEADSHOT = "https://api.kellyriggs.com/wp-content/uploads/2020/04/Kelly-Riggs_head-shot-e1585860605185.jpg";
const BOOK_IMAGE = "https://api.kellyriggs.com/wp-content/uploads/2026/09/Five_Power_Moved_Book_Render_Front.png";
const BOOK_LINK = "https://kellyriggs.com/new/the-five-power-moves";
const CALL_LINK = "https://calendly.com/kellyriggs/30min";

type Stage = "idle" | "form" | "unlocked";

const SHIFTS = [
    {
        no: "1",
        title: "Coach, don't rescue",
        body: "Help your salespeople think through challenges instead of handing them the answer every time."
    },
    {
        no: "2",
        title: "Build accountability",
        body: "Turn vague promises into specific, measurable commitments your team actually follows through on."
    },
    {
        no: "3",
        title: "Develop people consistently",
        body: "Coach on a rhythm, not only when a deal is on fire, so your team keeps getting stronger."
    }
];

const inputClassName = `
    block w-full rounded-lg border border-card-light bg-card-light
    pl-10 p-2.5 text-sm font-semibold text-text
    placeholder:text-muted outline-none
    focus:border-primary focus:ring-primary
`;

const ctaGold = `
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
    const playerRef = useRef<HTMLDivElement | null>(null);

    const openForm = () => {
        if (stage === "idle") {
            setStage("form");
        }
    };

    const scrollToPlayer = () => {
        playerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
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
            setTimeout(scrollToPlayer, 50);
        }
        catch {
            setError("Something went wrong. Please try again.");
            setSubmitting(false);
        }
    };

    return (
        <div className="w-full flex flex-col items-center gap-24">

            {/* ===== 1. HERO ===== */}
            <section className="w-full max-w-3xl flex flex-col items-center gap-8">
                <div className="flex flex-col items-center text-center gap-4">
                    <span className="uppercase tracking-[0.25em] text-xs font-bold text-accent">
                        Free Masterclass · for sales managers
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                        Stop Rescue-Selling!<br />
                        Help Your Team <span className="text-accent">Own the Number.</span>
                    </h1>
                    <p className="text-base md:text-lg text-muted max-w-xl">
                        Three leadership shifts that turn you from the person who saves every deal
                        into the leader of a team that solves its own problems.
                    </p>

                    <div className="flex items-center gap-3 mt-2 rounded-full border border-card-light bg-card px-4 py-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={HEADSHOT}
                            alt="Kelly Riggs"
                            className="h-11 w-11 rounded-full object-cover border border-accent"
                        />
                        <div className="text-left leading-tight">
                            <p className="text-sm font-bold text-text">Hosted by Kelly Riggs</p>
                            <p className="text-xs text-muted">Sales leadership coach &amp; author</p>
                        </div>
                    </div>
                </div>

                {/* Player */}
                <div
                    ref={playerRef}
                    className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-card-light bg-card shadow-xl"
                >
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

                            <button type="submit" disabled={submitting} className={`${ctaGold} w-full`}>
                                {submitting ? "Unlocking..." : "Watch the Free Masterclass"}
                            </button>

                            <p className="text-center text-xs text-muted">
                                We respect your inbox. No spam, just your access and a follow-up.
                            </p>
                        </form>
                    </div>
                )}

                {stage !== "form" && (
                    <div className="flex flex-col items-center gap-2">
                        <button
                            type="button"
                            onClick={stage === "unlocked" ? scrollToPlayer : openForm}
                            className={ctaGold}
                        >
                            Watch the Free Masterclass
                        </button>
                        <span className="text-sm text-muted">
                            Takes a few seconds, then it plays right here.
                        </span>
                    </div>
                )}
            </section>

            {/* ===== 2. WHAT'S INSIDE ===== */}
            <section className="w-full max-w-5xl flex flex-col items-center gap-10">
                <div className="flex flex-col items-center text-center gap-3">
                    <h2 className="text-2xl md:text-4xl font-extrabold">
                        What&apos;s inside the masterclass
                    </h2>
                    <p className="text-muted max-w-xl">
                        Simple, practical shifts you can use in your very next one-on-one.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {SHIFTS.map((shift) => (
                        <div
                            key={shift.no}
                            className="flex flex-col gap-3 rounded-xl border-2 border-background bg-card p-6"
                        >
                            <span className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-background font-extrabold">
                                {shift.no}
                            </span>
                            <h3 className="text-lg font-bold">{shift.title}</h3>
                            <p className="text-sm text-muted">{shift.body}</p>
                        </div>
                    ))}
                </div>

                <p className="text-sm text-muted text-center">
                    Plus a simple 4-step coaching framework you can run in any deal review.
                </p>
            </section>

            {/* ===== 3. BOOK PROMOTION ===== */}
            <section className="w-full max-w-5xl">
                <div className="flex flex-col md:flex-row items-center gap-8 rounded-2xl border-2 border-background bg-card p-6 md:p-10">
                    <div className="shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={BOOK_IMAGE}
                            alt="The Five Power Moves by Kelly Riggs"
                            className="w-44 md:w-52 h-auto rounded-md"
                        />
                    </div>
                    <div className="flex flex-col gap-3 text-center md:text-left">
                        <span className="uppercase tracking-[0.2em] text-xs font-bold text-accent">
                            From the desk of Kelly Riggs
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold">The Five Power Moves</h2>
                        <p className="text-muted">
                            The ideas in this masterclass go deeper in Kelly&apos;s latest book, how
                            struggling sales managers become transformational sales leaders. If the
                            shifts resonate, this is where to take them further.
                        </p>
                        <div className="mt-2">
                            <a href={BOOK_LINK} className={ctaGold}>
                                Get The Five Power Moves
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== 4. FREE CALL CTA ===== */}
            <section className="w-full max-w-4xl">
                <div className="flex flex-col items-center text-center gap-4 rounded-2xl border-2 border-card-light bg-gradient-to-tr from-card to-card-light p-8 md:p-12">
                    <h2 className="text-2xl md:text-4xl font-extrabold">
                        Ready to build a team that owns the number?
                    </h2>
                    <p className="text-muted max-w-2xl">
                        Book a complimentary 30-minute call to talk through your team&apos;s
                        challenges, no pitch, just a real conversation about what needs to change.
                    </p>
                    <a
                        href={CALL_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-text font-bold px-8 py-3 text-lg transition-all duration-150 hover:bg-primary/80 cursor-pointer"
                    >
                        Book your free 30-minute call
                    </a>
                    <span className="text-sm text-muted">
                        No cost · No obligation · Straight talk
                    </span>
                </div>
            </section>
        </div>
    );
};
