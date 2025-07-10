interface FriendListProps {
  friends: string[];
  selected: string;
  onSelect: (friend: string) => void;
}

export const FriendList: React.FC<FriendListProps> = ({ friends, selected, onSelect }) => (
  <ul>
    {friends.map((f) => (
      <li
        key={f}
        style={{ fontWeight: f === selected ? 'bold' : 'normal', cursor: 'pointer' }}
        onClick={() => onSelect(f)}
      >
        {f}
      </li>
    ))}
  </ul>
);