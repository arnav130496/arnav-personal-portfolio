export default function AboutPage() {
  const skillGroups = [
    {
      title: "Languages & Frameworks",
      skills: ["Java", "Kotlin", "Spring Boot", "KTor", "Apache Beam", "Python"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "Apache Cassandra", "Elasticsearch", "Neo4j", "Redis"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["Google Cloud Platform (GCP)", "Amazon Web Services (AWS)", "Azure", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      title: "Architecture Patterns",
      skills: ["Microservices", "Event-Driven Systems", "Streaming Pipelines", "Batch Processing", "REST APIs"]
    },
    {
      title: "Tools & Methodologies",
      skills: ["Apache Kafka", "Agile (Scrum)", "Test Driven Development", "CMS", "Data Migration"]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 flex flex-col items-center bg-black text-white px-6">
      <div className="max-w-4xl w-full space-y-16">
        
        {/* Profile Header */}
        <section className="space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-gray-400 text-xl leading-relaxed max-w-3xl">
            I’m a Senior Software Engineer based in Bengaluru with over 7 years of experience 
            specializing in high-throughput backend architectures. I bridge the gap between 
            complex business requirements and scalable technical implementation.
          </p>
          <div className="flex gap-6 pt-2">
             <div className="flex flex-col">
                <span className="text-blue-500 font-bold text-2xl">7+</span>
                <span className="text-gray-500 text-xs uppercase tracking-widest">Years Exp</span>
             </div>
             <div className="w-px h-10 bg-gray-800" />
             <div className="flex flex-col">
                <span className="text-blue-500 font-bold text-2xl">3</span>
                <span className="text-gray-500 text-xs uppercase tracking-widest">Cloud Platforms</span>
             </div>
             <div className="w-px h-10 bg-gray-800" />
             <div className="flex flex-col">
                <span className="text-blue-500 font-bold text-2xl">5+</span>
                <span className="text-gray-500 text-xs uppercase tracking-widest">Recognitions & Awards</span>
             </div>
          </div>
        </section>

        {/* Technical Skill Matrix */}
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-white">Technical Toolkit</h2>
            <div className="h-px flex-grow bg-gray-800" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
            {skillGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <h3 className="text-blue-400 font-mono text-sm uppercase tracking-wider font-bold">
                  // {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-gray-300 flex items-center gap-2 group">
                      <span className="h-1 w-1 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Philosophy / Soft Skills */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-gray-800">
          <div className="space-y-6">
             <h2 className="text-3xl font-bold tracking-tight text-white">Beyond the Code</h2>
             <p className="text-gray-400 leading-relaxed text-lg">
               I am thoughtful about long-term growth—whether it’s career progression, 
               financial health, or personal development. I deeply value <b>structure, ownership, 
               and continuous learning</b>. For me, it’s about doing meaningful work while 
               maintaining balance and integrity in both life and professional practice.
             </p>
             <p className="text-gray-400 leading-relaxed text-lg">
               I find my balance in nature. I’m an avid hiker and 
               closely follow football—both as an amatuer weekend player and a spectator. 
             </p>
             <p className="text-gray-400 leading-relaxed text-lg">
               At heart, I’m a typical homebody. You’ll often find me indoors, 
               immersed in music or catching up on a long-form series. This balance 
               of outdoor activity and indoor reflection keeps me sharp and creative 
               when I’m back at the terminal.
             </p>
          </div>

          <div className="space-y-6">
             <div className="bg-gray-900/40 border border-gray-800 p-8 rounded-2xl">
                <h3 className="text-blue-400 font-mono text-xs uppercase tracking-widest mb-6 font-bold">
                  // Personal Interests
                </h3>
                <div className="grid grid-cols-2 gap-4">
                   {[
                     { label: "Hiking", icon: "🏔️" },
                     { label: "Football", icon: "⚽" },
                     { label: "Nature", icon: "🌲" },
                     { label: "Music", icon: "🎧" },
                     { label: "Movies/Shows", icon: "📺" },
                     { label: "Self-Growth", icon: "📈" }
                   ].map(item => (
                     <div key={item.label} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5 group hover:border-blue-500/30 transition-all">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-sm text-gray-300 font-medium">{item.label}</span>
                     </div>
                   ))}
                </div>
             </div>

             {/* Soft Skill Competencies */}
             <div className="flex flex-wrap gap-2">
                {["Analytical Thinking", "Strategic Planning", "Technical Mentorship", "Stakeholder Communication", "Ownership Mindset"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-500/5 border border-blue-500/20 rounded-md text-[10px] font-bold uppercase tracking-wider text-blue-400">
                    {skill}
                  </span>
                ))}
             </div>
          </div>
        </section>

      </div>
    </div>
  );
}