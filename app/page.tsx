import Article from "@/components/Article";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Invite from "@/components/Invite";
import NavBar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pt-8">
        <Invite />
        <Features/>
        <Article/>
      </main>
      <Footer/>
    </>
  );
}
