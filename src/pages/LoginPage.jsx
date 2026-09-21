import { LayoutGrid, Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginPage({ onNav }) {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand">
          <div className="navbar-brand-icon">
            <LayoutGrid size={16} />
          </div>
          <span className="navbar-brand-name" style={{ fontSize: 18 }}>SyncBoard</span>
        </div>

        <h1 className="login-title">Welcome back</h1>
        <p className="login-sub">Sign in to sync with your team.</p>

        <label className="login-label">Email</label>
        <div className="login-input">
          <Mail size={15} color="#9C9FAC" />
          <span>aashi.r@nsbm.edu.lk</span>
        </div>

        <label className="login-label">Password</label>
        <div className="login-input">
          <Lock size={15} color="#9C9FAC" />
          <span style={{ color: "#9C9FAC" }}>••••••••••</span>
        </div>

        <button className="login-submit" onClick={() => onNav("dashboard")}>
          Sign in <ArrowRight size={15} />
        </button>

        <p className="login-footer">Team workspace · CollabBoard demo</p>
      </div>
    </div>
  );
}
