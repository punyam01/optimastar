// app/certificate/page.tsx

import React from "react"

const CertificatePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-[#132d4c] mb-6">Approved Applicator Certificate</h1>
      <iframe
        src="/APPROVED APPLICATOR CERTIFICATE-GEOBIT.pdf"
        title="Certificate"
        className="w-full h-[90vh] border rounded shadow"
      />
    </div>
  )
}

export default CertificatePage
