"use client";

import { useState } from "react";

export default function Home() {
  const [images, setImages] = useState<string[]>([]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setImages((prev) => [...prev, data.url]);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>写真アップロード</h1>

      <input type="file" accept="image/*" onChange={handleUpload} />

      <div
        style={{
          marginTop: 30,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 150px)",
          gap: 16,
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            style={{
              width: 150,
              height: 150,
              objectFit: "cover",
              borderRadius: 8,
            }}
          />
        ))}
      </div>
    </div>
  );
}
