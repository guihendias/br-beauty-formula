import React, {useState, useRef} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  // ViroConstants,
  ViroARSceneNavigator,
  Viro360Video,
  ViroVRSceneNavigator,
} from '@viro-community/react-viro';
import {ViroScene} from '@viro-community/react-viro/dist/components/ViroScene';

const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    // if (state === ViroConstants.TRACKING_NORMAL) {
    // setText('Hello World!');
    // } else if (state === ViroConstants.TRACKING_NONE) {
    // Handle loss of tracking
    // }
  }

  const ref = useRef(null);

  const handleVideoFinished = () => {
    console.log('Video finished!');
  };

  const handleUpdateTime = (current, total) => {
    console.log('Video time update, current: ' + current + ', total: ' + total);
  };

  const handleVideoError = event => {
    console.log('Video loading failed with error: ' + event.nativeEvent.error);
  };

  const handleClickRestartVideo = () => {
    if (ref.current) ref.current.seekToTime(0);
  };

  return (
    <ViroScene style={{flex: 1}}>
      <Viro360Video
        ref={ref}
        paused={false}
        // style={{ flex: 1 }}
        source={{
          uri: 'https://storage.googleapis.com/gratitude-7526f.appspot.com/03._proximal%2C_medial_and_distal%20(2160p).mp4',
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

export default () => {
  return (
    <ViroVRSceneNavigator
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
