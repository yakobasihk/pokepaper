import { useEffect, useState } from "react";
import { db } from "./db";
import {
  bottomRowStyle,
  colorsContainerStyle,
  colorSwatchStyle,
  frameStyle,
  imageStyle,
  inputStyle,
  settingsButtonStyle,
  settingsCenterRowStyle,
  settingsSelectCard,
  settingsSelectCardImage,
  settingsStyle,
  settingsTopRowStyle,
  textStyle,
  topRowStyle,
} from "./styles";

// Static Functions
const getRandomPokemon = () =>
  Array.from({ length: 30 }, () => Math.floor(Math.random() * 649) + 1);

const getSpriteUrl = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

const getGradient = (id) => {
  const colorString = db.find((pokemon) => pokemon.id === id)?.colors.join(",");
  const gradientString = `linear-gradient(to bottom right, ${colorString})`;
  return gradientString;
};

// Component
function App() {
  const [currentId, setCurrentId] = useState(1);
  const [nextId, setNextId] = useState(2);
  const [isSettingsHovered, setIsSettingsHovered] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [filterText, setFilterText] = useState("");

  const params = new URLSearchParams(location.search);
  const [idList, setIdList] = useState(
    JSON.parse(params.get("idList") || "undefined") || getRandomPokemon(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const topFrame = document.querySelector("#current") as HTMLDivElement;
      setTimeout(() => {
        const idIndex = idList.findIndex((id) => id === currentId);
        setCurrentId(idList[(idIndex + 1) % idList.length]);
        setNextId(idList[(idIndex + 2) % idList.length]);
        if (topFrame) {
          topFrame.style.transition = "";
          topFrame.style.opacity = "1";
        }
      }, 2000);
      topFrame.style.transition = "opacity 2s";
      topFrame.style.opacity = "0";
    }, 4000);
    return () => clearInterval(interval);
  }, [currentId, idList]);

  return (
    <div className="app">
      {/* Frame 1 */}
      <div
        style={{
          ...frameStyle,
          background: getGradient(nextId),
        }}
      >
        <div style={topRowStyle}>
          <button
            style={{
              ...settingsButtonStyle,
              background: isSettingsHovered ? "white" : "transparent",
              color: isSettingsHovered ? "#1e1e1e" : "white",
            }}
            onMouseEnter={() => setIsSettingsHovered(true)}
            onMouseLeave={() => setIsSettingsHovered(false)}
            onClick={() => setIsSettingsOpen(true)}
          >
            <i className="ti ti-settings" />
          </button>
        </div>
        <img src={getSpriteUrl(nextId)} style={imageStyle} />
        <div style={bottomRowStyle}>
          <p style={textStyle}>
            {db.find((pokemon) => pokemon.id === nextId)?.name.toUpperCase()}
          </p>
          <div style={colorsContainerStyle}>
            {db
              .find((pokemon) => pokemon.id === nextId)
              ?.colors.map((color) => (
                <div style={{ ...colorSwatchStyle, background: color }} />
              ))}
          </div>
        </div>
      </div>
      {/* Frame 2 */}
      <div
        style={{ ...frameStyle, background: getGradient(currentId) }}
        id="current"
      >
        <div style={topRowStyle}>
          <button
            style={{
              ...settingsButtonStyle,
              background: isSettingsHovered ? "white" : "transparent",
              color: isSettingsHovered ? "#1e1e1e" : "white",
            }}
            onMouseEnter={() => setIsSettingsHovered(true)}
            onMouseLeave={() => setIsSettingsHovered(false)}
            onClick={() => setIsSettingsOpen(true)}
          >
            <i className="ti ti-settings" />
          </button>
        </div>
        <img src={getSpriteUrl(currentId)} style={imageStyle} />
        <div style={bottomRowStyle}>
          <p style={textStyle}>
            {db.find((pokemon) => pokemon.id === currentId)?.name.toUpperCase()}
          </p>
          <div style={colorsContainerStyle}>
            {db
              .find((pokemon) => pokemon.id === currentId)
              ?.colors.map((color) => (
                <div style={{ ...colorSwatchStyle, background: color }} />
              ))}
          </div>
        </div>
      </div>
      <div style={{ ...settingsStyle, scale: isSettingsOpen ? "1" : "0" }}>
        <div style={settingsTopRowStyle}>
          <p>Select Pokemon</p>
          <button
            style={settingsButtonStyle}
            onClick={() => setIsSettingsOpen(false)}
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <div style={settingsCenterRowStyle}>
          <input
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            style={inputStyle}
          />
          {db
            .filter((pokemon) =>
              filterText
                ? pokemon.name.toLowerCase().includes(filterText.toLowerCase())
                : true,
            )
            .map((pokemon) => (
              <div
                style={settingsSelectCard}
                onClick={() => {
                  if (idList.includes(pokemon.id))
                    setIdList(
                      idList
                        .filter((id) => id !== pokemon.id)
                        .sort((a, b) => a - b),
                    );
                  else setIdList([...idList, pokemon.id]);
                }}
              >
                <img
                  style={{
                    ...settingsSelectCardImage,
                    background: idList.includes(pokemon.id)
                      ? "#58A868"
                      : "white",
                  }}
                  src={getSpriteUrl(pokemon.id)}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
