export const Route = createFileRoute({
  component: RouteComponent,
})

import ContainerLogin from "../components/pages/loginPage/ContainerLogin";

const login = {
  titleName: "Name",
  titleEmail: "Email",
  titlePassword: "Password",
  titleLogin: "Login",
  titleSignUp: "Sign Up",
  titleDontHaveAccount: "Don’t have an account?",
}
function RouteComponent() {
  return (
    <>
      <ContainerLogin login={login}></ContainerLogin>
    </>
  );
}
