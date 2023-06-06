import { type Color, type Colors } from "@/pages";
import { useState } from "react";

interface ColorProps {
  index: number;
  colorProps: Color;
  colors: Colors;
  onMouseEnter: (colorName: string, colorDescription: string) => void;
}

const SingleColor: React.FC<ColorProps> = ({ 
  index,
  colorProps,
  colors,
  onMouseEnter,
 }) => {
  const [hoveredId, setHoveredId] = useState< number | string>(0);

  const handleHover = (name: string, description: string, id: number | string) => {
    onMouseEnter(name, description)
    setHoveredId(id)
  }

  return (
    <div
      className={`${index + 1 === hoveredId ? 'z-hoveredColor' : ''} absolute cursor-pointer right-0 top-0 h-1/2 w-1/2 origin-bottom-left overflow-hidden`}
      onMouseEnter={handleHover.bind(null, colorProps.name, colorProps.description, colorProps.id)}
      onMouseLeave={() => setHoveredId(0)}
      style={{
        transform: `rotate(${360 / colors.length * (index + 1)}deg) skewY(110.1deg)`,
        backgroundColor: `${colorProps.color}`,
      }}
      >
    </div>
  )
}

export default SingleColor;
