
export const UL = ({ children }: { children: React.ReactNode }) => {
  return <ul className="list-disc list-inside my-4">{children}</ul>
}

export const OL = ({ children }: { children: React.ReactNode }) => {
  return <ol className="list-decimal list-inside my-4">{children}</ol>
}

export const LI = ({ children }: { children: React.ReactNode }) => {
  return <li className="m-0 my-0 text-gray-800">{children}</li>
}