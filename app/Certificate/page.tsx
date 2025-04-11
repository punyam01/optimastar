"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CertificatePage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#132d4c] mb-6">Our Certificate</h1>
        <p className="text-lg text-gray-700 mb-8">
          OPTIMA STAR TECHNICAL SERVICES L.L.C is an Approved Applicator certified by Geobit.
        </p>

        <Button className="bg-[#00aee7] hover:bg-[#0090c0] text-white" onClick={() => setIsOpen(true)}>
          View Certificate
        </Button>

        {/* Certificate Modal */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="relative max-w-3xl w-[90%] max-h-[90vh] bg-white p-4 rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute right-2 top-2 bg-white rounded-full p-1 shadow-md z-10"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/APPROVED APPLICATOR CERTIFICATE-GEOBIT.png"
                  alt="OPTIMA STAR Approved Applicator Certificate"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
