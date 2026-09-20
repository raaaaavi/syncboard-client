export default function Avatar({ person, size = 32 }) {
  return (
    <div
      className="avatar"
      title={person.name}
      style={{
        width: size,
        height: size,
        background: person.color,
        fontSize: size * 0.4,
      }}
    >
      {person.initials}
    </div>
  );
}
