export function TabButton({ handleClick, isSelected, children }) {
  return (
    <li>
      <button
        className={isSelected ? "active" : undefined}
        onClick={() => handleClick(children?.toLowerCase())}
      >
        {children}
      </button>
    </li>
  );
}
