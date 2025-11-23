import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const [greeting, setGreeting] = useState('Hello');
  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');

    scale.value = withRepeat(withTiming(1.1, { duration: 2000 }), -1, true);
    rotate.value = withRepeat(withTiming(360, { duration: 20000 }), -1, false);
  }, []);

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { rotate: `${rotate.value}deg` }],
  }));

  const features = [
    { id: '1', name: 'Gallery', icon: 'images-outline', route: '/gallery', gradient: ['#8B5CF6', '#A855F7', '#EC4899'] },
    { id: '2', name: 'Members', icon: 'people-outline', route: '/members', gradient: ['#06B6D4', '#0EA5E9', '#3B82F6'] },
    { id: '3', name: 'Education', icon: 'book-outline', route: '/education', gradient: ['#10B981', '#059669', '#14B8A6'] },
    { id: '4', name: 'Expenses', icon: 'wallet-outline', route: '/expenses', gradient: ['#F59E0B', '#FBBF24', '#F97316'] },
    { id: '5', name: 'Fun Zone', icon: 'game-controller-outline', route: '/fun-zone', gradient: ['#EF4444', '#F97316', '#EC4899'] },
    { id: '6', name: 'Security', icon: 'shield-checkmark-outline', route: '/', gradient: ['#64748B', '#475569', '#334155'] },
  ];

  const stats = [
    { value: '500+', label: 'Memories', icon: 'flame-outline', color: '#F59E0B' },
    { value: '20+', label: 'Members', icon: 'people-outline', color: '#06B6D4' },
    { value: '100+', label: 'Resources', icon: 'book-outline', color: '#10B981' },
    { value: '24/7', label: 'Available', icon: 'flash-outline', color: '#FBBF24' },
  ];

  const quickActions = [
    { title: 'Upload Photo', subtitle: 'Add new memory', icon: 'camera-outline', route: '/gallery', gradient: ['#8B5CF6', '#A855F7'] },
    { title: 'Track Expense', subtitle: 'Split bills', icon: 'wallet-outline', route: '/expenses', gradient: ['#10B981', '#14B8A6'] },
    { title: 'Share Notes', subtitle: 'Study materials', icon: 'document-text-outline', route: '/education', gradient: ['#F59E0B', '#F97316'] },
    { title: 'Start Poll', subtitle: 'Quick survey', icon: 'bar-chart-outline', route: '/fun-zone', gradient: ['#EC4899', '#EF4444'] },
  ];

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#000000', '#1F1F1F', '#000000']} style={StyleSheet.absoluteFillObject} />
      
      <Animated.View style={[styles.orb1, { backgroundColor: '#8B5CF6' }]} />
      <Animated.View style={[styles.orb2, { backgroundColor: '#06B6D4' }]} />
      <Animated.View style={[styles.orb3, { backgroundColor: '#EC4899' }]} />

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greetingText}>{greeting}</Text>
            <Text style={styles.titleText}>Data Scientist Group</Text>
            <Text style={styles.subtitleText}>Your Memories, Together</Text>
          </View>
          <Animated.View style={[styles.logoContainer, logoAnimatedStyle]}>
            <LinearGradient colors={['#06B6D4', '#8B5CF6', '#EC4899']} style={styles.logoGradient}>
              <View style={styles.logoInner}>
                <Ionicons name="heart" size={32} color="#EC4899" />
              </View>
            </LinearGradient>
          </Animated.View>
        </View>

        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <BlurView intensity={20} style={styles.blurCard}>
                <Ionicons name={stat.icon as any} size={32} color={stat.color} />
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </BlurView>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActionsGrid}>
            {quickActions.map((action, index) => (
              <Link key={index} href={action.route} asChild>
                <TouchableOpacity style={styles.quickActionCard}>
                  <LinearGradient colors={[...action.gradient, `${action.gradient[0]}80`]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.quickActionGradient}>
                    <Ionicons name={action.icon as any} size={28} color="#FFFFFF" />
                    <View style={styles.quickActionText}>
                      <Text style={styles.quickActionTitle}>{action.title}</Text>
                      <Text style={styles.quickActionSubtitle}>{action.subtitle}</Text>
                    </View>
                    <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
                  </LinearGradient>
                </TouchableOpacity>
              </Link>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>All Features</Text>
          <View style={styles.featuresGrid}>
            {features.map((feature) => (
              <Link key={feature.id} href={feature.route} asChild>
                <TouchableOpacity style={styles.featureCard}>
                  <LinearGradient colors={feature.gradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.featureGradient}>
                    <View style={styles.featureContent}>
                      <Ionicons name={feature.icon as any} size={36} color="#FFFFFF" />
                      <Text style={styles.featureName}>{feature.name}</Text>
                      <View style={styles.featureArrow}>
                        <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
                      </View>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              </Link>
            ))}
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Made with ❤️ by Data Scientist Group</Text>
          <Text style={styles.footerSubtext}>Privacy First • Members Only</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  orb1: { position: 'absolute', top: 100, left: -50, width: 200, height: 200, borderRadius: 100, opacity: 0.15 },
  orb2: { position: 'absolute', bottom: 200, right: -50, width: 250, height: 250, borderRadius: 125, opacity: 0.15 },
  orb3: { position: 'absolute', top: '50%', left: '50%', width: 180, height: 180, borderRadius: 90, opacity: 0.1 },
  scrollView: { flex: 1 },
  scrollContent: { paddingBottom: 40 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 60, paddingBottom: 20 },
  greetingText: { fontSize: 14, color: '#9CA3AF', marginBottom: 4 },
  titleText: { fontSize: 28, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 4 },
  subtitleText: { fontSize: 12, color: '#6B7280' },
  logoContainer: { width: 70, height: 70 },
  logoGradient: { width: '100%', height: '100%', borderRadius: 20, padding: 2 },
  logoInner: { flex: 1, backgroundColor: '#000000', borderRadius: 18, justifyContent: 'center', alignItems: 'center' },
  statsContainer: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20, gap: 12, marginBottom: 30 },
  statCard: { width: (width - 56) / 2 },
  blurCard: { borderRadius: 16, padding: 16, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderWidth: 1, borderColor: 'rgba(255, 255, 255, 0.1)', alignItems: 'center', overflow: 'hidden' },
  statValue: { fontSize: 32, fontWeight: 'bold', color: '#FFFFFF', marginTop: 8 },
  statLabel: { fontSize: 12, color: '#9CA3AF', marginTop: 4 },
  section: { paddingHorizontal: 20, marginBottom: 30 },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 16 },
  quickActionsGrid: { gap: 12 },
  quickActionCard: { borderRadius: 16, overflow: 'hidden' },
  quickActionGradient: { flexDirection: 'row', alignItems: 'center', padding: 16, gap: 12 },
  quickActionText: { flex: 1 },
  quickActionTitle: { fontSize: 16, fontWeight: 'bold', color: '#FFFFFF', marginBottom: 2 },
  quickActionSubtitle: { fontSize: 12, color: 'rgba(255, 255, 255, 0.7)' },
  featuresGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  featureCard: { width: (width - 56) / 2, height: 140, borderRadius: 16, overflow: 'hidden' },
  featureGradient: { flex: 1, padding: 16 },
  featureContent: { flex: 1, justifyContent: 'space-between' },
  featureName: { fontSize: 16, fontWeight: 'bold', color: '#FFFFFF', marginTop: 8 },
  featureArrow: { alignSelf: 'flex-end', width: 32, height: 32, borderRadius: 16, backgroundColor: 'rgba(255, 255, 255, 0.2)', justifyContent: 'center', alignItems: 'center' },
  footer: { alignItems: 'center', paddingHorizontal: 20, paddingTop: 20 },
  footerText: { fontSize: 14, color: '#9CA3AF', marginBottom: 4 },
  footerSubtext: { fontSize: 12, color: '#6B7280' },
});
