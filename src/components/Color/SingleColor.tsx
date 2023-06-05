import Link from "next/link";
import { type Color, type Colors } from "@/pages";

interface ColorProps {
  index: number;
  colorProps: Color;
  colors: Colors;
  onMouseEnter: (color: string) => void;
}

const SingleColor: React.FC<ColorProps> = ({ 
  index,
  colorProps,
  colors,
  onMouseEnter,
 }) => {

  return (
    <Link
      key={colorProps.id}
      href={colorProps.to}
    >
      <div
        className="hover:scale-110"
        onMouseEnter={onMouseEnter.bind(null, colorProps.name)}
        style={{
        transform: `rotate(${360 / colors.length * (index + 1)}deg)`,
        borderColor: `${colorProps.color} transparent transparent transparent`,
        }}
      >
      </div>
    </Link>
  )
}

export default SingleColor;
