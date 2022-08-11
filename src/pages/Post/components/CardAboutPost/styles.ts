import styled from 'styled-components'

export const CardAboutContainer = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;

  margin-top: -5.2rem;
`

export const CardAboutContent = styled.div`
  padding: 2rem 2rem 2rem 2.5rem;

  border-radius: 10px;

  background-color: ${(props) => props.theme['base-profile']};
`

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.25rem;

  a {
    position: relative;
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: bold;
    padding-bottom: 0.2rem;

    display: flex;
    gap: 0.75rem;

    color: ${(props) => props.theme.blue};

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      border-radius: 4px;
      background-color: ${(props) => props.theme.blue};
      bottom: 0;
      left: 0;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }
    :hover::before {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
`
export const CardMain = styled.main`
  margin-bottom: 0.5rem;

  span {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.3;

    color: ${(props) => props.theme['base-title']};
  }
`

export const CardFooter = styled.footer`
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    color: ${(props) => props.theme['base-subtitle']};

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
