import type {Metadata, Viewport} from 'next'
import {Outfit} from 'next/font/google'
import '../../styles/globals.css'
import {ReactNode} from "react";
import {cn} from "@/utils/css";
import Providers from "@/components/Providers";

const outfitFont = Outfit({
    weight: ['300', '500', '600'],
    subsets: ['latin'],
    display: 'swap',
});

export const viewport: Viewport = {
    themeColor: '#626BFF',
}

export const metadata: Metadata = {
    title: 'Config Sync',
    metadataBase: new URL("https://config-sync.com"),
    description: 'Config Sync: The best way to synchronize your Minecraft server configurations.',
    keywords: ['Config Sync', 'Minecraft', 'Minecraft Server', 'Minecraft Servers', 'Minecraft Server Configuration', 'Minecraft Server Configurations', 'Minecraft Server Config', 'Minecraft Server Configs', 'Minecraft Server Config Sync', 'Minecraft Server Config Synchronization', 'Minecraft Server Config Syncing', 'Minecraft Server Configurations Sync', 'Minecraft Server Configurations Synchronization', 'Minecraft Server Configurations Syncing', 'Minecraft Server Config Sync Platform', 'Minecraft Server Config Synchronization Platform', 'Minecraft Server Config Syncing Platform', 'Minecraft Server Configurations Sync Platform', 'Minecraft Server Configurations Synchronization Platform', 'Minecraft Server Configurations Syncing Platform', 'Minecraft Server Config Sync Service', 'Minecraft Server Config Synchronization Service', 'Minecraft Server Config Syncing Service', 'Minecraft Server Configurations Sync Service', 'Minecraft Server Configurations Synchronization Service', 'Minecraft Server Configurations Syncing Service'],
    authors: [{name: 'VertCode Development', url: 'https://vertcode.dev'}],
    robots: 'index, follow',
    icons: [
        {
            url: '/seo/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
        },
        {
            url: '/seo/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
        },
        {
            url: '/seo/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
        },
        {
            url: '/seo/site.webmanifest',
            rel: 'manifest',
        },
        {
            url: '/seo/favicon.ico',
            rel: 'shortcut icon',
        },
        {
            url: '/seo/favicon.ico',
            rel: 'icon',
            type: 'image/x-icon',
        },
        {
            url: '/seo/android-chrome-192x192.png',
            rel: 'icon',
            sizes: '192x192',
            type: 'image/png',
        },
        {
            url: '/seo/android-chrome-512x512.png',
            rel: 'icon',
            sizes: '512x512',
            type: 'image/png',
        },
        {
            url: '/seo/mstile-150x150.png',
            rel: 'icon',
            sizes: '150x150',
            type: 'image/png',

        },
    ],
    openGraph: {
        title: 'Config Sync - Config Synchronization Platform',
        description: 'Config Sync: The best way to synchronize your Minecraft server configurations.',
        url: 'https://config-sync.com',
        type: 'website',
        images: [
            {
                url: 'https://config-sync.com/seo/android-chrome-192x192.png',
                width: 192,
                height: 192,
                alt: 'Config Sync - Config Synchronization Platform',
            }
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Config Sync - Config Synchronization Platform',
        description: 'Config Sync: The best way to synchronize your Minecraft server configurations.',
        images: [
            {
                url: 'https://config-sync.com/seo/android-chrome-192x192.png',
                width: 192,
                height: 192,
                alt: 'Config Sync - Config Synchronization Platform',
            }
        ],
        creator: '@VertCodeDev',
    },
};

export default function RootLayout({children, params: {locale}}: { children: ReactNode, params: { locale: string } }) {
    return (
        <html lang={locale}>
        <body className={cn(
            outfitFont.className,
            "max-w-screen overflow-x-hidden",
        )}>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}