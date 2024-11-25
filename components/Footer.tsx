import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">DPNews</h3>
          <p className="text-sm">
            We are committed to providing excellent services to help individuals
            and businesses achieve their goals. Follow us on our social media
            platforms for updates!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/About" className="hover:text-gray-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/News" className="hover:text-gray-200">
                News
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="hover:text-gray-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61564881342854"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 text-xl"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://x.com/Syed_Ali_Askari?t=88dxwRm8tvBnkWDEVmZhWg&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 text-xl"
            >
              <FaTwitter />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ali-askari-355257308/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 text-xl"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/AliAskariGithub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 text-xl"
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-500 mt-8 pt-4 mx-20 text-center text-sm">
        &copy; {new Date().getFullYear()} DPNews | All Rights Reserved.
      </div>
    </footer>
  );
}
