import React, { FC } from "react";

export type Language = "EN" | "DE" | "HU";

export const LanguageSelector: FC<{ defaultLanguage: Language }> = ({
  defaultLanguage,
}) => {
  const [selectedLanguage, setSelectedLanguage] =
    React.useState(defaultLanguage);

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value as Language;
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
          <option value="EN" selected={selectedLanguage === "EN"}>
            English
          </option>
          <option value="DE" selected={selectedLanguage === "DE"}>
            Deutsch
          </option>
          <option value="HU" selected={selectedLanguage === "HU"}>
            Hungarian
          </option>
        </select>
      </div>

      <div>{selectedLanguage}</div>
    </div>
  );
};
