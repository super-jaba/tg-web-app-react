import React, { useCallback, useEffect, useState } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import "./Form.css";

export default function Form() {
  const {tg} = useTelegram();

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [subject, setSubject] = useState("physical");

  const onSendData = useCallback(() => {
    const data = {
      country,
      city,
      subject
    }
    tg.sendData(JSON.stringify(data));
  }, [tg, country, city, subject]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);
    return () => {
      tg.offEvent("mainButtonClicked", onSendData)
    }
  });

  useEffect(() => {
    tg.MainButton.setParams({text: "Send data"});
  }, [tg]);

  useEffect(() => {
    if (!country || !city) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, city, tg]);

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  }

  const onChangeCity = (e) => {
    setCity(e.target.value);
  }

  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  }

  return (
    <div className={"form"}>
      <h3>Input your data</h3>

      <input 
        className={"input"} 
        type="text" 
        placeholder={"Country"} 
        value={country}
        onChange={onChangeCountry}
      />
      <input 
        className={"input"} 
        type="text" 
        placeholder={"City"} 
        value={city}
        onChange={onChangeCity}
      />

      <select className={"select"} value={subject} onChange={onChangeSubject}>
        <option value={"physical"}>Physical</option>
        <option value={"legal"}>Legal</option>
      </select>
    </div>
  )
}
