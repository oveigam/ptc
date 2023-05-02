import Image from "next/image";
import { Time } from "@ptc/app/Time";
import { Form } from "./Form";

import openai from "./openai.svg";
import { ServerRuntime } from "next";

export const runtime: ServerRuntime = "edge";

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center gap-8 py-24">
      <div>
        <h1 className="bg-gradient-to-l from-pink-400 to-slate-600 bg-clip-text text-center text-4xl font-semibold text-transparent lg:text-7xl">
          Pirivi Time Converter
        </h1>
        <div className="flex items-center justify-end gap-1">
          <h2 className="text-end font-light">powered by OpenAI</h2>
          <Image src={openai} className="h-4 w-4" alt="openai" />
        </div>
      </div>
      <Time />
      <Form />
    </main>
  );
}
