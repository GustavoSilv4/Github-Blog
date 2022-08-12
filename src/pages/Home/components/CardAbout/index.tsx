import { useEffect, useState } from 'react'
import { apiProfile } from '../../../../lib/axios'
import { Profile } from '../../../../utils/types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { CardAboutContainer, CardAboutContent, CardFooter, CardHeader, CardMain, ImageGithub } from './styles'

export function CardAbout() {
  const [profile, setProfile] = useState<Profile>({} as Profile)

  useEffect(() => {
    async function getProfileGitHub() {
      const response = await apiProfile.get('/gustavosilv4')
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
              {profile?.followers} {profile?.followers > 1 ? 'seguidores' : 'seguidor'}
            </span>
          </CardFooter>
        </div>
      </CardAboutContent>
    </CardAboutContainer>
  )
}
