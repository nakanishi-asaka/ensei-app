import { Item } from "./PackingList";

type Props = {
  item: Item;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export default function PackingItem({ item, onToggle, onDelete }: Props) {
  return (
    <li className="flex items-center justify-between border p-2 rounded">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => onToggle(item.id)}
        />
        <span className={item.checked ? "line-through text-gray-400" : ""}>
          {item.name}
        </span>
      </label>

      <button
        onClick={() => onDelete(item.id)}
        className="text-red-500 text-sm"
      >
        削除
      </button>
    </li>
  );
}
