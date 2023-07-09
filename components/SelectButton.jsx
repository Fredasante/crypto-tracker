const SelectButton = ({ children, selected, onClick }) => {
  return (
    <span
      style={{
        background: selected ? "gold" : "",
        color: selected ? "black" : "",
        fontWeight: selected ? 700 : 500,
      }}
      onClick={onClick}
      className="select-button"
    >
      {children}
    </span>
  );
};

export default SelectButton;
