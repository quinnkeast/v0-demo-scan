import { useTranslation } from "react-i18next";
import type { View } from "../App";

interface SidebarProps {
  view: View;
  onNavigate: (view: View) => void;
}

const items: { view: View; key: string }[] = [
  { view: "dashboard", key: "nav.dashboard" },
  { view: "transactions", key: "nav.transactions" },
  { view: "send", key: "nav.send" },
  { view: "cards", key: "nav.cards" },
  { view: "crypto", key: "nav.crypto" },
  { view: "settings", key: "nav.settings" },
];

function Sidebar({ view, onNavigate }: SidebarProps) {
  const { t } = useTranslation();

  return (
    <aside className="sidebar">
      {/* Brand name is intentionally not translated */}
      <div className="brand">
        <span className="brand-mark" aria-hidden="true">
          ◐
        </span>
        DPay
      </div>
      <nav className="sidebar-nav" aria-label="Primary">
        {items.map((item) => (
          <button
            key={item.view}
            className={`sidebar-link${view === item.view ? " active" : ""}`}
            onClick={() => onNavigate(item.view)}
          >
            {t(item.key)}
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        <a href="https://help.dpay.example" className="sidebar-help">
          Help center
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
