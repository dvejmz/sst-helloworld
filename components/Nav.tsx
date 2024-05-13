import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/clerk-react";

const Header = () => {
  const { isSignedIn } = useUser();
  return (
    <header>
      <h1>Hello Sgfault</h1>

      {isSignedIn && <UserButton />}
    </header>
  );
};

const Nav = () => {
  const { isSignedIn } = useUser();
  return (
    <>
      <nav>
        <ul className="flex align-baseline">
          <Header />
          {!isSignedIn && (
            <>
              <li className="p-4"><strong><Link href="/sign-in">Log in</Link></strong></li>
              <li className="p-4"><strong><Link href="/sign-up">Sign up</Link></strong></li>
            </>
          )}
          <li className="p-4"><strong><Link href="/profile">Profile</Link></strong></li>
        </ul>
      </nav>
    </>
  );
};
export default Nav;
