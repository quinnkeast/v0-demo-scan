import { Badge, Text } from "../../design-system";

function Crypto() {
  return (
    <div className="view">
      <Text variant="title">Crypto wallet</Text>

      <section className="balance-card">
        <span className="balance-label">Total holdings</span>
        <span className="balance-amount">0.42 BTC</span>
        <div className="balance-actions">
          <Badge>NFTs</Badge>
        </div>
        <Text variant="dim" as="p">
          Cryptography is cool!
        </Text>
      </section>

      <Text variant="legal">Don't steal my private key</Text>
    </div>
  );
}

export default Crypto;
