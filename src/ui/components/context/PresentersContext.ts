import React, { useContext } from 'react'
import { PresenterFactory } from '@/ui/PresenterFactory'

// @ts-ignore
export const PresentersContext = React.createContext<PresenterFactory>(undefined)

export const usePresenterFactory = () => useContext(PresentersContext)
