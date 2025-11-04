export default function Contact() {
  return (
    <section id="contact" className="section-y container-px">
      <h2 className="text-2xl font-bold">Contato</h2>
      <form className="mt-4 grid sm:grid-cols-2 gap-4 max-w-2xl">
        <input className="border rounded-xl p-3" placeholder="Seu nome" aria-label="Seu nome"/>
        <input className="border rounded-xl p-3" type="email" placeholder="Seu e-mail" aria-label="Seu e-mail"/>
        <textarea className="border rounded-xl p-3 sm:col-span-2" rows={4} placeholder="Mensagem" aria-label="Mensagem"/>
        <button className="bg-gray-300 text-gray-500 rounded-xl px-4 py-2 w-fit sm:col-span-2">Enviar</button>
      </form>
    </section>
  )
}