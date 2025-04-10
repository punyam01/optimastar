import Image from "next/image"

export default function CertificatePage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl w-full">
        <Image
          src="/APPROVED APPLICATOR CERTIFICATE-GEOBIT.png"
          alt="OPTIMA STAR TECHNICAL SERVICES L.L.C - Approved Applicator Certificate"
          width={1000}
          height={1414}
          className="w-full h-auto shadow-lg"
          priority
        />
      </div>
    </div>
  )
}
