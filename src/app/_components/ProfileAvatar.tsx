"use client"
import { useRouter } from "next/navigation";
import { useAuthContext } from "../provider";
import { signOut } from "firebase/auth";
import { auth } from "@/configs/firebaseConfig";

import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";


export default function ProfileAvatar() {

  const { user } = useAuthContext();
  const router = useRouter();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("User signed out");
      router.push("/");
    }).catch((error) => {
      // An error happened.
      console.error("Error signing out: ", error);
    });
  };

  return (
    <div>
      <Popover >
        <PopoverTrigger>
          {user?.photoURL && <img src={user?.photoURL} alt='profile' width={35} height={35} className='rounded-full' />}
        </PopoverTrigger>
        <PopoverContent className='w-[100px] mx-w-sm'>
          <Button variant={'ghost'} onClick={handleSignOut} className=''>Logout</Button>
        </PopoverContent>
      </Popover>
    </div>
  );
}