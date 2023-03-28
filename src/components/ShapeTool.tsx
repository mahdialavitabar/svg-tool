import "rc-slider/assets/index.css";

import Slider from "rc-slider";
import React, { useState } from "react";

interface Props {
  size: number;
}

const RedCircle: React.FC<Props> = ({ size }) => {
  const [color, setColor] = useState<string>("red");
  const [circleSize, setCircleSize] = useState<number>(size);
  const [borderRadius, setBorderRadius] = useState<number>(0);
  const [rotation, setRotation] = useState<number>(0);

  const circleStyle: React.CSSProperties = {
    backgroundColor: color,
    borderRadius: `${borderRadius}%`,
    width: circleSize,
    height: circleSize,
    transform: `rotate(${rotation}deg)`,
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  const handleSizeChange = (value: number | number[]) => {
    if (typeof value === "number") {
      setCircleSize(value);
    }
  };

  const handleBorderRadiusChange = (value: number | number[]) => {
    if (typeof value === "number") {
      setBorderRadius(value);
    }
  };

  const handleRotationChange = (value: number | number[]) => {
    if (typeof value === "number") {
      setRotation(value);
    }
  };

  return (
    <div>
      <div style={circleStyle}></div>
      <input type="text" value={color} onChange={handleColorChange} />
      <Slider
        defaultValue={size}
        min={10}
        max={200}
        onChange={handleSizeChange}
      />
      <Slider
        defaultValue={borderRadius}
        min={0}
        max={50}
        onChange={handleBorderRadiusChange}
      />
      <Slider
        defaultValue={rotation}
        min={0}
        max={360}
        onChange={handleRotationChange}
      />
    </div>
  );
};

export default RedCircle;
