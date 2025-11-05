import "@/app/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ChatWidget from "@/components/chatbox/ChatWidget";
import SocialSidebar from "@/components/SocialSidebar";


export const metadata = {
  title: "Tadeo Abbruzzese | Portfolio",
  description: "Desarrollo apps web, bots IA y automatizaciones.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen bg-brand-dark text-brand-text">
        <Navbar />
        <SocialSidebar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <ChatWidget/>
      </body>
    </html>
  );
}
