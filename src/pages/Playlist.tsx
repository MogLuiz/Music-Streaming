// Packages
import { useState } from "react";

// Custom Hook
import useFetch from "../hooks/useFetch";

// Setvices
import { axiosOptions, tracksUrl } from "../service";

interface ITracks {
  uri: string;
  index: number;
  paused: boolean;
  id: number;
  percentage: number;
  played: boolean;
  currentTime: number;
  playing: boolean;
  artist: string;
  title: string;
  duration: number;
  permalink_url: string;
  favoritings_count: number;
  stream_url: string;
  artwork_url: string;
}

function Playlist() {
  // -------------------------------------------------
  // Custom Hook
  // -------------------------------------------------
  const { status, data, error } = useFetch(tracksUrl, axiosOptions);

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <div className="playlists">
      <div className="list">
        <ul className="track-list">
          {data?.map((track, index) => (
            <li key={`track-${index}`} className="row">
              <button className="btn" onClick={() => console.log(track)}>
                <div className="album">
                  <img
                    className="album__cover"
                    width={80}
                    height={80}
                    src={track.artwork_url}
                    alt={`Album artwork from track ${track.title}.`}
                  />
                </div>
                <div className="info">
                  <h2 className="info__track">{track.title}</h2>
                  <span className="info__artist">{track.artist}</span>
                </div>

                <div className="more">
                  <i className="fas fa-ellipsis-v" />
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Playlist;
