import "./TabContent.css";
import { EXAMPLES } from "./topics";

export function TabContent({ topic }) {
  if (!topic) return null;
  const { title, description, code } = EXAMPLES[topic];
  return (
    <div id="tab-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}
