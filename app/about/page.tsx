export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 flex flex-col items-center bg-black text-white px-6">
      <div className="max-w-3xl w-full space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold border-b border-gray-800 pb-2">About Me</h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            I’m a backend-focused engineer based in Bengaluru with a passion for solving 
            complex distributed systems problems. [cite: 2, 5] My career has been defined by 
            leading technical initiatives—from refactoring legacy monoliths at Infosys to 
            architecting low-code platforms and wide-event systems at Lowe's and Cognite. [cite: 11, 16, 27]
          </p>
        </section>

        {/* Technical Toolkit Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-400 font-mono italic">
            Technical Toolkit [cite: 34]
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-bold mb-3">Languages & Frameworks [cite: 35]</h3>
              <ul className="text-gray-400 space-y-2 list-disc list-inside">
                <li>Java & Kotlin (Spring Boot, KTor) [cite: 35]</li>
                <li>Python & Apache Beam [cite: 35]</li>
                <li>Microservices & Event-Driven Systems [cite: 38]</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">Cloud & Data [cite: 36, 37]</h3>
              <ul className="text-gray-400 space-y-2 list-disc list-inside">
                <li>GCP, AWS, & Azure [cite: 37]</li>
                <li>PostgreSQL, Cassandra, & Redis [cite: 36]</li>
                <li>Kafka & ElasticSearch [cite: 36, 39]</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}