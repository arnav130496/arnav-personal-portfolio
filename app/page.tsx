import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="space-y-8 max-w-4xl">
        {/* Intro */}
        <header className="space-y-4">
          <h2 className="text-blue-500 font-mono text-lg font-medium tracking-widest animate-fade-in">
            Hi, my name is
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
            Arnav Saraf.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-500 tracking-tight leading-none">
            I build scalable & distributed backend systems.
          </h2>
        </header>

        {/* Core Value Proposition */}
        <p className="text-gray-400 text-xl md:text-2xl max-w-2xl leading-relaxed">
          Senior Software Engineer  specializing in <span className="text-white">high-throughput microservices</span> and
          <span className="text-white"> streaming data architectures</span>.
        </p>

        {/* Tech Stack Pills (Quick Glance) */}
        <div className="flex flex-wrap gap-3 text-xs font-mono text-gray-500">
          {["Java", "Spring Boot", "Microservices", "Data Pipelines", "Kotlin", "Apache Beam", "Kafka"].map((tech) => (
            <span key={tech} className="border border-gray-800 px-3 py-1 rounded-full bg-gray-900/20">
              {tech}
            </span>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-5 pt-6">
          <Link
            href="/projects"
            className="px-8 py-4 border border-blue-500 text-blue-500 font-bold hover:bg-blue-500/10 transition-all rounded-lg text-center"
          >
            Explore My Work
          </Link>

          <a
            href="https://drive.google.com/file/d/13uh0jSbsLdwleGIB_xcdhmHdVDKoL3au/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all rounded-lg text-center shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            View Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomePage