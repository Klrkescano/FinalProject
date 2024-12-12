'use client';

import React from 'react';

import Image from 'next/image';
import { UserButton, useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex items-center  justify-between gap-2 p-2  shadow-md">
      <div className="flex items-center font-extrabold text-4xl text-cyan-700">
        <Image src={'logo.svg'} alt="logo" width={70} height={70} />
        <a href="">FIREBIRD</a>
      </div>

      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href={'/sign-in'}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
