import "./TabContent.css";
import { EXAMPLES } from "./topics";
import Section from "../Section";

export function TabContent({ topic }) {
  if (!topic) return null;
  const { title, description, code } = EXAMPLES[topic];
  return (
    <Section title={title} id="tab-content">
      <p>{description}</p>
      <pre>
        <code>{code}</code>
      </pre>
    </Section>
  );
}
