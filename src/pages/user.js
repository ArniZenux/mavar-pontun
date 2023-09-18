import { UserInfo } from '../components/User/User';
import { useParams } from "react-router-dom";

export function UserPage(  ){
  let { id } = useParams();
  return(
    <UserInfo id={id}/>
  )
}
