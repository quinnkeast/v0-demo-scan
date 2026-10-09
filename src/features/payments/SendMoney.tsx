import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, Button, Input, FormField, Panel } from "../../design-system";

function SendMoney() {
  const { t } = useTranslation();
  const [step, setStep] = useState<"form" | "review">("form");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  if (step === "review") {
    return (
      <div className="view">
        <Text variant="title">{t("send.title")}</Text>
        <Panel>
          <p className="confirm-body">
            {t("send.confirmBody", {
              amount: amount ? `$${amount}` : "$0.00",
              recipient: recipient || t("send.recipientLabel"),
            })}
          </p>
          <Button variant="primary" onClick={() => setStep("form")}>
            {t("send.confirmButton")}
          </Button>
        </Panel>
      </div>
    );
  }

  return (
    <div className="view">
      <Text variant="title">{t("send.title")}</Text>
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          setStep("review");
        }}
      >
        <FormField label={t("send.recipientLabel")}>
          <Input
            value={recipient}
            onChange={(event) => setRecipient(event.target.value)}
          />
        </FormField>

        <FormField
          label={t("send.amountLabel")}
          hint={t("send.dailyLimit", { count: 3 })}
        >
          <Input
            inputMode="decimal"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="0.00"
          />
        </FormField>

        <Button variant="primary" type="submit">
          {t("send.reviewButton")}
        </Button>
      </form>
    </div>
  );
}

export default SendMoney;
