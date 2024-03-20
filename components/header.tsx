import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white text-black fixed w-full lg:px-[5em] z-50">
      <div className="container max-w-screen-xl mx-auto flex justify-between items-center p-5 lg:py-0">
        <Link href="/"><img src="/img/aimed-removed.png" alt="brand logo"
          style={{ maxWidth: 160, height: 'auto' }} /></Link>
        <nav className="hidden lg:block" aria-labelledby="header-nav-desktop">
          <ul className="flex gap-3">
            <li>
              <Link className="block px-3 py-5 relative font-primary text-primary after:content[''] after:absolute after:block after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary-gradient after:transition-all after:duration-150 after: hover:text-primary hover:after:w-full"
                href="/">Home</Link>
            </li>
            <li>
              <Link className="block px-3 py-5 relative after:content[''] after:absolute after:block after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary-gradient after:transition-all after:duration-150 after: hover:text-primary hover:after:w-full"
                href="/about">About</Link>
            </li>
            <li>
              <Link className="block px-3 py-5 relative after:content[''] after:absolute after:block after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary-gradient after:transition-all after:duration-150 after: hover:text-primary hover:after:w-full"
                href="/contact">Contact</Link>
            </li>
            <li>
              <Link className="block px-3 py-5 relative after:content[''] after:absolute after:block after:bottom-0 after:left-0 after:h-1 after:w-0 after:bg-primary-gradient after:transition-all after:duration-150 after: hover:text-primary hover:after:w-full"
                href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:block space-x-4">
          <Link className="ds-btn ds-btn-primary ds-btn-wide" href="/login">Login</Link>
          <Link className="ds-btn ds-btn-primary ds-btn-wide" href="/signup">Signup</Link>
        </div>

        <nav className="nav__icon lg:hidden" aria-labelledby="header-nav-mobile">
          <span></span>
          <span></span>
          <span></span>
        </nav>
      </div>
    </header>
  )
}