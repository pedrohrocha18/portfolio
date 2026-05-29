import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FiDatabase, FiLock, FiRepeat, FiServer } from 'react-icons/fi'
import { profile } from '../data/profile'
import { Section } from './Section'

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 0.78fr);
  gap: 24px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`

const TextPanel = styled(motion.div)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: clamp(24px, 4vw, 38px);
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadow.card};
`

const ParagraphList = styled.div`
  display: grid;
  gap: 18px;
`

const Lead = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  line-height: 1.8;
`

const FocusGrid = styled.div`
  display: grid;
  gap: 14px;
`

const FocusCard = styled(motion.article)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 20px;
  background: rgba(21, 19, 34, 0.78);

  svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.colors.accent};
  }

  h3 {
    margin: 14px 0 8px;
    color: ${({ theme }) => theme.colors.ink};
    font-size: 1rem;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.muted};
    line-height: 1.65;
  }
`

const focuses = [
  {
    icon: FiServer,
    title: 'APIs REST',
    text: 'Endpoints claros, contratos consistentes e organização para manutenção contínua.',
  },
  {
    icon: FiLock,
    title: 'Autenticação',
    text: 'Fluxos com Spring Security, JWT, autorização por perfil e práticas defensivas.',
  },
  {
    icon: FiDatabase,
    title: 'Dados relacionais',
    text: 'PostgreSQL, modelagem, consultas e persistência com foco em integridade.',
  },
  {
    icon: FiRepeat,
    title: 'Integrações',
    text: 'Comunicação entre sistemas, filas, pagamentos, serviços externos e sustentação.',
  },
]

export function About() {
  return (
    <Section
      id="sobre"
      eyebrow="Sobre mim"
      title="Backend bem estruturado para produtos que precisam ser confiáveis."
      description="Meu trabalho combina clareza de código, segurança, testes e visão prática de produto."
    >
      <Grid>
        <TextPanel
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
        >
          <ParagraphList>
            {profile.about.map((paragraph) => (
              <Lead key={paragraph}>{paragraph}</Lead>
            ))}
          </ParagraphList>
        </TextPanel>
        <FocusGrid>
          {focuses.map(({ icon: Icon, title, text }, index) => (
            <FocusCard
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Icon aria-hidden />
              <h3>{title}</h3>
              <p>{text}</p>
            </FocusCard>
          ))}
        </FocusGrid>
      </Grid>
    </Section>
  )
}
