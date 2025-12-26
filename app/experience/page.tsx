"use client";
import { useState } from 'react';
import { EXPERIENCE } from '../data/resume';

export default function ExperiencePage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-10 bg-black text-white selection:bg-blue-500/30">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Professional Experience
          </h1>
        </header>

        <div className="relative border-l border-gray-800 ml-4">
          {EXPERIENCE.map((job, index) => (
            <div key={index} className="mb-12 last:mb-0 pl-10 relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-blue-500 transition-transform group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

              <div className="flex flex-col gap-1 mb-3">
                <span className="text-xs font-mono text-blue-500 tracking-widest uppercase">
                  {job.period}
                </span>
                
                <div className="flex items-center gap-4 mt-1">
                  {/* Company Logo */}
                  <div className="w-10 h-10 flex-shrink-0 bg-white/5 border border-white/10 rounded-lg p-1.5 grayscale group-hover:grayscale-0 transition-all duration-300">
                    <img 
                      src={job.logo} 
                      alt={`${job.company} logo`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-gray-100 leading-none">{job.role}</h2>
                    <h3 className="text-lg text-gray-400 font-medium mt-1">{job.company}</h3>
                  </div>
                </div>
              </div>

              {/* Technology Tokens */}
              <div className="flex flex-wrap gap-2 mb-4 mt-4">
                {job.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 leading-relaxed mb-4 text-sm md:text-base max-w-3xl">
                {job.description}
              </p>

              {/* Expandable Section */}
              <button 
                onClick={() => toggleExpand(index)}
                className="text-xs font-bold text-gray-500 hover:text-white transition-colors flex items-center gap-1 mb-2 tracking-tighter"
              >
                {expandedIndex === index ? '− SHOW LESS' : '+ VIEW IMPACT HIGHLIGHTS'}
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <ul className="mt-4 space-y-3 bg-gray-900/30 p-5 rounded-xl border border-gray-800">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-gray-300 text-sm leading-relaxed">
                      <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0 shadow-[0_0_5px_rgba(59,130,246,0.8)]" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}