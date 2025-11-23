# Data Scientist Group - Mobile & Web Platform

<div align="center">

![Data Scientist Group Logo](https://via.placeholder.com/200x200/1a1a2e/00d4ff?text=DSG)

**A comprehensive platform for friends to share memories, track expenses, study together, and have fun!**

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![React Native](https://img.shields.io/badge/React_Native-0.73-blue)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-50-purple)](https://expo.dev/)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-green)](https://supabase.com/)

</div>

---

## ✨ Features

### 📸 **Photo & Video Gallery**
- Upload and organize group photos/videos
- Like and comment on memories
- Cloud storage with Supabase
- Mobile camera integration

### 👥 **Member Profiles**
- Showcase each member's skills and talents
- Contact information
- Birthday tracking
- Role-based access (Admin/Member)

### 💰 **Expense Tracker**
- Add group expenses
- Split bills among members
- Automatic settlement calculation
- Track who owes whom
- Category-wise expense tracking
- Real-time balance updates

### 📚 **Education Hub**
- Upload and download study notes
- Share practical files
- Organize by subject
- Track downloads
- Marksheet storage

### 🎮 **Fun Zone**
- Interactive games
- Create and vote on polls
- Meme gallery
- Group entertainment

### 🎂 **Birthday Reminders** *(Coming Soon)*
- Automatic birthday notifications
- Never miss a friend's special day

---

## 🏗️ Tech Stack

### Website
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Database**: Supabase (PostgreSQL)
- **Storage**: Supabase Storage

### Mobile App
- **Framework**: React Native with Expo
- **Router**: Expo Router
- **Language**: TypeScript
- **UI**: React Native components + Linear Gradient
- **Database**: Supabase (same as website)
- **Camera**: Expo Camera & Image Picker

### Backend
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage buckets
- **Real-time**: Supabase Realtime subscriptions

---

## 🚀 Quick Start

### Prerequisites
```bash
- Node.js 18 or higher
- npm or yarn
- Git
- Expo Go app (for mobile testing)
- Supabase account (free tier)
```

### 1. Clone Repository
```bash
git clone <repository-url>
cd DataScintestGroup
```

### 2. Setup Database
1. Create account at [supabase.com](https://supabase.com)
2. Create a new project
3. Run the SQL from `database/schema.sql` in Supabase SQL Editor
4. Note your `Project URL` and `anon key`

### 3. Setup Website
```bash
cd website
npm install

# Create .env.local file
cp .env.local.example .env.local

# Add your Supabase credentials to .env.local
# NEXT_PUBLIC_SUPABASE_URL=your_project_url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# Run development server
npm run dev
```

Visit http://localhost:3000

### 4. Setup Mobile App
```bash
cd mobile-app
npm install

# Create .env file
# EXPO_PUBLIC_SUPABASE_URL=your_project_url
# EXPO_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# Start Expo
npx expo start
```

Scan QR code with Expo Go app on your phone

---

## 📱 Screenshots

### Website
- Home page with futuristic design
- Expense tracker with settlement summary
- Gallery with photo/video uploads
- Education hub for study materials

### Mobile App
- Native home screen
- Expense tracking on mobile
- Camera integration for uploads
- Member profiles

---

## 💾 Database Structure

### Tables

#### **members**
- User profiles and information
- Skills, birthday, role
- Avatar storage

#### **expenses**
- Group expense tracking
- Split calculations
- Payment records

#### **gallery**
- Photos and videos
- Likes and comments
- Upload metadata

#### **education_materials**
- Study notes and practicals
- File storage links
- Download tracking

#### **polls**
- Voting polls
- Options and results

#### **memes**
- Fun content
- Likes tracking

---

## 🔐 Security Features

- ✅ Row Level Security (RLS) enabled
- ✅ Authentication required for all operations
- ✅ Secure file uploads with validation
- ✅ Environment variables for sensitive data
- ✅ HTTPS only in production
- ✅ Admin-only features protected

---

## 📖 Documentation

Detailed setup and usage guide: [SETUP_GUIDE.md](./SETUP_GUIDE.md)

### Adding Test Data

```sql
-- Add members
INSERT INTO members (name, email, role, skills, birthday)
VALUES 
  ('Rahul Sharma', 'rahul@example.com', 'admin', 'Web Development, Python', '2000-01-15'),
  ('Priya Patel', 'priya@example.com', 'member', 'Data Science, ML', '2000-05-20'),
  ('Amit Kumar', 'amit@example.com', 'member', 'AI, Deep Learning', '2000-08-10');

-- Get member IDs and add expense
SELECT id, name FROM members; -- Note the UUIDs

INSERT INTO expenses (title, amount, paid_by, category, date, split_among, created_by)
VALUES (
  'Group Dinner',
  1500,
  'uuid-of-rahul',
  'Food',
  CURRENT_DATE,
  ARRAY['uuid-of-rahul', 'uuid-of-priya', 'uuid-of-amit'],
  'uuid-of-rahul'
);
```

---

## 🎯 Roadmap

- [x] Website homepage
- [x] Expense tracker with Supabase
- [x] Gallery page
- [x] Members page
- [x] Education hub
- [x] Mobile app home screen
- [x] Mobile expense tracker
- [ ] Birthday reminders
- [ ] Push notifications
- [ ] Real-time chat
- [ ] Event calendar
- [ ] Admin dashboard

---

## 🤝 Contributing

This is a private group project. For group members:
1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit for review

---

## 📞 Support

For issues or questions:
- Check the [SETUP_GUIDE.md](./SETUP_GUIDE.md)
- Review Supabase logs in dashboard
- Contact group admin

---

## 📄 License

**Private - For Data Scientist Group Members Only**

This project is created exclusively for the Data Scientist Group members and is not open for public use.

---

## 🌟 Special Thanks

Created with ❤️ for the Data Scientist Group

**Features in Marathi:**
- ✅ Friends ची आठवण टिकवण्यासाठी
- ✅ Group memories सुरक्षित ठेवण्यासाठी
- ✅ Birthday आधी समजण्यासाठी
- ✅ Education files एकाच ठिकाणी
- ✅ Group खर्चाचा हिशोब
- ✅ Fun zone मध्ये वेळ घालवण्यासाठी
- ✅ Private hub फक्त group साठी

---

<div align="center">

**Made with 💖 by Data Scientists, for Data Scientists**

[Website](http://localhost:3000) • [Mobile App](#) • [Documentation](./SETUP_GUIDE.md)

</div>
# Data-Scientist  
