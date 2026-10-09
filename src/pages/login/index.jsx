import AuthLayout from "../../layouts/AuthLayout"

import { Button } from "../../components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { useState } from "react"
import { ArrowLeft, BarChart2Icon } from "lucide-react"
import { Link } from "react-router-dom"

const Login = () => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(event){
    const {name, value} = event.target
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function handleSubmit(event){
    alert(JSON.stringify(form))
  }


  return (
    <AuthLayout>

      <div className="flex w-full max-w-sm items-center justify-between mb-8">

          <div className="flex gap-3 items-centerborder-b">

            <div className="flex shadow-2xl justify-center items-center rounded-lg size-10 bg-[#e85831] text-white">
              <BarChart2Icon className="size-6" strokeWidth={2.25}/>
            </div>
            
            <div className="leading-tight">
              <p className="text-md font-semibold text-foreground">Stock Flow</p>
              <p className="text-[11px] text-muted-foreground">Destribution System</p>
            </div>

          </div>

        <Link to="/" className="flex gap-2">
          <ArrowLeft className="size-5"/>
          <span className="text-sm">Back to home</span>
        </Link>

      </div>

      <Card className="w-full max-w-sm">

        <CardHeader className="text-center mb-5">
          <CardTitle className="font-black text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="examplem@example.com"
                  className="py-5"
                  onChange={handleChange}
                  value={form.email}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-orange-500"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                className="py-5"
                id="password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required />
              </div>
            </div>

            <div className="flex-col gap-2 mt-10">
              <Button
              type="submit"
              className="w-full bg-orange-500 py-5">
                Confirm and Login
              </Button>
            </div>

          </form>
        </CardContent>

     </Card>

    </AuthLayout>
  )
}

export default Login