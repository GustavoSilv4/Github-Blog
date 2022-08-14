import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { api } from '../../lib/axios'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { CardPost } from '../../components/CardPost'
import { CardAbout } from './components/CardAbout'
import { CardsPostContainer, ErrorContainer, FormSectionContainer } from './styles'
interface IssuesList {
  id: number
  title: string
  comments: number
  created_at: string
  number: number
  body: string
}

const searchFormSchema = z.object({
  searchPost: z.string(),
})

type searchFormType = z.infer<typeof searchFormSchema>

export function Home() {
  const { control, watch } = useForm<searchFormType>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      searchPost: '',
    },
  })

  const [issues, setIssues] = useState<IssuesList[]>([])
  const [error, setError] = useState(false)

  const inputContent = watch('searchPost')

  useEffect(() => {
    async function getIssuesWithFilter(query?: string) {
      try {
        const response = await api.get('/search/issues', {
          params: {
            q: `${query}repo:gustavosilv4/github-blog`,
          },
        })
        setIssues(response.data.items)
        setError(false)
      } catch (error: any) {
        if (error.response.status === 403) {
          setError(true)
        }
      }
    }

    getIssuesWithFilter(inputContent)
  }, [inputContent])

  return (
    <div>
      <CardAbout />

      <Controller
        control={control}
        name="searchPost"
        render={({ field }) => {
          return (
            <FormSectionContainer>
              <div>
                <h4>Publicações</h4>
                <span>{issues.length} publicações</span>
              </div>
              <form>
                <input type="text" placeholder="Buscar conteúdo" onChange={field.onChange} value={field.value} />
              </form>
            </FormSectionContainer>
          )
        }}
      />

      {error ? (
        <ErrorContainer>
          <span>HOUVE UM ERRO NA REQUISIÇÃO AGUARDE 1 MINUTO! E RECARREGUE A PAGINA.</span>
        </ErrorContainer>
      ) : issues.length === 0 ? (
        <ErrorContainer>
          <span>NENHUM POST ENCONTRADO</span>
        </ErrorContainer>
      ) : (
        <CardsPostContainer>
          {issues.map((issue) => (
            <CardPost key={issue.id} title={issue.title} numberPost={issue.number} contentPost={issue.body} createdAt={issue.created_at} />
          ))}
        </CardsPostContainer>
      )}
    </div>
  )
}
