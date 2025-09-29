import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Server-side Supabase client with service role key (keep this secret!)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables')
}

const supabase = supabaseUrl && supabaseServiceKey 
  ? createClient(supabaseUrl, supabaseServiceKey)
  : null

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, service, message } = body

    // Validate required fields
    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      )
    }

    // Check if Supabase is configured
    if (!supabase) {
      console.log('Supabase not configured, simulating form submission:', { name, phone, service, message })
      return NextResponse.json(
        { success: true, message: 'Form submitted successfully (demo mode)' },
        { status: 200 }
      )
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: name.trim(),
          phone: phone.trim(),
          service: service || null,
          message: message?.trim() || null,
          status: 'new'
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to submit form' },
        { status: 500 }
      )
    }

    if (data && data.length > 0) {
      console.log('Form submitted successfully:', data[0])
      return NextResponse.json(
        { success: true, message: 'Form submitted successfully' },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        { error: 'No data returned from submission' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
