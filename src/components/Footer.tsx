import styled from 'styled-components'
import { profile } from '../data/profile'

const FooterShell = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 28px 0;
  background: rgba(11, 10, 18, 0.62);
`

const FooterInner = styled.div`
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.92rem;

  @media (max-width: 640px) {
    width: min(100% - 28px, 1120px);
    flex-direction: column;
    align-items: flex-start;
  }
`

const BackTop = styled.a`
  color: ${({ theme }) => theme.colors.ink};
  font-weight: 800;
  text-decoration: none;
`

export function Footer() {
  return (
    <FooterShell>
      <FooterInner>
        <span>
          © {new Date().getFullYear()} {profile.name}.
        </span>
        <BackTop href="#inicio">Voltar ao topo</BackTop>
      </FooterInner>
    </FooterShell>
  )
}
