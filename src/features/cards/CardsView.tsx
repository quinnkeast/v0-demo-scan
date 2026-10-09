import { useState } from "react";
import { Button, Text } from "../../design-system";

function Cards() {
  const [frozen, setFrozen] = useState(false);

  return (
    <div className="view">
      <Text variant="title">Your cards</Text>

      <section className="card-stack">
        <article className="payment-card">
          <span className="payment-card-type">Physical card</span>
          <span className="payment-card-number">Card ending in 4821</span>
          <Button
            variant="secondary"
            aria-label="Freeze or unfreeze your card"
            onClick={() => setFrozen((value) => !value)}
          >
            {frozen ? "Unfreeze card" : "Freeze card"}
          </Button>
          {frozen && (
            <p className="payment-card-note">
              This card is frozen. New charges will be declined until you unfreeze
              it.
            </p>
          )}
        </article>
      </section>

      <Button variant="link">Add a new card</Button>
    </div>
  );
}

export default Cards;
