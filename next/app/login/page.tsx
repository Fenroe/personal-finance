import {
  AuthenticationBannerImage,
  AuthenticationMainContainer,
  LoginForm,
} from "@/components";

export default function Login() {
  return (
    <AuthenticationMainContainer>
      <AuthenticationBannerImage />
      <LoginForm />
    </AuthenticationMainContainer>
  );
}
