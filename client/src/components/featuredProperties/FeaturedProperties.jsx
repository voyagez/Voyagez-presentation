import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        // <>
        //   {data.map((item) => (
        //     <div className="fpItem" key={item._id}>
        //       <img
        //         src={item.photos[0]}
        //         alt=""
        //         className="fpImg"
        //       />
        //       <span className="fpName">{item.name}</span>
        //       <span className="fpCity">{item.city}</span>
        //       <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
        //       {item.rating && <div className="fpRating">
        //         <button>{item.rating}</button>
        //         <span>Excellent</span>
        //       </div>}
        //     </div>
        //   ))}
        // </>
        <>
          <div className="fpItem" key="1">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.iceportal.com%2F31710%2Fphotos%2F60138964_XXL.jpg&f=1&nofb=1&ipt=19833546f8918de7c77a9cd37b45346fe48bbd662e1305ede98f96f4bf70179d&ipo=images"
              alt="The New Yorker, A Wyndham Hotel"
              className="fpImg"
            />
            <span className="fpName">The New Yorker, A Wyndham Hotel</span>
            <span className="fpCity">Manhattan, New York</span>
            <span className="fpPrice">Starting from $169</span>
            <div className="fpRating">
              <button>7.7</button>
              <span>Good</span>
            </div>
          </div>
          <div className="fpItem" key="2">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia-cdn.holidaycheck.com%2Fw_1280%2Ch_720%2Cc_fill%2Cq_80%2Fugc%2Fimages%2Ffa4a3ed6-a798-3ebc-ac6c-66f4f457da6f&f=1&nofb=1&ipt=19ca62c1fbcb7290a55b6ca03096861b6c8028309e86b80d05eda059b7e0971f&ipo=images"
              alt="Holiday Inn Paris Gare de l'Est, an IHG Hotel"
              className="fpImg"
            />
            <span className="fpName">
              Holiday Inn Paris Gare de l'Est, an IHG Hotel
            </span>
            <span className="fpCity">Paris, France</span>
            <span className="fpPrice">Starting from $129</span>
            <div className="fpRating">
              <button>7.7</button>
              <span>Good</span>
            </div>
          </div>
          <div className="fpItem" key="3">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bigvenuebook.com%2Fvenue-images%2Fmain_image1378.jpg&f=1&nofb=1&ipt=05de03c890037c5714e81ef38514b34cf37413e14e876cea66bab88232898e49&ipo=images"
              alt="Millennium Gloucester Hotel London"
              className="fpImg"
            />
            <span className="fpName">Millennium Gloucester Hotel London</span>
            <span className="fpCity">Kensington, London</span>
            <span className="fpPrice">Starting from $132</span>
            <div className="fpRating">
              <button>7.3</button>
              <span>Good</span>
            </div>
          </div>
          <div className="fpItem" key="4">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hotelquirinale.it%2Fdata%2F2560%2FHotel-Quirinale-Roma-ingresso.jpg&f=1&nofb=1&ipt=4cc20a00cc39a327b68481f74f8aa25df9faf570f9e8262674a67323560e1088&ipo=images"
              className="fpImg"
            />
            <span className="fpName">Hotel Quirinale</span>
            <span className="fpCity">Repubblica, Rome</span>
            <span className="fpPrice">Starting from $183</span>
            <div className="fpRating">
              <button>8</button>
              <span>Very Good</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
