import "./style.css";
import "rc-slider/assets/index.css";

import { saveAs } from "file-saver";
import Slider from "rc-slider";
import React, { useState } from "react";

interface Props {
  size: number;
}

const RedCircle: React.FC<Props> = ({ size }) => {
  const [color, setColor] = useState<string>("red");
  const [borderRadius, setBorderRadius] = useState<number>(20);
  const [rotation, setRotation] = useState<number>(20);
  const [height, setHeight] = useState<number>(100);
  const [width, setWidth] = useState<number>(100);

  const circleStyle: React.CSSProperties = {
    backgroundColor: color,
    borderRadius: `${borderRadius}%`,
    width: width,
    height: height,
    transform: `rotate(${rotation}deg)`,
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
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

  const handleHeightChange = (value: number | number[]) => {
    if (typeof value === "number") {
      setHeight(value);
    }
  };

  const handleWidthChange = (value: number | number[]) => {
    if (typeof value === "number") {
      setWidth(value);
    }
  };

  const handleDownloadSVG = () => {
    const svgString = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(${rotation} ${
      width / 2
    } ${
      height / 2
    })"><rect x="0" y="0" width="${width}" height="${height}" fill="${color}" rx="${borderRadius}" ry="${borderRadius}"/></g></svg>`;
    const svgBlob = new Blob([svgString], {
      type: "image/svg+xml;charset=utf-8",
    });
    saveAs(svgBlob, "red-rectangle.svg");
  };

  return (
    <div className={"container"}>
      <p>SVG Creator Tool by Mahdi Alavitabar</p>
      <div className={"circle"} style={circleStyle}></div>

      <div className={"controls"}>
        <div className={"control"}>
          <label htmlFor="color-input">Color:</label>
          <input
            id="color-input"
            type="color"
            value={color}
            onChange={handleColorChange}
          />
        </div>
        <div className={"control"}>
          <label htmlFor="border-radius-slider">Border Radius:</label>
          <Slider
            value={borderRadius}
            min={0}
            max={50}
            onChange={handleBorderRadiusChange}
          />
        </div>
        <div className={"control"}>
          <label htmlFor="rotation-slider">Rotation:</label>
          <Slider
            value={rotation}
            min={0}
            max={360}
            onChange={handleRotationChange}
          />
        </div>
        <div className={"control"}>
          <label htmlFor="height-slider">Height:</label>
          <Slider
            value={height}
            min={50}
            max={500}
            onChange={handleHeightChange}
          />
        </div>
        <div className={"control"}>
          <label htmlFor="width-slider">Width:</label>
          <Slider
            value={width}
            min={50}
            max={500}
            onChange={handleWidthChange}
          />
        </div>
        <button className={"button"} onClick={handleDownloadSVG}>
          Download SVG
        </button>
      </div>
    </div>
  );
};

export default RedCircle;
