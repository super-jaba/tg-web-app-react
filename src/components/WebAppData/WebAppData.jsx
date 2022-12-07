import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';;

export default function WebAppData() {
  const {tg} = useTelegram();

  const urlParams = new URLSearchParams(tg.initData);
  const params = Object.fromEntries(urlParams);

  const paramKeysSorted = Object.keys(params).sort()
    .reduce((acc, key) => ({
        ...acc, [key]: params[key]
    }), {});

  let initDataString = "";
  paramKeysSorted.forEach((key, value) => {
    initDataString += `${key}=${value}\n`;
  })

  return (
    <div>
        <p><strong>initData Undecoded: </strong>{tg.initData}</p>
        <br />
        <p><strong>initData: </strong>{initDataString}</p>
        <br />
        <p><strong>hash:</strong> {tg.initDataUnsafe?.hash}</p>
    </div>
  )
}
