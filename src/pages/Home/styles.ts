import styled from 'styled-components'

export const FormSectionContainer = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 4.25rem auto 3rem auto;
  padding: 0 1.5rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 0.75rem;

    h4 {
      font-size: 1.125rem;
      font-weight: bold;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;

      color: ${(props) => props.theme['base-span']};
    }
  }
  form {
    input {
      width: 100%;
      padding: 0.75rem 1rem;

      border: 1px solid ${(props) => props.theme['base-border']};
      border-radius: 6px;

      background-color: ${(props) => props.theme['base-input']};
      color: ${(props) => props.theme['base-text']};
    }
  }
`
