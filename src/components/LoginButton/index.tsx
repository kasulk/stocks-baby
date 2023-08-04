import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center">
        {/* Signed in as {session.user?.email} <br /> */}
        <span>{session.user?.name}</span>
        <Image
          className="rounded-full mx-2"
          src={session.user?.image ? session.user?.image : ""}
          width={40}
          height={40}
          alt={`Profile picture of ${session.user?.name}`}
        />
        <button
          // className="ml-2"
          className="transition hover:scale-x-105 bg-accent-1 hover:bg-accent-2 active:bg-accent-3 shadow-sm shadow-accent-1 hover:shadow-md hover:shadow-accent-1 active:shadow-none rounded-md py-2 px-4 m-2"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <>
      {/* Not signed in <br /> */}
      <button
        className="transition hover:scale-x-105 bg-accent-1 hover:bg-accent-2 active:bg-accent-3 shadow-sm shadow-accent-1 hover:shadow-md hover:shadow-accent-1 active:shadow-none rounded-md py-2 px-4 m-2 md:mr-4 mr-0"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
