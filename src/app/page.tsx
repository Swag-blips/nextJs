import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <Button>Sign In</Button>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <ModeToggle />
      <Button variant={"secondary"}>Click me</Button>
    </div>
  );
}
