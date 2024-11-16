export default async function BlogLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div className="w-full min-h-full relative" data-id="writing">
      {children}
    </div>
  )
}