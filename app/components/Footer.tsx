'use client'
import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-black pt-16 pb-8 px-6 md:px-24 text-gray-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Column 1: Brand & Bio */}
        <div className="space-y-4">
          <h3 className="text-white text-xl font-bold tracking-tight">Arnav Saraf</h3>
          <p className="text-sm leading-relaxed max-w-xs">
            Senior Software Engineer building scalable backend systems and high-throughput data pipelines.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold uppercase tracking-wider text-xs">Sitemap</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-blue-400 transition">About</Link></li>
            <li><Link href="/experience" className="hover:text-blue-400 transition">Experience</Link></li>
            <li><Link href="/projects" className="hover:text-blue-400 transition">Projects</Link></li>
            <li>
              <a href="https://drive.google.com/file/d/13uh0jSbsLdwleGIB_xcdhmHdVDKoL3au/view?usp=sharing" target="_blank" className="hover:text-blue-400 transition">
                Download Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold uppercase tracking-wider text-xs">Connect</h4>
          <p className="text-sm text-gray-500">Bengaluru, Karnataka, India</p>
          <div className="flex gap-5 text-xl">
            <a href="https://www.linkedin.com/in/arnavsaraf/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                <FaLinkedin />
            </a>
            <a href="https://github.com/arnav130496" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <FaGithub />
            </a>
            <a href="mailto:arnav130496@gmail.com" className="hover:text-blue-400 transition">
                <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Resume Awards */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-[10px] gap-4">
        <p>© {currentYear} Arnav Saraf. Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  )
}

export default Footer