import styled from 'styled-components'

export const CardContainer = styled.div`
  max-width: 26rem;
  max-height: 16.25rem;
`
export const CardContent = styled.div`
  border-radius: 10px;
  padding: 2rem 2rem;

  background-color: ${(props) => props.theme['base-post']};

  &:hover {
    outline: 2px solid ${(props) => props.theme['base-label']};
  }

  main {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    max-height: 100px;
    overflow: hidden;
    text-overflow: ellipsis;

    span {
      height: 100%;
      font-size: 1rem;
      line-height: 1.6;
      color: ${(props) => props.theme['base-text']};
    }
  }
`
export const CardHeader = styled.header`
  display: flex;
  margin-bottom: 1.25rem;

  h3 {
    flex: 1;
    font-size: 1.25rem;
    line-height: 1.6;
    font-weight: bold;

    color: ${(props) => props.theme['base-title']};
  }

  span {
    margin-left: 1rem;
    font-size: 0.875rem;
    line-height: 1.6;

    color: ${(props) => props.theme['base-span']};
  }
`
