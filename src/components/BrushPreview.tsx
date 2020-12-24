import React from "react";

export const BrushPreview: React.FC<any> = ({ currentColor, currentWidth }) => {
  const styles = {
    backgroundColor: currentColor,
    width: `${currentWidth}px`,
    height: `${currentWidth}px`,
  };
  return (
    <div className="preview">
      <div style={styles} className="preview__brush"></div>
    </div>
  );
};
