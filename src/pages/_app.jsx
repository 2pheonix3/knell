import Footer from "@/components/Footer";
import "@/styles/globals.css";
import { useEffect } from "react";
import { StateProvider } from "../context/StateContext";
import reducer, { initialState } from "../context/StateReducers";

export default function App({ Component, pageProps }) {
    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <div>
                <main className="mb-auto w-full mx-auto">
                    <Component {...pageProps} />
                </main> 
                <Footer />
            </div>
        </StateProvider>
    );
}
