CREATE TABLE public.scheduling_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT,
  scheduled_date DATE NOT NULL,
  scheduled_time TEXT NOT NULL,
  timezone TEXT NOT NULL DEFAULT 'Europe/Belgrade',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.scheduling_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert scheduling requests"
  ON public.scheduling_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "No public reads"
  ON public.scheduling_requests
  FOR SELECT
  USING (false);