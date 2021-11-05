import React, { useEffect, useState } from "react";

import Header from './Header';
import Menu from './Menu';
import speakerData from "../SpeakerData";
import SpeakerDetail from "./SpeakerDetails";

const Speakers = ({}) => {
    const [speakerList, setSpeakerList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [speakingSaturday, setSpeakingSaturday] = useState(true);
    const [speakingSunday, setSpeakingSunday] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        new Promise(function(resolve) {
            setTimeout(() => {
                resolve();
            }, 1000)
        }).then(() => {
        setIsLoading(false);
        });
        setSpeakerList(speakerData);
        return () => {
            console.log("clean up");
        }
    }, []);

    const handleChangeSaturday = () => {
        setSpeakingSaturday(!speakingSaturday);
    };

    const handleChangeSunday = () => {
        setSpeakingSunday(!speakingSunday);
    };

    const speakerListFiltered = isLoading ? [] :
    speakerList.filter(({sat, sun}) => (speakingSaturday && sat) || (speakingSunday && sun),).sort(function(a, b) {
        if (a.firstName < b.firstName) {
            return -1;
        }

        if (a.firstName > b.firstName) {
            return 1;
        }

        return 0;
    });

    const HeartFavouriteHandler = (e, favouriteValue) => {
        e.preventDefault();
        const sessionid = parseInt(e.target.attributes['data-sessionid'].value);
        setSpeakerList(speakerList.map((item) => {
            return item.id === sessionid ? {...item, favourite: favouriteValue} : item;
        }));
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
          <Header />
          <Menu />
          <div className="container">
            <div className="btn-toolbar margintopbottom5 chekbox-bigger">
              <div className="hide">
                <div className="form-check-inline">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      onChange={handleChangeSaturday}
                      checked={speakingSaturday}
                    />
                    Saturday Speakers
                  </label>
                </div>
                <div className="form-check-inline">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      onChange={handleChangeSunday}
                      checked={speakingSunday}
                    />
                    Sunday Speakers
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card-deck">
                {speakerListFiltered.map(
                  ({ id, firstName, lastName, bio, favorite }) => {
                    return (
                      <SpeakerDetail
                        key={id}
                        id={id}
                        favorite={favorite}
                        firstName={firstName}
                        lastName={lastName}
                        bio={bio}
                        onHeartFavouriteHandler={HeartFavouriteHandler}
                      />
                    );
                  },
                )}
              </div>
            </div>
          </div>
        </div>
      );
};

export default Speakers;