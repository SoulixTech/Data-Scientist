# Data Scientist Group - Complete Setup Guide

## 🚀 Project Overview

This project includes:
1. **Next.js Website** - Modern web application
2. **Expo Mobile App** - Cross-platform mobile app (iOS & Android)
3. **Supabase Backend** - Database, Authentication, and Storage

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (free tier available)
- For mobile app: Expo Go app on your phone

## 🗄️ Database Setup (Supabase)

### Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up
2. Create a new project
3. Note your project URL and anon key

### Step 2: Run Database Schema

1. In Supabase Dashboard, go to **SQL Editor**
2. Copy the contents of `database/schema.sql`
3. Run the SQL to create all tables and policies

### Step 3: Configure Storage

1. Go to **Storage** in Supabase Dashboard
2. Buckets will be created by the schema
3. Configure CORS if needed for file uploads

## 🌐 Website Setup

### Step 1: Install Dependencies

```bash
cd website
npm install
```

### Step 2: Configure Environment

1. Copy `.env.local.example` to `.env.local`:
```bash
cp .env.local.example .env.local
```

2. Edit `.env.local` and add your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### Step 3: Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Step 4: Build for Production

```bash
npm run build
npm start
```

## 📱 Mobile App Setup

### Step 1: Install Dependencies

```bash
cd mobile-app
npm install
```

### Step 2: Configure Environment

1. Create `.env` file:
```env
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### Step 3: Run on Your Phone

1. Install **Expo Go** app on your phone from App Store/Play Store
2. Run the development server:
```bash
npx expo start
```
3. Scan the QR code with your phone

### Step 4: Build for Production

For Android:
```bash
npx expo build:android
```

For iOS:
```bash
npx expo build:ios
```

## 🎯 Features Implementation

### Website Features
- ✅ Home page with feature showcase
- ✅ Photo & Video Gallery (with Supabase Storage)
- ✅ Member Profiles
- ✅ Education Hub (Notes, Practicals)
- ✅ Expense Tracker with settlements
- ✅ Fun Zone (Games, Polls, Memes)

### Mobile App Features
- ✅ Same features as website
- ✅ Native camera integration
- ✅ Push notifications
- ✅ Offline support
- ✅ Biometric authentication

## 📊 Database Structure

### Tables
1. **members** - User profiles
2. **expenses** - Group expenses
3. **gallery** - Photos and videos
4. **education_materials** - Study materials
5. **polls** - Voting polls
6. **memes** - Fun content

### Storage Buckets
1. **gallery** - Photos/videos
2. **education** - Study files
3. **memes** - Meme images
4. **avatars** - Profile pictures

## 🔐 Security

- Row Level Security (RLS) enabled
- Authentication required for all operations
- Admin-only features for sensitive operations
- Secure file uploads with validation

## 🛠️ Development Tips

### Adding New Members

Run this in Supabase SQL Editor:
```sql
INSERT INTO members (name, email, role, skills, birthday)
VALUES 
  ('Rahul Sharma', 'rahul@example.com', 'admin', 'Web Development', '2000-01-15'),
  ('Priya Patel', 'priya@example.com', 'member', 'Data Science', '2000-05-20');
```

### Testing Expenses

```sql
-- Get member IDs first
SELECT id, name FROM members;

-- Add test expense (replace UUIDs with actual member IDs)
INSERT INTO expenses (title, amount, paid_by, category, date, split_among, created_by)
VALUES (
  'Group Dinner',
  1500,
  'uuid-of-rahul',
  'Food',
  '2025-11-23',
  ARRAY['uuid-of-rahul', 'uuid-of-priya'],
  'uuid-of-rahul'
);
```

## 📱 Mobile App Camera Integration

The mobile app includes camera features:
- Take photos for gallery
- Scan documents for education
- Upload profile pictures

## 🎨 Customization

### Change Colors
Edit `tailwind.config.ts` in website or theme config in mobile app

### Add New Features
1. Update database schema in `database/schema.sql`
2. Add TypeScript types in `lib/supabase.ts`
3. Create new pages/screens
4. Add navigation links

## 🚨 Troubleshooting

### Website won't start
```bash
rm -rf node_modules .next
npm install
npm run dev
```

### Database connection error
- Check `.env.local` has correct Supabase URL and key
- Verify Supabase project is not paused
- Check RLS policies allow your operations

### Mobile app not connecting
- Verify `.env` file exists with correct values
- Restart Expo with `npx expo start --clear`
- Check phone and computer are on same WiFi

## 📞 Support

For issues or questions:
1. Check Supabase logs in Dashboard
2. Check browser console for errors
3. Review this documentation

## 🎉 Deployment

### Website Deployment (Vercel)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd website
vercel
```

### Mobile App Deployment
Use Expo EAS Build:
```bash
npm install -g eas-cli
eas build --platform android
eas build --platform ios
```

## 📝 License

Private - For Data Scientist Group members only

---

Made with ❤️ for the Data Scientist Group
