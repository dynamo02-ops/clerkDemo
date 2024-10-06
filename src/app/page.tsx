import Link from 'next/link';
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  return (
    <>
      <div>
        <h1>Home Page</h1>
        <div>
          {user ? `Welcome, ${user.firstName}` : 'User not found'}
        </div>
      </div>
    </>
  );
}
