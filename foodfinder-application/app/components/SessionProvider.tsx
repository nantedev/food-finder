"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default function AuthProvider({
  children,
  session,
}: {
  children: ReactNode;
  session?: any; //Rendre session optionnelle
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
