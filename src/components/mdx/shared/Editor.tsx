"use client"

import React, { useState } from 'react'
import { drawSelection, EditorView, highlightActiveLine, highlightSpecialChars, keymap, lineNumbers, rectangularSelection } from '@codemirror/view'
import { EditorState } from '@codemirror/state'
import { javascript } from '@codemirror/lang-javascript'
import { autocompletion, closeBrackets, closeBracketsKeymap, completeFromList } from '@codemirror/autocomplete'
import { useEffect, useRef } from 'react'
import { indentUnit, indentService, getIndentation, indentOnInput, defaultHighlightStyle, syntaxHighlighting, foldKeymap, foldGutter, bracketMatching } from '@codemirror/language'
import { indentWithTab, history, insertNewlineAndIndent, defaultKeymap, historyKeymap } from '@codemirror/commands'
import { oneDark } from '@codemirror/theme-one-dark';
import { commentKeymap } from '@codemirror/comment';
import prettier from 'prettier'
import parserBabel from 'prettier/parser-babel'


import { highlightSelectionMatches, searchKeymap } from '@codemirror/search';
interface EditorProps {
  children?: React.ReactNode;
  initialCode?: string;
  updateCode: (code: string) => void;
}

const Editor: React.FC<EditorProps> = ({ children, updateCode, initialCode = `console.log('Hello, World')` }) => {
  const editorRef = useRef<HTMLDivElement>(null)
  const [code, setCode] = useState(initialCode)
  const [result, setResult] = useState('')

  const formatCode = async () => {
    try {
      const formattedCode = await prettier.format(code, {
        parser: 'babel',
        plugins: [parserBabel],
        singleQuote: true,
        semi: false,
        tabWidth: 2,
      })
      setCode(formattedCode)
    } catch (error: any) {
      console.error('Formatting error:', error)
      setResult('Formatting error: ' + error.message)
    }
  }

  useEffect(() => {
    editorRef.current?.focus()
    const myKeymap = keymap.of([
      {
        key: "Shift-Ctrl-S",
        run: () => {
          alert('Save!')
          return true
        }
      },
      {
        key: "Shift-R",
        run: () => {
          updateCode(code)
          return true
        }
      },
    ])

    const keywords = [
      { label: 'console', type: 'keyword' },
      { label: 'document', type: 'keyword' },
    ]

    const autocompleteExtension = autocompletion({
      override: [completeFromList(keywords)]
    })


    const darkTheme = EditorView.theme({
      "&": {
        color: "white",
        backgroundColor: "#000",
        fontSize: '14px'
      },
      ".cm-content": {
        caretColor: "#0e9"
      },
      ".cm-activeLine": {
        backgroundColor: "#121212",
      },
      ".cm-editor": {
        flexGrow: 1,
        height: '100%'
      }
    }, { dark: true })

    const startState = EditorState.create({
      doc: initialCode,
      extensions: [
        lineNumbers(),                        // Line numbers
        highlightActiveLine(),                // Highlight active line
        highlightSpecialChars(),              // Highlight special characters
        drawSelection(),                      // Custom selection drawing
        rectangularSelection(),               // Rectangular selection
        EditorState.allowMultipleSelections.of(true),
        history(),                            // Undo/Redo history
        foldGutter(),                         // Code folding gutter
        indentOnInput(),                      // Auto indent on input
        bracketMatching(),                    // Bracket matching
        closeBrackets(),                      // Auto close brackets
        autocompletion(),                     // Autocompletion
        highlightSelectionMatches(),          // Highlight selection matches
        darkTheme,
        myKeymap,
        keymap.of([
          ...defaultKeymap,
          ...historyKeymap,
          indentWithTab,
          ...foldKeymap,
          ...closeBracketsKeymap,
          ...searchKeymap,
        ]),                                    // Keymaps
        javascript(),                         // Language support
        indentUnit.of('  '),                  // Set indentation to 2 spaces
        oneDark,                              // Theme
        EditorView.lineWrapping,              // Line wrapping  
        EditorView.updateListener.of(update => {
          if (update.docChanged) {
            const code = (update.state.doc.toString())
            updateCode(code)
          }
        })
      ]
    })

    const view = new EditorView({
      state: startState,
      parent: editorRef.current!
    })

    return () => {
      view.destroy()
    }
  }, [initialCode])

  return (
    <div className="h-full flex flex-col" ref={editorRef}>
    </div>
  )
}

export default Editor