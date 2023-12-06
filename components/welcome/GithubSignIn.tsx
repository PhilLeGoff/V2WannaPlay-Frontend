import React from 'react'

type Props = {}

function loginWithGithub() {
    window.location.assign("https://github.com/login/oauth/authorize?client_id=" + "a7a181e731a5b8502da0")
}

export default function GithubSignIn({}: Props) {
  return (
    <button onClick={loginWithGithub}>Login with Github</button>
  )
}