// app/api/svg-proxy/route.ts
import { URLS } from '@/constants';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const url = req.nextUrl.searchParams.get('url');
    if (!url || !url.startsWith(URLS.BASE_API_URL)) {
        return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
    }

    const res = await fetch(url);
    if (!res.ok) {
        return NextResponse.json({ error: 'Fetch failed' }, { status: 502 });
    }

    const text = await res.text();
    return new NextResponse(text, {
        headers: { 'Content-Type': 'image/svg+xml' },
    });
}