import Head from "next/head";
import Image from "next/image";

const CertificatePage = () => {
  return (
    <>
      <Head>
        <title>Certificate</title>
      </Head>
      <div className="container mx-auto p-4 mt-4">
        <h1 className="text-2xl font-bold mb-4">Certificate</h1>
        <Image
          src="/images/APPROVED-APPLICATOR-CERTIFICATE-GEOBIT.jpg" // Path to your certificate image
          alt="Certificate"
          width={700}
          height={900}
          layout="responsive"
        />
      </div>
    </>
  );
};

export default CertificatePage;
