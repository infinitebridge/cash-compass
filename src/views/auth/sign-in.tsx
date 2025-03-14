import { ClerkLoaded, ClerkLoading, SignIn } from '@clerk/clerk-react';
import { Loader2 } from 'lucide-react';

function SignInPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <div className="h-full flex-col items-center justify-center px-4 lg:flex">
        <div className="mt-8 flex items-center justify-center">
          <ClerkLoaded>
            <SignIn path="/sign-in" signUpUrl="/sign-up" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="text-muted-foreground animate-spin" />
          </ClerkLoading>
        </div>
      </div>
      <div className="hidden h-full items-center justify-center bg-blue-600 lg:flex">
        <img src="/logo.svg" height={100} width={100} alt="Logo" />
      </div>
    </div>
  );
}

export default SignInPage;
