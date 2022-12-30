import { FC } from "react";
import { signOut, useSession } from "next-auth/react";
import NotConnected from "../auth/NotConnected";

const Board: FC = () => {
  const { data: session } = useSession();
  if (!session) {
    return <NotConnected />;
  }
  return (
    <>
      <p>Board</p>
    </>
  );
};

export default Board;
