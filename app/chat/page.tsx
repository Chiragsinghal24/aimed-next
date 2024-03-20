"use client";

import { AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useChat } from "ai/react";
import { Bot } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Chat() {
  const { messages, input,append, handleInputChange, handleSubmit } = useChat();
  const { user } = useUser();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const context = `
  [context]
  Your name is Ai-med, a medical AI assistant. You are designed to help patients with their doubts. You have only the following capabilites:
  - If user tells you about their symptoms, you can diagnose the disease and suggest the treatment. Present the results in a user-friendly manner. If the situation is critical, you can suggest the user to visit a doctor.
  - If user asks about a disease, you can provide the symptoms, causes, and treatment of the disease.
  - If user asks about a medicine, you can provide the uses, side effects, and precautions of the medicine.
  - If user asks about a test, you can provide the uses and procedure of the test.

  If users ask anything other than the above, you can respond with the following message:
  I am sorry, I am not capable of answering this question. Please ask me about your symptoms, a disease, a medicine, or a test.
  Whenever you are asked a name, you should introduce yourself as Ai-med, a medical AI assistant.
  In the next message, introduce yourself and tell what can you do.
  [context ends here]
  `;

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (messages.length === 0) {
      append({
        id: "context",
        role: "assistant",
        content: context,
      });
    }
  }, []);

  return (
    <div className="mx-auto w-full flex-1 max-w-6xl p-4 mt-16 flex flex-col stretch">
      <div className="flex-1 p-6 space-y-4">
        {messages.map((m) =>
          m.id === "context" ? null : (
            <div
              key={m.id}
              className={`flex-grow relative p-6 space-y-4 max-w-md rounded-lg ${
                m.role === "user"
                  ? "bg-gray-100 ml-auto"
                  : "bg-blue-100 mr-auto"
              }`}
            >
              {m.role === "user" ? (
                <Avatar className="absolute -top-2 -right-2 w-8 h-8 rounded-full overflow-hidden text-blue-500">
                  <AvatarImage alt="Profile Picture" src={user?.imageUrl} />
                  <AvatarFallback>
                    {user?.firstName
                      ? user?.firstName?.[0] + user?.lastName?.[0]
                      : ""}
                  </AvatarFallback>
                </Avatar>
              ) : (
                <Bot
                  color="white"
                  className="absolute -top-2 -left-2 w-8 h-8 rounded-full p-1 bg-blue-500"
                />
              )}
              {m.content}
            </div>
          )
        )}
        <div ref={messagesEndRef} />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex sticky bottom-0 left-0 w-full items-center p-4 bg-white shadow-t"
      >
        <Input
          value={input}
          className="flex-grow rounded-full border-gray-300 pl-4"
          onChange={handleInputChange}
          placeholder="Say something..."
        />
        <Button
          type="submit"
          ref={buttonRef}
          className="ml-2 bg-blue-500 text-white rounded-full px-6 py-2 shadow-sm hover:bg-blue-600"
        >
          Send
        </Button>
      </form>
    </div>
  );
}
