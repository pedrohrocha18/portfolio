import { motion } from 'framer-motion'
import styled from 'styled-components'
import { projects } from '../data/projects'
import { Section } from './Section'

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`

const ProjectCard = styled(motion.article)`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 24px;
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadow.card};
  transition:
    border-color 0.22s ease,
    box-shadow 0.22s ease,
    background 0.22s ease;

  &:hover {
    border-color: rgba(155, 92, 255, 0.58);
    background:
      linear-gradient(180deg, rgba(155, 92, 255, 0.08), rgba(21, 19, 34, 0.88)),
      ${({ theme }) => theme.colors.surface};
    box-shadow: 0 24px 56px rgba(155, 92, 255, 0.12);
  }

  h3 {
    margin: 0;
    color: ${({ theme }) => theme.colors.ink};
    font-size: 1.45rem;
  }
`

const ProjectBadge = styled.span`
  width: fit-content;
  display: inline-flex;
  margin-bottom: 14px;
  border: 1px solid rgba(155, 92, 255, 0.42);
  border-radius: 999px;
  padding: 7px 10px;
  color: ${({ theme }) => theme.colors.primaryDark};
  background: rgba(155, 92, 255, 0.12);
  font-size: 0.78rem;
  font-weight: 850;
`

const Description = styled.p`
  margin: 14px 0 20px;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.7;
`

const StackList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 22px;
  padding: 0;
  list-style: none;
`

const Stack = styled.li`
  border-radius: 999px;
  padding: 7px 10px;
  color: ${({ theme }) => theme.colors.primaryDark};
  background: ${({ theme }) => theme.colors.surfaceAlt};
  font-size: 0.78rem;
  font-weight: 850;
`

const HighlightList = styled.ul`
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`

const Highlight = styled.li`
  position: relative;
  padding-left: 18px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;

  &::before {
    content: "";
    position: absolute;
    top: 0.72em;
    left: 0;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
  }
`

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: auto;
  padding-top: 24px;
`

const LinkButton = styled.a`
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 0 12px;
  color: ${({ theme }) => theme.colors.ink};
  background: ${({ theme }) => theme.colors.surface};
  font-size: 0.9rem;
  font-weight: 800;
  text-decoration: none;
  transition:
    border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const LinkBadge = styled.span`
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba(155, 92, 255, 0.42);
  border-radius: 8px;
  padding: 0 12px;
  color: ${({ theme }) => theme.colors.primaryDark};
  background: rgba(155, 92, 255, 0.12);
  font-size: 0.9rem;
  font-weight: 800;
`

export function Projects() {
  return (
    <Section
      id="projetos"
      eyebrow="Projetos"
      title="Projetos com foco em backend, integrações e experiência de uso."
      description="Uma seleção pensada para mostrar construção de APIs, microsserviços, autenticação, pagamentos, filas e frontend complementar."
    >
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.44, delay: index * 0.06 }}
          >
            <ProjectBadge>{project.badge}</ProjectBadge>
            <h3>{project.name}</h3>
            <Description>{project.description}</Description>
            <StackList aria-label={`Tecnologias do projeto ${project.name}`}>
              {project.stack.map((item) => (
                <Stack key={item}>{item}</Stack>
              ))}
            </StackList>
            <HighlightList>
              {project.highlights.map((highlight) => (
                <Highlight key={highlight}>{highlight}</Highlight>
              ))}
            </HighlightList>
            <Links>
              {project.links.map(({ label, href, icon: Icon }) =>
                href ? (
                  <LinkButton key={`${project.name}-${label}`} href={href}>
                    <Icon aria-hidden />
                    {label}
                  </LinkButton>
                ) : (
                  <LinkBadge key={`${project.name}-${label}`}>
                    <Icon aria-hidden />
                    {label}
                  </LinkBadge>
                ),
              )}
            </Links>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </Section>
  )
}
