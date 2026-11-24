import { mkdirSync, writeFileSync } from "node:fs";

// One short rant about the CAPTCHA gauntlet: a concrete, everyday
// annoyance with a fresh angle — the human fails the humanity test
// while the bots sail through.
const rant =
  "I spent six minutes proving I'm human to a website by clicking traffic lights, crosswalks, and one bicycle that may have been a hallucination. It still didn't believe me. Meanwhile actual bots bought every concert ticket in four seconds. I am a human being, and I have been out-humaned by a toaster with Wi-Fi.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", rant, "utf8");
