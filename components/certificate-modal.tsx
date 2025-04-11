"use client"

import { useEffect } from "react"
import Image from "next/image"

interface CertificateModalProps {
  isOpen: boolean
  onClose: () => void
}

const CertificateModal = ({ isOpen, onClose }: CertificateModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl font-bold z-50 hover:text-red-400"
        aria-label="Close modal"
      >
        ×
      </button>
      <div className="max-w-6xl w-full px-4">
        <Image
          src="/APPROVED APPLICATOR CERTIFICATE-GEOBIT.png"
          alt="Certificate"
          width={1600}
          height={1200}
          className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}

export default CertificateModal
