export function TabButton({ handleClick, children }) {
  return (
    <li>
      <button onClick={() => handleClick(children?.toLowerCase())}>
        {children}
      </button>
    </li>
  );
}
