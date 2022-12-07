import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';;

export default function WebAppData() {
  const {tg} = useTelegram();

  const data = Object.fromEntries(new URLSearchParams(tg.initData));

  const checkString = Object.keys(data)
        .filter((key) => key !== "hash")
        .map((key) => `${key}=${data[key]}`)
        .sort()
        .join("\n")

  return (
    <div>
        <p><strong>initData Undecoded: </strong>{tg.initData}</p>
        <br />
        <p><strong>initData: </strong>{checkString}</p>
        <br />
        <p><strong>hash:</strong> {tg.initDataUnsafe?.hash}</p>
    </div>
  )
}
