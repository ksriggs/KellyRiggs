import { NextResponse } from "next/server";
import { XMLParser } from "fast-xml-parser";

export async function GET() {
    try {
        const res = await fetch(
            "https://www.youtube.com/feeds/videos.xml?channel_id=UCz6c3blD3UdfjYP-8NPhDlA",
            { next: { revalidate: 3600 } }
        );

        const xml = await res.text();

        const parser = new XMLParser();
        const parsed = parser.parse(xml);

        return NextResponse.json({ ...parsed });
    }
    catch(err) {
        console.error("Error fetching YouTube Feed: ", err);
        return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
    }
    
};