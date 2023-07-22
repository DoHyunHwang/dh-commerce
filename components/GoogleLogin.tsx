import { useSession, signIn, signOut } from 'next-auth/react';
import Button from './Button';

export default function GoogleLogin() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col">
      {session ? (
        <div>
          Signed in as {session.user?.email}
          <br />
          <br />
          <Button onClick={() => signOut()}>Sign out</Button>
        </div>
      ) : (
        <div>
          Not signed in
          <br />
          <br />
          <Button onClick={() => signIn()}>Sign in</Button>
        </div>
      )}
    </div>
  );
}
