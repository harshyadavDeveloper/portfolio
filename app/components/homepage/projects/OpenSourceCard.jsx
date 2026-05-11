"use client";

import React from "react";

const GitHubSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const PullRequestSVG = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="18" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <path d="M13 6h3a2 2 0 0 1 2 2v7" />
    <line x1="6" y1="9" x2="6" y2="21" />
  </svg>
);

const PackageSVG = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const ExternalLinkSVG = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const CheckSVG = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const OpenSourceCard = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[#1b2c68a0] bg-gradient-to-br from-[#0d1224] to-[#0a0d37] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.15),transparent_40%)]" />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{project.name}</h3>
          <p className="mt-1 text-sm text-cyan-400">{project.type}</p>
        </div>
        {project.status && (
          <span className="flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
            <CheckSVG />
            {project.status}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="relative z-10 mt-5 text-sm leading-7 text-gray-300">
        {project.description}
      </p>

      {/* Tools */}
      {project.tools?.length > 0 && (
        <div className="relative z-10 mt-5 flex flex-wrap gap-2">
          {project.tools.map((tool, index) => (
            <span
              key={index}
              className="rounded-md bg-[#1a1443] px-3 py-1 text-xs text-cyan-300"
            >
              {tool}
            </span>
          ))}
        </div>
      )}

      {/* Role & Contribution */}
      <div className="relative z-10 mt-5 space-y-2 text-sm">
        {project.role && (
          <div className="flex gap-2">
            <span className="text-gray-400">Role:</span>
            <span className="text-white">{project.role}</span>
          </div>
        )}
        {project.contributionType && (
          <div className="flex gap-2">
            <span className="text-gray-400">Contribution:</span>
            <span className="text-orange-300">{project.contributionType}</span>
          </div>
        )}
      </div>

      {/* Highlights */}
      {project.highlights?.length > 0 && (
        <div className="relative z-10 mt-6">
          <p className="mb-3 text-sm font-medium text-white">Highlights</p>
          <ul className="space-y-2">
            {project.highlights.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-gray-300"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Links */}
      <div className="relative z-10 mt-8 flex flex-wrap gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400/20"
          >
            {project.type === "Open Source Contribution" ? (
        <><PullRequestSVG /> View PR</>
      ) : (
        <><GitHubSVG /> View Source</>
      )}
          </a>
        )}
        {project.repository && (
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 transition hover:bg-white/10"
          >
            <GitHubSVG />
            Repository
          </a>
        )}
        {project.pub && (
          <a
            href={project.pub}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-indigo-400/20 bg-indigo-400/10 px-4 py-2 text-sm text-indigo-300 transition hover:bg-indigo-400/20"
          >
            <PackageSVG />
            pub.dev
          </a>
        )}
        {project.npm && (
          <a
            href={project.npm}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-red-400/20 bg-red-400/10 px-4 py-2 text-sm text-red-300 transition hover:bg-red-400/20"
          >
            <PackageSVG />
            npm
          </a>
        )}
        {project.issue && (
          <a
            href={project.issue}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-300 transition hover:bg-yellow-400/20"
          >
            <ExternalLinkSVG />
            Issue
          </a>
        )}
      </div>
    </div>
  );
};

export default OpenSourceCard;
