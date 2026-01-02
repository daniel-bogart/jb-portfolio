export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-mono mb-12">Contact</h1>
        <p className="text-lg mb-8">
          Get in touch for collaborations and inquiries.
        </p>
        <div className="space-y-4">
          <p className="text-lg">
            Email: <a href="mailto:contact@example.com" className="underline hover:opacity-70">contact@example.com</a>
          </p>
        </div>
      </div>
    </main>
  );
}

