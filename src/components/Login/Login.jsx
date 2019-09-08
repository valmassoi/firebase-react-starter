import React, { useState } from 'react'
import { Box, Button, Input } from 'reactbulma'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ email, password })
  }

  return (
    <Box className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email-input">Email</label>
        <Input
          required
          id="email-input"
          placholder="email"
          placeholder="email"
          type="text"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
          medium
        />
        <label htmlFor="password-input">Password</label>
        <Input
          required
          id="password-input"
          placeholder="password"
          autoComplete="current-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          medium
        />
        <Button
          type="submit"
          medium
        >
          Login
        </Button>
      </form>
    </Box>
  )
}

export default Login
