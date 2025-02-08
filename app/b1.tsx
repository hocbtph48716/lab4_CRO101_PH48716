import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  TextInput,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const initialContacts = [
  {
    name: 'Tô A',
    email: 'a@gmail.com',
    position: 'Developer',
    photo:
      'https://photo.znews.vn/w660/Uploaded/ofh_huqfztmf/2019_08_07/rooney124.jpg',
  },
  {
    name: 'Tô B',
    email: 'b@gmail.com',
    position: 'Developer',
    photo:
      'https://cdn.baoquocte.vn/stores/news_dataimages/quangdao/112018/16/10/102513_46301017_2269741719767131_5997151891551682560_n.jpg',
  },
  {
    name: 'Tô C',
    email: 'c@gmail.com',
    position: 'BM',
    photo:
      'https://photo.znews.vn/w660/Uploaded/ofh_huqfztmf/2019_08_07/rooney124.jpg',
  },
  {
    name: 'Tô D',
    email: 'd@gmail.com',
    position: 'PO',
    photo:
      'https://cdn.baoquocte.vn/stores/news_dataimages/quangdao/112018/16/10/102513_46301017_2269741719767131_5997151891551682560_n.jpg',
  },
  {
    name: 'Tô E',
    email: 'e@gmail.com',
    position: 'Developer',
    photo:
      'https://photo.znews.vn/w660/Uploaded/ofh_huqfztmf/2019_08_07/rooney124.jpg',
  },
  {
    name: 'Tô F',
    email: 'f@gmail.com',
    position: 'Testter',
    photo:
      'https://cdn.baoquocte.vn/stores/news_dataimages/quangdao/112018/16/10/102513_46301017_2269741719767131_5997151891551682560_n.jpg',
  },
  {
    name: 'Tô G',
    email: 'g@gmail.com',
    position: 'BM',
    photo:
      'https://photo.znews.vn/w660/Uploaded/ofh_huqfztmf/2019_08_07/rooney124.jpg',
  },
  {
    name: 'Tô H',
    email: 'h@gmail.com',
    position: 'PO',
    photo:
      'https://cdn.baoquocte.vn/stores/news_dataimages/quangdao/112018/16/10/102513_46301017_2269741719767131_5997151891551682560_n.jpg',
  },
  {
    name: 'Tô I',
    email: '@gmail.com',
    position: 'Developer',
    photo:
      'https://photo.znews.vn/w660/Uploaded/ofh_huqfztmf/2019_08_07/rooney124.jpg',
  },
  {
    name: 'Tô K',
    email: 'k@gmail.com',
    position: 'Testter',
    photo:
      'https://cdn.baoquocte.vn/stores/news_dataimages/quangdao/112018/16/10/102513_46301017_2269741719767131_5997151891551682560_n.jpg',
  },
  {
    name: 'Tô L',
    email: 'l@gmail.com',
    position: 'BM',
    photo:
      'https://photo.znews.vn/w660/Uploaded/ofh_huqfztmf/2019_08_07/rooney124.jpg',
  },
  {
    name: 'Tô M',
    email: 'm@gmail.com',
    position: 'PO',
    photo:
      'https://cdn.baoquocte.vn/stores/news_dataimages/quangdao/112018/16/10/102513_46301017_2269741719767131_5997151891551682560_n.jpg',
  },
];

const ContactApp = () => {
  // lưu danh sách liên hệ
  const [contacts, setContacts] = useState(initialContacts);
  // hiển thị form thêm/sửa
  const [showForm, setShowForm] = useState(false);
  // biến đánh dấu xem đang ở chế độ sửa hay thêm mới
  const [isEditing, setIsEditing] = useState(false);
  // lưu dữ liệu form (name, email, position, photo)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    photo: '',
  });

  const [editingEmail, setEditingEmail] = useState<string | null>(null);

  const handleCall = (name: string) => {
    Alert.alert('Gọi', 'Call ' + name);
  };

  const handleAddPress = () => {
    setFormData({ name: '', email: '', position: '', photo: '' });
    setIsEditing(false);
    setEditingEmail(null);
    setShowForm(true);
  };

  const handleSave = () => {
    if (!formData.name || !formData.email) {
      Alert.alert('Lỗi', 'Tên và Email không được để trống!');
      return;
    }
    if (isEditing) {

      const updatedContacts = contacts.map((contact) =>
        contact.email === editingEmail ? formData : contact
      );
      setContacts(updatedContacts);
      Alert.alert('Thành công', 'Sửa liên hệ thành công!');
    } else {
      setContacts([...contacts, formData]);
      Alert.alert('Thành công', 'Thêm liên hệ thành công!');
    }
    setShowForm(false);
    setFormData({ name: '', email: '', position: '', photo: '' });
    setIsEditing(false);
    setEditingEmail(null);
  };

  const handleEdit = (contact: { name: string; email: string; position: string; photo: string }) => {
    Alert.alert(
      'Xác nhận',
      'Bạn có chắc chắn muốn sửa liên hệ này?',
      [
        { text: 'Hủy', style: 'cancel' },
        {
          text: 'Đồng ý',
          onPress: () => {
            setFormData(contact);
            setEditingEmail(contact.email); // Lưu email ban đầu để làm khóa cập nhật
            setIsEditing(true);
            setShowForm(true);
          },
        },
      ],
      { cancelable: true }
    );
  };


  const handleDelete = (contactEmail: string) => {
    Alert.alert(
      'Xác nhận',
      'Bạn có chắc chắn muốn xóa liên hệ này?',
      [
        { text: 'Hủy', style: 'cancel' },
        {
          text: 'Đồng ý',
          onPress: () => {
            setContacts(contacts.filter((contact) => contact.email !== contactEmail));
            Alert.alert('Thành công', 'Xóa liên hệ thành công!');
          },
        },
      ],
      { cancelable: true }
    );
  };

  const renderItem = ({ item }: { item: { name: string; email: string; position: string; photo: string } }) => (
    <View style={styles.listItem}>
      <Image
        source={{
          uri: item.photo || 'https://via.placeholder.com/50',
        }}
        style={styles.avatar}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.emailText}>{item.email}</Text>
        <Text style={styles.positionText}>{item.position}</Text>
      </View>
      <TouchableOpacity onPress={() => handleCall(item.name)} style={styles.iconButton}>
        <Icon name="phone" size={20} color="green" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleEdit(item)} style={styles.iconButton}>
        <Icon name="pencil" size={20} color="blue" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDelete(item.email)} style={styles.iconButton}>
        <Icon name="trash" size={20} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header với tiêu đề và icon thêm (dấu cộng) */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Danh Bạ</Text>
        <TouchableOpacity onPress={handleAddPress}>
          <Icon name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Danh sách liên hệ */}
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.email}
        renderItem={renderItem}
        style={{ flex: 1 }}
      />

      {/* Form thêm/sửa */}
      {showForm && (
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>
            {isEditing ? 'Chỉnh sửa liên hệ' : 'Thêm liên hệ'}
          </Text>
          <TextInput
            placeholder="Tên"
            value={formData.name}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            style={styles.input}
          />
          <TextInput
            placeholder="Vị trí"
            value={formData.position}
            onChangeText={(text) => setFormData({ ...formData, position: text })}
            style={styles.input}
          />
          <TextInput
            placeholder="Ảnh (URL)"
            value={formData.photo}
            onChangeText={(text) => setFormData({ ...formData, photo: text })}
            style={styles.input}
          />
          <Button
            title={isEditing ? 'Lưu chỉnh sửa' : 'Thêm liên hệ'}
            onPress={handleSave}
          />
          <View style={{ marginTop: 5 }}>
            <Button
              title="Hủy"
              onPress={() => {
                setShowForm(false);
                setFormData({ name: '', email: '', position: '', photo: '' });
                setIsEditing(false);
                setEditingEmail(null);
              }}
              color="gray"
            />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold' },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  infoContainer: { flex: 1, marginLeft: 10 },
  nameText: { fontSize: 16, fontWeight: 'bold' },
  emailText: { fontSize: 14, color: '#555' },
  positionText: { fontSize: 14, color: '#999' },
  iconButton: { marginHorizontal: 5 },
  formContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  formTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default ContactApp;
