'use client';

import { useState } from 'react';
import { content, Language } from '@/data/content';

export default function Home() {
  const [lang, setLang] = useState<Language>('pt');
  const t = content[lang];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* HEADER / NAVBAR */}
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="#home"
            className="text-xl font-bold tracking-tight"
          >
            Elias Maia
            <span className="text-teal-400">.dev</span>
          </a>

          {/* Languages Alternator */}
          <div className="flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900 p-1">
            <button
              type="button"
              onClick={() => setLang('pt')}
              className={`rounded-full px-3 py-1 font-medium transition-colors ${
                lang === 'pt'
                  ? 'bg-teal-500 text-slate-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              PT
            </button>

            <button
              type="button"
              onClick={() => setLang('en')}
              className={`rounded-full px-3 py-1 font-medium transition-colors ${
                lang === 'en'
                  ? 'bg-teal-500 text-slate-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 py-20"
      >
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">
            {t.hero.role}
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {t.hero.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            {t.hero.subtext}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-teal-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-teal-400"
            >
              {t.hero.ctaProjects}
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition-colors hover:border-teal-500 hover:text-teal-400"
            >
              {t.hero.ctaContact}
            </a>
          </div>
        </div>
      </section>

      {/* Technologies & Stack section */}
      <section
        id="skills"
        className="border-t border-slate-800 bg-slate-900/20 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {t.skills.title}
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {t.skills.categories.map((category, idx) => (
              <div
                key={`${category.name}-${idx}`}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition-colors hover:border-slate-700"
              >
                <h3 className="text-lg font-semibold text-teal-400">
                  {category.name}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((tech, tIdx) => (
                    <span
                      key={`${tech}-${tIdx}`}
                      className="rounded-md border border-slate-800 bg-slate-900 px-3 py-1.5 text-sm font-medium text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="border-t border-slate-800 bg-slate-900/40 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {t.projects.title}
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {t.projects.items.map((project, index) => (
              <article
                key={`${project.title}-${index}`}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition-colors hover:border-slate-700"
              >
                <p className="text-sm font-medium text-teal-400">
                  {project.category}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech, tIndex) => (
                    <span
                      key={`${tech}-${tIndex}`}
                      className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.linkLive || project.linkGithub) && (
                  <div className="mt-6 flex flex-wrap gap-4">
                    {project.linkLive && (
                      <a
                        href={project.linkLive}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-teal-400 transition-colors hover:text-teal-300"
                      >
                        Live Demo ↗
                      </a>
                    )}

                    {project.linkGithub && (
                      <a
                        href={project.linkGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-slate-300 transition-colors hover:text-white"
                      >
                        GitHub Repository ↗
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights & languages section */}
      <section id="highlights" className="border-t border-slate-800 bg-slate-900/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {t.highlights.title}
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.highlights.items.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 transition-colors hover:border-slate-700"
              >
                <h3 className="text-xl font-bold text-teal-400">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          {/* Languages */}
          <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-950 p-6">
            <h3 className="text-lg font-semibold text-slate-200 mb-4">
              {t.highlights.languagesTitle}
            </h3>
            <div className="flex flex-wrap gap-4">
              {t.highlights.languages.map((langItem, idx) => (
                <div
                  key={`${langItem.name}-${idx}`}
                  className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-4 py-2"
                >
                  <span className="font-semibold text-teal-400">{langItem.name}:</span>
                  <span className="text-sm text-slate-300">{langItem.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="border-t border-slate-800 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {t.services.title}
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((service, index) => (
              <article
                key={`${service.title}-${index}`}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
              >
                <h3 className="text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-3 leading-relaxed text-slate-400">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-slate-800 bg-slate-950 py-8 text-slate-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* Direitos Autorais */}
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} {t.footer.rights}
            </p>

            {/* Seção de Contato/Redes */}
            <div className="flex items-center gap-3 text-sm font-medium">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold mr-1">
                Contato:
              </span>

              {t.footer.email && (
                <a
                  href={`mailto:${t.footer.email}`}
                  className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-slate-300 transition-colors hover:border-teal-500/50 hover:bg-slate-800 hover:text-teal-400"
                >
                  E-mail
                </a>
              )}

              {t.footer.linkedin && (
                <a
                  href={t.footer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-slate-300 transition-colors hover:border-teal-500/50 hover:bg-slate-800 hover:text-teal-400"
                >
                  LinkedIn ↗
                </a>
              )}

              {t.footer.github && (
                <a
                  href={t.footer.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-slate-300 transition-colors hover:border-teal-500/50 hover:bg-slate-800 hover:text-teal-400"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}