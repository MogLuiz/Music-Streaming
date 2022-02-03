// Hooks
import { useState } from "react";

// Custom Hook
import useFetch, { RequestStatus } from "../hooks/useFetch";

// Components
import { AudioPlayerProvider } from "react-use-audio-player";
import Player from "../components/Player";

// Services
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
  // States
  // -------------------------------------------------
  const [track, setTrack] = useState<ITracks>();

  // -------------------------------------------------
  // Custom Hook
  // -------------------------------------------------
  const { status, data, error } = useFetch<ITracks[]>(tracksUrl, axiosOptions);

  if (status === RequestStatus.fetching) return <h1>loading...</h1>;

  if (error) return <h1>{error}</h1>;

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <div className="playlists">
      <div className="list">
        <ul className="track-list">
          {data?.map((track: ITracks, index: number) => (
            <li key={`track-${index}`} className="row">
              <button className="btn" onClick={() => setTrack(track)}>
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
      <AudioPlayerProvider>
        <Player
          title={track?.title}
          file={track?.stream_url}
          artWork={track?.artwork_url}
        />
      </AudioPlayerProvider>
    </div>
  );
}

export default Playlist;
