export default function Footer() {
  return <footer className="bg-neutral-800 z-50 text-white p-10 md:p-[5em]">
    <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between gap-3 lg:items-stretch lg:gap-0">
      <div className="w-full flex flex-col justify-between items-center gap-5 lg:w-1/5 lg:pr-5">
        <nav aria-labelledby="social-media-links">
          <ul className="flex gap-5 my-2 lg:my-auto">
            <li>
              <a className="text-white hover:text-secondary text-xl lg:text-lg" href="#"
                aria-label="Facebook profile of <b>AI</b>MED">
                <i className="fa-brands fa-square-facebook"></i>
              </a>
            </li>
            <li>
              <a className="text-white hover:text-secondary text-xl lg:text-lg" href="#"
                aria-label="Youtube account of <b>AI</b>MED">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li>
              <a className="text-white hover:text-secondary text-xl lg:text-lg" href="#"
                aria-label="Twitter profile of <b>AI</b>MED">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a className="text-white hover:text-secondary text-xl lg:text-lg" href="#"
                aria-label="Pinterest profile of <b>AI</b>MED">
                <i className="fa-brands fa-pinterest"></i>
              </a>
            </li>
            <li>
              <a className="text-white hover:text-secondary text-xl lg:text-lg" href="#"
                aria-label="Instagram profile of <b>AI</b>MED">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-full flex flex-col gap-16 lg:w-1/5 lg:pr-5">
        <nav aria-labelledby="footer-nav-1">
          <ul className="flex flex-col items-center gap-3 lg:items-start lg:gap-5">
            <li>
              <a className="text-white hover:text-secondary" href="#">About Us</a>
            </li>
            <li>
              <a className="text-white hover:text-secondary" href="#">Contact</a>
            </li>
            <li>
              <a className="text-white hover:text-secondary" href="#">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-full flex flex-col gap-16 lg:w-1/5 lg:pr-5">
        <nav aria-labelledby="footer-nav-2">
          <ul className="flex flex-col items-center gap-3 lg:items-start lg:gap-5">
            <li>
              <a className="text-white hover:text-secondary" href="#">Privacy Policy</a>
            </li>
            <li>
              <a className="text-white hover:text-secondary" href="#">aimed@support.com</a>
            </li>
            <li>
              <a className="text-white hover:text-secondary" href="#">VIT Vellore, Chennai</a>
            </li>

          </ul>
        </nav>
      </div>
      <div className="w-full flex flex-col items-center lg:items-end lg:w-2/5">
        <a className="ds-btn ds-btn-primary ds-btn-wide my-3 lg:my-auto" href="#">Start Diagnosing</a>

        <span className="mt-4 mb-1">© <b>AI</b>MED. All Rights Reserved</span>
        <div className="text-xs lg:text-right">
          Coded by
          <a className="text-secondary" target="_blank" href="https://www.linkedin.com/in/prashantzzz/">Prashant</a>
          <a className="text-secondary" target="_blank" href="https://www.linkedin.com/in/prashantzzz/">Chirag</a>
          <a className="text-secondary" target="_blank" href="https://www.linkedin.com/in/prashantzzz/">Anas</a>
        </div>
      </div>
    </div>
  </footer>
}