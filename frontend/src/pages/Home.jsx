/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(`http://localhost:5000/email`, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <header className="App-header">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email", { required: true })} />

        <input type="submit" />
      </form>
    </header>
  );
}
