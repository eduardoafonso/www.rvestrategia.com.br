'use client'

import { useState } from 'react'

export default function ExpandableText({
  text,
  className = '',
}: {
  text: string
  className?: string
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <button
      onClick={() => setExpanded((e) => !e)}
      title={text}
      className={[
        'text-left text-sm',
        expanded
          ? 'relative z-10 whitespace-nowrap bg-rv-bg pr-3'
          : 'block w-full truncate',
        className,
      ].join(' ')}
    >
      {text}
    </button>
  )
}
