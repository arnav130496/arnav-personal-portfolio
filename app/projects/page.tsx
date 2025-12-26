"use client";
import { useState } from 'react';
import { PROJECTS } from '../data/projects';
import Image from 'next/image'; // Assuming you are using Next.js

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Professional' | 'Personal'>('All');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-10 bg-black text-white selection:bg-blue-500/30">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Architecture & Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mb-8">
            Deep dives into systems designed and scaled over 7+ years of engineering leadership.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {['All', 'Professional', 'Personal'].map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat as any); setExpandedIndex(null); }}
                className={`px-5 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full border transition-all ${
                  activeCategory === cat 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'border-gray-800 text-gray-500 hover:border-gray-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col bg-gray-900/10 border border-gray-800 p-8 rounded-2xl hover:bg-gray-900/20 hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Header with Logo */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  {project.logo ? (
                    <div className="w-8 h-8 relative grayscale group-hover:grayscale-0 transition-all">
                      <img 
                        src={project.logo} 
                        alt={`${project.company} logo`} 
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-[10px] font-bold">
                      {project.company.charAt(0)}
                    </div>
                  )}
                  <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest">
                    {project.company}
                  </span>
                </div>
                {project.impact.includes("Award") && (
                  <span className="text-[9px] text-yellow-500 font-bold border border-yellow-500/20 px-2 py-0.5 rounded bg-yellow-500/5">
                    AWARDED
                  </span>
                )}
              </div>

              <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors tracking-tight">
                {project.title}
              </h2>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-bold px-2 py-1 bg-white/5 text-gray-400 border border-white/10 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div>
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Challenge</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Engineering</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <button 
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="mt-auto py-3 w-full text-xs font-bold border-t border-gray-800 hover:text-blue-400 transition-colors flex justify-between items-center"
              >
                {expandedIndex === index ? 'HIDE IMPACT' : 'VIEW BUSINESS IMPACT'}
                <span className={`transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}>↓</span>
              </button>

              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedIndex === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}>
                <div className="p-4 bg-blue-500/5 border border-blue-500/10 rounded-lg">
                  <p className="text-sm text-blue-100/80 italic leading-relaxed">
                    "{project.impact}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}