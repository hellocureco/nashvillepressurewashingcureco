# Supabase Setup Instructions

## 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Choose your organization and give it a name (e.g., "The Cure Company")
3. Set a database password and choose a region close to your users
4. Wait for the project to be created

## 2. Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings** > **API**
2. Copy your **Project URL** and **anon public** key
3. Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## 3. Set Up Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Copy and paste the contents of `supabase-schema.sql` into the editor
3. Click **Run** to execute the SQL

This will create:
- `contact_submissions` table
- Proper indexes for performance
- Row Level Security (RLS) policies
- Automatic timestamp updates

## 4. Configure Row Level Security

The schema includes RLS policies that:
- Allow anyone to insert new contact submissions
- Allow authenticated users to read/update submissions
- Protect your data from unauthorized access

## 5. Test the Contact Form

1. Start your development server: `npm run dev`
2. Go to your contact form and submit a test entry
3. Check your Supabase dashboard > **Table Editor** > `contact_submissions` to see the data

## 6. Access Admin Dashboard

1. Navigate to `/admin` on your website
2. You'll see all contact submissions with status tracking
3. Update submission statuses as you work with leads

## 7. Optional: Email Notifications

You can set up email notifications in Supabase:

1. Go to **Database** > **Functions**
2. Create a new function to send emails when new submissions arrive
3. Set up a trigger on the `contact_submissions` table

## 8. Production Deployment

For production:

1. Update your environment variables in your hosting platform
2. Ensure your Supabase project is in production mode
3. Set up proper authentication if you want to restrict admin access
4. Consider adding rate limiting to prevent spam

## Database Schema Overview

### contact_submissions table:
- `id` - UUID primary key
- `name` - Contact name (required)
- `phone` - Phone number (required)
- `service` - Service type (optional)
- `message` - Additional message (optional)
- `status` - Lead status: 'new', 'contacted', 'quoted', 'completed'
- `created_at` - Timestamp when submitted
- `updated_at` - Timestamp when last updated

## Security Features

- Row Level Security enabled
- Public can only insert new submissions
- Authenticated users can read/update all submissions
- Automatic timestamp updates
- Input validation and sanitization
