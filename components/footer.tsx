import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#132d4c] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/logo-dark-new.png"
                alt="OPTIMA STAR Logo"
                width={220}
                height={70}
                className="h-auto w-auto max-h-20"
              />
            </div>
            <p className="text-gray-300 text-base">
              As a proficient company operating in Dubai, OPTIMA STAR Technical Services LLC always strives to meet its
              clients' demands with skill and capability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#00aee7]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center">
                  <span className="mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center">
                  <span className="mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services - Reordered with insulation, tiling, and interior at the top */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#00aee7]">Our Services</h3>
            <ul className="space-y-2 max-h-60 overflow-y-auto pr-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Insulation Contracting
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Tiling Works
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Interior Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Painting Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
{/*                   <span className="mr-2">›</span> Waterproofing Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                > */}
                  <span className="mr-2">›</span> Flooring Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> HVAC Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Electromechanical Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Plumbing & Sanitary
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Wallpaper Fixing
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> False Ceiling & Partition
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Electrical Fittings & Fixtures
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Plaster Works
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#00aee7] transition-colors flex items-center"
                >
                  <span className="mr-2">›</span> Swimming Pool Installation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#00aee7]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-[#00aee7] flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:+971568180793" className="hover:text-[#00aee7] transition-colors">
                    +971 568180793
                  </a>
                  <br />
                  <a href="tel:+971551828836" className="hover:text-[#00aee7] transition-colors">
                    +971 551828836
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-[#00aee7] flex-shrink-0 mt-1" />
                <a href="mailto:info@optimastaruae.com" className="hover:text-[#00aee7] transition-colors">
                  info@optimastaruae.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-[#00aee7] flex-shrink-0 mt-1" />
                <span>54-0 Shaikha Mhara-Al Qusais Bldg Near Al Qusais Second Dubai, UAE</span>
              </li>
              <li className="flex space-x-4 mt-6">
                <a href="#" className="text-white hover:text-[#00aee7] transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-[#00aee7] transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-[#00aee7] transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://wa.me/971568180793"
                  className="text-white bg-green-600 hover:bg-green-700 px-3 py-1 rounded-md text-sm flex items-center"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Copyright © 2025 OPTIMA STAR Technical Services LLC | Powered by Digital Crest Hub</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

