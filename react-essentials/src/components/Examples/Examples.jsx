import { useState } from "react";

import "./Examples.css";
import TabButton from "../TabButton";
import { CORE_TITLES } from "../CoreConcepts/concepts";
import { TabContent } from "../TabContent/TabContent";
import Section from "../Section";

export function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleClick = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  return (
    <Section id="examples" title="Examples" container="menu">
      <menu>
        {CORE_TITLES.map((button, index) => {
          const lowerCaseButton = button.toLowerCase();
          return (
            <TabButton
              key={`${button}-${index}`}
              onClick={() => handleClick(lowerCaseButton)}
              isSelected={selectedTopic === lowerCaseButton}
            >
              {button}
            </TabButton>
          );
        })}
      </menu>
      <TabContent topic={selectedTopic} />
    </Section>
  );
}
