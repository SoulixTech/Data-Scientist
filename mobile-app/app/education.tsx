import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useState } from 'react';

const { width } = Dimensions.get('window');

export default function EducationScreen() {
  const [activeTab, setActiveTab] = useState('Courses');
  const tabs = ['Courses', 'Notes', 'Resources'];

  const courses = [
    { id: 1, title: 'Machine Learning Basics', progress: 75, lessons: 24, duration: '8 hours', level: 'Intermediate', icon: 'laptop', gradient: ['#8B5CF6', '#EC4899'] },
    { id: 2, title: 'Data Structures & Algorithms', progress: 60, lessons: 30, duration: '12 hours', level: 'Advanced', icon: 'code-slash', gradient: ['#06B6D4', '#3B82F6'] },
    { id: 3, title: 'Web Development Bootcamp', progress: 90, lessons: 40, duration: '20 hours', level: 'Beginner', icon: 'globe', gradient: ['#10B981', '#14B8A6'] },
    { id: 4, title: 'Python for Data Science', progress: 45, lessons: 28, duration: '10 hours', level: 'Intermediate', icon: 'analytics', gradient: ['#F59E0B', '#F97316'] },
  ];

  const notes = [
    { id: 1, title: 'Linear Regression Notes', subject: 'ML', pages: 12, date: '2024-11-20', color: '#8B5CF6' },
    { id: 2, title: 'React Hooks Cheatsheet', subject: 'Web Dev', pages: 8, date: '2024-11-18', color: '#06B6D4' },
    { id: 3, title: 'SQL Query Optimization', subject: 'Database', pages: 15, date: '2024-11-15', color: '#10B981' },
    { id: 4, title: 'Algorithm Complexity', subject: 'DSA', pages: 10, date: '2024-11-12', color: '#F59E0B' },
  ];

  const resources = [
    { id: 1, title: 'Python Cheat Sheet', type: 'PDF', size: '2.5 MB', downloads: 45, icon: 'document-text', color: '#8B5CF6' },
    { id: 2, title: 'ML Interview Questions', type: 'PDF', size: '1.8 MB', downloads: 67, icon: 'help-circle', color: '#EC4899' },
    { id: 3, title: 'Git Commands Guide', type: 'PDF', size: '800 KB', downloads: 89, icon: 'git-branch', color: '#06B6D4' },
    { id: 4, title: 'CSS Flexbox Tutorial', type: 'Video', size: '45 MB', downloads: 34, icon: 'play-circle', color: '#10B981' },
  ];

  const stats = [
    { label: 'Courses', value: '12+', icon: 'book', color: '#8B5CF6' },
    { label: 'Notes', value: '45+', icon: 'document', color: '#06B6D4' },
    { label: 'Resources', value: '120+', icon: 'folder', color: '#10B981' },
    { label: 'Hours', value: '240+', icon: 'time', color: '#F59E0B' },
  ];

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0F172A', '#1E293B', '#0F172A']} style={StyleSheet.absoluteFillObject} />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Education Hub</Text>
            <Text style={styles.headerSubtitle}>Learn & grow together</Text>
          </View>
          <TouchableOpacity style={styles.searchButton}>
            <LinearGradient colors={['#8B5CF6', '#EC4899']} style={styles.searchGradient}>
              <Ionicons name="search" size={24} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.statsScroll}>
          {stats.map((stat, index) => (
            <BlurView key={index} intensity={20} style={styles.statCard}>
              <Ionicons name={stat.icon as any} size={28} color={stat.color} />
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </BlurView>
          ))}
        </ScrollView>

        <View style={styles.tabsContainer}>
          {tabs.map((tab) => (
            <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} style={styles.tab}>
              <LinearGradient
                colors={activeTab === tab ? ['#8B5CF6', '#EC4899'] : ['transparent', 'transparent']}
                style={styles.tabGradient}
              >
                <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>

        {activeTab === 'Courses' && (
          <View style={styles.contentSection}>
            {courses.map((course) => (
              <TouchableOpacity key={course.id} style={styles.courseCard}>
                <LinearGradient
                  colors={[...course.gradient, `${course.gradient[0]}50`]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.courseGradient}
                >
                  <View style={styles.courseHeader}>
                    <View style={styles.courseIcon}>
                      <Ionicons name={course.icon as any} size={28} color="#fff" />
                    </View>
                    <View style={styles.levelBadge}>
                      <Text style={styles.levelText}>{course.level}</Text>
                    </View>
                  </View>
                  
                  <Text style={styles.courseTitle}>{course.title}</Text>
                  
                  <View style={styles.courseStats}>
                    <View style={styles.courseStat}>
                      <Ionicons name="play-circle" size={14} color="rgba(255,255,255,0.8)" />
                      <Text style={styles.courseStatText}>{course.lessons} lessons</Text>
                    </View>
                    <View style={styles.courseStat}>
                      <Ionicons name="time" size={14} color="rgba(255,255,255,0.8)" />
                      <Text style={styles.courseStatText}>{course.duration}</Text>
                    </View>
                  </View>

                  <View style={styles.progressContainer}>
                    <View style={styles.progressBar}>
                      <View style={[styles.progressFill, { width: `${course.progress}%` }]} />
                    </View>
                    <Text style={styles.progressText}>{course.progress}%</Text>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {activeTab === 'Notes' && (
          <View style={styles.contentSection}>
            {notes.map((note) => (
              <TouchableOpacity key={note.id} style={styles.noteCard}>
                <View style={[styles.noteColorBar, { backgroundColor: note.color }]} />
                <View style={styles.noteContent}>
                  <View style={styles.noteHeader}>
                    <Ionicons name="document-text" size={24} color={note.color} />
                    <View style={styles.subjectBadge}>
                      <Text style={styles.subjectText}>{note.subject}</Text>
                    </View>
                  </View>
                  <Text style={styles.noteTitle}>{note.title}</Text>
                  <View style={styles.noteFooter}>
                    <Text style={styles.notePages}>{note.pages} pages</Text>
                    <Text style={styles.noteDate}>{new Date(note.date).toLocaleDateString()}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {activeTab === 'Resources' && (
          <View style={styles.contentSection}>
            {resources.map((resource) => (
              <TouchableOpacity key={resource.id} style={styles.resourceCard}>
                <View style={[styles.resourceIcon, { backgroundColor: `${resource.color}20` }]}>
                  <Ionicons name={resource.icon as any} size={28} color={resource.color} />
                </View>
                <View style={styles.resourceContent}>
                  <Text style={styles.resourceTitle}>{resource.title}</Text>
                  <View style={styles.resourceMeta}>
                    <Text style={styles.resourceType}>{resource.type}</Text>
                    <Text style={styles.resourceSize}>{resource.size}</Text>
                  </View>
                  <View style={styles.resourceFooter}>
                    <View style={styles.downloadBadge}>
                      <Ionicons name="download" size={14} color="#06B6D4" />
                      <Text style={styles.downloadText}>{resource.downloads} downloads</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={[styles.downloadButton, { backgroundColor: `${resource.color}30` }]}>
                  <Ionicons name="download-outline" size={20} color={resource.color} />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        )}
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
  searchButton: { width: 56, height: 56, borderRadius: 28 },
  searchGradient: { flex: 1, borderRadius: 28, justifyContent: 'center', alignItems: 'center' },
  statsScroll: { paddingLeft: 20, marginBottom: 24 },
  statCard: { width: 100, borderRadius: 16, padding: 16, backgroundColor: 'rgba(255,255,255,0.05)', alignItems: 'center', marginRight: 12, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  statValue: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginTop: 8 },
  statLabel: { fontSize: 11, color: '#9CA3AF', marginTop: 4 },
  tabsContainer: { flexDirection: 'row', paddingHorizontal: 20, gap: 12, marginBottom: 24 },
  tab: { flex: 1 },
  tabGradient: { paddingVertical: 12, borderRadius: 12, alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.05)' },
  tabText: { fontSize: 14, color: '#9CA3AF', fontWeight: '600' },
  tabTextActive: { color: '#fff' },
  contentSection: { paddingHorizontal: 20, paddingBottom: 40 },
  courseCard: { marginBottom: 16, borderRadius: 20, overflow: 'hidden' },
  courseGradient: { padding: 20 },
  courseHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  courseIcon: { width: 56, height: 56, borderRadius: 28, backgroundColor: 'rgba(255,255,255,0.2)', justifyContent: 'center', alignItems: 'center' },
  levelBadge: { backgroundColor: 'rgba(0,0,0,0.3)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  levelText: { fontSize: 12, color: '#fff', fontWeight: '600' },
  courseTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 12 },
  courseStats: { flexDirection: 'row', gap: 16, marginBottom: 16 },
  courseStat: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  courseStatText: { fontSize: 13, color: 'rgba(255,255,255,0.8)' },
  progressContainer: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  progressBar: { flex: 1, height: 6, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 3, overflow: 'hidden' },
  progressFill: { height: '100%', backgroundColor: '#fff', borderRadius: 3 },
  progressText: { fontSize: 14, fontWeight: 'bold', color: '#fff' },
  noteCard: { flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 16, marginBottom: 12, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  noteColorBar: { width: 4 },
  noteContent: { flex: 1, padding: 16 },
  noteHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  subjectBadge: { backgroundColor: 'rgba(255,255,255,0.1)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  subjectText: { fontSize: 11, color: '#9CA3AF', fontWeight: '600' },
  noteTitle: { fontSize: 16, fontWeight: 'bold', color: '#fff', marginBottom: 8 },
  noteFooter: { flexDirection: 'row', justifyContent: 'space-between' },
  notePages: { fontSize: 12, color: '#9CA3AF' },
  noteDate: { fontSize: 12, color: '#9CA3AF' },
  resourceCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 16, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  resourceIcon: { width: 56, height: 56, borderRadius: 28, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  resourceContent: { flex: 1 },
  resourceTitle: { fontSize: 16, fontWeight: 'bold', color: '#fff', marginBottom: 4 },
  resourceMeta: { flexDirection: 'row', gap: 12, marginBottom: 8 },
  resourceType: { fontSize: 12, color: '#9CA3AF' },
  resourceSize: { fontSize: 12, color: '#9CA3AF' },
  resourceFooter: { flexDirection: 'row', alignItems: 'center' },
  downloadBadge: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  downloadText: { fontSize: 12, color: '#06B6D4', fontWeight: '600' },
  downloadButton: { width: 44, height: 44, borderRadius: 22, justifyContent: 'center', alignItems: 'center' },
});
