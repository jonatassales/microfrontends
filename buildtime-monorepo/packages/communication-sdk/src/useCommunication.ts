import { useContext } from 'react'
import { Communication } from './types'
import communication from './context'

export default function useCommunication(): Communication {
  const communicationContext = useContext(communication)
  if (!communicationContext) {
    throw new Error('Communication context was not passed')
  }
  return communicationContext
}
