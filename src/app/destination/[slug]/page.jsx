"use client";
import { Suspense } from "react";
import DestinationContent from "../page";

const Destination = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DestinationContent />
    </Suspense>
  );
};

export default Destination;
