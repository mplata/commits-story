export interface CommitInfo {
  url: string,
  sha: string,
  author: {
    login: string,
    avatar_url: string,
    html_url: string,
  },
  commit: {
    message: string,
    url: string,
    author: {
      name: string,
      email: string,
      date: string,
    },
  },
};

export interface Repo {
  id: string,
  name: string,
  html_url: string,
  description: string,
};