"use client";

import Image from "next/image";

import { useSession, signIn, signOut } from "next-auth/react";
import Button from "../ui/Button";

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  if (!session) {
    return (
      <Button type="button" onClick={() => signIn("google")}>
        Sign in
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-2.5">
      <Image
        src={session.user.image}
        alt={`${session.user.name ?? "User"} profile picture`}
        width={32}
        height={32}
        className="rounded-full"
      />
      <Button type="button" onClick={() => signOut()}>
        Sign out
      </Button>
    </div>
  );
}
