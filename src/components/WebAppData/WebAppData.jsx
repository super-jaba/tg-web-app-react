import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';;

export default function WebAppData() {
  const {tg} = useTelegram();

  return (
    <div>
        <p><strong>initData: </strong>{decodeURI(tg.initData)}</p>
        <br />
        <p><strong>hash:</strong> {tg.initDataUnsafe?.hash}</p>
    </div>
  )
}
