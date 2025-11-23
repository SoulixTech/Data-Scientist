import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useState } from 'react';

const { width } = Dimensions.get('window');

export default function FunZoneScreen() {
  const [activePoll, setActivePoll] = useState<number | null>(null);

  const games = [
    { id: 1, name: 'Trivia Quiz', icon: 'help-circle', players: 45, gradient: ['#8B5CF6', '#EC4899'], type: 'Quiz' },
    { id: 2, name: 'Emoji Guess', icon: 'happy', players: 32, gradient: ['#06B6D4', '#3B82F6'], type: 'Game' },
    { id: 3, name: 'Word Chain', icon: 'text', players: 28, gradient: ['#10B981', '#14B8A6'], type: 'Word' },
    { id: 4, name: 'Meme Battle', icon: 'images', players: 67, gradient: ['#F59E0B', '#F97316'], type: 'Meme' },
  ];

  const polls = [
    { id: 1, question: 'Best programming language for beginners?', options: ['Python', 'JavaScript', 'Java', 'C++'], votes: [45, 32, 15, 8] },
    { id: 2, question: 'Favorite project type?', options: ['Web App', 'Mobile App', 'ML Model', 'Game'], votes: [28, 35, 22, 15] },
  ];

  const memes = [
    { id: 1, title: 'When code works first time', likes: 89, comments: 12, gradient: ['#8B5CF6', '#EC4899'] },
    { id: 2, title: 'Debugging at 3 AM', likes: 67, comments: 8, gradient: ['#06B6D4', '#3B82F6'] },
    { id: 3, title: 'Git commit messages', likes: 102, comments: 15, gradient: ['#10B981', '#14B8A6'] },
  ];

  const challenges = [
    { id: 1, title: '30 Day Code Challenge', participants: 45, days: 15, icon: 'code-slash', color: '#8B5CF6' },
    { id: 2, title: 'Daily Leetcode', participants: 32, days: 22, icon: 'laptop', color: '#EC4899' },
    { id: 3, title: 'UI/UX Marathon', participants: 28, days: 8, icon: 'color-palette', color: '#06B6D4' },
  ];

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#0F172A', '#1E293B', '#0F172A']} style={StyleSheet.absoluteFillObject} />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Fun Zone</Text>
            <Text style={styles.headerSubtitle}>Play, vote & share laughs</Text>
          </View>
          <TouchableOpacity style={styles.trophyButton}>
            <LinearGradient colors={['#FBBF24', '#F59E0B']} style={styles.trophyGradient}>
              <Ionicons name="trophy" size={24} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Games</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All →</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.gamesScroll}>
            {games.map((game) => (
              <TouchableOpacity key={game.id} style={styles.gameCard}>
                <LinearGradient colors={game.gradient} style={styles.gameGradient}>
                  <View style={styles.gameIcon}>
                    <Ionicons name={game.icon as any} size={36} color="#fff" />
                  </View>
                  <View style={styles.gameTypeBadge}>
                    <Text style={styles.gameTypeText}>{game.type}</Text>
                  </View>
                  <Text style={styles.gameName}>{game.name}</Text>
                  <View style={styles.playersContainer}>
                    <Ionicons name="people" size={14} color="rgba(255,255,255,0.8)" />
                    <Text style={styles.playersText}>{game.players} players</Text>
                  </View>
                  <TouchableOpacity style={styles.playButton}>
                    <LinearGradient colors={['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.1)']} style={styles.playButtonGradient}>
                      <Text style={styles.playButtonText}>Play Now</Text>
                      <Ionicons name="play" size={16} color="#fff" />
                    </LinearGradient>
                  </TouchableOpacity>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Active Polls</Text>
            <TouchableOpacity>
              <LinearGradient colors={['#8B5CF6', '#EC4899']} style={styles.createPollButton}>
                <Ionicons name="add" size={18} color="#fff" />
                <Text style={styles.createPollText}>Create</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          {polls.map((poll) => {
            const totalVotes = poll.votes.reduce((sum, v) => sum + v, 0);
            return (
              <BlurView key={poll.id} intensity={20} style={styles.pollCard}>
                <Text style={styles.pollQuestion}>{poll.question}</Text>
                <View style={styles.pollOptions}>
                  {poll.options.map((option, index) => {
                    const percentage = totalVotes > 0 ? (poll.votes[index] / totalVotes) * 100 : 0;
                    const isSelected = activePoll === poll.id;
                    return (
                      <TouchableOpacity
                        key={index}
                        style={styles.pollOption}
                        onPress={() => setActivePoll(poll.id)}
                      >
                        <View style={styles.pollOptionBar}>
                          <LinearGradient
                            colors={['#8B5CF6', '#EC4899']}
                            style={[styles.pollOptionFill, { width: `${percentage}%` }]}
                          />
                        </View>
                        <View style={styles.pollOptionContent}>
                          <Text style={styles.pollOptionText}>{option}</Text>
                          <Text style={styles.pollOptionPercentage}>{percentage.toFixed(0)}%</Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <Text style={styles.pollVotes}>{totalVotes} votes</Text>
              </BlurView>
            );
          })}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Trending Memes</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All →</Text>
            </TouchableOpacity>
          </View>
          {memes.map((meme) => (
            <TouchableOpacity key={meme.id} style={styles.memeCard}>
              <LinearGradient
                colors={[...meme.gradient, `${meme.gradient[0]}50`]}
                style={styles.memeGradient}
              >
                <View style={styles.memePlaceholder}>
                  <Ionicons name="happy" size={48} color="rgba(255,255,255,0.3)" />
                </View>
              </LinearGradient>
              <View style={styles.memeContent}>
                <Text style={styles.memeTitle}>{meme.title}</Text>
                <View style={styles.memeActions}>
                  <TouchableOpacity style={styles.memeAction}>
                    <Ionicons name="heart" size={20} color="#EC4899" />
                    <Text style={styles.memeActionText}>{meme.likes}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.memeAction}>
                    <Ionicons name="chatbubble" size={20} color="#06B6D4" />
                    <Text style={styles.memeActionText}>{meme.comments}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.memeAction}>
                    <Ionicons name="share-social" size={20} color="#10B981" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={[styles.section, { paddingBottom: 40 }]}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Challenges</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All →</Text>
            </TouchableOpacity>
          </View>
          {challenges.map((challenge) => (
            <BlurView key={challenge.id} intensity={20} style={styles.challengeCard}>
              <View style={[styles.challengeIcon, { backgroundColor: `${challenge.color}30` }]}>
                <Ionicons name={challenge.icon as any} size={28} color={challenge.color} />
              </View>
              <View style={styles.challengeContent}>
                <Text style={styles.challengeTitle}>{challenge.title}</Text>
                <View style={styles.challengeMeta}>
                  <View style={styles.challengeStat}>
                    <Ionicons name="people" size={14} color="#06B6D4" />
                    <Text style={styles.challengeStatText}>{challenge.participants} joined</Text>
                  </View>
                  <View style={styles.challengeStat}>
                    <Ionicons name="calendar" size={14} color="#10B981" />
                    <Text style={styles.challengeStatText}>Day {challenge.days}</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={[styles.joinButton, { backgroundColor: `${challenge.color}30` }]}>
                <Text style={[styles.joinButtonText, { color: challenge.color }]}>Join</Text>
              </TouchableOpacity>
            </BlurView>
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
  trophyButton: { width: 56, height: 56, borderRadius: 28 },
  trophyGradient: { flex: 1, borderRadius: 28, justifyContent: 'center', alignItems: 'center' },
  section: { paddingLeft: 20, marginBottom: 32 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20, marginBottom: 16 },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  seeAllText: { fontSize: 14, color: '#8B5CF6', fontWeight: '600' },
  gamesScroll: { marginRight: -20 },
  gameCard: { width: 200, marginRight: 12, borderRadius: 20, overflow: 'hidden' },
  gameGradient: { padding: 20, height: 260 },
  gameIcon: { width: 64, height: 64, borderRadius: 32, backgroundColor: 'rgba(255,255,255,0.2)', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  gameTypeBadge: { backgroundColor: 'rgba(0,0,0,0.3)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8, alignSelf: 'flex-start', marginBottom: 12 },
  gameTypeText: { fontSize: 11, color: '#fff', fontWeight: '600' },
  gameName: { fontSize: 18, fontWeight: 'bold', color: '#fff', marginBottom: 8 },
  playersContainer: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 16 },
  playersText: { fontSize: 13, color: 'rgba(255,255,255,0.8)' },
  playButton: { borderRadius: 12, overflow: 'hidden' },
  playButtonGradient: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 10, gap: 6 },
  playButtonText: { fontSize: 14, fontWeight: 'bold', color: '#fff' },
  createPollButton: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 12, gap: 4 },
  createPollText: { fontSize: 14, fontWeight: 'bold', color: '#fff' },
  pollCard: { backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 16, padding: 20, marginBottom: 16, marginRight: 20, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  pollQuestion: { fontSize: 18, fontWeight: 'bold', color: '#fff', marginBottom: 16 },
  pollOptions: { gap: 12, marginBottom: 12 },
  pollOption: { position: 'relative' },
  pollOptionBar: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 8, overflow: 'hidden' },
  pollOptionFill: { height: '100%', borderRadius: 8 },
  pollOptionContent: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 16, position: 'relative', zIndex: 1 },
  pollOptionText: { fontSize: 15, color: '#fff', fontWeight: '500' },
  pollOptionPercentage: { fontSize: 14, fontWeight: 'bold', color: '#fff' },
  pollVotes: { fontSize: 13, color: '#9CA3AF', marginTop: 8 },
  memeCard: { flexDirection: 'row', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 16, marginBottom: 12, marginRight: 20, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  memeGradient: { width: 120, height: 120 },
  memePlaceholder: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  memeContent: { flex: 1, padding: 16, justifyContent: 'space-between' },
  memeTitle: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
  memeActions: { flexDirection: 'row', gap: 16 },
  memeAction: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  memeActionText: { fontSize: 13, color: '#9CA3AF', fontWeight: '600' },
  challengeCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 16, padding: 16, marginBottom: 12, marginRight: 20, overflow: 'hidden', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  challengeIcon: { width: 56, height: 56, borderRadius: 28, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  challengeContent: { flex: 1 },
  challengeTitle: { fontSize: 16, fontWeight: 'bold', color: '#fff', marginBottom: 8 },
  challengeMeta: { flexDirection: 'row', gap: 16 },
  challengeStat: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  challengeStatText: { fontSize: 12, color: '#9CA3AF' },
  joinButton: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 12 },
  joinButtonText: { fontSize: 14, fontWeight: 'bold' },
});
