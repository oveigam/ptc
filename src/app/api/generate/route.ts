import { openai } from "@ptc/util/openai";
import { basePrompt, userPropmpt } from "@ptc/util/prompts";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { time, now } = (await request.json()) as unknown as { time: string; now: string };

  const { type, content } = userPropmpt(time, now);

  const chat = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: basePrompt(),
      },
      {
        role: "user",
        content,
      },
    ],
  });

  const message = chat.data.choices[0]?.message?.content ?? "Algo salío mal";

  return NextResponse.json({ type, message });
}
