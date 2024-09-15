import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { COOKIE_ACCESS_TOKEN, socialMediaMetaContent } from "@/utils/constants";
import Providers from "./provider";
import "./globals.css";
import { getUserDetails } from "@/features/user/userAPIs";
import Head from "next/head";
import SocialMediaPreview from "@/components/groups/socialMediaPreview";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: socialMediaMetaContent.title,
  description: socialMediaMetaContent.description,
  icons: socialMediaMetaContent.image,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //getStaticProps
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIE_ACCESS_TOKEN)?.value;
  const result = await getUserDetails(token);

  return (
    <html lang="en">
      <title>Ts E-Comm Shop</title>
      <Head>
        <SocialMediaPreview />
      </Head>
      <body className={inter.className}>
        <Providers>
          <Header user={result?.[0]} />
          {children}
          <Footer />
          <Toaster position="bottom-right" reverseOrder={false} />
        </Providers>
      </body>
    </html>
  );
}
