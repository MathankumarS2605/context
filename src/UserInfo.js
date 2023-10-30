
import {useContext} from 'react';
import { sharedData } from './App';
function UserInfo(){
    const user = useContext(sharedData);
    return (<div>
      <b>Welcome Mr/Ms </b> {user.firstName} {user.lastName}
        </div>
);
}
export default UserInfo;