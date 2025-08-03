"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuthContext } from "./provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { MoveRight, Plus } from "lucide-react";

export default function Home(
) {

  return (
    <div>
      <Header />
      <Container className="h-screen">
        <main className="flex flex-col gap-8 items-center justify-center h-auto p-10 text-center mt-20">
          <div>
            <h1 className="text-[5rem] font-semibold leading-[1]">
              Transform Wireframes into
              <span className="text-[#8143B0]"> Code </span> Instantly
            </h1>
          </div>
          <div>
            <p className="text-2xl px-50">
              wire2code uses AI to convert your wireframes and mockups into production-ready codek in seconds. Save time and focus on what matters.
            </p>
          </div>
          <div className="flex xs:flex-col flex-row gap-4 p-4">
            <Button className="bg-btn-bg hover:bg-btn-bg/50" variant="primary">
              <p className="text-2xl">See More</p>
              <Plus />
            </Button>
            <Button className="bg-btn-bg hover:bg-btn-bg/50" variant="primary">
              <p className="text-2xl">Get Started</p>
              <MoveRight />
            </Button>
          </div>
        </main>
      </Container>
      <Footer />
    </div>
  );
}