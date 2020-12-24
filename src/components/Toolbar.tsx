import React from "react";
import { BrushPreview } from "./BrushPreview";

export const Toolbar: React.FC<any> = ({
  currentWidth,
  currentColor,
  handleDownload,
  dateUrl,
  handleClear,
  handleSpecialMode,
  handleEraserMode,
  setAutoWidth,
  handleRegularMode,
  handleColor,
  handleWidth,
  setCurrentSaturation,
  setCurrentLightness,
  isRegularMode,
  isAutoWidth,
}) => {
  return (
    <aside>
      <div>
        <BrushPreview currentWidth={currentWidth} currentColor={currentColor} />
        <p>Tools</p>
        <button onClick={handleRegularMode}>Normal paint</button>
        <button onClick={handleSpecialMode}>Special paint</button>
        <button onClick={handleEraserMode}>Eraser</button>
        <input
          type="checkbox"
          onChange={setAutoWidth}
          title="Dynamic brush size"
        />
        Auto width
        <input type="color" id="toolColorPicker" onChange={handleColor} />
        {!isAutoWidth && (
          <input
            defaultValue="50"
            type="range"
            min="10"
            max="90"
            onChange={handleWidth}
          />
        )}
        {!isRegularMode && (
          <>
            <p>Dream Brush options</p>
            <label>Color saturation</label>
            <input
              defaultValue="100"
              type="range"
              min="0"
              max="100"
              onChange={setCurrentSaturation}
            />
            <label>Color lightness</label>
            <input
              defaultValue="50"
              type="range"
              min="0"
              max="100"
              onChange={setCurrentLightness}
            />
          </>
        )}
      </div>
      <div>
        <a download="image.png" onClick={handleDownload} href={dateUrl}>
          Download Image
        </a>
        <button onClick={handleClear}>Clear</button>
      </div>
    </aside>
  );
};
