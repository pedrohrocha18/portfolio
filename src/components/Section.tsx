import type { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

type SectionProps = PropsWithChildren<{
  id: string
  eyebrow: string
  title: string
  description?: string
}>

const SectionShell = styled.section`
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
  padding: 84px 0;

  @media (max-width: 768px) {
    width: min(100% - 28px, 1120px);
    padding: 64px 0;
  }
`

const SectionHeader = styled(motion.div)`
  max-width: 760px;
  margin-bottom: 34px;
`

const Eyebrow = styled.p`
  margin: 0 0 12px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`

const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.ink};
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.05;
`

const Description = styled.p`
  max-width: 680px;
  margin: 16px 0 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1.02rem;
  line-height: 1.8;
`

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <SectionShell id={id}>
      <SectionHeader
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <Eyebrow>{eyebrow}</Eyebrow>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </SectionHeader>
      {children}
    </SectionShell>
  )
}
