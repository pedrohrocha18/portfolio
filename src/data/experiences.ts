export type Experience = {
  role: string
  company: string
  period: string
  summary: string
  activities: string[]
  skills: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Desenvolvedor',
    company: 'Evo Network · Remoto',
    period: 'ago de 2025 - mai de 2026 · 10 meses',
    summary:
      'Atuação no desenvolvimento e manutenção de funcionalidades Java no ERP Sankhya, com foco em regras de negócio, integrações, SQL e evolução de sistemas corporativos.',
    activities: [
      'Desenvolvimento e manutenção de funcionalidades utilizando Java no ERP Sankhya',
      'Implementação de regras de negócio e customizações conforme necessidades dos clientes',
      'Manipulação e otimização de consultas SQL em Oracle e SQL Server',
      'Atuação em integrações e suporte técnico em sistemas corporativos',
      'Aplicação de boas práticas de programação, Clean Code e organização de código',
      'Participação na definição de requisitos e evolução do sistema',
    ],
    skills: ['Java', 'ERP Sankhya', 'SQL', 'Oracle', 'SQL Server', 'Clean Code', 'Comunicação'],
  },
  {
    role: 'Suporte Técnico / Sustentação de Sistemas',
    company: 'Evo Network · Remoto',
    period: 'jan de 2024 - jul de 2025 · 1 ano 7 meses',
    summary:
      'Vivência em sustentação de sistemas ERP, análise de incidentes, diagnóstico com SQL e contato direto com usuários para entendimento de problemas e requisitos.',
    activities: [
      'Análise e resolução de incidentes em sistema ERP, garantindo estabilidade e continuidade da operação',
      'Investigação de problemas utilizando SQL em Oracle e SQL Server para diagnóstico e correção de falhas',
      'Apoio na identificação de melhorias técnicas e ajustes em regras de negócio',
      'Atuação próxima ao time de desenvolvimento na resolução de demandas complexas',
      'Contato direto com usuários para entendimento de problemas e requisitos',
    ],
    skills: ['Suporte técnico', 'Sustentação', 'ERP', 'SQL', 'Oracle', 'SQL Server', 'Regras de negócio'],
  },
]
