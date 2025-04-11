"use client"

import Image from "next/image"
import { X } from "lucide-react"

interface CertificateModalProps {
  isOpen: boolean
  onClose: () => void
}

const CertificateModal = ({ isOpen, onClose }: CertificateModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-white p-4 rounded-lg relative max-w-3xl w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
        >
          <X size={24} />
        </button>
        <Image
          src="/APPROVED APPLICATOR CERTIFICATE-GEOBIT.png"
          alt="Certificate"
          width={800}
          height={600}
          className="w-full h-auto rounded"
        />
      </div>
    </div>
  )
}

export default CertificateModal

