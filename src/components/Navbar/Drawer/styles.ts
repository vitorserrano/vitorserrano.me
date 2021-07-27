import styled, { css } from 'styled-components'

import { FiAlignRight, FiX } from 'react-icons/fi'

type Props = {
  isOpen: boolean
}

export const styledIcon = ({ theme: { colors, breakpoints } }) => css`
  color: ${colors.primary};
  font-size: ${breakpoints.fontSizes.lg};
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  ${breakpoints.devices.md} {
    font-size: ${breakpoints.fontSizes.xl};
  }

  ${breakpoints.devices.xl} {
    display: none;
  }
`

export const MenuIcon = styled(FiAlignRight)`
  ${styledIcon}
`

export const CloseIcon = styled(FiX)`
  ${styledIcon}
`

export const Container = styled.div<Props>`
  ${({ theme: { colors, fonts, breakpoints }, isOpen }) => css`
    display: ${isOpen ? 'flex' : 'none'};
    background-color: ${colors.background};
    width: 100%;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 15;
    overflow: hidden;
    padding: 24px 0;
    transition: all 0.3s ease-out;

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      margin: 0 24px;
      list-style: none;

      .items {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        li {
          height: 56px;
          background: linear-gradient(90deg, #d9d9d9, rgba(228, 228, 250, 0));
          border-radius: 5px;
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          &:not(:first-child) {
            margin-top: 8px;
          }

          a {
            color: ${colors.description};
            font-family: ${fonts.text};
            font-size: ${breakpoints.fontSizes.xs};
            font-weight: 400;
            margin: 0 24px;
          }
        }
      }
    }

    ${breakpoints.devices.md} {
      top: 120px;
    }
  `}
`
