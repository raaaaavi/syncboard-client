export default function Badge({ label, fg, bg }) {
  return (
    <span className="badge" style={{ color: fg, background: bg }}>
      {label}
    </span>
  );
}
