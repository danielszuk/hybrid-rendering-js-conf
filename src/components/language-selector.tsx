import React, { FC } from "react";

export const LanguageSelector: FC<{ defaultLanguage: "EN" | "DE" | "HU" }> = ({
  defaultLanguage,
}) => {
  const [selectedLanguage, setSelectedLanguage] =
    React.useState(defaultLanguage);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as typeof defaultLanguage;
    setSelectedLanguage(selectedValue);
  };

  return (
    <div className="selector-container">
      <div className="selector">
        <label htmlFor="language-selector" className="selector-label">
          Language:
        </label>
        <select
          id="language-selector"
          name="price-range"
          className="selector-select"
          onChange={handleFilterChange}
        >
          <option value="EN" defaultChecked={selectedLanguage === "EN"}>
            English
          </option>
          <option value="DE" defaultChecked={selectedLanguage === "DE"}>
            Deutsch
          </option>
          <option value="HU" defaultChecked={selectedLanguage === "HU"}>
            Hungarian
          </option>
        </select>
      </div>

      <div>{selectedLanguage}</div>
    </div>
  );
};
