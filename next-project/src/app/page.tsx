"use client";

import { useState } from "react";
import { Button } from "example-package";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      Count is: {count}
      <Button onClick={() => setCount((c) => c + 1)}>Increment</Button>
      {/* {count > 5 && <Dialog></Dialog>} */}
    </div>
  );
}
