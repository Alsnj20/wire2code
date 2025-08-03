"use client"
import Link from "next/link";
import { Code, User } from "lucide-react";
import { Button } from "../ui/button";
import Container from "./Container";

export const Logo = () => {
  return (
    <Link href="/inicio" className="font-medium">
      <div className="flex gap-2 text-3xl items-center">
        <div className="text-[#8143B0]">
          <Code className="size-9" />
        </div>
        <div >Wire2Code</div>
      </div>
    </Link>
  );
};

import { useAuthContext } from "@/app/provider";
import Authentication from "@/app/_components/Authentication";
import ProfileAvatar from "@/app/_components/ProfileAvatar";

export default function Header() {
  const { user } = useAuthContext();
  console.log("User from header: ", user);

  return (
    <header className="p-2 lg:p-4">
      <Container>
        <div className="flex h-14 items-center justify-between text-xs md:text-sm">
          <Logo />
          {!user ? <Authentication>
            <Button
              variant="primary"
            >
              <User className="size-6" />
              <div>Login</div>
            </Button>
          </Authentication> : <ProfileAvatar />
          }
        </div>
      </Container>
    </header>
  );
} 