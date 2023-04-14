import React from "react";
const {
  Viro360Video,
  ViroScene,
  ViroText
} = require("@viro-community/react-viro");
const { useState, useRef } = require("react");

var VIDEO_REF = "videoref";

export const VideoTest = () => {
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const ref = useRef(null);

  const handleVideoFinished = () => {
    console.log("Video finished!");
  };

  const handleUpdateTime = (current, total) => {
    console.log("Video time update, current: " + current + ", total: " + total);
  };

  const handleVideoError = (event) => {
    console.log("Video loading failed with error: " + event.nativeEvent.error);
  };

  const handleClickRestartVideo = () => {
    if (ref.current) ref.current.seekToTime(0);
  };

  return (
    <ViroScene style={{ flex: 1 }}>
      <Viro360Video
        ref={ref}
        paused={false}
        // style={{ flex: 1 }}
        source={{
          uri: "https://s3-us-west-2.amazonaws.com/viro/MediaDemo360_1.mp4"
        }}
        // source={{ uri: "https://player.vimeo.com/video/207292223?h=f93ddecc0f"}}
        loop={true}
        muted={muted}
        volume={volume}
        onFinish={handleVideoFinished}
        onUpdateTime={handleUpdateTime}
        onError={handleVideoError}
      />
    </ViroScene>
  );
};
