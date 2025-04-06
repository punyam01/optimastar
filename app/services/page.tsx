"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

// Add useSearchParams to get the selected service
import { useSearchParams, useRouter } from "next/navigation"

// Reordered services with insulation, tiling, and interior at the top
const services = [
  {
    id: "insulation",
    title: "Insulation Contracting",
    description:
      "Our insulation services help improve energy efficiency and comfort in buildings through high-quality materials and expert installation techniques.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/insulation%20contracting.jpg-QxqA9rclvRvUKRzsDYzPaLkl5Fk9lN.jpeg",
    subServices: [
      { id: "combo", name: "Combo" },
      { id: "grp", name: "GRP" },
      { id: "waterproofing", name: "Waterproofing" },
      { id: "injection", name: "Injection" },
    ],
  },
  {
    id: "tiling",
    title: "Tiling Works",
    description:
      "We provide professional floor and wall tiling services with precision and attention to detail, using premium materials for lasting results.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tiling%20works.jpg-dzhgiFaFIYRX4wfCR4pyPqfE23Ghfe.jpeg",
  },
  {
    id: "interior",
    title: "Interior Services",
    description:
      "Our interior services include custom cabinetry, shelving, and woodwork to enhance the functionality and aesthetics of your living spaces.",
    image: "/images/interior-service.webp",
  },
  {
    id: "painting",
    title: "Painting Services",
    description:
      "Our professional painting services provide high-quality finishes for interior and exterior surfaces, enhancing the appearance and protection of your property.",
    image: "/images/painting-service.jpeg",
  },
  {
    id: "waterproofing",
    title: "Waterproofing Systems",
    description:
      "Our waterproofing solutions ensure long-lasting protection against water damage for roofs, basements, bathrooms, and other vulnerable areas.",
    image: "/images/waterproofing.jpeg",
  },
  {
    id: "flooring",
    title: "Flooring Solutions",
    description:
      "We provide high-quality flooring solutions for residential and commercial properties, offering a wide range of materials and designs.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flooring%20solutions.jpg-BaqRsiZc1y8YByynJQcVGXRruqD1Ws.jpeg",
  },
  {
    id: "hvac",
    title: "HVAC Systems",
    description:
      "Our comprehensive HVAC services include installation, maintenance, and repair of air-conditioning, ventilation, and air filtration systems for optimal indoor comfort.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HVAC%20systems.jpg-xZff7OdMj3oHdqXJC2FqLolNFCgilE.jpeg",
  },
  {
    id: "electromechanical",
    title: "Electromechanical Services",
    description:
      "We offer expert installation and maintenance of electromechanical equipment, ensuring efficient and reliable operation for all your technical needs.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Electromechanical%20services.jpg-1UcuWtzjwHSxGXgBVYpvUT8UgYJ1vk.jpeg",
  },
  {
    id: "plumbing",
    title: "Plumbing & Sanitary Installation",
    description:
      "Our plumbing services cover installation, repair, and maintenance of water supply, drainage, and sanitary systems with high-quality materials and workmanship.",
    image: "/images/plumbing-service.jpeg",
  },
  {
    id: "wallpaper",
    title: "Wallpaper Fixing",
    description:
      "Transform your spaces with our professional wallpaper installation services, offering a wide selection of designs and textures for any interior.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wallpaper%20fixing.jpg-nNrSgz6YMd5aVp38fGMAPKHROT7JWs.jpeg",
  },
  {
    id: "false-ceiling",
    title: "False Ceiling & Partition Installation",
    description:
      "We design and install custom false ceilings and light partitions to enhance the aesthetics and functionality of your spaces.",
    image: "/images/ceiling-installation.jpeg",
  },
  {
    id: "electrical",
    title: "Electrical Fittings & Fixtures",
    description:
      "Our electrical services include installation, repair, and maintenance of electrical fittings and fixtures for safe and efficient power distribution.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/electrical%20fitting%20and%20fixtures.jpg-ihGsPpduaN1DqtCAi2d6vTFN7eE6w5.jpeg",
  },
  {
    id: "plaster",
    title: "Plaster Works",
    description:
      "We provide high-quality plastering services for walls and ceilings, ensuring smooth and durable surfaces for your property.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plaster%20works.jpg-5YShlk1hJ65TFlp7YQLZARUc2A3Vdl.jpeg",
  },
  {
    id: "swimming-pool",
    title: "Swimming Pool Installation",
    description:
      "From design to completion, our swimming pool installation services create beautiful and functional aquatic spaces for residential and commercial properties.",
    image: "/images/swimming-pool-installation.jpg",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function ServicesPage() {
  // Inside the component, add this code to get the selected service
  const searchParams = useSearchParams()
  const selectedService = searchParams.get("service")
  const router = useRouter()
  const [selectedSubServices, setSelectedSubServices] = useState<{ [key: string]: string[] }>({})

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubServiceToggle = (serviceId: string, subServiceId: string) => {
    setSelectedSubServices((prev) => {
      const current = prev[serviceId] || []
      if (current.includes(subServiceId)) {
        return {
          ...prev,
          [serviceId]: current.filter((id) => id !== subServiceId),
        }
      } else {
        return {
          ...prev,
          [serviceId]: [...current, subServiceId],
        }
      }
    })
  }

  const handleBookService = (serviceId: string) => {
    // Store the selected service and any sub-services
    sessionStorage.setItem("selectedService", serviceId)

    // Store sub-services if any are selected
    const subServices = selectedSubServices[serviceId] || []
    if (subServices.length > 0) {
      sessionStorage.setItem("selectedSubServices", JSON.stringify({ [serviceId]: subServices }))
    }

    // Trigger the booking form
    document.getElementById("booking-form-trigger")?.click()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="perspective-1000"
    >
      {/* Hero Section */}
      {/* <motion.section
        className="relative h-[200px] md:h-[250px]"
        initial={{ rotateX: 10 }}
        animate={{ rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-03%20070501-yeCTDsEBO1eVXzHdrQenlrGupXOvfp.png"
          alt="Our Services"
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
            Our Services
          </motion.h1>
          <motion.div
            className="h-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          ></motion.div>
        </div>
      </motion.section> */}

      {/* Services Content */}
      <motion.section className="py-20" variants={containerVariants} initial="hidden" animate="visible">
        <div className="container mx-auto px-4">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex justify-center items-center mb-4">
              <h2 className="text-3xl font-bold text-[#132d4c] mr-3">OUR SERVICES</h2>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/services%20icon-KjjlUsL4SyJKmQfeD1d1Nc5BlJUNmO.png"
                alt="Services"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <div className="w-20 h-1 bg-[#00aee7] mx-auto my-4"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              We offer a comprehensive range of technical services to meet all your needs. Our expert team ensures
              high-quality service delivery for both residential and commercial projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className={`absolute inset-0 ${
                      service.id === "insulation" || service.id === "tiling" || service.id === "interior"
                        ? "bg-[#132d4c]/70"
                        : "bg-black/50"
                    } z-10`}
                  ></div>
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#132d4c] mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>

                  {/* Sub-services selection for insulation */}
                  {service.id === "insulation" && service.subServices && (
                    <div className="mb-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Select options:</p>
                      <div className="flex flex-wrap gap-2">
                        {service.subServices.map((subService) => (
                          <button
                            key={subService.id}
                            onClick={() => handleSubServiceToggle(service.id, subService.id)}
                            className={`px-3 py-1 text-sm rounded-full transition-colors ${
                              selectedSubServices[service.id]?.includes(subService.id)
                                ? "bg-[#00aee7] text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {subService.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <motion.div
                    className="flex justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button
                      className="bg-[#00aee7] hover:bg-[#132d4c] text-white"
                      onClick={() => handleBookService(service.id)}
                    >
                      Book Service
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-16 bg-[#132d4c]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Our Services?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your requirements and get a free quote. Our team is ready to assist you.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <Button
              asChild
              size="lg"
              className="bg-white text-[#132d4c] hover:bg-[#00aee7] hover:text-white px-10 py-6 h-auto text-lg"
            >
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  )
}

