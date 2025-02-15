"use client"; 

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/app/components/button/Button";
import styled from "styled-components";
import { JSX } from "react";

const AuthElement = (): JSX.Element => {
    const { data: session, status } = useSession();
  
    return (
      <>
        {status === "authenticated" && (
          <UserName>
            Hi <b>{session?.user?.name}</b>
          </UserName>
        )}
  
        <AuthContainer>
          {status === "authenticated" ? (
            <>
              <Button variant="outline">
                <Link href={`/list/${session?.user.fdlst_private_userId}`}>
                  Your wish list
                </Link>
              </Button>
  
              <Button variant="blue" onClick={() => signOut()}>
                Sign out
              </Button>
            </>
          ) : (
            <Button variant="blue" onClick={() => signIn()}>
              Sign in
            </Button>
          )}
        </AuthContainer>
      </>
    );
  };
  

const AuthContainer = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  width: auto;

  & > * {
    margin-left: 2rem;
  }
`;

const UserName = styled.span`
  margin: 1rem 0 0 0;

  @media (min-width: 600px) {
    margin: 0 0 0 1rem;
  }
`;

export default AuthElement;
