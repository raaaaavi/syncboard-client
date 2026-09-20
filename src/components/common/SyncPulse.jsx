export default function SyncPulse({ label = "Synced · just now" }) {
  return (
    <div className="sync-pulse">
      <span className="sync-dot" />
      <span className="sync-label">{label}</span>
    </div>
  );
}
