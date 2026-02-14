import PackingList from "@/components/Packing/PackingList";

export default function PackingListPage() {
  return (
    <main className="p-8  min-h-screen">
      <h1 className="text-2xl font-bold mb-6">持ち物リスト</h1>
      <PackingList />
    </main>
  );
}
