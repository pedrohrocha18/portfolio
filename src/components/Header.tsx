import styled from 'styled-components'
import { FiDownload } from 'react-icons/fi'
import { profile } from '../data/profile'

const HeaderShell = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid rgba(49, 42, 73, 0.82);
  background: rgba(11, 10, 18, 0.82);
  backdrop-filter: blur(18px);
`

const HeaderInner = styled.div`
  width: min(1120px, calc(100% - 40px));
  min-height: 72px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 768px) {
    width: min(100% - 28px, 1120px);
  }
`

const Brand = styled.a`
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.ink};
  font-weight: 850;
  text-decoration: none;
`

const BrandName = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const BrandMark = styled.span`
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  color: #ffffff;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  box-shadow: 0 14px 26px rgba(15, 108, 189, 0.22);
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;

  @media (max-width: 1080px) {
    display: none;
  }
`

const NavLink = styled.a`
  border-radius: 8px;
  padding: 10px 12px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.92rem;
  font-weight: 700;
  text-decoration: none;
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.ink};
    background: ${({ theme }) => theme.colors.surfaceAlt};
  }
`

const ResumeButton = styled.button`
  display: inline-flex;
  min-height: 42px;
  align-items: center;
  gap: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 0 14px;
  color: ${({ theme }) => theme.colors.ink};
  background: ${({ theme }) => theme.colors.surface};
  font-weight: 800;
  text-decoration: none;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
  cursor: not-allowed;
  opacity: 0.52;
`

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato', href: '#contato' },
]

export function Header() {
  return (
    <HeaderShell>
      <HeaderInner>
        <Brand href="#inicio" aria-label="Ir para o início">
          <BrandMark>PR</BrandMark>
          <BrandName>Pedro Henrique</BrandName>
        </Brand>
        <Nav aria-label="Navegação principal">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </Nav>
        <ResumeButton type="button" disabled aria-label={`Currículo de ${profile.name} indisponível no momento`}>
          <FiDownload aria-hidden />
          CV
        </ResumeButton>
      </HeaderInner>
    </HeaderShell>
  )
}
