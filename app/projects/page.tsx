"use client";

export default function Projects() {
  const images = [
    "p1.jpeg","p2.jpeg","p3.jpeg",
    "p4.jpeg","p5.jpeg","p6.jpeg",
    "s1.jpeg","s2.jpeg","s3.jpeg",
    "s5.jpeg","s6.jpeg","s7.jpeg",
    "s8.jpeg","s10.jpeg","s12.jpeg",
    
  ];

  const videos = [
    "v5.mp4","v1.mp4","v3.mp4"
  ];

  return (
    <div className="min-h-screen px-6 md:px-14 py-20 bg-black">

      {/* HEADER */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our <span className="text-red-500">Work</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Selected branding, signage & custom printing projects by D Print Hub
        </p>
      </div>

      {/* IMAGE PROJECTS */}
      <section className="mb-28">
        <h2 className="text-2xl font-semibold mb-8">
          Featured Design Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {images.map((img, i) => (
            <div
              key={i}
              className="group bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-red-500/20 transition"
            >
              <img
                src={`/projects/images/${img}`}
                className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* VIDEOS */}
      <section>
        <h2 className="text-2xl font-semibold mb-8">
          Production Videos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {videos.map((vid, i) => (
            <div
              key={i}
              className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-green-500/20 transition cursor-pointer"
            >
              <video
                muted
                loop
                className="w-full aspect-[9/16] object-cover"
                onClick={(e) => {
                  const v = e.currentTarget;
                  v.paused ? v.play() : v.pause();
                }}
              >
                <source src={`/projects/videos/${vid}`} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
