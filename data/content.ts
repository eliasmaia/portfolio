export type Language = 'pt' | 'en';

export const content = {
  pt: {
    hero: {
      role: "Engenheiro de Software & Desenvolvedor Backend",
      headline: "Desenvolvimento de aplicações web escaláveis e automação de processos.",
      subtext: "Mais de 7 anos projetando sistemas, APIs e integrações em nuvem com foco em estabilidade, manutenção limpa e eficiência operacional.",
      ctaProjects: "Ver Projetos",
      ctaContact: "Entrar em Contato",
    },
    skills: {
      title: "Tecnologias & Ferramentas",
      categories: [
        {
          name: "Backend & Frameworks PHP",
          items: ["PHP", "Laravel", "Symfony", "CakePHP", "Yii2", "Java", "Spring Boot", "Python", "Node.js", "Go"]
        },
        {
          name: "CMS, E-Learning & Relatórios",
          items: ["WordPress", "CraftCMS", "SCORM", "Jaspersoft Reports"]
        },
        {
          name: "Frontend & Web",
          items: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS", "HTML5/CSS3"]
        },
        {
          name: "Arquitetura, Cloud & BPM",
          items: ["BPMN 2.0", "Camunda BPMS", "AWS", "Terraform", "Docker", "RabbitMQ", "REST APIs", "MySQL", "PostgreSQL", "Snowflake", "Git / GitLab CI", "Linux"]
        }
      ]
    },
    highlights: {
      title: "Diferenciais & Idiomas",
      items: [
        {
          title: "Trabalho Remoto Consolidado",
          description: "Mais de 5 anos de experiência atuando 100% remoto com alta autonomia e entregas orientadas a resultados."
        },
        {
          title: "Times Globais & Multiculturais",
          description: "Quase 3 anos de colaboração direta em equipes internacionais lidando com múltiplos fusos horários."
        },
        {
          title: "Metodologias Ágeis",
          description: "Mais de 5 anos vivenciando e aplicando Scrum/Kanban em ciclos contínuos de entrega de software."
        }
      ],
      languagesTitle: "Idiomas",
      languages: [
        { name: "Português", level: "Nativo" },
        { name: "Inglês", level: "Fluente" },
        { name: "Espanhol", level: "Avançado / Quase fluente" }
      ]
    },
    services: {
      title: "Como posso ajudar seu negócio",
      items: [
        {
          title: "Landing Pages & Páginas Comerciais",
          description: "Páginas leves, responsivas e estruturadas para SEO técnico e carregamento rápido."
        },
        {
          title: "Sistemas Web & Aplicações Sob Medida",
          description: "Desenvolvimento de plataformas completas, painéis administrativos e aplicações web estruturadas para crescer."
        },
        {
          title: "Automação & Integrações",
          description: "Conexão entre sistemas via APIs, rotinas automatizadas e otimização de fluxos internos."
        }
      ]
    },
    projects: {
      title: "Projetos em Destaque",
      items: [
        {
          title: "Vasco News Engine",
          category: "Backend / Go & Cloud",
          description: "Pipeline automatizado e serverless para coleta concorrente, filtragem e entrega em tempo real de notícias no Telegram, utilizando Goroutines, Turso (libSQL) e GitHub Actions.",
          tech: ["Go (Golang)", "Turso (libSQL)", "GitHub Actions", "Telegram API"],
          linkLive: "https://t.me/vascaonews",
          linkGithub: "https://github.com/eliasmaia/vasco-news-engine"
        },
        {
          title: "Clínica Vida & Saúde",
          category: "Web / Landing Page",
          description: "Landing page médica de alta performance com design responsivo, suporte a Open Graph, SEO avançado e nota 100 no Google Lighthouse.",
          tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Vercel"],
          linkLive: "https://clinicavidaesaude.vercel.app",
          linkGithub: "https://github.com/eliasmaia/landing-page-clinica"
        },
        {
          title: "Movies Wrapped",
          category: "Python / Data & API",
          description: "Aplicação para compilação e visualização de estatísticas personalizadas sobre consumo de filmes utilizando APIs de dados.",
          tech: ["Python", "API Integration", "Data Processing"],
          linkLive: "https://movieswrapped.streamlit.app/",
          linkGithub: "https://github.com/eliasmaia/movies_wrapped"
        },
        {
          title: "Go Shortener",
          category: "Backend / Go",
          description: "Encurtador de URLs de alta performance e baixa latência desenvolvido em Go para gerenciamento eficiente de links.",
          tech: ["Go (Golang)", "REST API", "Backend"],
          linkLive: null,
          linkGithub: "https://github.com/eliasmaia/goshortener"
        }
      ]
    },
    footer: {
      rights: "Elias Maia. Todos os direitos reservados.",
      contactText: "Quer desenvolver um projeto ou discutir uma oportunidade?",
      email: "eeliasmaia@gmail.com",
      linkedin: "https://www.linkedin.com/in/elias-de-moraes-neto/",
      github: "https://github.com/eliasmaia"
    }
  },
  en: {
    hero: {
      role: "Senior Software Engineer & Backend Developer",
      headline: "Building scalable web applications and automated backend systems.",
      subtext: "7+ years designing software architecture, APIs, and cloud integrations focused on reliability, clean code, and operational efficiency.",
      ctaProjects: "View Projects",
      ctaContact: "Get in Touch",
    },
    skills: {
      title: "Technologies & Tech Stack",
      categories: [
        {
          name: "Backend & PHP Ecosystem",
          items: ["PHP", "Laravel", "Symfony", "CakePHP", "Yii2", "Java", "Spring Boot", "Python", "Node.js", "Go"]
        },
        {
          name: "CMS, E-Learning & Reporting",
          items: ["WordPress", "CraftCMS", "SCORM", "Jaspersoft Reports"]
        },
        {
          name: "Frontend & Web",
          items: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS", "HTML5/CSS3"]
        },
        {
          name: "Architecture, Cloud & BPM",
          items: ["BPMN 2.0", "Camunda BPMS", "AWS", "Terraform", "Docker", "RabbitMQ", "REST APIs", "MySQL", "PostgreSQL", "Snowflake", "Git / GitLab CI", "Linux"]
        }
      ]
    },
    highlights: {
      title: "Highlights & Languages",
      items: [
        {
          title: "Solid Remote Experience",
          description: "Over 5 years of experience working 100% remotely with high autonomy and a results-driven mindset."
        },
        {
          title: "Global & Cross-Cultural Teams",
          description: "Nearly 3 years of direct collaboration in international teams across multiple time zones."
        },
        {
          title: "Agile Methodologies",
          description: "Over 5 years applying Scrum/Kanban frameworks in continuous software delivery cycles."
        }
      ],
      languagesTitle: "Languages",
      languages: [
        { name: "Portuguese", level: "Native" },
        { name: "English", level: "Fluent" },
        { name: "Spanish", level: "Advanced / Upper-Intermediate" }
      ]
    },
    services: {
      title: "How I can help your business",
      items: [
        {
          title: "Landing Pages & Commercial Sites",
          description: "Fast, responsive pages built with clean structure and technical SEO best practices."
        },
        {
          title: "Custom Web Apps & Platforms",
          description: "End-to-end web systems, dashboards, and backend architectures designed for long-term maintainability."
        },
        {
          title: "Automation & API Integrations",
          description: "System-to-system integrations, background workers, and workflow automation to eliminate manual bottlenecks."
        }
      ]
    },
    projects: {
      title: "Featured Projects",
      items: [
        {
          title: "Vasco News Engine",
          category: "Backend / Go & Cloud",
          description: "Serverless automated pipeline for concurrent scraping, deduplication, and real-time Telegram news delivery, built with Go Goroutines, Turso (libSQL), and GitHub Actions.",
          tech: ["Go (Golang)", "Turso (libSQL)", "GitHub Actions", "Telegram API"],
          linkLive: "https://t.me/vascaonews",
          linkGithub: "https://github.com/eliasmaia/vasco-news-engine"
        },
        {
          title: "Vida & Saúde Clinic",
          category: "Web / Landing Page",
          description: "High-performance medical landing page with responsive design, Open Graph support, advanced SEO, and a 100 Lighthouse score.",
          tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Vercel"],
          linkLive: "https://clinicavidaesaude.vercel.app",
          linkGithub: "https://github.com/eliasmaia/landing-page-clinica"
        },
        {
          title: "Movies Wrapped",
          category: "Python / Data & API",
          description: "Application for compiling and visualizing personalized movie consumption statistics using external data APIs.",
          tech: ["Python", "API Integration", "Data Processing"],
          linkLive: "https://movieswrapped.streamlit.app/",
          linkGithub: "https://github.com/eliasmaia/movies_wrapped"
        },
        {
          title: "Go Shortener",
          category: "Backend / Go",
          description: "High-performance, low-latency URL shortener built in Go for efficient link management.",
          tech: ["Go (Golang)", "REST API", "Backend"],
          linkLive: null,
          linkGithub: "https://github.com/eliasmaia/goshortener"
        }
      ]
    },
    footer: {
      rights: "Elias Maia. All rights reserved.",
      contactText: "Looking to build a project or discuss an engineering opportunity?",
      email: "eeliasmaia@gmail.com",
      linkedin: "https://www.linkedin.com/in/elias-de-moraes-neto/",
      github: "https://github.com/eliasmaia"
    }
  }
};