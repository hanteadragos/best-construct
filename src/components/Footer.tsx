import Link from "next/link";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="to-vertidigris-950 via-vertidigris-800 from-vertidigris-600 bg-gradient-to-b text-white/60">
      <div className="laptop:px-20 mx-auto px-4">
        <div className="tablet:flex-row flex flex-col items-center justify-between gap-4 border-t py-6">
          <div className="flex justify-center">
            <div className="mobile-l:w-full w-[85%] text-center">
              © 2025 Best Construct. Toate drepturiile rezervate
            </div>
          </div>
          <ul className="flex justify-center gap-2.5">
            <li>
              <Link href="https://www.instagram.com/">
                <FaInstagram className="h-[18px] w-[18px]" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FaTiktok className="h-[18px] w-[18px]" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <FaFacebook className="h-[18px] w-[18px]" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
