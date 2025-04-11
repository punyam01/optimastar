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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white text-4xl z-50"
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>
      <div
        className="max-w-full max-h-full p-4"
        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking image
      >
        <Image
          src="/certificate.jpg"
          alt="Certificate"
          width={1600}
          height={1200}
          className="w-auto max-w-full h-auto max-h-[90vh] rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}

export default CertificateModal
