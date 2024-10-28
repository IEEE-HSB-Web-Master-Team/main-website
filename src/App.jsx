import { useEffect } from "react";
import "./App.css";
import WOW from "wow.js";
import "animate.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

let routers = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            // { index: true, element: <About /> },
            { path: "about", element: <About /> },
        ],
    },
]);

function App() {
    useEffect(() => {
        const wow = new WOW({
            boxClass: "wow",
            animateClass: "animate__animated",
            offset: 100,
            mobile: true,
            live: true,
        });
        wow.init();
    }, []);

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={routers}></RouterProvider>
            </QueryClientProvider>
        </>
    );
}

export default App;
