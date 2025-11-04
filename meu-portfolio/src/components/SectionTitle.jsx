export default function SectionTitle({ id, children }) {
  return (
    <h2 id={id} className="text-2xl sm:text-3xl font-bold tracking-tight">
      {children}
    </h2>
  )
}