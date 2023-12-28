import React from "react";

export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>start adding some items to your packing list 🚀</em>
      </p>
    );
  }
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got everything! Ready to go ✈️"
          : `👜 you have ${numItems} items on your list and you have already packed
        ${packedItems} items (${percentage}%)`}
      </em>
    </footer>
  );
}
