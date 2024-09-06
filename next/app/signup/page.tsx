import {
  AuthenticationBannerImage,
  AuthenticationMainContainer,
  SignupForm,
} from "@/components";

export default function Signup() {
  return (
    <AuthenticationMainContainer>
      <AuthenticationBannerImage />
      <SignupForm />
    </AuthenticationMainContainer>
  );
}
