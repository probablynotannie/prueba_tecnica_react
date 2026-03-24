import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-slate-100/70">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-black text-white px-3 py-1 rounded"
        >
          Skip to content
        </a>

        <Header />

        <main
          id="main-content"
          role="main"
          className="flex-1 max-w-7xl mx-auto w-full p-6"
        >
          <Outlet />
        </main>

        <Footer />
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </>
  );
};
