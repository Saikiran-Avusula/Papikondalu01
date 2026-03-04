'use client'

import { useEffect } from 'react'

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Enable resource hints
    const addResourceHints = () => {
      const hints = [
        { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
      ]

      hints.forEach(hint => {
        const link = document.createElement('link')
        link.rel = hint.rel
        link.href = hint.href
        if (hint.crossOrigin) link.crossOrigin = hint.crossOrigin
        document.head.appendChild(link)
      })
    }

    // Run optimizations
    addResourceHints()
  }, [])

  return null
}

export default PerformanceOptimizer