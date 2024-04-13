import { Inter } from "next/font/google";
import localFont from "next/font/local";

const localPixelFont = localFont({
    src: [
        { path: './fonts/pixelify.woff2', },
    ],
    variable: '--font-pixel',
})
export const pixelify = localPixelFont;
export const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

