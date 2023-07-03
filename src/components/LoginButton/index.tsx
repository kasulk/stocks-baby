import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

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
          width={24}
          height={24}
          alt={`Profile picture of ${session.user?.name}`}
        />
        <button className="ml-2" onClick={() => signOut()}>
          Sign out
        </button>
      </div>
    );
  }
  return (
    <>
      {/* Not signed in <br /> */}
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
