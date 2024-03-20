"use client";
import { UserButton, useAuth, useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  const { isSignedIn } = useAuth();
  const { openSignIn } = useClerk();

  return (
    <header className="bg-white text-black fixed w-full lg:px-[5em] z-50">
      <div className="container max-w-screen-xl mx-auto flex justify-between items-center p-5 lg:py-0">
        <Link href="/">
          <img
            src="/img/aimed-removed.png"
            alt="brand logo"
            style={{ maxWidth: 160, height: "auto" }}
          />
        </Link>
        <nav className="hidden lg:block" aria-labelledby="header-nav-desktop">
          <ul className="flex gap-3">
            <li>
              <Link
                className="block px-3 py-5 relative font-primary text-primary after:content[''] after:absolute after:block after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary-gradient after:transition-all after:duration-150 after: hover:text-primary hover:after:w-full"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="block px-3 py-5 relative after:content[''] after:absolute after:block after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary-gradient after:transition-all after:duration-150 after: hover:text-primary hover:after:w-full"
                href="/chat"
              >
                Ask AI-med
              </Link>
            </li>
            <li>
              <Link
                className="block px-3 py-5 relative after:content[''] after:absolute after:block after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary-gradient after:transition-all after:duration-150 after: hover:text-primary hover:after:w-full"
                href="/scan"
              >
                MedScan
              </Link>
            </li>
            <li>
              <Link
                className="block px-3 py-5 relative after:content[''] after:absolute after:block after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary-gradient after:transition-all after:duration-150 after: hover:text-primary hover:after:w-full"
                href="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:block space-x-4">
          {isSignedIn ? (
            <span className="flex items-center gap-x-3">
              <Button asChild variant={"secondary"}><Link href="/profile">My Profile</Link></Button>
              <UserButton />
            </span>
          ) : (
            <Button onClick={() => openSignIn()}>Sign in</Button>
          )}
        </div>

        <nav
          className="nav__icon lg:hidden"
          aria-labelledby="header-nav-mobile"
        >
          <span></span>
          <span></span>
          <span></span>
        </nav>
      </div>
    </header>
  );
}
