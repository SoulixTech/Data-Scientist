# 🚀 Quick Start Commands

## Website

### Install & Run
```bash
cd website
npm install
npm run dev
```

### Environment Setup
Create `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## Mobile App

### Install & Run
```bash
cd mobile-app
npm install
npx expo start
```

### Environment Setup
Create `.env`:
```env
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## Supabase Setup

1. **Create Project**: https://supabase.com
2. **Run Schema**: Copy `database/schema.sql` → SQL Editor → Execute
3. **Get Credentials**: Settings → API → Copy URL and anon key
4. **Add Test Data**: Use SQL from SETUP_GUIDE.md

## First-Time Setup Checklist

- [ ] Supabase project created
- [ ] Database schema executed
- [ ] Environment variables configured (website)
- [ ] Environment variables configured (mobile app)
- [ ] Dependencies installed (website)
- [ ] Dependencies installed (mobile app)
- [ ] Test members added to database
- [ ] Website running on localhost:3000
- [ ] Mobile app running on Expo Go

## Quick Test

### Add Test Members
```sql
INSERT INTO members (name, email, role, skills, birthday) VALUES 
  ('Rahul Sharma', 'rahul@example.com', 'admin', 'Web Dev', '2000-01-15'),
  ('Priya Patel', 'priya@example.com', 'member', 'Data Science', '2000-05-20');
```

### Add Test Expense
1. Get member IDs: `SELECT id, name FROM members;`
2. Replace UUIDs below and run:
```sql
INSERT INTO expenses (title, amount, paid_by, category, date, split_among, created_by)
VALUES ('Lunch', 500, 'member-uuid-1', 'Food', CURRENT_DATE, 
        ARRAY['member-uuid-1', 'member-uuid-2'], 'member-uuid-1');
```

## Troubleshooting

### Website won't connect to Supabase
```bash
# Check .env.local file exists
# Verify NEXT_PUBLIC_ prefix is there
# Restart dev server: Ctrl+C then npm run dev
```

### Mobile app can't connect
```bash
# Check .env file (no .local)
# Use EXPO_PUBLIC_ prefix
# Clear cache: npx expo start --clear
```

### Database errors
```bash
# Check RLS policies in Supabase Dashboard
# Verify schema was executed successfully
# Check Supabase logs for errors
```

## Next Steps

1. ✅ Setup complete → Start using the app!
2. 📸 Upload some photos to gallery
3. 💰 Add group expenses
4. 📚 Share study materials
5. 🎮 Enjoy the fun zone!

---

**Need Help?** Check SETUP_GUIDE.md for detailed instructions
