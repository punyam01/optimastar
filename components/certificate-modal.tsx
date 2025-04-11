"use client"

import { useEffect } from "react"
import Image from "next/image"

interface Props {
  isOpen: boolean
  onClose: () => void
}

const CertificateModal = ({ isOpen, onClose }: Props) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleEsc)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40 bg-black bg-opacity-90 flex items-start pt-[100px] justify-center p-4 overflow-auto">
      <div className="relative w-full max-w-4xl">
        <button
          className="absolute top-0 right-0 text-white text-4xl font-bold p-2 z-50"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <Image
          src="/APPROVED APPLICATOR CERTIFICATE-GEOBIT.png"
          alt="Certificate"
          width={1600}
          height={1200}
          className="w-full h-auto rounded-md shadow-lg"
        />
      </div>
    </div>
  )
}

export default CertificateModal
