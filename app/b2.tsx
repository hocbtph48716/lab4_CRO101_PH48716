import React, { useState } from 'react';
import {
  ScrollView,
  RefreshControl,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';

export default function bt2() {
  const [refreshing, setRefreshing] = useState(false);
  const [barStyle, setBarStyle] = useState<'light-content' | 'dark-content'>('light-content');

  const onRefresh = () => {
    setRefreshing(true);
    setBarStyle(prev => prev === 'light-content' ? 'dark-content' : 'light-content');
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const isIOS = Platform.OS === 'ios';
  const statusBarColor = barStyle === 'light-content' ? '#00BFFF' : '#FF69B4';

  return (
    <View style={{ flex: 1 }}>
      {isIOS ? (
        // Với iOS, sử dụng translucent status bar và tạo thêm một View làm nền màu cho StatusBar.
        <>
          <StatusBar barStyle={barStyle} backgroundColor="transparent" translucent={true} />
          <View style={{ height: 20, backgroundColor: statusBarColor }} />
        </>
      ) : (
        // Trên Android, vẫn dùng thuộc tính backgroundColor trực tiếp.
        <StatusBar barStyle={barStyle} backgroundColor={statusBarColor} translucent={false} />
      )}
      <ScrollView
        contentContainerStyle={styles.content}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text style={styles.text}>
          Kéo xuống để thay đổi màu StatusBar
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  text: {
    fontSize: 18
  },
});
