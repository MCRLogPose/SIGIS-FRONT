// src/hooks/ui/useToggleListExpand.js

import { useState, useMemo } from 'react'

  export const useToggleListExpand = (items, limit) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const visibleItems = useMemo(() => {
      return isExpanded ? items : items.slice(0, limit)
    }, [items, isExpanded, limit])

    const toggleExpand = () => {
      setIsExpanded((prev) => !prev)
    }

    return { isExpanded, visibleItems, toggleExpand }
  }
