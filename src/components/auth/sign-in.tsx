import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { PasswordInput } from "../ui/password-input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(12),
});

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <main className="flex h-screen items-center justify-center">
      <div
        className="backdrop-blur-[16px] backdrop-saturate-[180%] 
                bg-white dark:bg-[rgba(17,25,40,0.75)] 
                rounded-[12px] border border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.125)] p-8"
      >
        <div className="flex justify-center">
          <p className="text-lg font-bold">Sign in</p>
        </div>
        <p className="mb-0 mt-2 text-gray-500 dark:text-gray-300">
          Welcome back! Please enter your details
        </p>

        <div className="mt-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="max-w-md w-full flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <PasswordInput
                          placeholder="Password"
                          id="password"
                          autoComplete="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <div className="mt-2 mb-0 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember
                  </label>
                </div>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  className="text-sm font-medium leading-none underline"
                >
                  Forgot password
                </a>
              </div>
              <div className="mt-2">
                <Button className="w-full">Sign in</Button>
              </div>
            </form>
          </Form>
        </div>
        <div className="mt-4 flex justify-center">
          <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Don't have an account?{" "}
            <Link to="/signup" className="underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
