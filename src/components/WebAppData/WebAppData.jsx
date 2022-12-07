import React from 'react'
import { useTelegram } from '../../hooks/useTelegram'

export default function WebAppData() {
  const {tg} = useTelegram();

  return (
    <div>
        <p><span>hash:</span> {tg.initDataUnsafe?.hash}</p>
    </div>
  )
}
