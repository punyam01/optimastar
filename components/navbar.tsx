"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Mail } from "lucide-react"
import { usePathname } from "next/navigation"
import BookingForm from "./booking-form"
import CertificateModal from "./certificate-modal"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showCertificate, setShowCertificate] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const handleCertificateClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowCertificate(true)
  }

  return (
    <>
      <CertificateModal isOpen={showCertificate} onClose={() => setShowCertificate(false)} />

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

      {/* Navbar */}
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
            <NavLink href="/" label="Home" active={pathname === "/"} />
            <NavLink href="/about" label="About Us" active={pathname === "/about"} />
            <NavLink href="/services" label="Services" active={pathname === "/services"} />
            <button
              onClick={handleCertificateClick}
              className="text-base lg:text-lg font-medium text-[#132d4c] hover:text-[#00aee7] transition-colors"
            >
              Certificate
            </button>
            <NavLink href="/contact" label="Contact" active={pathname === "/contact"} />
            <div className="hidden lg:block">
              <BookingForm />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <div className="mr-2">
              <BookingForm />
            </div>
            <button className="text-[#132d4c] p-2" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              <NavLink href="/" label="Home" active={pathname === "/"} mobile />
              <NavLink href="/about" label="About Us" active={pathname === "/about"} mobile />
              <NavLink href="/services" label="Services" active={pathname === "/services"} mobile />
              <button
                onClick={handleCertificateClick}
                className="text-lg font-medium py-2 text-[#132d4c] hover:text-[#00aee7] text-left"
              >
                Certificate
              </button>
              <NavLink href="/contact" label="Contact" active={pathname === "/contact"} mobile />
              <div>
                <BookingForm />
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}

const NavLink = ({
  href,
  label,
  active,
  mobile = false,
}: {
  href: string
  label: string
  active: boolean
  mobile?: boolean
}) => {
  const classes = mobile
    ? `text-lg font-medium py-2 ${active ? "text-[#00aee7]" : "text-[#132d4c]"}`
    : `text-base lg:text-lg font-medium transition-colors ${
        active ? "text-[#00aee7] border-b-2 border-[#00aee7]" : "text-[#132d4c] hover:text-[#00aee7]"}`
  return (
    <Link href={href} className={classes}>
      {label}
    </Link>
  )
}

export default Navbar
