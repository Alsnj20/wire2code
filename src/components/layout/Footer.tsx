"use client";
import { Button } from "../ui/button";
import Link from "next/link";
import { Github } from "lucide-react";
import Container from "./Container";
import { Logo } from "./Header";

export default function Footer() {
  return (
    <footer className="mt-16 py-10 text-start text-sm text-fg-primary font-light bg-btn-bg rounded-t-full mx-4">
      <Container>
        <div className="flex flex-col gap-3 items-center justify-centertext-xs md:text-sm lg:text-lg font-normal">
          <Link href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="cursor-pointer">
              <Github className="size-6" />
              <span className="text-xl">GitHub</span>
            </Button>
          </Link>
          <p>&copy; {new Date().getFullYear()} wire2code. All rights reserved.</p>
          <Logo />
        </div>
      </Container>
    </footer >
  );
} 
