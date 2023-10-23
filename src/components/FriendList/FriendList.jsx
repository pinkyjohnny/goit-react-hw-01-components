export const FriendList = ({ friends }) => {
    return <div className="friendlist">
        <ul>
            {friends.map(({ avatar, name, isOnline, id }) => (
     <li className="item" key={id}>
    <span className="status">{isOnline}</span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
</li> 
            ))}
        </ul>
    </div>
}