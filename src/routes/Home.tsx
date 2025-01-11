import { useState } from "react";
import Search from "../components/Search";
import { UserProps } from "../types/user";
import User from "../components/User";
import Erro from "../components/Erro";

export default function Home() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (userName: string) => {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const data = await response.json();
    if (response.status === 404) {
      setError(true);
      return;
    }
    // const [avatar_url, login, name, location, followers, following] = data;
    // const userData: UserProps = {
    //   avatar_url,
    //   name,
    //   login,
    //   location,
    //   followers,
    //   following,
    // };
    // console.log(data);

    setUser(data);
  };
  return (
    <div>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {error && <Erro />}
    </div>
  );
}
