"use client";

import { getApiUrl } from "@ptc/util/api";
import dayjs from "dayjs";
import { useState } from "react";

import piri from "./piri.webp";
import Image from "next/image";
import { Progress } from "./Progress";

export const Form = () => {
  const [time, setTime] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);

  return (
    <>
      <label className="flex flex-col items-center gap-2 font-semibold">
        A que hora quedaste con Pirivi?{" "}
        <input
          type="time"
          className="w-fit rounded-xl border border-slate-300 p-4 text-xl"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <button
        disabled={!time || isLoading}
        className="rounded-lg bg-pink-500 px-4 py-2 text-lg text-white hover:bg-pink-400 active:bg-pink-600 disabled:bg-gray-400"
        onClick={async () => {
          try {
            setError(false);
            setIsLoading(true);
            setMsg("");
            setType("");
            const { type, message } = (await fetch(getApiUrl("/generate"), {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ time, now: dayjs().format("HH:mm") }),
            }).then((r) => r.json())) as unknown as { type: string; message: string };
            setIsLoading(false);
            setMsg(message);
            setType(type);
          } catch (error) {
            setError(true);
            setIsLoading(false);
          }
        }}
      >
        Generar
      </button>
      {isLoading && <Progress />}
      {error && (
        <p className="text-center font-semibold text-red-600">
          Algo salió mal. Intentalo de nuevo.
        </p>
      )}
      {msg && (
        <>
          <div className="flex flex-col items-center justify-center gap-4 px-2 lg:flex-row">
            <div className="lg: flex flex-col items-center lg:flex-row">
              <p className="max-w-xl rounded-xl border border-slate-300 p-4">{msg}</p>
              <span className="-mt-3 rotate-90 text-4xl text-slate-300 lg:-ml-1 lg:mt-0 lg:rotate-0">
                &gt;
              </span>
            </div>
            <Image src={piri} alt="pirivi" />
          </div>
          <h3 className="invisible">{type}</h3>
        </>
      )}
    </>
  );
};
