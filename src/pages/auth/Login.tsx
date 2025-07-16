import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type LoginFormInputs = {
  email: string;
  password: string;
  remember: boolean;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    // Simulate async login
    await new Promise(resolve => setTimeout(resolve, 1000));
    reset();
  };

  const handleGoogleSignIn = () => {
    // Simulate Google sign-in
    alert("Google sign-in not implemented.");
  };

  const handleSignUp = () => {
    // Redirect to sign up page
    window.location.href = "/signup";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-sm shadow-lg"> {/* Changed max-w-md to max-w-sm */}
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          {isSubmitSuccessful && (
            <Alert variant="default" className="mb-4">
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>You have logged in successfully!</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="username"
                className={errors.email ? "border-red-500" : ""}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Your password"
                autoComplete="current-password"
                className={errors.password ? "border-red-500" : ""}
                {...register("password")}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="mr-2"
                  {...register("remember")}
                />
                <Label htmlFor="remember" className="mb-0">Remember me</Label>
              </div>
              <Button
                type="button"
                variant="link"
                className="p-0 h-auto text-blue-600"
                onClick={handleSignUp}
              >
                Sign up
              </Button>
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
            <Button
              type="button"
              className="w-full mt-2 bg-white border text-black hover:bg-gray-50"
              onClick={handleGoogleSignIn}
            >
              <span className="mr-2">🔒</span> Sign in with Google
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}