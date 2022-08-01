import "./Layout.css";
import React from "react";
import { listMovies } from "../utils/api";

export default function Layout() {
  async function loadMovies() {
    const abortController = new AbortController();
    try {
      const data = await listMovies(abortController.signal);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
  loadMovies();

  return <div className="block">All the things.</div>;
}
