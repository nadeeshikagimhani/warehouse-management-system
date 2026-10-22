import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { Eye, EyeOff, ChartColumn, BarChart2Icon, ArrowLeft } from "lucide-react";

import AuthLayout from "@/layouts/AuthLayout";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInWithPassword } from "@/lib/auth";

const landingPageByRole = {
  "stock-manager": "/",
  "fdo": "/fdo",
};

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
    setError("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const user = await signInWithPassword(form);
      const destination = user && landingPageByRole[user.role];

      if (!destination) {
        setError("Invalid email or password.");
        return;
      }

      navigate(destination, { replace: true });
    } catch {
      setError("Unable to sign in. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AuthLayout>
      <div className="w-full max-w-md px-4">
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

        <Card>
          <CardHeader className="text-center mb-3">
            <CardTitle className="text-2xl">Login</CardTitle>

            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="manager@stockflow.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>

                  <NavLink
                    to="/forgot-password"
                    className="text-xs font-medium text-orange-600 hover:underline"
                  >
                    Forgot password?
                  </NavLink>
                </div>

                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="pr-10"
                    required
                  />

                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    className="absolute right-1 top-1/2 -translate-y-1/2"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((current) => !current)}
                  >
                    {showPassword ? (
                      <EyeOff className="size-4" />
                    ) : (
                      <Eye className="size-4" />
                    )}
                  </Button>
                </div>
              </div>

              {error ? (
                <p role="alert" className="text-sm text-destructive">
                  {error}
                </p>
              ) : null}

              <Button
                type="submit"
                className="w-full bg-orange-500 py-5 hover:bg-orange-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing in..." : "Sign in"}
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              New to StockFlow?{" "}
              <NavLink
                to="/sign-up"
                className="font-medium text-orange-600 hover:underline"
              >
                Sign up
              </NavLink>
            </p>
          </CardContent>
        </Card>
      </div>
    </AuthLayout>
  );
}

export default Login;