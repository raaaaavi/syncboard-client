// Formats an ISO-ish date string into the short "24 Aug" style used across the UI.
export function formatShortDate(date) {
  const d = date instanceof Date ? date : new Date(date);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

// Counts how many tasks across all columns are assigned to a given user id.
export function countTasksForUser(columns, userId) {
  return columns.reduce(
    (total, col) => total + col.tasks.filter((t) => t.assignee.id === userId).length,
    0
  );
}

// Returns board completion percentage, guarding against divide-by-zero.
export function completionPercent(done, total) {
  if (!total) return 0;
  return Math.round((done / total) * 100);
}
<<<<<<< HEAD

// The API only sends a plain tag string (e.g. "Backend"); the UI owns the
// colour mapping so designers can restyle tags without touching the API.
const TAG_PALETTE = {
  Design: { fg: "#DB8A0C", bg: "#FBF0DA" },
  Backend: { fg: "#0E9C8E", bg: "#E1F5F2" },
  Frontend: { fg: "#3E3AE8", bg: "#ECEBFD" },
  Auth: { fg: "#DE5147", bg: "#FBE7E5" },
  Setup: { fg: "#666A79", bg: "#ECEAE2" },
};
const DEFAULT_TAG_COLORS = { fg: "#666A79", bg: "#ECEAE2" };

export function getTagColors(tag) {
  return TAG_PALETTE[tag] || DEFAULT_TAG_COLORS;
}
=======
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345
