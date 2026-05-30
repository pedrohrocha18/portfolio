import { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FiArrowUpRight, FiCheck, FiCopy } from 'react-icons/fi'
import { contactLinks, profile } from '../data/profile'
import { Section } from './Section'

const ContactPanel = styled(motion.div)`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 28px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: clamp(24px, 5vw, 42px);
  background:
    linear-gradient(135deg, rgba(155, 92, 255, 0.16), rgba(53, 208, 186, 0.08)),
    ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadow.card};

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

const Pitch = styled.div`
  h3 {
    margin: 0 0 14px;
    color: ${({ theme }) => theme.colors.ink};
    font-size: clamp(1.7rem, 4vw, 2.35rem);
    line-height: 1.1;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.muted};
    line-height: 1.75;
  }
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

const ContactCard = styled.article`
  min-height: 132px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 18px;
  color: ${({ theme }) => theme.colors.ink};
  background: rgba(21, 19, 34, 0.78);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 16px 28px rgba(0, 0, 0, 0.24);
  }
`

const ContactLink = styled.a`
  color: inherit;
  text-decoration: none;
`

const ContactTop = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  svg:first-child {
    width: 26px;
    height: 26px;
    color: ${({ theme }) => theme.colors.primary};
  }

  svg:last-child {
    width: 18px;
    height: 18px;
    color: ${({ theme }) => theme.colors.soft};
  }
`

const ContactText = styled.span`
  display: grid;
  gap: 4px;
  margin-top: 14px;

  strong {
    font-size: 1rem;
  }

  span {
    overflow-wrap: anywhere;
    color: ${({ theme }) => theme.colors.muted};
    font-size: 0.9rem;
  }
`

const ContactActions = styled.span`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
`

const MiniButton = styled.button`
  min-height: 34px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.ink};
  background: rgba(255, 255, 255, 0.03);
  font-size: 0.78rem;
  font-weight: 850;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: rgba(155, 92, 255, 0.14);
  }
`

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(profile.email)
    } else {
      const textarea = document.createElement('textarea')
      textarea.value = profile.email
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }

    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <Section
      id="contato"
      eyebrow="Contato"
      title="Vamos conversar sobre backend, APIs e bons problemas para resolver."
      description="Estou disponível para oportunidades como Desenvolvedor Backend Java e conversas técnicas sobre projetos."
    >
      <ContactPanel
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.45 }}
      >
        <Pitch>
          <h3>Se fizer sentido para o seu time, me chame.</h3>
          <p>
            Estou em {profile.location} e posso contribuir com construção e evolução de APIs,
            integrações, segurança, bancos relacionais, testes e sustentação de sistemas Java/Spring.
          </p>
        </Pitch>
        <ContactGrid>
          {contactLinks.map(({ label, value, href, icon: Icon }) => (
            <ContactCard key={label}>
              <ContactLink href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <ContactTop>
                  <Icon aria-hidden />
                  <FiArrowUpRight aria-hidden />
                </ContactTop>
                <ContactText>
                  <strong>{label}</strong>
                  <span>{value}</span>
                </ContactText>
              </ContactLink>
              {label === 'Email' && (
                <ContactActions>
                  <MiniButton type="button" onClick={copyEmail}>
                    {copied ? <FiCheck aria-hidden /> : <FiCopy aria-hidden />}
                    {copied ? 'Copiado' : 'Copiar email'}
                  </MiniButton>
                </ContactActions>
              )}
            </ContactCard>
          ))}
        </ContactGrid>
      </ContactPanel>
    </Section>
  )
}
