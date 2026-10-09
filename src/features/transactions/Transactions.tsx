import { useTranslation } from "react-i18next";
import { Text, Input, EmptyState, List, ListRow } from "../../design-system";

interface Txn {
  id: number;
  name: string;
  date: string;
  amount: string;
}

const txns: Txn[] = [
  { id: 1, name: "Payroll deposit", date: "Jun 14", amount: "+$2,480.00" },
  { id: 2, name: "Whole Foods Market", date: "Jun 13", amount: "-$84.21" },
];

function Transactions() {
  const { t } = useTranslation();

  return (
    <div className="view">
      <Text variant="title">{t("transactions.title")}</Text>
      <Text variant="subtitle">
        {t("transactions.lastUpdated", { time: "2 min ago" })}
      </Text>

      <Input
        type="search"
        placeholder={t("transactions.searchPlaceholder")}
        aria-label={t("transactions.searchPlaceholder")}
      />

      {txns.length === 0 ? (
        <EmptyState title={t("transactions.emptyTitle")} />
      ) : (
        <List>
          <li className="txn-count">
            {t("transactions.count", { count: txns.length })}
          </li>
          {txns.map((txn) => (
            <ListRow
              key={txn.id}
              primary={
                <span className="txn-main">
                  <span className="txn-name">{txn.name}</span>
                  <span className="txn-date">{txn.date}</span>
                </span>
              }
              secondary={txn.amount}
            />
          ))}
        </List>
      )}
    </div>
  );
}

export default Transactions;
