export type Language = 'pt' | 'en';

export const content = {
  pt: {
    hero: {
      role: "Engenheiro de Software & Desenvolvedor Web",
      headline: "Construindo aplicações de alta performance e soluções digitais sob medida.",
      subtext: "Especialista em desenvolvimento web moderno, arquitetura de software e automação de processos. Mais de 8 anos transformando código em soluções de alto impacto.",
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
          title: "Landing Pages de Alta Conversão",
          description: "Páginas otimizadas para velocidade, SEO impecável e foco total em transformar visitantes em clientes."
        },
        {
          title: "Sites Institucionais & Web Apps",
          description: "Plataformas web completas, modernas e responsivas, construídas com as tecnologias mais recentes do mercado."
        },
        {
          title: "Automação & Integrações",
          description: "Otimização de processos internos, consumo de APIs e integração de sistemas para acelerar sua operação."
        }
      ]
    },
    projects: {
      title: "Projetos em Destaque",
      items: [
        {
          title: "Clínica Vida & Saúde",
          category: "Web / Landing Page",
          description: "Landing page médica de alta performance com design responsivo, suporte a Open Graph, SEO avançado e nota 100 no Google Lighthouse.",
          tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Vercel"],
          linkLive: "https://clinicavidaesaude.vercel.app",
          linkGithub: null
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
      role: "Software Engineer & Web Developer",
      headline: "Building high-performance applications and tailored digital solutions.",
      subtext: "Specialized in modern web development, software architecture, and process automation. Over 8 years of experience engineering impactful software.",
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
          title: "High-Converting Landing Pages",
          description: "Pages optimized for speed, flawless SEO, and conversion-focused design to turn visitors into active leads."
        },
        {
          title: "Institutional Websites & Web Apps",
          description: "Complete, modern, and responsive web platforms built with cutting-edge tech stacks."
        },
        {
          title: "Automation & Integrations",
          description: "Internal process optimization, API integrations, and system architecture to streamline business operations."
        }
      ]
    },
    projects: {
      title: "Featured Projects",
      items: [
        {
          title: "Vida & Saúde Clinic",
          category: "Web / Landing Page",
          description: "High-performance medical landing page with responsive design, Open Graph support, advanced SEO, and a 100 Lighthouse score.",
          tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Vercel"],
          linkLive: "https://clinicavidaesaude.vercel.app",
          linkGithub: null
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