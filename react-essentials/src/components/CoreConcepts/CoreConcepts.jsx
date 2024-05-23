import "./CoreConcepts.css";
import { CORE_CONCEPTS } from "./concepts";
import Section from "../Section";

export function CoreConcept() {
  return (
    <Section id="core-concepts" title="Core Concepts" container="ul">
      <ul>
        {CORE_CONCEPTS.map((concept, index) => {
          const { image, title, description } = concept;
          return (
            <li key={`${title}-${index}`}>
              <img src={image} alt={title} />
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
