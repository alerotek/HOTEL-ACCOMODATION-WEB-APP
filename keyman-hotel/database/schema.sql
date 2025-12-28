-- Supabase/Postgres schema for Keyman Hotel (starter)
-- Run these statements in Supabase SQL editor or as migrations

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Profiles (users)
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE,
  full_name text,
  phone text,
  role text DEFAULT "customer",
  metadata jsonb DEFAULT "{}"::jsonb,
  created_at timestamptz DEFAULT now()
);

-- Guests
CREATE TABLE IF NOT EXISTS guests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid REFERENCES profiles(id),
  has_vehicle boolean DEFAULT false,
  vehicle_plate text,
  created_at timestamptz DEFAULT now()
);

-- Staff
CREATE TABLE IF NOT EXISTS staff (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid REFERENCES profiles(id),
  position text,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Rooms
CREATE TABLE IF NOT EXISTS rooms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  room_number text UNIQUE,
  room_type text,
  capacity int DEFAULT 1,
  status text DEFAULT "available",
  base_price_kes integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Bookings
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_ref text UNIQUE,
  profile_id uuid REFERENCES profiles(id),
  guest_id uuid REFERENCES guests(id),
  room_id uuid REFERENCES rooms(id),
  checkin timestamptz,
  checkout timestamptz,
  guests_count int DEFAULT 1,
  breakfast boolean DEFAULT false,
  status text DEFAULT "reserved",
  total_amount_kes integer DEFAULT 0,
  paid_amount_kes integer DEFAULT 0,
  created_by uuid REFERENCES staff(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Payments (append-only)
CREATE TABLE IF NOT EXISTS payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id uuid REFERENCES bookings(id),
  profile_id uuid REFERENCES profiles(id),
  amount_kes integer,
  method text,
  status text DEFAULT "pending",
  reference text,
  recorded_by uuid REFERENCES staff(id),
  metadata jsonb DEFAULT "{}"::jsonb,
  created_at timestamptz DEFAULT now()
);

-- Facilities
CREATE TABLE IF NOT EXISTS facilities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text,
  type text,
  capacity int,
  price_config jsonb DEFAULT "{}"::jsonb,
  created_at timestamptz DEFAULT now()
);

-- Audit logs (immutable)
CREATE TABLE IF NOT EXISTS audit_logs (
  id bigserial PRIMARY KEY,
  entity_type text,
  entity_id uuid,
  action text,
  changed_by uuid,
  payload jsonb,
  created_at timestamptz DEFAULT now()
);

-- Food orders
CREATE TABLE IF NOT EXISTS food_orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id uuid REFERENCES bookings(id),
  profile_id uuid REFERENCES profiles(id),
  items jsonb,
  total_kes integer DEFAULT 0,
  status text DEFAULT "pending",
  created_at timestamptz DEFAULT now()
);

-- Conference bookings
CREATE TABLE IF NOT EXISTS conference_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  facility_id uuid REFERENCES facilities(id),
  booking_ref text UNIQUE,
  booked_by uuid REFERENCES profiles(id),
  date date,
  start_time timestamptz,
  end_time timestamptz,
  attendees int,
  price_kes integer DEFAULT 0,
  status text DEFAULT "reserved",
  created_at timestamptz DEFAULT now()
);

-- Reading room sessions
CREATE TABLE IF NOT EXISTS reading_room_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  facility_id uuid REFERENCES facilities(id),
  profile_id uuid REFERENCES profiles(id),
  seat_number text,
  start_time timestamptz,
  end_time timestamptz,
  price_kes integer DEFAULT 0,
  status text DEFAULT "active",
  created_at timestamptz DEFAULT now()
);
