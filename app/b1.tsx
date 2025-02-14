
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const B1 = () => {
  return (
    <View style={styles.container}>
      {/* Tiêu đề bài 1 */}
      <Text style={styles.title}>React Native là SDK được sử dụng để xây dựng ứng dụng di động (framework) 
        trên cả iOS và Android, ngôn ngữ lập trình chính là JavaScript. 
        Sử dụng React Native, bạn có thể viết code bằng JavaScript (cụ thể là React) 
        để phát triển ứng dụng cho cả hai nền tảng iOS và Android.</Text>
      
      {/* Nội dung text nhiều dòng, dùng font tuỳ chỉnh */}
      <Text style={styles.content}>
        Việc thêm font chữ tuỳ chỉnh giúp ứng dụng trở nên sinh động, đẹp mắt 
        và phù hợp hơn với thương hiệu hoặc ý tưởng thiết kế của bạn. Hãy tải font, 
        link font và áp dụng fontFamily vào các thành phần Text của React Native 
        để có trải nghiệm giao diện tốt hơn.
      </Text>
    </View>
  );
};

export default B1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',   
    paddingHorizontal: 16,     
    paddingTop: 40,            
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    fontFamily: 'Poppins-Regular', 
    color: '#000',
    textAlign: 'left',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins-Regular', 
    color: '#000',
    textAlign: 'justify',          
  },
});
