import api from "../api/api"
import { Button } from "../components/ui/button"

export default function Login() {
  const handleLogin = async () => {
    api.createAccount()
  }
  return (
    <div>
      <h1 className="text-3xl">Login</h1>
      <Button onClick={handleLogin}>Login with Spotify</Button>
    </div>
  )
}
