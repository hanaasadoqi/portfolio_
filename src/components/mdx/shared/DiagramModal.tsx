"use client"

import { RefObject, useEffect } from 'react'

interface DiagramModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  modalRef: RefObject<any>
}

const DiagramModal = ({ isOpen, onClose, children, modalRef }: DiagramModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
      // After rendering the diagram, apply hover effects to each node
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    // Clean up when the modal closes
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  useEffect(() => {
    if (modalRef.current) {
      setTimeout(() => {
        const nodes = modalRef.current.querySelector('g.nodes') as SVGElement
        const svg = modalRef.current.querySelector('svg')

        if (nodes && nodes.children.length > 0) {
          const bbox = svg.getBBox()
          svg.setAttribute(
            'viewBox',
            `${bbox.x - 20} ${bbox.y - 20} ${bbox.width + 40} ${bbox.height + 40}`
          )

          Array.from(nodes.children).forEach((node: any) => {
            node.addEventListener('mouseenter', () => {
              const currentTransform = node.getAttribute('transform') || ''
              node.setAttribute('transform', currentTransform + ' scale(1.2)')
            })

            node.addEventListener('mouseleave', () => {
              const currentTransform = node.getAttribute('transform') || ''
              // Reset to original scale
              node.setAttribute('transform', currentTransform.replace(' scale(1.2)', ' scale(1)'))
            })

          })
        }
      }, 100)
    }
  }, [modalRef])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative rounded-lg p-6 max-w-screen w-full max-h-screen h-full">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="w-full h-full cursor-zoom-out overflow-auto" onClick={onClose}>{children}</div>
      </div>
    </div>
  )
}

export default DiagramModal
