export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-8 px-4 bg-white dark:bg-black sm:items-start">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">SmartPlayer Руководство</h1>
        <div className="w-full text-center">
          <iframe
            src="/manual/manual.html"
            width="100%"
            height="800"
            style={{border: 'none'}}
            title="User Manual"
          ></iframe>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Руководство отображается в полной оригинальной версии
          </p>
        </div>
      </main>
    </div>
  );
}