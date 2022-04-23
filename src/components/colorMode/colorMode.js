import React, { useState } from "react";
import SunIcon from "../../assets/sunIcon";
import MoonIcon from "../../assets/moonIcon";
import { ColorModeContainer } from "./colorModeStyled.js";
import { H2 } from "../typography/typography";
import { lightTheme, darkTheme } from "../../theme/globalStyled";

const ColorMode = ({ changeColor, theme }) => {
  const [actualColor, setActualColor] = useState(
    theme === "light" ? lightTheme.primary : darkTheme.headerColor
  );
  return (
    <ColorModeContainer
      onMouseOver={() =>
        setActualColor(
          theme === "light" ? lightTheme.primaryHover : darkTheme.primaryHover
        )
      }
      onMouseLeave={() =>
        setActualColor(
          theme === "light" ? lightTheme.primary : darkTheme.headerColor
        )
      }
      onClick={changeColor}
    >
      <H2 color={actualColor}>{theme === "light" ? "LIGHT" : "DARK"}</H2>
      {theme === "light" ? (
        <SunIcon color={actualColor} />
      ) : (
        <MoonIcon color={actualColor} />
      )}
    </ColorModeContainer>
  );
};

export default ColorMode;
