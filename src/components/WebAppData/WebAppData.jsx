import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';;

export default function WebAppData() {
  const {tg} = useTelegram();

  const urlParams = new URLSearchParams(tg.initData);
  const params = Object.fromEntries(urlParams);

  return (
    <div>
        <p><strong>initData Undecoded: </strong>{tg.initData}</p>
        <br />
        <p><strong>initData: </strong>{JSON.stringify(params)}</p>
        <br />
        <p><strong>hash:</strong> {tg.initDataUnsafe?.hash}</p>
    </div>
  )
}
