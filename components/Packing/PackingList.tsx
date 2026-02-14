"use client";

import { useState } from "react";
import PackingItem from "./PackingItem";

export type Item = {
  id: string;
  name: string;
  checked: boolean;
};

export default function PackingList() {
  const [items, setItems] = useState<Item[]>([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (!input.trim()) return;

    const newItem: Item = {
      id: crypto.randomUUID(),
      name: input,
      checked: false,
    };

    setItems((prev) => [...prev, newItem]);
    setInput("");
  };

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  const deleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-md">
      {/* 入力エリア */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="持ち物を追加"
          className="border p-2 flex-1 rounded"
        />
        <button
          onClick={addItem}
          className="bg-blue-500 text-white px-4 rounded"
        >
          追加
        </button>
      </div>

      {/* リスト */}
      <ul className="space-y-2">
        {items.map((item) => (
          <PackingItem
            key={item.id}
            item={item}
            onToggle={toggleItem}
            onDelete={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
}
