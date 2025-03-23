const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <div className="friend-card">
        <img src={avatar} alt="Avatar" />
        <p>{name}</p>
        <p className={`status ${isOnline ? "online" : "offline"}`}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    );
  };
  
  export default FriendListItem;
  