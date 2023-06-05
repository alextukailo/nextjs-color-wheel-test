import { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import SingleColor from "@/src/components/Color";


export interface Color {
  id: number | string;
  color: string;
  name: string;
  to: string;
}

export type Colors = Color[];

const COLORS_VARIANTS: Colors = [
  {
    id: 1,
    color: '#43a1cd',
    name: 'color 1',
    to: '/1',
  },
  {
    id: 2,
    color: '#639b47',
    name: 'color 2',
    to: '/2',
  },
  {
    id: 3,
    color: '#9ac147',
    name: 'color 3',
    to: '/3',
  },
  {
    id: 4,
    color: '#e1e23b',
    name: 'color 4',
    to: '/4',
  },
  {
    id: 5,
    color: '#f7941e',
    name: 'color 5',
    to: '/5',
  },
  {
    id: 6,
    color: '#ba3e2e',
    name: 'color 6',
    to: '/6',
  },
  {
    id: 7,
    color: '#9a1d34',
    name: 'color 7',
    to: '/7',
  },
  {
    id: 8,
    color: '#662a6c',
    name: 'color 8',
    to: '/8',
  },
  {
    id: 9,
    color: '#272b66',
    name: 'color 9',
    to: '/9',
  },
  {
    id: 10,
    color: '#2d559f',
    name: 'color 10',
    to: '/10',
  },
]

const Home: NextPage = () => {
  const [colorName, setColorName] = useState<string>('');

  const handleMouseEnterColor = (color: string): void => {
    setColorName(color);
  }

  return (
    <>
      <Head>
        <title>Color wheel</title>
      </Head>
      <main>
        <div className="bg-white pt-8 pb-6">
          <div className="container-secondary">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Color Wheel
            </h1>
          </div>
        </div>
        <div className="container-main">
          <div className="colorWheel">
            <span className="text-gray-500">{colorName}</span>
            {COLORS_VARIANTS.map((color, index) => (
              <SingleColor
                key={color.id}
                index={index}
                colorProps={{
                  id: color.id,
                  color: color.color,
                  name: color.name,
                  to: color.to,
                }}
                colors={COLORS_VARIANTS}
                onMouseEnter={handleMouseEnterColor}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
