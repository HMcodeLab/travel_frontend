"use client";
import Destinationcontent from "@/components/Destinationcontent/page";
import { Suspense } from "react";

const Destination = (props) => {
 
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Destinationcontent props={props.params } />
    </Suspense>
  );
};

export default Destination;
