import { motion } from 'framer-motion'
import styled from 'styled-components'
import { FiArrowRight, FiMapPin, FiMail, FiWifi } from 'react-icons/fi'
import { featuredStack, heroStats, profile } from '../data/profile'

const heroName = profile.name
const heroStack = featuredStack.slice(0, 6)

const HeroShell = styled.section`
  width: min(1120px, calc(100% - 40px));
  min-height: auto;
  margin: 0 auto;
  padding: 72px 0 64px;
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(320px, 0.88fr);
  align-items: center;
  gap: clamp(48px, 6vw, 82px);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 56px 0 44px;
  }

  @media (max-width: 768px) {
    width: min(100% - 28px, 1120px);
  }
`

const HeroContent = styled(motion.div)`
  max-width: 620px;
  min-width: 0;
`

const Eyebrow = styled.p`
  width: fit-content;
  margin: 0 0 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  padding: 8px 12px;
  color: ${({ theme }) => theme.colors.primaryDark};
  background: rgba(21, 19, 34, 0.76);
  font-size: 0.86rem;
  font-weight: 800;
`

const Title = styled.h1`
  max-width: 13.4ch;
  margin: 0;
  color: ${({ theme }) => theme.colors.ink};
  font-size: clamp(2.55rem, 4.7vw, 4.35rem);
  line-height: 1;
`

const Role = styled.span`
  display: block;
  max-width: 720px;
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: clamp(1.45rem, 2.8vw, 2.45rem);
  line-height: 1.08;
`

const Intro = styled.p`
  max-width: 590px;
  margin: 20px 0 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: clamp(1rem, 1.4vw, 1.12rem);
  line-height: 1.7;
`

const StatusBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 22px;
`

const StatusItem = styled.span`
  min-height: 34px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  padding: 0 12px;
  color: ${({ theme }) => theme.colors.primaryDark};
  background: rgba(155, 92, 255, 0.08);
  font-size: 0.84rem;
  font-weight: 800;

  svg {
    width: 15px;
    height: 15px;
  }
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
`

const Button = styled.a<{ $variant?: 'primary' | 'secondary' }>`
  min-height: 52px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid
    ${({ $variant, theme }) => ($variant === 'primary' ? theme.colors.primary : theme.colors.border)};
  border-radius: 8px;
  padding: 0 20px;
  color: ${({ $variant, theme }) => ($variant === 'primary' ? '#ffffff' : theme.colors.ink)};
  background: ${({ $variant, theme }) => ($variant === 'primary' ? theme.colors.primary : theme.colors.surface)};
  font-weight: 850;
  text-decoration: none;
  box-shadow: ${({ $variant }) =>
    $variant === 'primary' ? '0 16px 32px rgba(155, 92, 255, 0.28)' : '0 12px 28px rgba(0, 0, 0, 0.18)'};
  transition:
    box-shadow 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    box-shadow: 0 18px 36px rgba(0, 0, 0, 0.28);
  }
`

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 34px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

const Stat = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 16px;
  background: rgba(21, 19, 34, 0.78);
`

const StatValue = styled.strong`
  display: block;
  color: ${({ theme }) => theme.colors.ink};
  font-size: 1.15rem;
`

const StatLabel = styled.span`
  display: block;
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.soft};
  font-size: 0.88rem;
`

const Visual = styled(motion.div)`
  position: relative;
  border: 1px solid rgba(69, 58, 104, 0.92);
  border-radius: 8px;
  padding: 22px;
  background:
    linear-gradient(145deg, rgba(28, 24, 45, 0.94), rgba(19, 15, 32, 0.84)),
    ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadow.soft};
`

const CodeCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  overflow: hidden;
  background: #080711;
`

const CodeBar = styled.div`
  height: 38px;
  display: flex;
  align-items: center;
  gap: 7px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 0 14px;
`

const Dot = styled.span<{ $color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
`

const CodeBlock = styled.pre`
  margin: 0;
  padding: 20px;
  overflow: auto;
  color: #f8f8f2;
  background: #0f0c18;
  font-size: 0.82rem;
  font-weight: 650;
  line-height: 1.65;

  .annotation,
  .keyword {
    color: #ff79c6;
  }

  .class-name,
  .method {
    color: #8be9fd;
  }

  .string {
    color: #f1fa8c;
  }

  .type {
    color: #50fa7b;
  }

  .chain {
    color: #bd93f9;
  }

  .punctuation {
    color: #f8f8f2;
  }
`

const StackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-top: 14px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const StackItem = styled.div`
  min-height: 74px;
  display: grid;
  place-items: center;
  gap: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 12px 10px;
  color: ${({ theme }) => theme.colors.ink};
  background: rgba(21, 19, 34, 0.78);
  text-align: center;
  font-size: 0.8rem;
  font-weight: 800;
  transition:
    border-color 0.22s ease,
    background 0.22s ease,
    box-shadow 0.22s ease;

  svg {
    width: 23px;
    height: 23px;
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.22s ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: rgba(33, 27, 53, 0.92);
    box-shadow: 0 16px 30px rgba(155, 92, 255, 0.18);
  }

  &:hover svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`

export function Hero() {
  return (
    <HeroShell id="inicio">
      <HeroContent initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
        <Eyebrow>Backend Java / Spring Boot</Eyebrow>
        <Title>
          {heroName}
          <Role>{profile.role}</Role>
        </Title>
        <Intro>{profile.headline}</Intro>
        <StatusBar aria-label="Disponibilidade e localização">
          <StatusItem>
            <FiWifi aria-hidden />
            Disponível para oportunidades
          </StatusItem>
          <StatusItem>
            <FiMapPin aria-hidden />
            {profile.location} · Remoto
          </StatusItem>
        </StatusBar>
        <Actions>
          <Button href="#projetos" $variant="primary">
            Ver Projetos
            <FiArrowRight aria-hidden />
          </Button>
          <Button href="#contato">
            Entrar em Contato
            <FiMail aria-hidden />
          </Button>
        </Actions>
        <Stats aria-label="Resumo técnico">
          {heroStats.map((stat) => (
            <Stat key={stat.label}>
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </Stat>
          ))}
        </Stats>
      </HeroContent>

      <Visual
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        aria-label={`Stack principal de ${profile.name}`}
      >
        <CodeCard>
          <CodeBar>
            <Dot $color="#ff5f57" />
            <Dot $color="#ffbd2e" />
            <Dot $color="#28c840" />
          </CodeBar>
          <CodeBlock>
            <code>
              <span className="annotation">@RestController</span>
              {'\n'}
              <span className="keyword">class</span> <span className="class-name">PortfolioApi</span>{' '}
              <span className="punctuation">{'{'}</span>
              {'\n  '}
              <span className="annotation">@GetMapping</span>
              <span className="punctuation">(</span>
              <span className="string">"/solutions"</span>
              <span className="punctuation">)</span>
              {'\n  '}
              <span className="type">ResponseEntity</span>
              <span className="punctuation">&lt;?&gt;</span> <span className="method">build</span>
              <span className="punctuation">() {'{'}</span>
              {'\n    '}
              <span className="keyword">return</span> <span className="method">secure</span>
              <span className="punctuation">()</span>
              {'\n      '}
              <span className="chain">.withCleanArchitecture</span>
              <span className="punctuation">()</span>
              {'\n      '}
              <span className="chain">.withTests</span>
              <span className="punctuation">()</span>
              {'\n      '}
              <span className="chain">.ship</span>
              <span className="punctuation">();</span>
              {'\n  '}
              <span className="punctuation">{'}'}</span>
              {'\n'}
              <span className="punctuation">{'}'}</span>
            </code>
          </CodeBlock>
        </CodeCard>
        <StackGrid>
          {heroStack.map(({ label, icon: Icon }) => (
            <StackItem key={label}>
              <Icon aria-hidden />
              {label}
            </StackItem>
          ))}
        </StackGrid>
      </Visual>
    </HeroShell>
  )
}
