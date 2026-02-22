"use client";

import { useEffect, useState } from "react";

export default function Tabs() {
  const [tab, setTab] = useState<"projects" | "publications" | "personal">("projects");

  return (
    <div className="site-container mt-12">
      <div className="max-w-4xl">
        <div role="tablist" aria-label="About tabs" className="tabs-row flex gap-4 relative z-20">
          <button
            onClick={() => setTab("projects")}
            aria-selected={tab === "projects"}
            className={`tab-btn px-4 py-2 text-lg rounded-md ${tab === "projects" ? "active" : "muted"}`}
          >
            Projects
          </button>
          <button
            onClick={() => setTab("publications")}
            aria-selected={tab === "publications"}
            className={`tab-btn px-4 py-2 text-lg rounded-md ${tab === "publications" ? "active" : "muted"}`}
          >
            Publications
          </button>
        </div>

        {/* thin separator under the tabs (use about separator) */}
        <div className="mt-1 border-b-2 border-[var(--separator-about)]" />

        <div className={`mt-6 ${tab ? "text-xl" : "text-xl"}`}>
          {tab === "projects" && (
              <div className="pt-2 pb-2">
                <div className="mt-0 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Project 1 */}
                  <article className="card flex gap-4 items-start">
                    <img src="/litmt.png" alt="LitMT screenshot" className="w-24 h-24 object-cover rounded-md flex-shrink-0" />
                    <div className="flex-1">
                      <a href="https://litmt.org" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-[var(--accent)] transition-colors duration-150">
                        LitMT
                      </a>
                      <p className="mt-1 muted text-sm">A full-stack research platform to facilitate the evaluation of LLM-generated literary translations (built w/ <a href="https://marzenakrp.github.io" target="_blank" rel="noopener noreferrer" className="nav-link">Marzena Karpinska</a>)</p>
                      <div className="mt-3 flex flex-wrap gap-2 text-sm">
                        <span className="px-2 py-1 bg-gray-100 rounded">Next.js</span>
                        <span className="px-2 py-1 bg-gray-100 rounded">FastAPI</span>
                        <span className="px-2 py-1 bg-gray-100 rounded">MongoDB</span>
                      </div>
                    </div>
                  </article>

                  {/* Project 2 */}
                  <article className="card flex gap-4 items-start">
                    <img src="/terp.png" alt="TerpBot screenshot" className="w-24 h-24 object-cover rounded-md flex-shrink-0" />
                    <div className="flex-1">
                      <a href="https://github.com/jameszhou-dev/terpBot" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-[var(--accent)] transition-colors duration-150">
                        TerpBot
                      </a>
                      <p className="mt-1 muted text-sm">A RAG pipeline built to help UMD students find clubs and organizations that align with their interests</p>
                      <div className="mt-3 flex flex-wrap gap-2 text-sm">
                        <span className="px-2 py-1 bg-gray-100 rounded">Python</span>
                        <span className="px-2 py-1 bg-gray-100 rounded">ChromaDB</span>
                        <span className="px-2 py-1 bg-gray-100 rounded">Selenium</span>
                      </div>
                    </div>
                  </article>

                  {/* Project 3 */}
                  <article className="card flex gap-4 items-start">
                    <img src="/SaveRe.png" alt="SaveRe screenshot" className="w-24 h-24 object-cover rounded-md flex-shrink-0" />
                    <div className="flex-1">
                      <a href="https://github.com/jameszhou-dev/project-gamma" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-[var(--accent)] transition-colors duration-150">
                        SaveRe
                      </a>
                      <p className="mt-1 muted text-sm">An AI companion that helps you use up your groceries before they expire (<a href="https://hackprinceton-fall-2025.devpost.com" target="_blank" rel="noopener noreferrer" className="nav-link">HackPrinceton Fall 2025</a>)</p>
                      <div className="mt-3 flex flex-wrap gap-2 text-sm">
                        <span className="px-2 py-1 bg-gray-100 rounded">Next.js</span>
                        <span className="px-2 py-1 bg-gray-100 rounded">FastAPI</span>
                        <span className="px-2 py-1 bg-gray-100 rounded">MongoDB</span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
          )}

          {tab === "publications" && (
            <div className="pt-2 pb-2">

              <ul className="mt-0 space-y-4">
                <li className="flex justify-between items-start gap-4">
                  <div className="max-w-[72%]">
                    <a
                        href="https://openreview.net/forum?id=bwGaZOVo0c"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-lg hover:text-[var(--accent)] transition-colors duration-150"
                    >
                        Entropy-Based Dynamic Hybrid Retrieval for Adaptive Query Weighting in RAG Pipelines
                    </a>
                    <div className="text-sm muted mt-1">John Richard Perez, <span className="bold accent">James Zhou</span>, Radley Le, Alexander Menchtchikov, Ryan Lagasse</div>
                  </div>
                  <div className="text-sm muted text-right">ICML VecDB 2025</div>
                </li>
                <li className="flex justify-between items-start gap-4">
                  <div className="max-w-[72%]">
                    <a
                        href="https://drive.google.com/file/d/1aXsoxVc13zM6BccwA2PY7AN00Bf-ViNV/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-lg hover:text-[var(--accent)] transition-colors duration-150"
                    >
                        AI use in American newspapers is widespread, uneven, and rarely disclosed
                    </a>
                    <div className="text-sm muted mt-1">Jenna Russell, Marzena Karpinska, Destiny Akinode, <span className="bold accent">James Zhou</span>, Katherine Thai, Bradley Emi, Max Spero, Mohit Iyyer</div>
                  </div>
                  <div className="text-sm muted text-right">In Progress - ACL 2026</div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



