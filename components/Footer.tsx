import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl  px-6 py-12 grid grid-cols-1 md:grid-cols-4 space-y-2 md:mx-20 mx-5 object-center">
        <div className="flex flex-col items-center md:items-start gap-12 ">
          <Image
            src="/images/logo-light.svg"
            alt="Digital Bank Logo"
            width={130}
            height={130}
          />
          <div className="flex items-center gap-4">
            <Image
              src="/images/icon-facebook.svg"
              alt="Facebook"
              width={20}
              height={20}
              className="cursor-pointer hover:opacity-80 transition"
            />
            <Image
              src="/images/icon-youtube.svg"
              alt="YouTube"
              width={20}
              height={20}
              className="cursor-pointer hover:opacity-80 transition"
            />
            <Image
              src="/images/icon-twitter.svg"
              alt="Twitter"
              width={20}
              height={20}
              className="cursor-pointer hover:opacity-80 transition"
            />
            <Image
              src="/images/icon-pinterest.svg"
              alt="Pinterest"
              width={20}
              height={20}
              className="cursor-pointer hover:opacity-80 transition"
            />
            <Image
              src="/images/icon-instagram.svg"
              alt="Instagram"
              width={20}
              height={20}
              className="cursor-pointer hover:opacity-80 transition"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 text-center md:text-left">
          <ul className="space-y-2 text-sm text-gray-200">
            <li>
              <Link href="/about" className="hover:text-teal-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-teal-400 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-teal-400 transition">
                Blog
              </Link>
            </li>
          </ul>

          <ul className="space-y-2 text-sm text-gray-200">
            <li>
              <Link href="/careers" className="hover:text-teal-400 transition">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-teal-400 transition">
                Support
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-teal-400 transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6 justify-end  lg:translate-x-40">
          <button className="inline-flex items-center gap-3 bg-linear-to-r from-teal-500 to-green-600 text-white px-5 py-2 rounded-3xl hover:from-teal-400 hover:to-teal-500 transition">
            Request Invite
          </button>

          <p className="text-sm text-gray-200">
            © Digitalbank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
