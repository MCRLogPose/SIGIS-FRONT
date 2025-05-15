import { useEffect, useState } from 'react'

const useResponsiveCardLimit = (containerRef) => {
  const [maxCards, setMaxCards] = useState(1)

  useEffect(() => {
    const calculateCards = () => {
      if (!containerRef.current) return

      const containerWidth = containerRef.current.offsetWidth
      const cardMinWidth = 250 // px mínimo que puede ocupar una tarjeta
      const gap = 24 // gap-6 = 1.5rem = 24px entre columnas

      const possibleCards = Math.floor((containerWidth + gap) / (cardMinWidth + gap))
      setMaxCards(possibleCards || 1)
    }

    calculateCards()
    window.addEventListener('resize', calculateCards)
    return () => window.removeEventListener('resize', calculateCards)
  }, [containerRef])

  return maxCards
}

export default useResponsiveCardLimit
