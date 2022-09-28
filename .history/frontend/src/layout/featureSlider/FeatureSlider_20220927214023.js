import React, { useState, useEffect } from "react";
import "./featureSlider.css";
import Loading from "../../utils/loading/Loading";
import { listRandomMedia } from "../../utils/api";

export default function FeatureSlider() {
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    async function loadRandomMedia() {
      try {
        const response = await listRandomMedia(abortController.signal, 12);
        setMedias(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    loadRandomMedia();
    return () => abortController.abort();
  }, []);

  return (
    <div className="media-slider__wrapper">
      {medias.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <div className="media-slider__head">
            <h2 className="media-slider__title">{}</h2>
            <div>
              <a className="media-slider__view-all" href={`/genre/${genre}`}>
                View All
              </a>
            </div>
          </div>
          <div className="media-slider__cards--wrapper">
            {medias.map((media, i) => {
              return (
                <a
                  href={`/media/${media.media_id}`}
                  className="media-slider__card"
                  key={i}
                >
                  <img
                    src={media.image}
                    className="media-slider__image"
                    alt={media.title}
                  />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
