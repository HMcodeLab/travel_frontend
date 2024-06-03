import Destinationcontent from "@/components/Destinationcontent/page";
import { Suspense } from "react";

const Destination = () => {
    const scrollToComponentB = () => {
      componentBRef.current.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Destinationcontent scrollToComponentB={scrollToComponentB} />
      </Suspense>
    );
  };
  
  export default Destination;
  