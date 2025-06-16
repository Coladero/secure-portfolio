import { aboutData } from "../data/aboutData";

type Experience = {
  role: string;
  period: string;
  company: string;
  details: string[];
};

const About = () => (
  <div className="min-h-screen flex items-center justify-center px-2 sm:px-4">
    <section className="bg-gray-900 border-2 rounded-[10px] border-gray-700 shadow-terminal p-8 w-full max-w-5xl mt-8 mb-8">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left column: Profile & Contact */}
        <aside className="md:w-1/3 flex flex-col items-center md:items-start">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-32 h-32 text-green-400 rounded-full border-4 border-green-400 mb-4 shadow-terminal object-cover"
          />
          <h1 className="text-2xl font-bold text-green-400 mb-1">{aboutData.name}</h1>
          <h2 className="text-lg text-terminal-cyan mb-4">{aboutData.title}</h2>
          <p className="text-gray-300 mb-6 text-center md:text-left">{aboutData.summary}</p>
          <div className="w-full border-t border-terminal-green mb-4"></div>
          <div className="text-sm text-gray-400 space-y-2 w-full">
            <div>
              <span className="text-terminal-green">Email:</span>
              <a href={`mailto:${aboutData.contact.email}`} className="ml-1 hover:text-terminal-cyan transition">{aboutData.contact.email}</a>
            </div>
            <div>
              <span className="text-terminal-green">Location:</span>
              <span className="ml-1">{aboutData.contact.location}</span>
            </div>
            <div>
              <span className="text-terminal-green">Website:</span>
              <a href={`https://${aboutData.contact.website}`} className="ml-1 hover:text-terminal-cyan transition" target="_blank" rel="noopener noreferrer">{aboutData.contact.website}</a>
            </div>
            <div>
              <span className="text-terminal-green">LinkedIn:</span>
              <a href={`https://${aboutData.contact.linkedin}`} className="ml-1 hover:text-terminal-cyan transition" target="_blank" rel="noopener noreferrer">{aboutData.contact.linkedin}</a>
            </div>
            <div>
              <span className="text-terminal-green">GitHub:</span>
              <a href={`https://${aboutData.contact.github}`} className="ml-1 hover:text-terminal-cyan transition" target="_blank" rel="noopener noreferrer">{aboutData.contact.github}</a>
            </div>
          </div>
        </aside>
        {/* Right column: Experience & Skills */}
        <main className="md:w-2/3">
          <section>
            <h3 className="text-xl font-semibold text-green-400 mb-3">Experience</h3>
            <div className="space-y-6 mb-8">
              {aboutData.experience.map((exp, idx) => (
                <div key={idx} className="bg-gradient-to-b from-gray-800 to-gray-900 px-4 py-2 border-b border-gray-700 rounded-lg p-4 border-l-4 shadow-terminal">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <span className="font-bold text-terminal-cyan">{exp.role}</span>
                    <span className="text-gray-400">{exp.period}</span>
                  </div>
                  <div className="text-gray-300 italic">{exp.company}</div>
                  <ul className="list-disc list-inside text-gray-400 ml-2 mt-1">
                    {exp.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h3 className="text-xl font-semibold text-green-400 mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {aboutData.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-terminal-green/10 border border-terminal-green text-terminal-green px-3 py-1 rounded-full text-xs font-mono hover:bg-terminal-green/20 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </main>
      </div>
    </section>
  </div>
);

export default About;