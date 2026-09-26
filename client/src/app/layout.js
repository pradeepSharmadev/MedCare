import { Geist, Geist_Mono } from "next/font/google";
import { UserContextProvider } from "@/context/UserContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Medical Care",
  description: "Frontend Application of Service Medical care Developed by Pradeep Sharma, Full stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <UserContextProvider>
          {children}
        </UserContextProvider>
      </body>
    </html>
  );
}
