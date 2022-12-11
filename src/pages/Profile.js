import { useContext, userContext } from "react";

import { ChangeProfile } from "../components/ChangeProfile";
import { AppContext } from "../App"

export const Profile = () => {
  const { username, setUsername } = useContext(AppContext);
  return (
    <div>
      {" "}
      PROFILE, user is: {username}
      <ChangeProfile />
    </div>)
}
