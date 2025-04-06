"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

// Display only 3 services on the homepage - updated to show insulation, tiling, and interior
const homeServices = [
  {
    id: "insulation",
    title: "Insulation Contracting",
    description:
      "Our insulation services help improve energy efficiency and comfort in buildings through high-quality materials.",
    image:
      "/images/waterproofing.jpeg",
  },
  {
    id: "tiling",
    title: "Tiling Works",
    description: "We provide professional floor and wall tiling services with precision and attention to detail.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tiling%20works.jpg-dzhgiFaFIYRX4wfCR4pyPqfE23Ghfe.jpeg",
  },
  {
    id: "interior",
    title: "Interior Services",
    description:
      "Our interior services include custom cabinetry, shelving, and woodwork to enhance your living spaces.",
    image: "/images/interior-service.webp",
  },
]

const ServicesSection = () => {
  return (
    <section id="services-section" className="py-10 sm:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10">
          <div className="flex justify-center items-center mb-4">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-[#132d4c] mr-3"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              OUR SERVICES
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/services%20icon-KjjlUsL4SyJKmQfeD1d1Nc5BlJUNmO.png"
                alt="Services"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </motion.div>
          </div>
          <motion.div
            className="w-20 sm:w-24 h-1 bg-[#00aee7] mx-auto my-4 sm:my-6"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p
            className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We offer a wide range of technical services to meet all your needs. Our expert team ensures high-quality
            service delivery for both residential and commercial projects.
          </motion.p>
        </div>

        {/* Display 3 services on homepage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {homeServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <div
                  className={`absolute inset-0 ${index % 2 === 0 ? "bg-[#132d4c]/80" : "bg-[#132d4c]/70"} z-10 group-hover:opacity-70 transition-opacity`}
                ></div>
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-[#132d4c] mb-2 sm:mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-center mb-5 sm:mb-6">{service.description}</p>
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    className="border-[#00aee7] text-[#132d4c] hover:bg-[#00aee7] hover:text-white"
                    onClick={() => {
                      document.getElementById("booking-form-trigger")?.click()
                      sessionStorage.setItem("selectedService", service.id)
                    }}
                  >
                    Book Service
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Services button */}
        <div className="text-center mt-12 sm:mt-16">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Link href="/services">
              <Button size="lg" className="bg-[#00aee7] hover:bg-[#132d4c] text-white px-8 py-6 h-auto text-lg">
                View All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

