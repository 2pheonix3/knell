import Footer from "@/components/Footer";
import "@/styles/globals.css";
import { useEffect } from "react";
import { StateProvider } from "../context/StateContext";
import reducer, { initialState } from "../context/StateReducers";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>knell</title>
            </Head>
            <div className="relative flex flex-col h-screen justify-between">
                <Navbar/>
                <main className="mb-auto w-full mx-auto">
                    <Component {...pageProps} />
                </main> 
                <Footer />
            </div>
        </StateProvider>
    );
}
