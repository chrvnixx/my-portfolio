import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-[color:var(--page-bg)] text-[color:var(--text-primary)] transition-colors duration-300">
      <div className="pointer-events-none fixed inset-0 -z-40 bg-[color:var(--page-bg)]" />
      <div className="ambient-grid pointer-events-none fixed inset-0 -z-30 opacity-70" />
      <div className="pointer-events-none fixed left-1/2 top-[-16rem] -z-20 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(240,109,55,0.24)_0%,rgba(240,109,55,0.08)_36%,transparent_68%)] blur-3xl" />
      <div className="pointer-events-none fixed bottom-[-9rem] right-[-8rem] -z-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(103,196,111,0.16)_0%,rgba(103,196,111,0.06)_32%,transparent_70%)] blur-3xl" />

      <Navbar />

      <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pt-28 sm:px-6 lg:px-8">
        {children}
      </main>

      <Footer />
    </div>
  );
}
