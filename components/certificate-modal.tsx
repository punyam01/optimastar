"use client"

import { useEffect } from "react"
import Image from "next/image"

interface CertificateModalProps {
  isOpen: boolean
  onClose: () => void
}

const CertificateModal = ({ isOpen, onClose }: CertificateModalProps) => {
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
    <div className="fixed inset-0 z-40 bg-black bg-opacity-90 flex items-start justify-center pt-[100px] p-4 overflow-auto">
      <div className="relative w-full max-w-5xl">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-white text-4xl font-bold z-50 hover:text-red-400"
          aria-label="Close modal"
        >
          ×
        </button>
        <Image
          src="/APPROVED APPLICATOR CERTIFICATE-GEOBIT.png"
          alt="Certificate"
          width={1600}
          height={1200}
          className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}

export default CertificateModal
