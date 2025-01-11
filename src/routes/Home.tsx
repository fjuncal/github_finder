import { useState } from "react";
import Search from "../components/Search";
import { UserProps } from "../types/user";

export default function Home() {
  const [user, setUser] = useState<UserProps | null>(null);

  const loadUser = async (userName: string) => {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    setUser(data);
    console.log(data);
  };
  return (
    <div>
      <Search loadUser={loadUser} />
    </div>
  );
}
