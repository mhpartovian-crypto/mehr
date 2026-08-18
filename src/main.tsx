import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { applyContent, markServerContent } from "./content/store";

/**
 * Boot: if the client has uploaded a `content.json` next to index.html,
 * its overrides are merged into the site data BEFORE the first render.
 * If the file is missing (404) the built-in defaults are used.
 */
async function boot() {
  try {
    const res = await fetch("content.json", { cache: "no-cache" });
    if (res.ok) {
      const json = await res.json();
      applyContent(json);
      markServerContent(true);
    }
  } catch {
    /* offline / no file — defaults stay */
  }

  ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
}

boot();
