import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const SpotifyAuth = () => {

// necessary  
const authEndpoint = 'https://accounts.spotify.com/authorize'
const redirectURI = 'http://localhost:5173/'
const clientId = '2ec9748f84ad45b0a0459f208b0f694c'
const scopes = ['user-top-read']

const LoginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}
&scopes=${scopes.join('%20')}&response_type=token&show_dialog=true`
const spotify = new SpotifyWebApi()
const [spotifyToken , setSpotifyToken] = useState('')



useEffect(() => {
const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }

    setSpotifyToken(token)
  console.log(token)

} , [])

return(
<a href={LoginUrl}> Sign in </a>
)

}

export default SpotifyAuth
