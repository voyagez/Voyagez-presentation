import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fviajes.nationalgeographic.com.es%2Fmedio%2F2017%2F02%2F09%2Fshutterstock-302415089_6b607cdb.jpg&f=1&nofb=1&ipt=e53facb72d45fdb0a1a25ac823d1879df1cbb6443ecfb8576047dfba805ac7a3&ipo=images"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>Germany</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h2>Spain</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F2d%2F46%2Fd0%2F2d46d0c47d7bff70224259f3eaf798a5.jpg&f=1&nofb=1&ipt=78ef149662045769d54c958d1a423265eceabe7f450493bc86ea4e776ae2f2c2&ipo=images"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>England</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ffb%2Fc3%2F76%2Ffbc3765a4dce97ff3f91d87074985752.jpg&f=1&nofb=1&ipt=6e7d60463209e8082528eac98632e08c1b0819f12bc6ec502fc4618bb579b017&ipo=images"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>New York</h1>
              <h2>United States</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp3261717.jpg&f=1&nofb=1&ipt=70855e939560ed746402d32d47788afc1473ccbb5904102bbfa88cf948addd6f&ipo=images"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Paris</h1>
              <h2>France</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.princessjourney.co.uk%2Fheroes%2F_social%2FRome-Local-Hero.jpg&f=1&nofb=1&ipt=fe72e3c1f9077ae03f2bc92053ec3115f3c6abb4f6a389e82abe22ea8050f800&ipo=images"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Rome</h1>
              <h2>Italy</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
