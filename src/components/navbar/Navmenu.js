
import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTab } from '@/app/contexts/TabContext'; // Assuming you have a TabContext for shared state

const Navmenu = () => {
  const [allCategory, setAllCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const { activeTab, setActiveTab } = useTab();
  const router = useRouter();

  // Fetch categories on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/apis/packages/package_category_with_city_tge`);
        const response = await data.json();
        setAllCategory(response?.data || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Update active tab based on URL or localStorage
  useEffect(() => {
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
      setActiveTab(savedTab);
    } else {
      const currentPath = router.asPath;
      const tab = Object.keys(tabUrls).find(tab => tabUrls[tab] === currentPath);
      setActiveTab(tab || 'Tour');
    }
  }, [router.asPath]);

  // URLs associated with each tab
  const tabUrls = {
    'Tour': '/',
    'Activities': '/activities',
    'Flight': '', // Placeholder URL
    'Railway': '' // Placeholder URL
  };

  // Handle tab clicks
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    localStorage.setItem('activeTab', tab); // Save active tab to localStorage
    router.push(tabUrls[tab]); // Navigate to tab URL
  };

  const viewAllTours = () => {
    router.push('/all_destination');
  };

  return (
    <div className={styles.nav_menu_main}>
      <div className={`${styles.places_images} desti_images-wrapper destination_nav_button`}>
        <button onClick={viewAllTours} className="view_all_tours_btn">
          <Image src="/Assets/Icons/places/explore.svg" width={100} height={100} alt="explore_all" />
          Explore All
        </button>

        {loading ? (
          <EmptyComponent />
        ) : (
          allCategory.length > 0 && (
            <div className="slider-container">
              <div className="slider">
                <div className="slider-content">
                  {allCategory.slice(0, 9).map((item, ind) => (
                    <Link key={ind} href={`/destination/${item?.city_id}`}>
                      <div className="desti-contect-wrapper">
                        <Image src={item?.icon || "/Assets/Icons/places/explore.svg"} width={100} height={100} alt={item?.name}
                          onError={(e) => e.target.src = '/Assets/Icons/places/explore.svg'} />
                        <p>{item?.name}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <div className={`${styles.menu_btn_section} act_tour_buttons`}>
        <Link
          href={'/'}
          className={activeTab === 'Tour' ? `${styles.active}` : `${styles.inactive}`}
          onClick={() => handleTabClick('Tour')}
        >
          TOUR
        </Link>
        <Link
          href={'/activities'}
          className={activeTab === 'Activities' ? `${styles.active}` : `${styles.inactive}`}
          onClick={() => handleTabClick('Activities')}
        >
          ACTIVITIES
        </Link>
        {/* Add additional tabs as needed */}
      </div>
    </div>
  );
};

function EmptyComponent() {
  return (
    <div className="slider-container emptycontainer">
      <div className="slider">
        <div className="slider-content">
          {Array(9).fill().map((_, index) => (
            <Link href={'/'} key={index}>
              <div className="desti-contect-wrapper">
                <Image src="/Assets/Icons/places/explore.svg" width={100} height={100} alt="Loading..." />
                <p>loading...</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navmenu;
