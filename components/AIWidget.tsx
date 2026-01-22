export default function AIWidget() {
  return (
    <div className="bg-[#14141C] p-6 rounded-2xl border border-white/5">
      <h3 className="font-semibold mb-3">AI Assistant</h3>

      <p className="text-sm text-gray-400 mb-4">
        Hola! En que te puedo ayudar hoy?
      </p>

      <div className="space-y-2">
        {[
          "¿Cuáles son mis tareas para hoy?",
          "Crear una tarea para mañana",
          "Resumir la última reunión",
        ].map((q) => (
          <div
            key={q}
            className="text-sm bg-white/5 px-3 py-2 rounded-lg"
          >
            {q}
          </div>
        ))}
      </div>

      <input
        placeholder="Ask me anything..."
        className="mt-4 w-full bg-[#0E0E14] px-3 py-2 rounded-lg text-sm"
      />
    </div>
  );
}
