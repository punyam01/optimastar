"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="perspective-1000"
    >
      {/* Hero Section */}
      <motion.section
        className="relative h-[200px] md:h-[250px]"
        initial={{ rotateX: 10 }}
        animate={{ rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about%20us.jpg-tL4Wk0qIChf4QbOi9sgz90anze1BRT.jpeg"
          alt="About Us"
          fill
          className="object-cover"
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* About Us */}
          </motion.h1>
          <motion.div
            className="h-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          ></motion.div>
        </div>
      </motion.section>

      {/* About Content - Similar to home page layout */}
      <motion.section
        className="py-16 sm:py-20 bg-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-stretch gap-8 sm:gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg overflow-hidden shadow-xl h-full">
                <Image
                  src="/images/Untitled design (5).png"
                  alt="OPTIMA STAR Technical Services"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border-l-4 border-[#00aee7] h-full flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#132d4c] mb-6">OPTIMA STAR TECHNICAL SERVICES</h2>
                <div className="w-16 sm:w-20 h-1 bg-[#00aee7] mb-5 sm:mb-6"></div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  OPTIMA STAR TECHNICAL SERVICES L.L.C. is a professionally managed company catering to the growing
                  demand in the U.A.E. market for reliable services and consultancy in building insulation. The ongoing
                  construction boom and continuous expansion of various entities have fueled the growth of both the
                  industry and our company.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  At OPTIMA STAR TECHNICAL SERVICES L.L.C., we adhere to stringent quality control systems and safety
                  policies. Our vision for growth is centered on delivering superior quality, innovation, and integrity.
                  Within this framework, we assure all our clients sustainable, environmentally friendly, and integrated
                  solutions, driven by our commitment to excellence and continuous development.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  As a full-service professional engineering firm, OPTIMA STAR TECHNICAL SERVICES L.L.C. serves the
                  construction industry with expertise in:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#00aee7] mr-2 flex-shrink-0 mt-1" />
                    <span>Insulation Contracting</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#00aee7] mr-2 flex-shrink-0 mt-1" />
                    <span>Tiling Works</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#00aee7] mr-2 flex-shrink-0 mt-1" />
                    <span>Interior Services</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#00aee7] mr-2 flex-shrink-0 mt-1" />
                    <span>Painting Services</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#00aee7] mr-2 flex-shrink-0 mt-1" />
                    <span>Flooring Solutions</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#00aee7] mr-2 flex-shrink-0 mt-1" />
                    <span>HVAC Systems</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#00aee7] mr-2 flex-shrink-0 mt-1" />
                    <span>Electromechanical Services</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#00aee7] mr-2 flex-shrink-0 mt-1" />
                    <span>Plumbing & Sanitary Installation</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#00aee7] mr-2 flex-shrink-0 mt-1" />
                    <span>Wallpaper fixing</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#00aee7] mr-2 flex-shrink-0 mt-1" />
                    <span>False Ceiling & Partition Installation</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#00aee7] mr-2 flex-shrink-0 mt-1" />
                    <span>Electrical Fitting & Fixtures</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#00aee7] mr-2 flex-shrink-0 mt-1" />
                    <span>Plaster Works</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#00aee7] mr-2 flex-shrink-0 mt-1" />
                    <span>Swimming Pool Installation</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <Button
                    size="lg"
                    className="bg-[#00aee7] hover:bg-[#132d4c] text-white px-8"
                    onClick={() => document.getElementById("booking-form-trigger")?.click()}
                  >
                    Book Appointment
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission and Vision Section */}
      <motion.section className="py-16 bg-gray-50" variants={containerVariants} initial="hidden" animate="visible">
        <div className="container mx-auto px-4">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch mb-16" variants={itemVariants}>
            <div className="bg-white p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-[#132d4c] mb-4">Our Mission</h3>
              <div className="w-16 h-1 bg-[#00aee7] mb-4"></div>
              <p className="text-gray-700 mb-6">
                At OPTIMA STAR TECHNICAL SERVICES L.L.C., we are committed to providing high-quality engineering and
                technical services using the latest technology at fair and competitive prices. Our focus is on
                understanding customer needs, ensuring 100% satisfaction, and delivering innovative, sustainable, and
                reliable solutions across the construction industry.
              </p>

              <h4 className="text-xl font-semibold text-[#132d4c] mb-3">Our Key Objectives:</h4>
              <ul className="space-y-2 mt-auto">
                {[
                  'Establish ourselves as a leading "HUB PORT" service provider in the Middle East.',
                  "Expand operations into America and Asia to serve a broader client base.",
                  "Continuously refine and improve our services to achieve excellence.",
                  "Adhere to strict quality control and safety policies in all our projects.",
                  "Deliver cost-effective and technology-driven solutions tailored to client requirements.",
                  "Ensure environmentally friendly and sustainable practices in every service we offer.",
                ].map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#00aee7] mr-3 flex-shrink-0 mt-1" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md transform hover:scale-105 transition-transform duration-300 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-[#132d4c] mb-4">Our Vision</h3>
              <div className="w-16 h-1 bg-[#00aee7] mb-4"></div>
              <p className="text-gray-700 mb-6">
                At OPTIMA STAR TECHNICAL SERVICES L.L.C., our vision is to be a global leader in engineering, technical
                services, and construction solutions, setting new standards for quality, innovation, and sustainability.
                We aspire to create a strong presence in the Middle East, America, and Asia, offering cutting-edge,
                reliable, and cost-effective solutions that exceed client expectations.
              </p>

              <h4 className="text-xl font-semibold text-[#132d4c] mb-3">Our Visionary Goals:</h4>
              <ul className="space-y-2 mt-auto">
                {[
                  "To be recognized as the most trusted service provider in waterproofing, insulation, and construction solutions.",
                  "To continuously adopt and implement the latest technology for enhanced efficiency and sustainability.",
                  "To expand our service network globally, strengthening our presence in emerging markets.",
                  "To build long-term relationships with clients through exceptional service and commitment to excellence.",
                  "To promote eco-friendly and sustainable solutions that contribute to a greener future.",
                  "To uphold integrity, safety, and quality in every project, ensuring the highest industry standards.",
                ].map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#00aee7] mr-3 flex-shrink-0 mt-1" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Chairman Message */}
          <motion.div className="w-full bg-[#132d4c] text-white p-8 rounded-xl shadow-lg mb-16" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-[#00aee7] mb-4">CHAIRMAN MESSAGE</h3>
            <div className="w-16 h-1 bg-white mb-6"></div>

            <p className="mb-4 leading-relaxed">
              The fundamental principle guiding OPTIMA STAR TECHNICAL SERVICES L.L.C. is Professionalism, which serves
              as the foundation of our commitment to customers, partners, and employees. We take pride in consistently
              upholding our promises, ensuring reliability, integrity, and excellence in every aspect of our work.
            </p>

            <p className="mb-4 leading-relaxed">
              In today's rapidly evolving world, business development models are being reshaped, and economic and
              innovation cycles are becoming increasingly shorter. Companies that fail to adapt to these changes face
              significant risks that could jeopardize their long-term success. Recognizing this, we are committed to
              staying ahead of industry trends by continuously evolving and refining our strategies.
            </p>

            <p className="leading-relaxed">
              As we sharpen our approach, our objective is to become one of the world's most valuable, innovative, and
              admired companies. We aspire to be an unstoppable force in the industry, creating immense value for our
              shareholders, stakeholders, and the broader economy. Through continuous growth, adaptation, and a
              relentless pursuit of excellence, we are committed to shaping the future of the waterproofing and
              construction sectors.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-16 bg-[#132d4c] text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and discover how our expert services can benefit you.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Button
              size="lg"
              className="bg-[#00aee7] hover:bg-white hover:text-[#132d4c] px-10 py-6 h-auto text-lg"
              onClick={() => document.getElementById("booking-form-trigger")?.click()}
            >
              Contact Us Now
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  )
}

