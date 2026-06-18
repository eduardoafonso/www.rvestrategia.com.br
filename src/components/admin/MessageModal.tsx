'use client'

import { useState } from 'react'
import { FiEye, FiX } from 'react-icons/fi'
import Tooltip from './Tooltip'

export default function MessageModal({ message }: { message: string }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Tooltip label="Clique aqui para ver a mensagem">
        <button
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-rv-light/50 transition hover:bg-rv-bg-alt hover:text-rv-light"
        >
          <FiEye className="h-4 w-4" />
        </button>
      </Tooltip>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 p-4 pt-16"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div className="w-full max-w-md rounded-2xl bg-rv-bg-alt p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-heading text-base font-semibold text-rv-light">
                Mensagem
              </h3>
              <button
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-lg text-rv-light/60 transition hover:text-rv-light"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>
            <p className="text-sm leading-relaxed text-rv-light/85">{message}</p>
          </div>
        </div>
      )}
    </>
  )
}
