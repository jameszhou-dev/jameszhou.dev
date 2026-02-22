"use client";

import { useState } from "react";

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
          <button
            onClick={() => setTab("personal")}
            aria-selected={tab === "personal"}
            className={`tab-btn px-4 py-2 text-lg rounded-md ${tab === "personal" ? "active" : "muted"}`}
          >
            Personal
          </button>
        </div>

        {/* thin separator under the tabs (use about separator) */}
        <div className="mt-1 border-b-2 border-[var(--separator-about)]" />

        <div className={`mt-6 ${tab ? "text-xl" : "text-xl"}`}>
          {tab === "projects" && (
            <div className="pt-6 pb-6">
              
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

          {tab === "personal" && (
            <div className="pt-6 pb-6">
              <h3 className="text-3xl font-semibold">Personal</h3>
              <p className="mt-3 muted text-lg">Interests, hobbies, and other personal notes go here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
