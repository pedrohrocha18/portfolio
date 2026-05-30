import {
  FaAws,
  FaDocker,
  FaEnvelope,
  FaGithub,
  FaJava,
  FaLinkedin,
  FaReact,
  FaWhatsapp,
} from 'react-icons/fa'
import { FiCode, FiDatabase, FiTool } from 'react-icons/fi'
import {
  SiGit,
  SiJunit5,
  SiPostgresql,
  SiSpringboot,
  SiTypescript,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

export type SkillCategory = {
  title: string
  items: string[]
  icon: IconType
}

export type ContactLink = {
  label: string
  value: string
  href: string
  icon: IconType
}

export type Differential = {
  title: string
  description: string
}

export const profile = {
  name: 'Pedro Henrique Rocha Gonçalves',
  role: 'Desenvolvedor Backend Java',
  headline:
    'Construo APIs seguras, integrações confiáveis e soluções backend com Java, Spring Boot e arquitetura orientada a evolução.',
  about: [
    'Desenvolvedor Backend com experiência em Java, atuando no desenvolvimento e manutenção de soluções integradas ao ERP Sankhya.',
    'Possuo experiência prática na construção de APIs, implementação de regras de negócio e otimização de consultas SQL em bancos como Oracle, SQL Server e PostgreSQL, sempre com foco em performance, organização de código e boas práticas de desenvolvimento.',
    'Além da atuação profissional, desenvolvo projetos próprios utilizando o ecossistema Spring Boot, aplicando conceitos de arquitetura backend moderna, APIs REST, autenticação com JWT, microsserviços e engenharia de software.',
    'Tenho experiência com tecnologias como Spring Boot, Spring Data JPA, Hibernate, Docker e PostgreSQL, buscando constantemente aprofundar conhecimentos em arquitetura de sistemas, cloud e desenvolvimento backend escalável.',
    'Minha vivência com suporte e implantação de sistemas também fortaleceu minha visão de negócio e minha capacidade de transformar problemas reais em soluções técnicas eficientes.',
  ],
  location: 'Patos de Minas, MG',
  email: 'phr.tech@outlook.com',
  whatsapp: '+55 34 98401-0163',
  socials: {
    linkedin: 'https://www.linkedin.com/in/pedrohrocha16/',
    github: 'https://github.com/pedrohrocha18',
    whatsapp: 'https://wa.me/5534984010163',
  },
}

export const heroStats = [
  { value: '2+ anos', label: 'ERP, suporte e backend' },
  { value: 'SQL', label: 'Oracle, SQL Server e PostgreSQL' },
  { value: 'APIs', label: 'REST, JWT e integrações' },
]

export const differentials: Differential[] = [
  {
    title: 'Visão de negócio',
    description:
      'Experiência com suporte, implantação e ERP ajuda a entender o problema antes de escrever a solução.',
  },
  {
    title: 'Performance SQL',
    description:
      'Atuação prática com diagnóstico, correção e otimização de consultas em ambientes corporativos.',
  },
  {
    title: 'Backend moderno',
    description:
      'Projetos próprios com Spring Boot, JWT, microsserviços, Docker, mensageria e cloud.',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    items: ['Java 17', 'Spring Boot', 'Spring Security', 'JWT', 'APIs REST', 'Microsserviços'],
    icon: FaJava,
  },
  {
    title: 'Banco de Dados',
    items: ['PostgreSQL', 'Modelagem relacional', 'SQL', 'Migrations'],
    icon: FiDatabase,
  },
  {
    title: 'DevOps',
    items: ['Docker', 'AWS', 'RabbitMQ', 'Ambientes conteinerizados'],
    icon: FaDocker,
  },
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Styled Components', 'Consumo de APIs'],
    icon: FiCode,
  },
  {
    title: 'Ferramentas',
    items: ['Git', 'GitHub', 'JUnit', 'Mockito', 'Postman'],
    icon: FiTool,
  },
]

export const featuredStack = [
  { label: 'Java', icon: FaJava },
  { label: 'Spring Boot', icon: SiSpringboot },
  { label: 'PostgreSQL', icon: SiPostgresql },
  { label: 'Docker', icon: FaDocker },
  { label: 'JUnit', icon: SiJunit5 },
  { label: 'Git', icon: SiGit },
  { label: 'React', icon: FaReact },
  { label: 'TypeScript', icon: SiTypescript },
  { label: 'AWS', icon: FaAws },
]

export const contactLinks: ContactLink[] = [
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/pedrohrocha16',
    href: profile.socials.linkedin,
    icon: FaLinkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/pedrohrocha18',
    href: profile.socials.github,
    icon: FaGithub,
  },
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: FaEnvelope,
  },
  {
    label: 'WhatsApp',
    value: profile.whatsapp,
    href: profile.socials.whatsapp,
    icon: FaWhatsapp,
  },
]
