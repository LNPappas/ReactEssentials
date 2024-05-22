import "./Examples.css";
import TabButton from "../TabButton";

const buttons = ["Components", "JSX", "Props", "State"];

export function Examples({ handleClick }) {
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        {buttons.map((button, index) => {
          return (
            <TabButton key={`${button}-${index}`} handleClick={handleClick}>
              {button}
            </TabButton>
          );
        })}
      </menu>
    </section>
  );
}
