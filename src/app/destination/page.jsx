const { default: Allcards } = require("@/components/Allcards/page");
const { default: Destinationherosection } = require("@/components/destinationherosection/page");
const { default: Discount } = require("@/components/discount/page");
const { default: RequestCall } = require("@/components/requestcall/page");
const { default: Trending } = require("@/components/trending/page");
const { BASE_URL } = require("@/helpers/baseurl");
const { useSearchParams } = require("next/navigation");
const { useState, useRef, useEffect } = require("react");

const DestinationContent = ({ scrollToComponentB }) => {
  const [Alldata, setAlldata] = useState([]);
  const componentBRef = useRef(null);
  const search = useSearchParams();
  let city_id = search.get('cityid');

  useEffect(() => {
    async function Fetchdata() {
      try {
        const data = await fetch(BASE_URL + '/package_with_city', {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
          },
          body: JSON.stringify(city_id),
        });
        const response = await data.json();
        setAlldata(response?.data);
      } catch (error) {
        console.error(error);
      }
    }
    Fetchdata();
  }, [city_id]);

  return (
    <>
      <Destinationherosection scrollToComponentB={scrollToComponentB} />
      <div className='px-[var(--padding-inline)] flex flex-col gap-10'>
        <Allcards data={Alldata} ref={componentBRef} />
        <Discount />
        <Trending />
        <RequestCall />
      </div>
    </>
  );
};
