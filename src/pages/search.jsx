import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import axios from "axios";
import { SEARCH_GIGS_ROUTE } from '../utils/constants';
import SearchGridItem from '../components/search/SearchGridItem';

const Search = () => {
    const router = useRouter();
    const { category, q } = router.query;
    const [gigs, setGigs] = useState(undefined);
    useEffect(() => {
      // console.log(category)
      const selectedCategory = category || q;
      const getData = async () => {
        try {
          const {
            data: { gigs },
          } = await axios.get(
            `${SEARCH_GIGS_ROUTE}?searchTerm=${q}&category=${selectedCategory}`
          );
          setGigs(gigs);
        } catch (err) {
          console.error(err);
        //   console.log("xcvbnmk,l;")
        }
      };
      if (category || q) getData();
    }, [category, q]);
    return (
      <>
        {gigs && (
          <div className="mx-24 mb-24">
            {q && (
              <h3 className="text-4xl mb-10">
                Results for <strong>{q}</strong>
              </h3>
            )}
            <div className="flex gap-4">
              <button className="py-3 px-5 border border-gray-400 rounded-lg font-medium">
                Category
              </button>
              <button className="py-3 px-5 border border-gray-400 rounded-lg font-medium">
                Budget
              </button>
              <button className="py-3 px-5 border border-gray-400 rounded-lg font-medium">
                Delivery Time
              </button>
            </div>
            <div>
              <div className="my-4">
                <span className="text-[#74767e] font-medium ">
                  {gigs.length} services available
                </span>
              </div>
              <div className="grid grid-cols-4">
                {gigs.map((gig) => (
                  <SearchGridItem gig={gig} key={gig.id} />
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    );
}

export default Search
