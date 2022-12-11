import { useContext } from "react";
import { AppContext } from "../App";

export const Home = (props) => {
  const { username } = useContext(AppContext)
  return <h1>This is the home page and user is: {username}</h1>
}