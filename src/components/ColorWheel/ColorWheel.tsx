import { useState } from "react";
import SingleColor from "../Color/SingleColor";

import { variants } from '@/data/colorsVariants.json'

const ColorWheel: React.FC = () => {
  const [colorInfo, setColorName] = useState<{ name: string; description: string } | null>(null);

  const handleMouseEnterColor = (colorName: string, colorDescription: string): void => {
    setColorName({
      name: colorName,
      description: colorDescription,
    })
  }

  return(
    <>
      <div className="container-main">
        <div className="colorWheel">
          <div className="colorWheel mx-auto relative block h-72 w-72 overflow-hidden rounded-full">
            <div className="text-grey-500 z-50 absolute left-1/2 top-1/2 flex h-3/5 w-3/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_1rem_1rem_rgb(0_0_0_/8%)]">
              <span className="colorWheel__textblock">
                <h6 className="text-grey-700">{colorInfo?.name}</h6>
                <p className="text-grey-700">{colorInfo?.description}</p>
              </span>
            </div>
            {variants.map((color, index) => (
              <SingleColor
                key={color.id}
                index={index}
                colorProps={{
                  id: color.id,
                  color: color.color,
                  name: color.name,
                  description: color.description,
                  to: color.to,
                }}
                colors={variants}
                onMouseEnter={handleMouseEnterColor}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ColorWheel;
