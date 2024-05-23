export function TabButton({ handleClick, isSelected, children }) {
  return (
    <li>
      <button
        className={isSelected && "active"}
        onClick={() => handleClick(children?.toLowerCase())}
      >
        {children}
      </button>
    </li>
  );
}
