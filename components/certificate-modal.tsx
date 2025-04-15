"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CertificateModalProps {
  isOpen: boolean
  onClose: () => void
}

const certificates = [
  {
    src: "/APPROVED APPLICATOR CERTIFICATE-GEOBIT.png",
    alt: "Geobit Certificate",
  },
  {
    src: "/Approved Applicators Certificate -- (1)[1].png",
    alt: "Royal Industries Certificate",
  },
  {
    src: "/OPTIMA STAR TECHNICAL SERVICES LLC.png",
    alt: "Petrozo Energy Certificate",
  },
]

const CertificateModal = ({ isOpen, onClose }: CertificateModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [onClose])

  if (!isOpen) return null

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="fixed inset-0 z-40 bg-black bg-opacity-80 flex items-start justify-center overflow-auto pt-[250px] px-4">
      <div className="w-full max-w-5xl flex flex-col items-center relative">
        <div className="relative w-full">
          <Image
            src={certificates[currentIndex].src || "/placeholder.svg"}
            alt={certificates[currentIndex].alt}
            width={1600}
            height={1200}
            className="w-full h-auto object-contain rounded-lg shadow-xl max-h-[80vh]"
          />

          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
            aria-label="Previous certificate"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
            aria-label="Next certificate"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-4 flex gap-2 justify-center">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-500"}`}
              aria-label={`View certificate ${index + 1}`}
            />
          ))}
        </div>

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
