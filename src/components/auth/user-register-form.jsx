import { useState } from "react";

import { cn } from "../../lib/utils";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Icons } from "../icons";

import api from "../../api/api"

export function UserRegisterForm({ className, ...props }) {
  const [isLoading, setIsLoading] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleRegister = async (event) => {
    event.preventDefault()
    setIsLoading(true)

    api.account.create("unique()", form.email, form.password, form.name)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  const handleInputChange = (event) => {
    const {
      target: {name, value}
    } = event

    setForm((currState) => ({...currState, [name]: value}))
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleRegister}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              placeholder="John Doe"
              type="name"
              name="name"
              autoCapitalize="none"
              autoComplete="name"
              autoCorrect="off"
              disabled={isLoading}
              onChange={handleInputChange}
            />
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              name="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              onChange={handleInputChange}
            />
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="password"
              type="password"
              name="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              onChange={handleInputChange}
            />
          </div>
          <Button
            disabled={isLoading || !form.name || !form.email || !form.password}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}
        Google
      </Button>
    </div>
  )
}
