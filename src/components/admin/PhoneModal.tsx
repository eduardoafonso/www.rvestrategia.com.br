'use client'

import { useState } from 'react'
import { FiPhone, FiX } from 'react-icons/fi'
import { LuMessageCircle } from 'react-icons/lu'
import Tooltip from './Tooltip'

export default function PhoneModal({ phone }: { phone: string }) {
  const [open, setOpen] = useState(false)

  // Strip non-digits and prepend BR country code for wa.me link
  const waNumber = '55' + phone.replace(/\D/g, '')

  return (
    <>
      <Tooltip label="ver telefone">
        <button
          onClick={() => setOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-rv-light/50 transition hover:bg-rv-bg-alt hover:text-rv-light"
        >
          <FiPhone className="h-4 w-4" />
        </button>
      </Tooltip>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 p-4 pt-16"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div className="w-full max-w-xs rounded-2xl bg-rv-bg-alt p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-heading text-base font-semibold text-rv-light">
                Telefone
              </h3>
              <button
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-lg text-rv-light/60 transition hover:text-rv-light"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>
            <p className="text-lg font-medium text-rv-light">{phone}</p>
            <a
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              <LuMessageCircle className="h-5 w-5" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  )
}
