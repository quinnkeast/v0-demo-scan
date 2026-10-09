import { useTranslation } from "react-i18next";
import type { View } from "../../App";
import { Text, Button, Panel, List, ListRow } from "../../design-system";

interface DashboardProps {
  onNavigate: (view: View) => void;
}

const activity = [
  { id: 1, name: "Blue Bottle Coffee", amount: "-$5.40" },
  { id: 2, name: "Payroll deposit", amount: "+$2,480.00" },
];

function Dashboard({ onNavigate }: DashboardProps) {
  const { t } = useTranslation();

  return (
    <div className="view">
      <Text variant="title">{t("dashboard.greeting", { name: "Jordan" })}</Text>

      <section className="balance-card">
        <span className="balance-label">{t("dashboard.balanceLabel")}</span>
        <span className="balance-amount">$8,204.19</span>
        <div className="balance-actions">
          <Button variant="primary" onClick={() => onNavigate("send")}>
            {t("dashboard.addMoney")}
          </Button>
        </div>
        <Text variant="dim" as="p">
          {t("dashboard.spentThisMonth", { amount: "$1,950.00" })}
        </Text>
        <Text variant="dim" as="p">
          {t("dashboard.pendingTransfers", { count: 2 })}
        </Text>
      </section>

      <Panel title={t("dashboard.recentActivity")}>
        <List>
          {activity.map((row) => (
            <ListRow key={row.id} primary={row.name} secondary={row.amount} />
          ))}
        </List>
      </Panel>
    </div>
  );
}

export default Dashboard;
