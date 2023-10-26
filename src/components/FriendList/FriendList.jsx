import { FriendsList, FriendsListAvatar, FriendsListItem, FriendsListName, FriendsListStatus } from './FriendList.styled'

export const FriendList = ({ friends }) => {
    return <div>
        <FriendsList>
            {friends.map(({ avatar, name, isOnline, id }) => (
     <FriendsListItem key={id}>
                    <FriendsListStatus $isOnline={isOnline}>{isOnline}</FriendsListStatus>
  <FriendsListAvatar src={avatar} alt="User avatar" width="48" />
  <FriendsListName>{name}</FriendsListName>
</FriendsListItem> 
            ))}
        </FriendsList>
    </div>
}