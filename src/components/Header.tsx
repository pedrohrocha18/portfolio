import { useState } from 'react'
import styled from 'styled-components'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'
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

const MenuButton = styled.button`
  width: 42px;
  height: 42px;
  display: none;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.ink};
  background: ${({ theme }) => theme.colors.surface};
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background 0.2s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: rgba(155, 92, 255, 0.12);
  }

  @media (max-width: 1080px) {
    display: grid;
  }
`

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const MobilePanel = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 1080px) {
    width: min(1120px, calc(100% - 40px));
    display: grid;
    margin: 0 auto;
    grid-template-rows: ${({ $open }) => ($open ? '1fr' : '0fr')};
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
    transform: translateY(${({ $open }) => ($open ? '0' : '-6px')});
    transition:
      grid-template-rows 0.24s ease,
      opacity 0.2s ease,
      transform 0.2s ease,
      padding 0.2s ease;

    ${({ $open }) => $open && 'padding-bottom: 14px;'}
  }
`

const MobilePanelInner = styled.nav`
  min-height: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
  overflow: hidden;

  @media (max-width: 680px) {
    justify-content: start;
  }

  @media (max-width: 360px) {
    gap: 5px;
  }
`

const MobileNavLink = styled.a`
  min-height: 36px;
  display: inline-flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  padding: 0 12px;
  color: ${({ theme }) => theme.colors.primaryDark};
  background: rgba(155, 92, 255, 0.08);
  font-size: 0.84rem;
  font-weight: 800;
  text-decoration: none;
  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.ink};
    background: rgba(155, 92, 255, 0.16);
  }
`

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato', href: '#contato' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <HeaderShell>
      <HeaderInner>
        <Brand href="#inicio" aria-label="Ir para o início">
          <BrandMark>PH</BrandMark>
          <BrandName>Pedro H.</BrandName>
        </Brand>
        <Nav aria-label="Navegação principal">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </Nav>
        <HeaderActions>
          <ResumeButton type="button" disabled aria-label={`Currículo de ${profile.name} indisponível no momento`}>
            <FiDownload aria-hidden />
            CV
          </ResumeButton>
          <MenuButton
            type="button"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <FiX aria-hidden /> : <FiMenu aria-hidden />}
          </MenuButton>
        </HeaderActions>
      </HeaderInner>
      <MobilePanel $open={menuOpen}>
        <MobilePanelInner aria-label="Menu mobile">
          {navItems.map((item) => (
            <MobileNavLink key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </MobileNavLink>
          ))}
        </MobilePanelInner>
      </MobilePanel>
    </HeaderShell>
  )
}
