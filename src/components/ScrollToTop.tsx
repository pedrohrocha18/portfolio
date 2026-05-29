import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FiArrowUp } from 'react-icons/fi'

const Button = styled.button<{ $visible: boolean }>`
  position: fixed;
  right: clamp(18px, 3vw, 32px);
  bottom: clamp(18px, 3vw, 32px);
  z-index: 30;
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  color: ${({ theme }) => theme.colors.ink};
  background:
    linear-gradient(135deg, rgba(155, 92, 255, 0.95), rgba(53, 208, 186, 0.78)),
    ${({ theme }) => theme.colors.primary};
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.32);
  cursor: pointer;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '12px')});
  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  svg {
    width: 22px;
    height: 22px;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(155, 92, 255, 0.28);
  }
`

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 520)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Button
      type="button"
      $visible={visible}
      aria-label="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <FiArrowUp aria-hidden />
    </Button>
  )
}
