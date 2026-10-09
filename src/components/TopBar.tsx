import { IconButton, Avatar } from "../design-system";

function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-spacer" />
      <div className="topbar-actions">
        <IconButton aria-label="Search payments">
          <span aria-hidden="true">⌕</span>
        </IconButton>
        <IconButton aria-label="View notifications">
          <span aria-hidden="true">◔</span>
        </IconButton>
        <Avatar src="/avatar.svg" alt="Your profile photo" />
      </div>
    </header>
  );
}

export default TopBar;
