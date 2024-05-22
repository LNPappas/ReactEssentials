import "./CoreConcepts.css";
import { CORE_CONCEPTS } from "./concepts";

export function CoreConcept() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
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
    </section>
  );
}
