interface CodeProblemProps {
  children: React.ReactNode;
}

export const CodeProblem = ({ children }: CodeProblemProps) => {
  return (
    <div className="p-4 text-white rounded-md my-4 max-h-96 h-full w-full">
      <h4 className="font-bold">Problem</h4>
      <div className="overflow-y-scroll scroll-contain">
        {children}
      </div>
    </div>
  )
}