// src/pages/Projects.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Package, Shield } from "lucide-react";
// Removed deprecated Github icon. Use SVG from simpleicons.org instead.

interface ProjectData {
  title: string;
  description: string;
  github: string;
  iconType: "terminal" | "package" | "shield";
}

// Type for GitHub API repo
interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  fork: boolean;
}

const pinnedNames = ["jhonkong", "teragaming", "facepalm", "facepalmbe"];

const localProjects: ProjectData[] = [
  {
    title: "JhonKong",
    description: "A Mario‑like platformer built during IronHack bootcamp.",
    github: "https://github.com/coladero/jhonkong",
    iconType: "terminal",
  },
  {
    title: "TeraGaming",
    description: "A gaming portal built with HBS, JS, CSS & video game API.",
    github: "https://github.com/coladero/teragaming",
    iconType: "package",
  },
  {
    title: "Facepalm",
    description: "IronHack project: user comments on video games.",
    github: "https://github.com/coladero/facepalm",
    iconType: "shield",
  },
  {
    title: "FacepalmBE",
    description: "Backend for Facepalm: Node.js + Express + MongoDB.",
    github: "https://github.com/coladero/facepalmbe",
    iconType: "shield",
  },
];

const getIcon = (type: ProjectData["iconType"]) => {
  switch (type) {
    case "terminal": return <Terminal className="inline w-5 h-5 mr-2 text-terminal-green" />;
    case "package": return <Package className="inline w-5 h-5 mr-2 text-terminal-green" />;
    case "shield": return <Shield className="inline w-5 h-5 mr-2 text-terminal-green" />;
    default: return null;
  }
};

const GITHUB_USERNAME = "coladero";

const Projects = () => {
  const [extraProjects, setExtraProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch GitHub repositories.");
        return res.json();
      })
      .then((repos: GithubRepo[]) => {
        const filtered = repos
          .filter(repo =>
            !pinnedNames.includes(repo.name.toLowerCase()) &&
            !repo.fork &&
            typeof repo.description === "string" &&
            repo.description
          );

        // Shuffle and pick two random, avoiding duplicates with localProjects
        const localTitles = localProjects.map(p => p.title.toLowerCase());
        const shuffled = filtered.slice().sort(() => 0.5 - Math.random());
        const selected = shuffled
          .filter(repo => !localTitles.includes(repo.name.toLowerCase()))
          .slice(0, 2)
          .map(repo => ({
            title: repo.name,
            description: repo.description ?? "",
            github: repo.html_url,
            iconType: "terminal" as const,
          }));

        setExtraProjects(selected);
      })
      .catch((err) => {
        setError("Could not load extra projects from GitHub.");
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  const allProjects = [...localProjects, ...extraProjects];

  return (
    <section className="min-h-screen text-terminal-green px-4 py-12 font-mono">
      <h2 className="text-3xl font-bold mb-6 text-center border-b pb-2 border-terminal-green">
        ➜ Projects
      </h2>

      {loading && (
        <p className="text-center text-gray-400 mt-8">Loading extra projects…</p>
      )}
      {error && (
        <p className="text-center text-red-400 mt-8">{error}</p>
      )}

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {allProjects.map((p, idx) => (
          <motion.div
            key={p.github}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="relative bg-gray-800 border border-terminal-green rounded-xl p-6 hover:shadow-[0_0_14px_#00FF00] transition-transform hover:scale-[1.01]"
          >
            <h3 className="text-xl font-bold mb-2 text-white flex items-center">
              {getIcon(p.iconType)} {p.title}
            </h3>
            <p className="text-sm text-gray-300 mb-10">{p.description}</p>
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${p.title} on GitHub`}
              className="absolute bottom-4 left-4 flex items-center gap-2 text-sm text-terminal-green hover:underline"
            >
              {/* GitHub SVG icon from simpleicons.org */}
              <svg className="w-4 h-4" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <title>GitHub</title>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.334-5.466-5.932 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.625-5.475 5.922.43.37.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
              </svg> View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
