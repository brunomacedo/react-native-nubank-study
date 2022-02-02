import React from 'react';
import {Animated, View} from 'react-native';
import ContentCard from '../../components/ContentCard';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Tabs from '../../components/Tabs';

import {
  PanGestureHandlerStateChangeEvent,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';

import ContentCardStyles from '../../components/ContentCard/styles';
import styles from '../../theme/styles';
import MainStyles from './styles';

const Main: React.FC = () => {
  /**
   * Don't be created as useState
   * because to improve performance
   */
  let offset = 0;
  const translateY = new Animated.Value(0);

  const onGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  const onHandlerStateChange = (event: PanGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {translationY} = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={MainStyles.content}>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={onGestureEvent}
          onHandlerStateChange={onHandlerStateChange}>
          <Animated.View
            style={{
              ...ContentCardStyles.card,
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 380],
                    outputRange: [-50, 0, 380],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <ContentCard />
          </Animated.View>
        </PanGestureHandler>
      </View>

      <Tabs translateY={translateY} />
    </View>
  );
};

export default Main;
