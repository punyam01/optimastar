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
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
      <div className="relative bg-white rounded-lg max-w-3xl w-full shadow-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl font-bold z-10"
        >
          ×
        </button>
        <Image
          src="/APPROVED APPLICATOR CERTIFICATE-GEOBIT.png" // Make sure this file exists in /public
          alt="Certificate"
          width={800}
          height={600}
          className="rounded-lg w-full h-auto object-contain"
        />
      </div>
    </div>
  )
}

export default CertificateModal
