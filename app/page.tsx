"use client";
import HeroSlider from "@/components/HeroSlider";



import { motion } from "framer-motion";
import {
  Printer,
  IdCard,
  FileText,
  Mail,
  PenTool,
  Monitor,
  Layers,
  Shirt,
  CreditCard,
  Type,
  LayoutGrid,
  Camera,
  Palette,
} from "lucide-react";

export default function Home() {
  // ================= SERVICES =================
  const services = [
    { name: "Flex Print", icon: Printer, desc: "High-resolution flex prints with vibrant colors and durable finishing." },
    { name: "Visiting Card", icon: CreditCard, desc: "Premium visiting cards that create a lasting first impression." },
    { name: "Flyers & Pamphlets", icon: FileText, desc: "Eye-catching flyers and pamphlets for effective promotion." },
    { name: "Invitation Cards", icon: Mail, desc: "Custom invitation cards designed for every special occasion." },
    { name: "ACP Letter Work", icon: Type, desc: "Precision-crafted ACP letter work for bold brand visibility." },
    { name: "ID Cards", icon: IdCard, desc: "Professional ID cards with clean design and durable quality." },
    { name: "T-Shirt & Mug Print", icon: Shirt, desc: "Personalized T-shirts and mugs with long-lasting prints." },
    { name: "Letterhead", icon: FileText, desc: "Elegant letterheads that reflect your brand identity." },
    { name: "Signages", icon: LayoutGrid, desc: "Attractive signages designed to enhance your business presence." },
    { name: "GSB Board", icon: Layers, desc: "Strong and stylish GSB boards for indoor and outdoor use." },
    { name: "ACP 2D Cutting Board", icon: PenTool, desc: "Precision 2D ACP cutting with smooth edges and sharp finish." },
    { name: "Photo & Acrylic Prints", icon: Camera, desc: "High-quality photo and acrylic prints with premium clarity." },
    { name: "LED Display Photo", icon: Monitor, desc: "Illuminated LED display photos that grab instant attention." },
    { name: "Digital Printing", icon: Printer, desc: "Fast and accurate digital printing with superior color quality." },
    { name: "Designing Work", icon: Palette, desc: "Creative design solutions tailored to your brand vision." },
  ];

  // ================= REVIEWS =================
  const reviews = [
    {
      name: "Aditiya",
      company: "ADD 24 (Event Company)",
      stars: "★★★★★",
      text: "Excellent print quality and on-time delivery. Clean lettering and perfect visibility.",
      link: "/projects/add-24",
    },
    {
      name: "Harmeet",
      company: "Guru Nanak Decorator",
      stars: "★★★★★",
      text: "Working with D Print Hub feels like working with our own team. Designs and printing always perfect.",
      link: "/projects/guru-nanak",
    },
    {
      name: "Amit Kumar",
      company: "Startup Founder",
      stars: "★★★★☆",
      text: "Very professional team. From logo design to digital printing, everything was smooth.",
      link: "/projects/startup-branding",
    },
    {
      name: "Rohit Singh",
      company: "Retail Store Owner",
      stars: "★★★★★",
      text: "ACP boards and flex prints helped our shop stand out with premium quality.",
      link: "/projects/retail-signage",
    },
  ];

  // ================= ANIMATION VARIANTS =================
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="bg-[#F9FAFB]">
      {/* ================= HERO ================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-[90vh] flex items-center bg-gradient-to-br from-white via-[#FFF1F1] to-[#F9FAFB] relative overflow-hidden"
      >
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-red-100 opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-red-50 opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900"
            >
              Complete <span className="text-brand-red-text-lg text-red-900">Printing</span>
              <br />& Branding Solutions
            </motion.h1>

            <p className="mt-6 text-lg text-gray-700 max-w-xl">

              From concept on screen to flawless prints in hand, we handle it end to end.
            </p>

            <div className="mt-10 flex gap-4">
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-black font-semibold rounded-lg shadow-lg border border-gray-300"
              >
                View Our Work
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white border border-gray-300 text-gray-800 rounded-lg hover:border-brand-red hover:text-brand-red"
              >
                Contact Us
              </motion.a>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="bg-white rounded-3xl shadow-2xl p-10">
              <img src="/logo.png" alt="D Print Hub Logo" className="w-56" />
            </div>
          </div>
        </div>
      </motion.section>
      {/* ================= HERO SLIDER ================= */}
      <section className="relative">
        <HeroSlider />
      </section>


      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className="py-28 bg-gradient-to-b from-[#FFF5F5] to-white"
      >

        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
            Our <span className="text-brand-red">Services</span>
          </h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="group bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-2xl transition"
                >
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white shadow-md">
                    <Icon size={28} />
                  </div>

                  <p className="text-lg font-semibold text-gray-900">{service.name}</p>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-28 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-900">
            What Our <span className="text-brand-red">Clients Says</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                href={review.link}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="group flex flex-col justify-between bg-gray-50 rounded-3xl p-8 shadow-md hover:shadow-2xl min-h-[360px]"
              >
                <div>
                  <div className="text-yellow-500 text-lg mb-4">{review.stars}</div>
                  <p className="text-gray-700 leading-relaxed">“{review.text}”</p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.company}</p>
                  <a
                    href="/projects"
                    className="mt-2 inline-block text-sm font-semibold text-red-600 hover:text-red-700 transition"
                  >
                    View Work →
                  </a>


                </div>
              </motion.div>
            ))}
          </div>
        </div>
      
      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-extrabold mb-10 text-gray-900">
              Why choose <span className="text-brand-red">D Print Hub?</span>
            </h2>

            <ul className="space-y-6 text-gray-700">
              <li>
                <h4 className="font-semibold text-lg">✔ Leave it to the professionals</h4>
                <p className="text-sm mt-1">
                  Our experienced designers and printers deliver pixel-perfect results every time.
                </p>
              </li>

              <li>
                <h4 className="font-semibold text-lg">✔ Budget-friendly solutions</h4>
                <p className="text-sm mt-1">
                  From small tweaks to full branding, we offer flexible pricing for all businesses.
                </p>
              </li>

              <li>
                <h4 className="font-semibold text-lg">✔ On-time delivery</h4>
                <p className="text-sm mt-1">
                  We respect your deadlines and ensure timely production and delivery.
                </p>
              </li>

              <li>
                <h4 className="font-semibold text-lg">✔ Design, print & install</h4>
                <p className="text-sm mt-1">
                  Everything under one roof – design, printing, finishing and installation.
                </p>
              </li>
            </ul>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <img
              src="/p9.jpeg"
              alt="Why choose D Print Hub"
              className="w-[420px] h-[400px] object-cover rounded-3xl shadow-xl"
            />
          </div>

        </div>
      </section>
      {/* ================= HOW IT WORKS ================= */}
        <section className="py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">

            <h2 className="text-4xl font-extrabold mb-16 text-gray-900">
              The design & print process explained
            </h2>

            <div className="grid md:grid-cols-3 gap-12">

              <div>
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-red-500 text-white text-2xl font-bold shadow-lg ring-7 ring-red-200">1</div>
                <h4 className="font-semibold text-lg mb-2 text-gray-900">
                  Share your requirement
                </h4>
                <p className="text-sm text-gray-700">
                  Tell us your idea, size, material, and budget via WhatsApp or call.
                </p>
              </div>

              <div>
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-red-500 text-white text-2xl font-bold shadow-lg ring-7 ring-red-200">2</div>
                <h4 className="font-semibold text-lg mb-2 text-gray-900">
                  Design & approval
                </h4>
                <p className="text-sm text-gray-700">
                  We design your project and revise it until you’re satisfied.
                </p>
              </div>

              <div>
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-red-500 text-white text-2xl font-bold shadow-lg ring-7 ring-red-200">3</div>
                <h4 className="font-semibold text-lg mb-2 text-gray-900">
                  Print & deliver
                </h4>
                <p className="text-sm text-gray-700">
                  Once approved, we print with premium quality and deliver on time.
                </p>
              </div>

            </div>

          </div>
        </section>

      {/* ================= FAQ ================= */}
      
        <section className="py-28 bg-white">
          <div className="max-w-4xl mx-auto px-6">

            <h2 className="text-4xl font-extrabold mb-12 text-gray-900 text-center">
              FAQs
            </h2>

            <div className="space-y-6">

              <details className="border-b pb-4">
                <summary className="cursor-pointer font-semibold text-lg text-gray-900 hover:text-gray-800 transition">
                  What if I’m not happy with my design?
                </summary>
                <p className="mt-3 text-sm text-red-600">
                  We offer revisions until you are satisfied with the final design.
                </p>
              </details>

              <details className="border-b pb-4">
                <summary className="cursor-pointer font-semibold text-lg text-gray-900 hover:text-gray-800 transition">
                  How long does printing take?
                </summary>
                <p className="mt-3 text-sm text-red-600">
                  Delivery time depends on the project type, usually 1–5 working days.
                </p>
              </details>

              <details className="border-b pb-4">
                <summary className="cursor-pointer font-semibold text-lg text-gray-900 hover:text-gray-800 transition">
                  Do you provide installation services?
                </summary>
                <p className="mt-3 text-sm text-red-600">
                  Yes, we provide installation for ACP boards, signage, flex & many more.
                </p>
              </details>

            </div>
          </div>
        </section>


      {/* ================= HELP ANYTIME ================= */}
      <section className="py-24 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-extrabold mb-6 text-gray-900">
              Help, any time
            </h2>

            <p className="text-gray-700 mb-8">
              Chat with us or call our support team anytime for help with your
              design, printing or order status.
            </p>

            <div className="flex gap-4">
                <a
                  href="support.jpeg"
                  className="
    px-6 py-3
    border border-black
    text-black
    rounded-lg
    font-semibold
    transition
    hover:border-red-600
    hover:text-red-600
  "
                >
                  Visit Help Centre
                </a>


                <a
                  href="https://wa.me/6200429767?text=Hello%20D%20Print%20Hub,%20I%20want%20to%20discuss%20printing%20services."
                  className="
    px-6 py-3
  bg-black text-white
  rounded-lg font-semibold shadow-md
  transition transform
  hover:bg-red-600
  hover:scale-105
  hover:animate-pulse
  "
                >
                  Chat with us
                </a>

            </div>
          </div>

          <div>
              <img
                src="/support.jpg"
                alt="Customer Support"
                className="
    w-[420px] h-[280px]
    object-cover
    rounded-3xl
    shadow-xl
  "
/>

          </div>

        </div>
        
      </section>
      </motion.section>




    </main>
  );
}
