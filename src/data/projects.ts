import { FaGithub } from 'react-icons/fa'
import { FiArrowUpRight, FiLock } from 'react-icons/fi'
import type { IconType } from 'react-icons'

export type Project = {
  name: string
  badge: string
  description: string
  stack: string[]
  highlights: string[]
  links: {
    label: string
    href?: string
    icon: IconType
  }[]
}

export const projects: Project[] = [
  {
    name: 'EasyPay — Carteira Digital para Eventos',
    badge: 'Produto próprio privado',
    description:
      'Produto próprio privado para eventos, permitindo recargas via Pix, pagamentos com saldo da carteira e acompanhamento de transações de forma simples e segura.',
    stack: [
      'Java 17',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'PostgreSQL',
      'Docker',
      'Mercado Pago',
      'React',
      'TypeScript',
    ],
    highlights: [
      'Carteira digital independente para cada participante por evento',
      'Recarga via Pix com Mercado Pago e confirmação automática por Webhooks',
      'Pagamentos com saldo da carteira e histórico de transações',
      'Controle de acesso por perfis ADMIN e USER',
      'APIs REST seguras, escaláveis e orientadas a boas práticas backend',
    ],
    links: [
      { label: 'Produto privado', icon: FiLock },
      { label: 'Detalhes', href: '#contato', icon: FiArrowUpRight },
    ],
  },
  {
    name: 'NotifyHub — Plataforma de Notificações',
    badge: 'Arquitetura distribuída',
    description:
      'Plataforma de notificações baseada em microsserviços, criada para envio e gerenciamento de mensagens por diferentes canais de forma escalável e desacoplada.',
    stack: [
      'Java 17',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'PostgreSQL',
      'RabbitMQ',
      'Docker',
      'AWS',
      'GitHub Actions',
      'JUnit',
      'Mockito',
    ],
    highlights: [
      'Arquitetura baseada em microsserviços',
      'Autenticação e autorização com JWT',
      'Comunicação assíncrona via RabbitMQ',
      'APIs REST seguras com integração ao PostgreSQL',
      'Containers Docker, pipeline CI/CD e deploy em ambiente cloud',
      'Testes automatizados com JUnit e Mockito',
    ],
    links: [
      { label: 'Repositório', href: 'https://github.com/pedrohrocha18/notifyhub', icon: FaGithub },
      { label: 'Detalhes', href: '#contato', icon: FiArrowUpRight },
    ],
  },
]
