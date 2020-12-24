import {
  faEraser,
  faMagic,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <div className="tool-grid">
          <button className="btn btn--tool" onClick={handleRegularMode}>
            <FontAwesomeIcon icon={faPaintBrush} />
          </button>
          <button className="btn btn--tool" onClick={handleSpecialMode}>
            <FontAwesomeIcon icon={faMagic} />
          </button>
          <button className="btn btn--tool " onClick={handleEraserMode}>
            <FontAwesomeIcon icon={faEraser} />
          </button>
          <input
            className="btn--color"
            type="color"
            id="toolColorPicker"
            onChange={handleColor}
          />
        </div>
        <p>
          <input
            type="checkbox"
            onChange={setAutoWidth}
            title="Dynamic brush size"
          />{" "}
          Auto width
        </p>
        {!isAutoWidth && (
          <>
            <p>
              <strong>Brush size</strong>
            </p>
            <input
              defaultValue="50"
              type="range"
              min="10"
              max="90"
              onChange={handleWidth}
            />
          </>
        )}
        {!isRegularMode && (
          <>
            <p>
              <strong>Magic brush</strong>
            </p>
            <label>Saturation</label>
            <input
              defaultValue="100"
              type="range"
              min="0"
              max="100"
              onChange={setCurrentSaturation}
            />
            <label>Lightness</label>
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
        <a
          className="btn btn--block"
          download="image.png"
          onClick={handleDownload}
          href={dateUrl}
        >
          Save Image
        </a>
        <button className="btn btn--block" onClick={handleClear}>
          Clear
        </button>
      </div>
    </aside>
  );
};
