import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <View style={styles.container}>
      {/* StatusBar trong suốt */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      {/* Bọc toàn bộ nội dung bằng ImageBackground */}
      <ImageBackground
        source={require('../assets/images/banner13.jpg')} // hoặc link ảnh online
        style={styles.bgImage}
        resizeMode="cover"
      >
        {/* Header */}
        <View style={styles.header}>
          {/* Icon tim (heart) đặt position absolute để di chuyển tuỳ ý */}
          <Icon
            name="heart"
            size={30}
            color="red"
            style={styles.heartIcon}
          />
          <Text style={styles.headerText}>Khu du lịch ABC</Text>
        </View>

        {/* Body */}
        <View style={styles.body}>
          <Text style={styles.bodyTitle}>Giới thiệu</Text>
          <Text
            style={styles.bodyText}
            numberOfLines={6}        // Giới hạn 6 dòng
            ellipsizeMode="tail"    // Hiển thị "..." nếu vượt quá
          >
            Đây là phần giới thiệu về khu du lịch ABC. Khu du lịch này nằm ở vùng
            núi cao, có khí hậu mát mẻ quanh năm, cảnh sắc tuyệt đẹp, phù hợp để
            nghỉ dưỡng và tham quan. Bạn có thể tham gia nhiều hoạt động như leo
            núi, cắm trại, ngắm bình minh, thưởng thức đặc sản địa phương. Nội dung
            này nếu quá dài sẽ được cắt bớt và hiển thị dấu "..." theo yêu cầu.
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerPrice}>Giá: 1.500.000đ</Text>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>Đặt ngay</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

// Phần style
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    flex: 7,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  body: {
    flex: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 8,
  },
  bodyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins-Regular',
  },
  footer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffffaa',
    paddingHorizontal: 20,
  },
  footerPrice: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
  },
  footerButton: {
    backgroundColor: '#f44336',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
});
