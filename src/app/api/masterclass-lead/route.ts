import { URLS } from '@/constants';
import { NextRequest, NextResponse } from 'next/server';
import validator from 'validator';

/**
 * Receives a Free Masterclass lead from the client and forwards it, server-side,
 * to the WordPress lead endpoint. Keeping this server-to-server avoids any
 * cross-origin (CORS) requirement and keeps the backend endpoint off the client.
 */

const LEAD_ENDPOINT = `${URLS.BASE_API_URL}/wp-json/krmc/v1/lead`;

export async function POST(req: NextRequest) {
    try {
        const body = await req.json().catch(() => ({}));

        const name = typeof body?.name === 'string' ? body.name.trim() : '';
        const email = typeof body?.email === 'string' ? body.email.trim() : '';
        const website = typeof body?.website === 'string' ? body.website : ''; // honeypot

        // Silently accept honeypot hits so bots get no signal.
        if (website) {
            return NextResponse.json({ ok: true });
        }

        if (!name || !validator.isEmail(email)) {
            return NextResponse.json(
                { ok: false, error: 'Please enter your name and a valid email.' },
                { status: 422 }
            );
        }

        const params = new URLSearchParams();
        params.set('name', name);
        params.set('email', email);

        const res = await fetch(LEAD_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params.toString(),
            cache: 'no-store'
        });

        if (!res.ok) {
            return NextResponse.json(
                { ok: false, error: 'Something went wrong. Please try again.' },
                { status: 502 }
            );
        }

        return NextResponse.json({ ok: true });
    }
    catch (err) {
        console.error('masterclass-lead error:', err);
        return NextResponse.json(
            { ok: false, error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
};
