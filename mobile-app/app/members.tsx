import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

const { width } = Dimensions.get('window');

export default function MembersScreen() {
  const members = [
    { id: 1, name: 'John Doe', role: 'Team Lead', skills: ['Python', 'ML', 'Data Analysis'], projects: 15, rating: 4.9, status: 'active' },
    { id: 2, name: 'Jane Smith', role: 'Data Scientist', skills: ['R', 'Statistics', 'AI'], projects: 12, rating: 4.8, status: 'active' },
    { id: 3, name: 'Mike Johnson', role: 'Developer', skills: ['React', 'Node.js', 'APIs'], projects: 18, rating: 4.7, status: 'active' },
    { id: 4, name: 'Sarah Williams', role: 'Designer', skills: ['UI/UX', 'Figma', 'Branding'], projects: 10, rating: 4.9, status: 'active' },
    { id: 5, name: 'Alex Brown', role: 'Analyst', skills: ['SQL', 'Excel', 'Tableau'], projects: 8, rating: 4.6, status: 'away' },
    { id: 6, name: 'Emma Davis', role: 'Researcher', skills: ['Research', 'Papers', 'Surveys'], projects: 6, rating: 4.8, status: 'active' },
  ];

  const stats = [
    { label: 'Total Members', value: members.length, icon: 'people', color: '#06B6D4' },
    { label: 'Active Now', value: members.filter(m => m.status === 'active').length, icon: 'flash', color: '#10B981' },
    { label: 'Projects', value: members.reduce((sum, m) => sum + m.projects, 0), icon: 'briefcase', color: '#F59E0B' },
    { label: 'Avg Rating', value: '4.8', icon: 'star', color: '#FBBF24' },
  ];

  const gradients = [
    ['#8B5CF6', '#EC4899'],
    ['#06B6D4', '#3B82F6'],
    ['#10B981', '#14B8A6'],
    ['#F59E0B', '#F97316'],
    ['#EF4444', '#EC4899'],
    ['#8B5CF6', '#6366F1'],
  ];

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0F172A', '#1E293B', '#0F172A']} style={StyleSheet.absoluteFillObject} />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Team Members</Text>
            <Text style={styles.headerSubtitle}>Meet our amazing team</Text>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <LinearGradient colors={['#8B5CF6', '#EC4899']} style={styles.addGradient}>
              <Ionicons name="person-add" size={24} color="#fff" />
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

        <View style={styles.membersGrid}>
          {members.map((member, index) => (
            <TouchableOpacity key={member.id} style={styles.memberCard}>
              <LinearGradient
                colors={[...gradients[index % gradients.length], `${gradients[index % gradients.length][0]}80`]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.memberGradient}
              >
                <View style={styles.memberHeader}>
                  <View style={styles.avatarContainer}>
                    <LinearGradient colors={['#fff', '#f0f0f0']} style={styles.avatar}>
                      <Text style={styles.avatarText}>{member.name.split(' ').map(n => n[0]).join('')}</Text>
                    </LinearGradient>
                    <View style={[styles.statusDot, { backgroundColor: member.status === 'active' ? '#10B981' : '#F59E0B' }]} />
                  </View>
                  <View style={styles.ratingBadge}>
                    <Ionicons name="star" size={12} color="#FBBF24" />
                    <Text style={styles.ratingText}>{member.rating}</Text>
                  </View>
                </View>

                <Text style={styles.memberName}>{member.name}</Text>
                <Text style={styles.memberRole}>{member.role}</Text>

                <View style={styles.skillsContainer}>
                  {member.skills.slice(0, 2).map((skill, i) => (
                    <View key={i} style={styles.skillChip}>
                      <Text style={styles.skillText}>{skill}</Text>
                    </View>
                  ))}
                  {member.skills.length > 2 && (
                    <View style={styles.skillChip}>
                      <Text style={styles.skillText}>+{member.skills.length - 2}</Text>
                    </View>
                  )}
                </View>

                <View style={styles.memberFooter}>
                  <View style={styles.projectBadge}>
                    <Ionicons name="briefcase" size={14} color="rgba(255,255,255,0.8)" />
                    <Text style={styles.projectText}>{member.projects} projects</Text>
                  </View>
                  <TouchableOpacity style={styles.viewButton}>
                    <Ionicons name="arrow-forward" size={16} color="#fff" />
                  </TouchableOpacity>
                </View>
              </LinearGradient>
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
  addButton: { width: 56, height: 56, borderRadius: 28 },
  addGradient: { flex: 1, borderRadius: 28, justifyContent: 'center', alignItems: 'center' },
  statsScroll: { paddingLeft: 20, marginBottom: 24 },
  statCard: { width: 120, borderRadius: 16, padding: 16, backgroundColor: 'rgba(255,255,255,0.05)', alignItems: 'center', marginRight: 12, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  statValue: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginTop: 8 },
  statLabel: { fontSize: 11, color: '#9CA3AF', marginTop: 4, textAlign: 'center' },
  membersGrid: { paddingHorizontal: 20, paddingBottom: 40 },
  memberCard: { marginBottom: 16, borderRadius: 20, overflow: 'hidden' },
  memberGradient: { padding: 20 },
  memberHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 },
  avatarContainer: { position: 'relative' },
  avatar: { width: 64, height: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center' },
  avatarText: { fontSize: 24, fontWeight: 'bold', color: '#8B5CF6' },
  statusDot: { position: 'absolute', bottom: 2, right: 2, width: 16, height: 16, borderRadius: 8, borderWidth: 3, borderColor: '#fff' },
  ratingBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.3)', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 12, gap: 4 },
  ratingText: { fontSize: 14, fontWeight: 'bold', color: '#fff' },
  memberName: { fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 4 },
  memberRole: { fontSize: 14, color: 'rgba(255,255,255,0.7)', marginBottom: 12 },
  skillsContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 16 },
  skillChip: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  skillText: { fontSize: 12, color: '#fff', fontWeight: '600' },
  memberFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  projectBadge: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  projectText: { fontSize: 13, color: 'rgba(255,255,255,0.8)', fontWeight: '600' },
  viewButton: { width: 36, height: 36, borderRadius: 18, backgroundColor: 'rgba(255,255,255,0.2)', justifyContent: 'center', alignItems: 'center' },
});
