import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FiBriefcase, FiMapPin } from 'react-icons/fi'
import { experiences } from '../data/experiences'
import { profile } from '../data/profile'
import { Section } from './Section'

const ExperienceShell = styled.div`
  display: grid;
  gap: 18px;
`

const SummaryCard = styled(motion.article)`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: clamp(24px, 4vw, 34px);
  background:
    linear-gradient(135deg, rgba(155, 92, 255, 0.2), rgba(53, 208, 186, 0.08)),
    ${({ theme }) => theme.colors.surfaceAlt};
  color: #ffffff;
  box-shadow: ${({ theme }) => theme.shadow.card};

  h3 {
    margin: 0 0 16px;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.76);
    line-height: 1.8;
  }
`

const Location = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
  border: 1px solid rgba(155, 92, 255, 0.34);
  border-radius: 999px;
  padding: 8px 12px;
  color: ${({ theme }) => theme.colors.primaryDark};
  background: rgba(155, 92, 255, 0.12);
  font-size: 0.88rem;
  font-weight: 800;

  svg {
    width: 16px;
    height: 16px;
  }
`

const Timeline = styled.div`
  display: grid;
  gap: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadow.card};
`

const TimelineItem = styled(motion.article)<{ $featured?: boolean }>`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ $featured }) => ($featured ? '26px' : '22px 26px')};
  background: ${({ $featured }) =>
    $featured
      ? 'linear-gradient(135deg, rgba(155, 92, 255, 0.16), rgba(53, 208, 186, 0.06))'
      : 'transparent'};

  &:last-child {
    border-bottom: none;
  }

  > svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.colors.accent};
  }

  h3 {
    margin: 0 0 8px;
    color: ${({ theme }) => theme.colors.ink};
    font-size: ${({ $featured }) => ($featured ? '1.35rem' : '1.08rem')};
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.muted};
    line-height: 1.7;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    padding: ${({ $featured }) => ($featured ? '22px' : '20px 22px')};
  }
`

const FeaturedBadge = styled.span`
  width: fit-content;
  display: inline-flex;
  margin-bottom: 12px;
  border: 1px solid rgba(155, 92, 255, 0.42);
  border-radius: 999px;
  padding: 7px 10px;
  color: ${({ theme }) => theme.colors.primaryDark};
  background: rgba(155, 92, 255, 0.12);
  font-size: 0.78rem;
  font-weight: 850;
`

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 10px;
  color: ${({ theme }) => theme.colors.soft};
  font-size: 0.88rem;
  font-weight: 750;
`

const ActivityList = styled.ul`
  display: grid;
  gap: 8px;
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
`

const Activity = styled.li`
  position: relative;
  padding-left: 16px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.55;

  &::before {
    content: "";
    position: absolute;
    top: 0.7em;
    left: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
  }
`

const SkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
`

const Skill = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  padding: 6px 9px;
  color: ${({ theme }) => theme.colors.primaryDark};
  background: rgba(155, 92, 255, 0.08);
  font-size: 0.76rem;
  font-weight: 800;
`

export function Experience() {
  return (
    <Section
      id="experiencia"
      eyebrow="Experiência"
      title="Vivência prática em sistemas que precisam continuar funcionando enquanto evoluem."
      description="Atuação orientada a resolver problemas reais de produto, reduzir ruído operacional e entregar melhorias com previsibilidade."
    >
      <ExperienceShell>
        <SummaryCard
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
        >
          <h3>Perfil profissional</h3>
          <Location>
            <FiMapPin aria-hidden />
            {profile.location}
          </Location>
          <p>
            Experiência profissional com desenvolvimento Java no ERP Sankhya, sustentação de
            sistemas, integrações e SQL em bancos Oracle e SQL Server. Em paralelo, desenvolvo
            projetos próprios e soluções para clientes com Spring Boot, APIs REST, JWT, PostgreSQL,
            Docker, microsserviços e arquitetura backend moderna.
          </p>
        </SummaryCard>
        <Timeline>
          {experiences.map((experience, index) => (
            <TimelineItem
              key={`${experience.role}-${experience.period}`}
              $featured={index === 0}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.42, delay: index * 0.05 }}
            >
              <FiBriefcase aria-hidden />
              <div>
                {index === 0 && <FeaturedBadge>Última experiência</FeaturedBadge>}
                <h3>{experience.role}</h3>
                <Meta>
                  <span>{experience.company}</span>
                  <span>{experience.period}</span>
                </Meta>
                <p>{experience.summary}</p>
                <ActivityList>
                  {experience.activities.map((activity) => (
                    <Activity key={activity}>{activity}</Activity>
                  ))}
                </ActivityList>
                <SkillList>
                  {experience.skills.map((skill) => (
                    <Skill key={skill}>{skill}</Skill>
                  ))}
                </SkillList>
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </ExperienceShell>
    </Section>
  )
}
