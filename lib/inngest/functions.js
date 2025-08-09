import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "demo/hello" },
  async ({ event, step }) => {
    return { message: "Hello from Inngest!" };
  }
);
// ...existing code...