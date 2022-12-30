import { FC } from "react";
import { useSession } from "next-auth/react";
import NotConnected from "../auth/NotConnected";
import ToDo from "../ToDo";

const Board: FC = () => {
  const { data: session } = useSession();
  if (!session) {
    return <NotConnected />;
  }
  return (
    <>
      <ToDo />
    </>
  );
};

export default Board;
