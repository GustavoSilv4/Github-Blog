import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { CardAboutContainer, CardAboutContent, CardFooter, CardHeader, CardMain, ImageGithub } from './styles'

interface Profile {
  id: number
  avatar_url: string
  bio: string
  company: string
  name: string
  login: string
  html_url: string
  followers: number
}

export function CardAbout() {
  const [profile, setProfile] = useState<Profile>({} as Profile)

  useEffect(() => {
    async function getProfileGitHub() {
      const response = await api.get('users/gustavosilv4')
      setProfile(response.data)
    }

    getProfileGitHub()
  }, [])

  return (
    <CardAboutContainer>
      <CardAboutContent>
        <ImageGithub>
          <img src={profile?.avatar_url} alt="" />
        </ImageGithub>
        <div>
          <CardHeader>
            <span>{profile?.name}</span>
            <a href={profile?.html_url}>
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
            </a>
          </CardHeader>
          <CardMain>
            <span>{profile?.bio}</span>
          </CardMain>
          <CardFooter>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {profile?.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              {profile?.company === null ? 'Não definido' : profile?.company}
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              {profile?.followers} {profile?.followers > 1 || profile?.followers === 0 ? 'seguidores' : 'seguidor'}
            </span>
          </CardFooter>
        </div>
      </CardAboutContent>
    </CardAboutContainer>
  )
}
