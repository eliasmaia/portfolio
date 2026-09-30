export type Language = 'pt' | 'en';

export const content = {
  pt: {
    hero: {
      role: "Engenheiro de Software & Desenvolvedor Web",
      headline: "Construindo aplicações de alta performance e soluções digitais sob medida.",
      subtext: "Especialista em desenvolvimento web moderno, arquitetura de software e automação de processos. Mais de 6 anos transformando código em soluções de alto impacto.",
      ctaProjects: "Ver Projetos",
      ctaContact: "Entrar em Contato",
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
          linkLive: null,
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
      subtext: "Specialized in modern web development, software architecture, and process automation. Over 6 years of experience engineering impactful software.",
      ctaProjects: "View Projects",
      ctaContact: "Get in Touch",
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
          linkLive: null,
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