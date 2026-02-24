"use client";
import { useRouter } from "next/navigation";
import Button from "../components/button";
import Navbar from "../components/ui/navbar";
import Link from "next/link";

export default function BookDemo() {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/book-demo");
  };
  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-6">
      <Navbar showCTA={false} />
      <div className="text-center md:max-w-2xl md:pt-10">
        <h1 className="text-4xl md:text-6xl text-(--tertiary) font-[500] mb-6">
          Transform Your Business With Our Platform{" "}
        </h1>
        <p className=" text-(--tertiary) text-md font-[200] mb-8 max-w-lg mx-auto">
          Discover how our solution can help you automate, grow and scale faster
          than ever.
        </p>
        <Link href="https://link.nextaflow.net/widget/booking/XchFTkMnL0ZY5QnwUtWN">
          <Button
            onClick={handleRedirect}
            text="Book a Demo"
            className="bg-(--secondary) text-black mx-auto"
          />
        </Link>
      </div>
    </section>
  );
}
