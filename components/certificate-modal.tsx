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
    <div className="fixed inset-0 z-40 bg-black bg-opacity-90 flex justify-center items-center p-4">
      <div className="relative w-full h-full flex justify-center items-center">
        <button
          className="absolute top-4 right-4 text-white text-4xl z-50"
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
          className="max-w-full max-h-full rounded-lg"
        />
      </div>
    </div>
  )
}

export default CertificateModal
