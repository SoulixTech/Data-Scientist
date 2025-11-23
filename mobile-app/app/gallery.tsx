import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useState } from 'react';

const { width } = Dimensions.get('window');
const imageSize = (width - 60) / 3;

export default function GalleryScreen() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Events', 'Meetups', 'Achievements', 'Fun'];
  
  const photos = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
    likes: Math.floor(Math.random() * 50) + 5,
  }));

  const filteredPhotos = filter === 'All' ? photos : photos.filter(p => p.category === filter);

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0F172A', '#1E293B', '#0F172A']} style={StyleSheet.absoluteFillObject} />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Gallery</Text>
            <Text style={styles.headerSubtitle}>Our precious moments</Text>
          </View>
          <TouchableOpacity style={styles.uploadButton}>
            <LinearGradient colors={['#8B5CF6', '#EC4899']} style={styles.uploadGradient}>
              <Ionicons name="camera" size={24} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
          {categories.map((cat) => (
            <TouchableOpacity key={cat} onPress={() => setFilter(cat)}>
              <LinearGradient
                colors={filter === cat ? ['#8B5CF6', '#EC4899'] : ['rgba(255,255,255,0.05)', 'rgba(255,255,255,0.05)']}
                style={styles.filterChip}
              >
                <Text style={[styles.filterText, filter === cat && styles.filterTextActive]}>{cat}</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.statsRow}>
          <BlurView intensity={20} style={styles.statCard}>
            <Ionicons name="images" size={32} color="#8B5CF6" />
            <Text style={styles.statValue}>{photos.length}</Text>
            <Text style={styles.statLabel}>Photos</Text>
          </BlurView>
          <BlurView intensity={20} style={styles.statCard}>
            <Ionicons name="heart" size={32} color="#EC4899" />
            <Text style={styles.statValue}>{photos.reduce((sum, p) => sum + p.likes, 0)}</Text>
            <Text style={styles.statLabel}>Likes</Text>
          </BlurView>
          <BlurView intensity={20} style={styles.statCard}>
            <Ionicons name="calendar" size={32} color="#06B6D4" />
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Months</Text>
          </BlurView>
        </View>

        <View style={styles.grid}>
          {filteredPhotos.map((photo) => (
            <TouchableOpacity key={photo.id} style={styles.photoCard}>
              <LinearGradient
                colors={['#8B5CF6', '#EC4899', '#06B6D4']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.photoGradient}
              >
                <View style={styles.photoPlaceholder}>
                  <Ionicons name="image" size={40} color="rgba(255,255,255,0.3)" />
                </View>
              </LinearGradient>
              <View style={styles.photoOverlay}>
                <View style={styles.photoCategory}>
                  <Text style={styles.photoCategoryText}>{photo.category}</Text>
                </View>
                <View style={styles.photoLikes}>
                  <Ionicons name="heart" size={14} color="#EC4899" />
                  <Text style={styles.photoLikesText}>{photo.likes}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollView: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, paddingTop: 60 },
  headerTitle: { fontSize: 32, fontWeight: 'bold', color: '#fff' },
  headerSubtitle: { fontSize: 14, color: '#9CA3AF', marginTop: 4 },
  uploadButton: { width: 56, height: 56, borderRadius: 28 },
  uploadGradient: { flex: 1, borderRadius: 28, justifyContent: 'center', alignItems: 'center' },
  filterScroll: { paddingLeft: 20, marginBottom: 20 },
  filterChip: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20, marginRight: 12 },
  filterText: { fontSize: 14, color: '#9CA3AF', fontWeight: '600' },
  filterTextActive: { color: '#fff' },
  statsRow: { flexDirection: 'row', paddingHorizontal: 20, gap: 12, marginBottom: 24 },
  statCard: { flex: 1, borderRadius: 16, padding: 16, backgroundColor: 'rgba(255,255,255,0.05)', alignItems: 'center', overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  statValue: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginTop: 8 },
  statLabel: { fontSize: 12, color: '#9CA3AF', marginTop: 4 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20, gap: 8, paddingBottom: 40 },
  photoCard: { width: imageSize, height: imageSize, borderRadius: 12, overflow: 'hidden' },
  photoGradient: { flex: 1 },
  photoPlaceholder: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  photoOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, padding: 8, justifyContent: 'space-between' },
  photoCategory: { backgroundColor: 'rgba(0,0,0,0.5)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, alignSelf: 'flex-start' },
  photoCategoryText: { fontSize: 10, color: '#fff', fontWeight: '600' },
  photoLikes: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, alignSelf: 'flex-end', gap: 4 },
  photoLikesText: { fontSize: 12, color: '#fff', fontWeight: '600' },
});
