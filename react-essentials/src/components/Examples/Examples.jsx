import "./Examples.css";
import TabButton from "../TabButton";
import { CORE_TITLES } from "../CoreConcepts/concepts";

export function Examples({ handleClick, selectedTopic }) {
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        {CORE_TITLES.map((button, index) => {
          return (
            <TabButton
              key={`${button}-${index}`}
              handleClick={handleClick}
              isSelected={selectedTopic === button.toLowerCase()}
            >
              {button}
            </TabButton>
          );
        })}
      </menu>
    </section>
  );
}
