import Navbar from "../components/layout/Navbar.jsx";
import Sidebar from "../components/layout/Sidebar.jsx";
import Board from "../components/board/Board.jsx";

<<<<<<< HEAD
export default function BoardPage({ view, boardId, onNav, onOpenTask, searchQuery, onSearchChange, activity, onActivity }) {
  return (
    <div className="app-shell">
      <Navbar onNav={onNav} searchQuery={searchQuery} onSearchChange={onSearchChange} activity={activity} />
      <div className="app-body">
        <Sidebar view={view} onNav={onNav} />
        <Board boardId={boardId} onOpenTask={onOpenTask} searchQuery={searchQuery} onActivity={onActivity} />
=======
export default function BoardPage({ view, onNav, onOpenTask }) {
  return (
    <div className="app-shell">
      <Navbar onNav={onNav} />
      <div className="app-body">
        <Sidebar view={view} onNav={onNav} />
        <Board onOpenTask={onOpenTask} />
>>>>>>> d9d32c54731e46abd37f9a44f738c5b8be04c345
      </div>
    </div>
  );
}
