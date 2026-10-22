import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp}°F`);
  }
  let apiKey = "36399t92b73b5o4fa0b8a2cb798d68aa";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <Audio
      height="80"
      width="80"
      color="cyan"
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass="wrapper-class"
      visible={true}
    />
  );
}
