import { Fragment } from "react";

// Numbers such as "70%", "-60%" or "50+" are what recruiters scan for,
// so they are picked out of a sentence and set in the accent colour.
const NUMBER = /(-?\d+(?:[.,]\d+)?(?:%|\+))/g;

export default function Emphasize({ text }: { text: string }) {
  const parts = text.split(NUMBER);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="font-mono text-accent-strong">
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
