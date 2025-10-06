import {FriendListItem} from '../friends/FriendListItem'
import x from '../friends/FriendListItem.module.css'
export const FriendList = ({friends}) => {
    return (<ul className={x.friend}>
        {friends && friends.map(({id, avatar, name, isOnline}) => (
            <FriendListItem
            key={id}
            avatar={avatar} 
            name={name}
            isOnline={isOnline}
            />
        ))}
    </ul>)
}