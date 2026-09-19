
export default function Home() {
  return (
    <div className="mx-auto flex h-dvh w-full max-w-[1400px] flex-col bg-[#F7F3E8] font-sans text-[#29251F]">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-[#E8E0D0] bg-[#FFFDF7] px-5 py-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C58B24] font-serif text-base font-semibold text-white">
            S
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight">
            Support
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-sm text-[#817A6E]">
          <span className="h-2 w-2 rounded-full bg-[#C58B24]" />
          Connected
        </div>
      </header>

      {/* Message thread */}
      <main className="flex flex-1 flex-col gap-3 overflow-y-auto px-5 py-5">
        <div className="flex justify-center">
          <span className="rounded-full bg-[#EFE8D8] px-3 py-1 text-xs text-[#817A6E]">
            Connected to support
          </span>
        </div>

        <div className="flex justify-start">
          <div className="max-w-[75%] rounded-2xl rounded-bl-md border border-[#E8E0D0] bg-white px-3.5 py-2.5 text-[14.5px] leading-relaxed">
            <p>Hi! How can I help you today?</p>
            <span className="mt-1 block text-[10.5px] opacity-60">
              9:41 AM
            </span>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="max-w-[75%] rounded-2xl rounded-br-md bg-[#C58B24] px-3.5 py-2.5 text-[14.5px] leading-relaxed text-white">
            <p>My order hasn&apos;t arrived yet, can you check on it?</p>
            <span className="mt-1 block text-[10.5px] opacity-60">
              9:42 AM
            </span>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="max-w-[75%] rounded-2xl rounded-bl-md border border-[#E8E0D0] bg-white px-3.5 py-2.5 text-[14.5px] leading-relaxed">
            <p>Sure, let me pull that up for you — one moment.</p>
            <span className="mt-1 block text-[10.5px] opacity-60">
              9:42 AM
            </span>
          </div>
        </div>

        {/* Typing indicator */}
        <div className="flex justify-start">
          <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-[#E8E0D0] bg-white px-4 py-3.5">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#AAA08F] [animation-delay:0ms]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#AAA08F] [animation-delay:150ms]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#AAA08F] [animation-delay:300ms]" />
          </div>
        </div>
      </main>

      {/* Composer */}
      <footer className="flex gap-2.5 border-t border-[#E8E0D0] bg-[#FFFDF7] px-4 py-3.5">
        <textarea
          rows={1}
          placeholder="Type a message…"
          className="max-h-32 flex-1 resize-none rounded-xl border border-[#E8E0D0] bg-[#F7F3E8] px-3.5 py-2.5 text-[14.5px] outline-none focus:border-[#C58B24]"
        />

        <button className="rounded-xl bg-[#C58B24] px-4.5 text-sm font-medium text-white hover:bg-[#A9741C]">
          Send
        </button>
      </footer>
    </div>
  );
}
