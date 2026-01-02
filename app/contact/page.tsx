export default function Contact() {
  return (
    <div className="min-h-screen px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">
        Contact <span className="text-red-500">D Print Hub</span>
      </h1>

      {/* Contact Details */}
      <div className="mb-8 text-gray-300 space-y-3">
        <p>
          📞 Phone 1:{" "}
          <a
            href="tel:+917004590295"
            className="text-red-500 hover:underline"
          >
            +91 70045 90295
          </a>
        </p>

        <p>
          📞 Phone 2:{" "}
          <a
            href="tel:+916200429767"
            className="text-red-500 hover:underline"
          >
            +91 62004 29767
          </a>
        </p>

        <p>
          📧 Email:{" "}
          <a
            href="mailto:dprinthub2025@gmail.com"
            className="text-red-500 hover:underline"
          >
            dprinthub2025@gmail.com
          </a>
        </p>

        <p>
          📍 Address: <br />
          1st Floor, Near Bank of Baroda, Opp. Gopal Market,  
          Nayatola, Patna – 4
        </p>
      </div>

      {/* Google Map */}
      <div className="w-full h-[400px] mb-8">
        <iframe
          src="https://www.google.com/maps?q=D+Print+Hub,+Nayatola,+Patna&output=embed"
          width="100%"
          height="100%"
          loading="lazy"
          className="rounded"
        ></iframe>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <a
          href="tel:+917004590295"
          className="bg-red-500 px-6 py-3 rounded hover:bg-red-600 transition"
        >
          Call Now
        </a>

        <a
          href="mailto:dprinthub2025@gmail.com"
          className="bg-gray-700 px-6 py-3 rounded hover:bg-gray-600 transition"
        >
          Email Us
        </a>
      </div>
    </div>
  );
}
