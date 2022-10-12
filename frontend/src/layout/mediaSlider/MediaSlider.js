import { useEffect, useState } from "react";
import Loading from "../../utils/loading/Loading";
import "./mediaSlider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import {
  listMedia,
  createBookmark,
  getBookmarksWithoutMediaData,
} from "../../utils/api.js";
import { useAuth } from "../../contexts/AuthContext";

export default function MediaSlider({ title, genre }) {
  const [medias, setMedias] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const abortController = new AbortController();
    setMedias([]);
    setBookmarks([]);

    async function loadMedia() {
      const [mediaData, bookmarksData] = await Promise.all([
        listMedia(
          abortController.signal,
          "movie",
          genre,
          "imDb_rating",
          "desc",
          7
        ),
        getBookmarksWithoutMediaData({
          userId: currentUser.uid,
          signal: abortController.signal,
        }),
      ]);
      setMedias(mediaData.data);
      setBookmarks(bookmarksData.data);
    }
    loadMedia();

    return () => abortController.abort();
  }, [genre, currentUser]);

  const handleClick = async (media, userId) => {
    const abortController = new AbortController();
    try {
      await createBookmark({
        user_id: userId,
        media_id: media.media_id,
        signal: abortController.signal,
      });

      const bookmarksData = await getBookmarksWithoutMediaData({
        userId: currentUser.uid,
        signal: abortController.signal,
      });
      setBookmarks(bookmarksData.data);
    } catch (e) {
      console.error(e.message);
    }

    return () => abortController.abort();
  };

  return (
    <div className="media-slider__wrapper">
      {medias.length === 0 ? (
        <Loading />
      ) : (
        <>
          <div className="media-slider__head">
            <h2 className="media-slider__title">{title}</h2>
            <div>
              <a className="media-slider__view-all" href={`/genre/${genre}`}>
                View All
              </a>
            </div>
          </div>
          <div className="media-slider__cards--wrapper">
            {medias?.map((media, i) => {
              return (
                <div className="testing">
                  <FontAwesomeIcon
                    className={`media-slider__bookmark--icon ${
                      bookmarks.some(
                        (bookmark) => bookmark.media_id === media.media_id
                      ) && "added"
                    }`}
                    icon={faBookBookmark}
                    onClick={() => handleClick(media, currentUser?.uid)}
                  />
                  <a
                    href={`/media/${media.media_id}`}
                    className="media-slider__card"
                    key={i}
                  >
                    <img
                      src={media.image}
                      className="media-slider__image"
                      style={{ width: "300px", height: "400px" }}
                      alt={media.title}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
