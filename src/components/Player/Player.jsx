import React from "react";

function Player({ playlist }) {
  return (
    <>
      <iframe
        title="deezer-widget"
        src={`https://widget.deezer.com/widget/dark/playlist/${playlist}?tracklist=false`}
        width="100%"
        height="300"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media; clipboard-write"
      />
    </>
  );
}

export default Player;
