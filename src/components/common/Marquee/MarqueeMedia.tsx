"use client"

import { useState, useEffect } from 'react';

interface MarqueeMediaProps {
    url: string,
    width?: number,
    fill?: string
};

function isSvgUrl(url: string) {
    return url.split('?')[0].toLowerCase().endsWith('.svg');
};

function recolorSvg(svgText: string, fill?: string): string {
    if (!fill) return svgText;

    const parser = new DOMParser();
    const doc = parser.parseFromString(svgText, 'image/svg+xml');

    if (doc.querySelector('parsererror')) return svgText;

    const svgEl = doc.querySelector('svg');
    if (!svgEl) return svgText;

    // Strip any class-based/style-block fills that would override our attribute
    doc.querySelectorAll('style').forEach((styleEl) => styleEl.remove());

    const shapeSelectors = 'path, circle, rect, polygon, ellipse, line, polyline, g';
    doc.querySelectorAll(shapeSelectors).forEach((el) => {
        const currentFill = el.getAttribute('fill');
        if (currentFill !== 'none') {
            el.setAttribute('fill', fill);
        }
        // Clear any inline style fill override, which takes precedence over attributes
        const styleAttr = el.getAttribute('style');
        if (styleAttr?.includes('fill')) {
            el.setAttribute('style', styleAttr.replace(/fill\s*:\s*[^;]+;?/g, ''));
        }
    });

    svgEl.setAttribute('fill', fill);

    return new XMLSerializer().serializeToString(svgEl);
};

export default function MarqueeMedia({ url, width, fill }: MarqueeMediaProps) {
    const [markup, setMarkup] = useState<string | null>(null);
    const [failed, setFailed] = useState(false);
    const svg = isSvgUrl(url);

    useEffect(() => {
        if (!svg) return;

        let cancelled = false;

        fetch(`/api/svg-proxy?url=${encodeURIComponent(url)}`)
            .then((res) => {
                if (!res.ok) throw new Error('fetch failed');
                return res.text();
            })
            .then((text) => {
                if (cancelled) return;
                setMarkup(fill ? recolorSvg(text, fill) : text);
            })
            .catch((err) => {
                console.error("", err);
                setFailed(true)
            });

        return () => {
            cancelled = true;
        };
    }, [url, fill, svg]);

    if (svg) {
        if (failed) return null;
        if (!markup) return <div style={{ width, aspectRatio: '1 / 1' }} className="shrink-0" />;

        return (
            <div
                style={{ width }}
                className="shrink-0 [&_svg]:w-full [&_svg]:h-auto"
                dangerouslySetInnerHTML={{ __html: markup }}
            />
        );
    }

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={url} width={width} style={{ width, height: 'auto' }} alt="" />
    );
}