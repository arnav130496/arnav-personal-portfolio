import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="space-y-6 max-w-4xl">
        {/* Senior Branding */}
        <h2 className="text-blue-500 font-mono text-lg font-medium">Hi, my name is</h2>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
          Arnav Saraf.
        </h1>
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-400">
          I build scalable backend systems and data pipelines. [cite: 4]
        </h2>
        
        <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
          I am a Senior Software Engineer with over 7 years of experience specializing in 
          building high-throughput microservices and streaming data architectures using 
          Java, Kotlin, and Spring Boot. [cite: 4, 35]
        </p>

        <div className="flex gap-4 pt-4">
          <button className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500/10 transition rounded">
            Check out my work
          </button>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded">
            Download Resume
          </button>
        </div>
      </div>
    </div>
  )
}

export default page