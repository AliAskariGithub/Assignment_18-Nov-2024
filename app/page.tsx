import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LuNewspaper } from "react-icons/lu";

export default async function Home() {
  return (
    <>
      <Navbar />
      <div>
        <section className="text-center py-16 bg-gray-200 h-screen flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">Welcome to DPNews</h1>
          <p className="mt-4 text-gray-600">
            Explore our News, learn about us, or get in touch!
          </p>
          <Link href={"/News"}>
            <Button className="flex justify-center items-center gap-2 hover:scale-105 duration-200 transition mt-5">
              Read News <LuNewspaper />
            </Button>
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
}
