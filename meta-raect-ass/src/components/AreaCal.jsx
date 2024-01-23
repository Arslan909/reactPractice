import React from 'react'

export default function AreaCal(){
    const [shape, setShape] = React.useState('rectangle');
  const [length, setLength] = React.useState('');
  const [width, setWidth] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [radius, setRadius] = React.useState('');
  const [result, setResult] = React.useState(null);

  const calculateArea = () => {
    switch (shape) {
      case 'rectangle':
        setResult(length * width);
        break;
      case 'triangle':
        setResult((1 / 2) * length * height);
        break;
      case 'circle':
        setResult(Math.PI * Math.pow(radius, 2));
        break;
      default:
        setResult(null);
    }
  };

  return (
    <div>
      <h1>Geometry Calculator</h1>
      <label>
        Select Shape:
        <select value={shape} onChange={(e) => setShape(e.target.value)}>
          <option value="rectangle">Rectangle</option>
          <option value="triangle">Triangle</option>
          <option value="circle">Circle</option>
        </select>
      </label>
      {shape === 'rectangle' && (
        <div>
          <label>
            Length:
            <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
          </label>
          <label>
            Width:
            <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
          </label>
        </div>
      )}
      {shape === 'triangle' && (
        <div>
          <label>
            Base:
            <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
          </label>
          <label>
            Height:
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
          </label>
        </div>
      )}
      {shape === 'circle' && (
        <div>
          <label>
            Radius:
            <input type="number" value={radius} onChange={(e) => setRadius(e.target.value)} />
          </label>
        </div>
      )}
      <button onClick={calculateArea}>Calculate Area</button>
      {result !== null && <p>The area is: {result}</p>}
    </div>
  );
}