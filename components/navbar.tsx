import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import BookingForm from "./booking-form";

// Import the certificate image
import certificateImage from "/images/APPROVED APPLICATOR CERTIFICATE-GEOBIT.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Contact Banner */}
      <div className="bg-[#132d4c] text-white py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <a href="tel:+971568180793" className="flex items-center text-sm hover:text-[#00aee7] transition-colors">
              <Phone className="h-4 w-4 mr-1" />
              +971 568180793
            </a>
            <a
              href="https://wa.me/971568180793"
              className="flex items-center text-sm hover:text-[#00aee7] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/whatsapp-icon.jpeg"
                alt="WhatsApp"
                width={16}
                height={16}
                className="mr-1 rounded-full"
              />
              +971 568180793
            </a>
          </div>
          <a
            href="mailto:info@optimastaruae.com"
            className="flex items-center text-sm hover:text-[#00aee7] transition-colors"
          >
            <Mail className="h-4 w-4 mr-1" />
            info@optimastaruae.com
          </a>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-0" : "bg-white/95 backdrop-blur-sm py-0.5"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-new.png"
              alt="OPTIMA STAR Logo"
              width={240}
              height={80}
              className="h-16 sm:h-18 md:h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link href="/" className={`text-base lg:text-lg font-medium transition-colors ${pathname === "/" ? "text-[#00aee7] border-b-2 border-[#00aee7]" : "text-[#132d4c] hover:text-[#00aee7]"}`}>
              Home
            </Link>
            <Link href="/about" className={`text-base lg:text-lg font-medium transition-colors ${pathname === "/about" ? "text-[#00aee7] border-b-2 border-[#00aee7]" : "text-[#132d4c] hover:text-[#00aee7]"}`}>
              About Us
            </Link>
            <Link href="/services" className={`text-base lg:text-lg font-medium transition-colors ${pathname === "/services" ? "text-[#00aee7] border-b-2 border-[#00aee7]" : "text-[#132d4c] hover:text-[#00aee7]"}`}>
              Services
            </Link>
            {/* Update Certificate Link */}
            <button onClick={toggleModal} className={`text-base lg:text-lg font-medium transition-colors ${pathname === "/certificate" ? "text-[#00aee7] border-b-2 border-[#00aee7]" : "text-[#132d4c] hover:text-[#00aee7]"}`}>
              Certificate
            </button>
            <Link href="/contact" className={`text-base lg:text-lg font-medium transition-colors ${pathname === "/contact" ? "text-[#00aee7] border-b-2 border-[#00aee7]" : "text-[#132d4c] hover:text-[#00aee7]"}`}>
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button className="text-[#132d4c] p-2" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              {/* Update Certificate Link */}
              <button onClick={toggleModal} className={`text-lg font-medium py-2 ${pathname === "/certificate" ? "text-[#00aee7]" : "text-[#132d4c]"}`}>
                Certificate
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
          <div className="relative bg-white p-6 rounded-md shadow-lg max-w-md">
            {/* Close Button */}
            <button onClick={toggleModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
              ✖
            </button>
            {/* Certificate Image */}
            <Image src={certificateImage} alt="Certificate" width={500} height={700} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
