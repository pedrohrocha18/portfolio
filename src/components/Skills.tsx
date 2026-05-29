import { motion } from 'framer-motion'
import styled from 'styled-components'
import { skillCategories } from '../data/profile'
import { Section } from './Section'

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const SkillCard = styled(motion.article)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 20px;
  background: linear-gradient(180deg, rgba(21, 19, 34, 0.86), rgba(18, 15, 28, 0.86));
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.14);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  h3 {
    margin: 0 0 14px;
    color: ${({ theme }) => theme.colors.ink};
    font-size: 0.98rem;
    letter-spacing: 0;
  }

  &:hover {
    border-color: rgba(155, 92, 255, 0.58);
    box-shadow: 0 18px 36px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 760px) {
    padding: 18px;
  }
`

const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`

const Skill = styled.li`
  min-height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  padding: 6px 10px;
  color: ${({ theme }) => theme.colors.primaryDark};
  background: rgba(155, 92, 255, 0.08);
  font-size: 0.8rem;
  line-height: 1;
  font-weight: 750;
  white-space: nowrap;
  cursor: default;
  transition:
    border-color 0.2s ease,
    color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.ink};
    background: rgba(155, 92, 255, 0.18);
    box-shadow: 0 10px 22px rgba(155, 92, 255, 0.14);
  }

  @media (max-width: 420px) {
    min-height: 30px;
    padding: 6px 9px;
    font-size: 0.76rem;
  }
`

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Stack organizada para entregar backend de ponta a ponta."
      description="Do desenho da API ao banco, segurança, testes, conteinerização e integração com interfaces modernas."
    >
      <SkillsGrid>
        {skillCategories.map((category, index) => (
          <SkillCard
            key={category.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.42, delay: index * 0.04 }}
          >
            <h3>{category.title}</h3>
            <SkillList>
              {category.items.map((skill) => (
                <Skill key={skill}>{skill}</Skill>
              ))}
            </SkillList>
          </SkillCard>
        ))}
      </SkillsGrid>
    </Section>
  )
}
