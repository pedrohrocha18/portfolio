import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FiCpu, FiDatabase, FiLayers } from 'react-icons/fi'
import { differentials } from '../data/profile'
import { Section } from './Section'

const icons = [FiLayers, FiDatabase, FiCpu]

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled(motion.article)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 22px;
  background:
    linear-gradient(180deg, rgba(155, 92, 255, 0.1), rgba(21, 19, 34, 0.78)),
    ${({ theme }) => theme.colors.surface};
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  svg {
    width: 25px;
    height: 25px;
    color: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    margin: 18px 0 10px;
    color: ${({ theme }) => theme.colors.ink};
    font-size: 1.1rem;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.muted};
    line-height: 1.65;
  }

  &:hover {
    border-color: rgba(155, 92, 255, 0.62);
    box-shadow: 0 18px 38px rgba(155, 92, 255, 0.12);
  }
`

export function Differentials() {
  return (
    <Section
      id="diferenciais"
      eyebrow="Diferenciais"
      title="Mais do que código: contexto, diagnóstico e entrega."
      description="Experiência prática em sistemas reais, combinada com projetos próprios focados em arquitetura backend moderna."
    >
      <Grid>
        {differentials.map((item, index) => {
          const Icon = icons[index]

          return (
            <Card
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.42, delay: index * 0.05 }}
            >
              <Icon aria-hidden />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Card>
          )
        })}
      </Grid>
    </Section>
  )
}
