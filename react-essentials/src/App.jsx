import { useState } from "react";

import Header from "./components/Header";
import CoreConcept from "./components/CoreConcepts";
import Examples from "./components/Examples";
import { TabContent } from "./components/TabContent/TabContent";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleClick = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  return (
    <div>
      <Header />
      <main>
        <CoreConcept />
        <Examples handleClick={handleClick} />
        <TabContent topic={selectedTopic} />
      </main>
    </div>
  );
}

export default App;
