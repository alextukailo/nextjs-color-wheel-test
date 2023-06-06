import { NextPage } from "next";
import Head from "next/head";
import ColorWheel from "@/src/components/ColorWheel/ColorWheel";


export interface Color {
  id: number | string;
  color: string;
  name: string;
  description: string;
  to: string;
}

export type Colors = Color[];


const Home: NextPage = () => {

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
        <ColorWheel />
      </main>
    </>
  );
};

export default Home;
