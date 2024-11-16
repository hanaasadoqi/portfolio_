"use client"

import { useEffect, useState } from 'react'
import { FaPlay, FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'
import { IconButton } from '@/components'
import 'react-resizable/css/styles.css'
import { ResizableBox } from 'react-resizable'
import clsx from 'clsx'
import Editor from './Editor'

interface CodeEditorProps {
  initialCode: string;
  children: React.ReactNode;
  title: string;
}

interface Size {
  width: number;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ children, title, initialCode }) => {
  const [code, setCode] = useState<string>('')
  const [result, setResult] = useState<string>('')
  const [isProblemVisible, setIsProblemVisible] = useState<boolean>(true)
  const [size, _] = useState<Size>({ width: 500 })

  const executeCode = () => {
    try {
      const output = eval(code)
      setResult(output?.toString() || 'No output')
    } catch (error: any) {
      setResult('Error: ' + error.message)
    }
  }

  // Toggle visibility of the problem container
  const toggleProblemContainer = () => {
    setIsProblemVisible(!isProblemVisible)
  }

  // Format the code using Prettier
  const handleCode = (updatedCode: string) => {
    setCode(updatedCode)
    localStorage.setItem(title, updatedCode)
  }

  useEffect(() => {
    const initial = localStorage.getItem(title)
    if (initial) {
      setCode(initial)
      console.log(initial)
    } else {
      setCode(initialCode)
    }
  }, [initialCode, code, title])

  return (
    <div className="flex flex-col space-y-4 dark:bg-secondary-950 px-8 max-h-full">
      <div className="relative flex w-full h-full mt-8">
        <div className="relative">

          {isProblemVisible && (
            <ResizableBox
              width={size.width}
              height={Infinity}
              minConstraints={[200, Infinity]}
              maxConstraints={[1000, Infinity]}
              draggableOpts={{ grid: [50, 50] }}
            >
              <div className={clsx('px-4 text-white rounded-md bg-gray-800 flex flex-col h-full')}>
                <div className="flex items-center justify-between">
                  <h5 className="font-bold w-full text-left mt-4">Problem</h5>
                </div>
                <div className=" h-full overflow-y-auto max-h-80 scroll-contain">{children}</div>
              </div>
            </ResizableBox>
          )}

          <IconButton
            onClick={toggleProblemContainer}
            className="absolute top-0 -right-4 not-prose bg-gray-700 text-white rounded-md z-[999]"
            icon={isProblemVisible ? <FaChevronCircleLeft /> : <FaChevronCircleRight />}
            tooltip={isProblemVisible ? 'Close' : 'Open'}
            tooltipId="toggle-problem-tooltip"
            tooltipPlace="bottom"
            size="sm"
            variant="ghost"
          />
        </div>

        <div className="relative h-full w-full">
          <div className="px-4 rounded-md border-gray-950 shadow-md w-full flex flex-col h-96 overflow-y-auto scroll-contain">
            <Editor updateCode={handleCode} initialCode={code} />
          </div>
        </div>
      </div>

      <div className="p-4 text-white rounded-md w-full flex flex-col justify-center items-center">
        <div className="flex items-center justify-start w-full gap-4">
          <h5 className="font-bold mb-0">Output</h5>
          <IconButton
            onClick={executeCode}
            icon={<FaPlay />}
            tooltip="Run"
            tooltipId="run-code-tooltip"
            tooltipPlace="top"
            variant="ghost"
            size="sm"
            className="not-prose"
          />
        </div>
        <pre className="overflow-y-auto scroll-contain min-h-48">{result}</pre>
      </div>
    </div>
  )
}

export default CodeEditor
