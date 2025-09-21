'use client';

import { useState } from "react";

import Header from "./ui/header";
import Intro from "./ui/intro";
import Tariffs from "./ui/tarrifs/tariffs";
import Footer from "./ui/footer";
import Dialog from "./ui/dialog/dialog";

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    if (!open) {
      setOpen(true);
    }
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <div>
      <Header openDialog={handleOpenDialog} />

      <main className="flex flex-col gap-[200px] max-sm:gap-[132px] max-sm:px-10 overflow-auto px-20 pb-[200px]">
        <Intro openDialog={handleOpenDialog} />

        <Tariffs openDialog={handleOpenDialog} />
      </main>

      <Footer openDialog={handleOpenDialog} />

      {open && <Dialog closeDialog={handleCloseDialog} />}
    </div>
  );
}
