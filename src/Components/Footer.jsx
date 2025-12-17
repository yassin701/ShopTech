import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-black mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Brand */}
          <div className="max-w-sm">
            <h2 className="text-2xl font-bold mb-3">ShopTech Studio</h2>
            <p className="text-gray-700 leading-relaxed">
              We design modern fashion experiences that combine style, quality,
              and simplicity for everyday life.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-3">Pages</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/catalogue" className="hover:underline">Catalogue</Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4 text-xl">
              <FaFacebookF className="cursor-pointer hover:text-gray-600" />
              <FaInstagram className="cursor-pointer hover:text-gray-600" />
              <FaTwitter className="cursor-pointer hover:text-gray-600" />
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 mt-6 pt-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} ShopTech Studio. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
