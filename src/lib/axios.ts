import axios from 'axios'

export const apiProfile = axios.create({
  baseURL: 'https://api.github.com/users',
})

export const getIssuesList = axios.create({
  baseURL: 'https://api.github.com/search/issues',
})

export const getAnIssues = axios.create({
  baseURL: 'https://api.github.com',
})
