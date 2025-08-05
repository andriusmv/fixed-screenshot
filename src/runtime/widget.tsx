/** @jsx jsx */
import { React, jsx, useRef, useState } from 'jimu-core'
import { Button } from 'jimu-ui'
import html2canvas from 'html2canvas'

export default function Widget() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [imageSrc, setImageSrc] = useState<string>('')

  const handleScreenshot = async () => {
    const element = containerRef.current
    if (!element) return

    const canvas = await html2canvas(element, { useCORS: true, scale: 2 })
    setImageSrc(canvas.toDataURL())
  }

  return (
    <div ref={containerRef} style={{ padding: '1rem', border: '1px solid #ccc' }}>
      <Button onClick={handleScreenshot}>Take Screenshot</Button>
      {imageSrc && (
        <div style={{ marginTop: '1rem' }}>
          <img src={imageSrc} alt="Screenshot preview" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  )
}
