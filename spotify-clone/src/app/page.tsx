"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <InputGroup className="mb-3 w-screentext-center">
        <FormControl
          className="text-black px-5 py-5 rounded-md"
          placeholder="Search For Artists..."
          type="input"
          onKeyDown={(event) => {
            if (event.key == "Enter") {
              console.log("Enter");
            }
          }}
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button
          className="px-3 bg-slate-600"
          onClick={(event) => {
            console.log("Button Clicked");
          }}
        >
          <i className="bi bi-search"></i>
        </button>
      </InputGroup>


    </main>
  );
}
