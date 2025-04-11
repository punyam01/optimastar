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
    <div className="fixed inset-0 z-40 bg-black bg-opacity-80 flex items-start justify-center overflow-auto pt-[90px] px-4">
      <div className="w-full max-w-5xl flex flex-col items-center">
        <Image
          src="/APPROVED APPLICATOR CERTIFICATE-GEOBIT.png"
          alt="Certificate"
          width={1600}
          height={1200}
          className="w-full h-auto object-contain rounded-lg shadow-xl max-h-[80vh]"
        />
        <button
          onClick={onClose}
          className="mt-4 text-white text-4xl font-bold hover:text-red-400 transition-colors"
          aria-label="Close modal"
        >
          ×
        </button>
      </div>
    </div>
  )
}

export default CertificateModal
