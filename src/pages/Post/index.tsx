import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { CardAboutPost } from './components/CardAboutPost'
import { PostContainer, PostContent } from './styles'

interface UserName {
  login: string
}

interface IssueData {
  id: number
  title: string
  body: string
  comments: number
  created_at: string
  html_url: string
  user: UserName
}

export function Post() {
  const { id } = useParams()

  const [issue, setIssue] = useState<IssueData>({} as IssueData)

  useEffect(() => {
    async function getAnIssue() {
      const response = await api.get(`/repos/gustavosilv4/github-blog/issues/${id}`)
      console.log('chegou o id', id)

      setIssue(response.data)
    }
    getAnIssue()
  }, [id])

  return (
    <div>
      <CardAboutPost title={issue.title} comments={issue.comments} createdAt={issue.created_at} link={issue.html_url} userName={issue.user?.login} />

      <PostContainer>
        <PostContent>
          <span>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{issue.body}</ReactMarkdown>
          </span>
        </PostContent>
      </PostContainer>
    </div>
  )
}
