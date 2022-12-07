import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';;

export default function WebAppData() {
  const {tg} = useTelegram();

  const urlParams = new URLSearchParams(tg.initData);
  const params = Object.fromEntries(urlParams);

  const paramKeysSorted = Object.keys(not_sorted).sort()
    .reduce((acc, key) => ({
        ...acc, [key]: not_sorted[key]
    }), {});

  let initDataString = "";
  paramKeysSorted.forEach(key => {
    initDataString += `${key}=${params.key}\n`;
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
