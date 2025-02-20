import { useState } from "react";

export default function Player({ initialName, icon, isActive, onSave }) {
  const [name, setName] = useState(initialName);
  const [isEdit, setIsEdit] = useState(true);
  function handleOnClick() {
    if (!isEdit) {
      if (icon === "X") {
        onSave((prev) => {
          let updated = [...prev];
          updated[0] = name;
          return updated;
        });
      } else {
        onSave((prev) => {
          let updated = [...prev];
          updated[1] = name;
          return updated;
        });
      }
    }
    setIsEdit((isEdit) => {
      return !isEdit;
    });
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEdit ? (
          <span className="player-name">{name}</span>
        ) : (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <span className="player-symbol">{icon}</span>
      </span>
      <button onClick={handleOnClick}>{isEdit ? "Edit" : "Save"}</button>
    </li>
  );
}
