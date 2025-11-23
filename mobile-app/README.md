# Data Scientist Group - Mobile App

A beautiful, professional React Native mobile app built with Expo for the Data Scientist Group community.

## ✨ Features

### 🏠 Home
- Dynamic greeting based on time of day
- Animated logo with gradient effects
- Stats overview (Memories, Members, Resources)
- Quick action cards for common tasks
- All features grid with beautiful gradients

### 📸 Gallery
- Photo grid with category filtering
- Beautiful gradient placeholders
- Like and engagement metrics
- Upload functionality
- Stats for photos, likes, and activity

### 👥 Members
- Team member profiles with avatars
- Skills and expertise showcase
- Project count and ratings
- Online/offline status indicators
- Beautiful gradient cards for each member

### 📚 Education Hub
- Course catalog with progress tracking
- Notes collection with subject categorization
- Resource library with downloads
- Tab-based navigation (Courses/Notes/Resources)
- Stats for learning progress

### 💰 Expenses
- Expense tracking with categories
- Split bill functionality
- Settlement summary with balances
- Transaction history
- Visual indicators for who owes whom

### 🎮 Fun Zone
- Interactive games (Trivia, Emoji Guess, Word Chain, Meme Battle)
- Active polls with real-time voting
- Trending memes with likes and comments
- Community challenges with participant tracking
- Engaging gradients and animations

## 🎨 Design Features

- **Modern UI**: Sleek glassmorphism effects with BlurView
- **Gradient Backgrounds**: Beautiful color combinations throughout
- **Smooth Animations**: React Native Reanimated for fluid motion
- **Dark Theme**: Professional dark mode design
- **Responsive Layout**: Adapts to different screen sizes
- **Icon System**: Ionicons for consistent visual language

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (Mac) or Android Emulator

### Installation

1. Install dependencies:
```bash
cd mobile-app
npm install
```

2. Start the development server:
```bash
npx expo start
```

3. Run on device/simulator:
- Press `i` for iOS Simulator
- Press `a` for Android Emulator
- Scan QR code with Expo Go app on physical device

## 📦 Dependencies

### Core
- **expo**: ~50.0.0
- **react-native**: 0.73.0
- **expo-router**: ~3.4.0 (File-based routing)

### UI & Animations
- **expo-linear-gradient**: Gradient backgrounds
- **expo-blur**: Glassmorphism effects
- **react-native-reanimated**: Smooth animations
- **@expo/vector-icons**: Icon library

### Database
- **@supabase/supabase-js**: Backend integration
- **@react-native-async-storage/async-storage**: Local storage

### Media
- **expo-image-picker**: Photo selection
- **expo-camera**: Camera access

## 📱 App Structure

```
mobile-app/
├── app/
│   ├── index.tsx          # Home screen
│   ├── gallery.tsx        # Photo gallery
│   ├── members.tsx        # Team members
│   ├── education.tsx      # Learning hub
│   ├── expenses.tsx       # Expense tracker
│   ├── fun-zone.tsx       # Games & polls
│   └── _layout.tsx        # Navigation layout
├── lib/
│   └── supabase.ts        # Supabase client
├── package.json
├── babel.config.js
└── README.md
```

## 🎨 Color Palette

- **Purple**: `#8B5CF6` (Primary)
- **Pink**: `#EC4899` (Accent)
- **Cyan**: `#06B6D4` (Info)
- **Green**: `#10B981` (Success)
- **Orange**: `#F59E0B` (Warning)
- **Blue**: `#3B82F6` (Link)

## 🔧 Configuration

### Babel Config
```javascript
module.exports = {
  presets: ['babel-preset-expo'],
  plugins: ['react-native-reanimated/plugin'],
};
```

### Supabase Setup
1. Create a Supabase project
2. Update `.env` or `lib/supabase.ts` with your credentials:
   - SUPABASE_URL
   - SUPABASE_ANON_KEY

## 📝 Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web browser

## 🌟 Features by Screen

### Home Screen
- ✅ Animated orbs background
- ✅ Rotating/scaling logo animation
- ✅ Dynamic greeting
- ✅ 4 blur-glass stat cards
- ✅ 4 gradient quick action cards
- ✅ 6 feature cards in grid

### Gallery
- ✅ Category filtering
- ✅ 3-column photo grid
- ✅ Gradient photo placeholders
- ✅ Like count per photo
- ✅ Upload button
- ✅ Stats row (Photos, Likes, Months)

### Members
- ✅ Member cards with gradients
- ✅ Avatar with initials
- ✅ Online status indicator
- ✅ Rating badge
- ✅ Skills chips
- ✅ Project count
- ✅ Stats scroll (Total, Active, Projects, Rating)

### Education
- ✅ Tab navigation (Courses/Notes/Resources)
- ✅ Course progress bars
- ✅ Notes with subject badges
- ✅ Resource downloads
- ✅ Stats for learning metrics

### Expenses
- ✅ Total expenses display
- ✅ Transaction count
- ✅ Member count
- ✅ Settlement summary with balances
- ✅ Color-coded (green=receive, red=pay)
- ✅ Recent expenses list

### Fun Zone
- ✅ Game cards (4 games)
- ✅ Active polls with voting
- ✅ Trending memes
- ✅ Community challenges
- ✅ Create poll button
- ✅ Trophy button

## 🎯 Next Steps

1. **Install Dependencies**: Run `npm install` in mobile-app folder
2. **Configure Supabase**: Add your database credentials
3. **Start Development**: Run `npx expo start`
4. **Test on Device**: Use Expo Go app to scan QR code
5. **Build for Production**: `eas build` for app stores

## 📄 License

Private - Data Scientist Group Internal Use Only

## 🤝 Contributing

This is a private group project. Contact the team lead for contribution guidelines.

---

Made with ❤️ by Data Scientist Group
