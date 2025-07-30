"use client";

import { useState } from "react";

export default function Home() {
  const [output, setOutput] = useState("");

  const fetchHello = async () => {
    const res = await fetch("http://localhost:8080/api/hello");
    const data = await res.json();
    setOutput(JSON.stringify(data, null, 2));
  };

  const postEcho = async () => {
    const res = await fetch("http://localhost:8080/api/echo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Doctor", message: "Hello from Next.js" }),
    });
    const data = await res.json();
    setOutput(JSON.stringify(data, null, 2));
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Next.js → Ballerina Gateway → Node.js</h1>
      <button onClick={fetchHello}>GET /api/hello</button>
      <button onClick={postEcho} style={{ marginLeft: "1rem" }}>
        POST /api/echo
      </button>
      <pre style={{ marginTop: "2rem", background: "#eee", padding: "1rem" }}>
        {output}
      </pre>
    </main>
  );
}