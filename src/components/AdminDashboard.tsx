'use client'

import { useState, useEffect, useCallback } from 'react'
import { supabase, ContactSubmission } from '@/lib/supabase'
import { Phone, Mail, Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react'

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<'all' | 'new' | 'contacted' | 'quoted' | 'completed'>('all')

  const fetchSubmissions = useCallback(async () => {
    try {
      setLoading(true)
      
      // Check if Supabase is configured
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
      if (!supabaseUrl || supabaseUrl === 'https://placeholder.supabase.co') {
        setError('Supabase not configured. Please set up your environment variables.')
        setSubmissions([])
        return
      }

      let query = supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false })

      if (filter !== 'all') {
        query = query.eq('status', filter)
      }

      const { data, error } = await query

      if (error) {
        throw error
      }

      setSubmissions(data || [])
    } catch (err) {
      console.error('Error fetching submissions:', err)
      setError('Failed to load submissions')
    } finally {
      setLoading(false)
    }
  }, [filter])

  useEffect(() => {
    fetchSubmissions()
  }, [fetchSubmissions])

  const updateStatus = async (id: string, newStatus: ContactSubmission['status']) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ status: newStatus })
        .eq('id', id)

      if (error) {
        throw error
      }

      // Refresh the list
      fetchSubmissions()
    } catch (err) {
      console.error('Error updating status:', err)
      setError('Failed to update status')
    }
  }

  const getStatusIcon = (status: ContactSubmission['status']) => {
    switch (status) {
      case 'new':
        return <AlertCircle className="w-4 h-4 text-red-500" />
      case 'contacted':
        return <Clock className="w-4 h-4 text-yellow-500" />
      case 'quoted':
        return <Mail className="w-4 h-4 text-blue-500" />
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: ContactSubmission['status']) => {
    switch (status) {
      case 'new':
        return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      case 'contacted':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'quoted':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading submissions...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Submissions Dashboard
          </h1>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            {(['all', 'new', 'contacted', 'quoted', 'completed'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === status
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)} ({status === 'all' ? submissions.length : submissions.filter(s => s.status === status).length})
              </button>
            ))}
          </div>

          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
              <p className="text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}
        </div>

        {/* Submissions list */}
        <div className="space-y-4">
          {submissions.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No submissions found</p>
            </div>
          ) : (
            submissions.map((submission) => (
              <div
                key={submission.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {submission.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <Phone className="w-4 h-4" />
                      <span>{submission.phone}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(submission.status)}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(submission.status)}`}>
                      {submission.status}
                    </span>
                  </div>
                </div>

                {submission.service && (
                  <div className="mb-3">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Service: </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{submission.service}</span>
                  </div>
                )}

                {submission.message && (
                  <div className="mb-4">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{submission.message}</p>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(submission.created_at!).toLocaleDateString()}</span>
                    <span>{new Date(submission.created_at!).toLocaleTimeString()}</span>
                  </div>

                  <div className="flex space-x-2">
                    {submission.status !== 'contacted' && (
                      <button
                        onClick={() => updateStatus(submission.id!, 'contacted')}
                        className="px-3 py-1 bg-yellow-100 hover:bg-yellow-200 text-yellow-800 rounded text-sm font-medium transition-colors"
                      >
                        Mark Contacted
                      </button>
                    )}
                    {submission.status !== 'quoted' && (
                      <button
                        onClick={() => updateStatus(submission.id!, 'quoted')}
                        className="px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded text-sm font-medium transition-colors"
                      >
                        Mark Quoted
                      </button>
                    )}
                    {submission.status !== 'completed' && (
                      <button
                        onClick={() => updateStatus(submission.id!, 'completed')}
                        className="px-3 py-1 bg-green-100 hover:bg-green-200 text-green-800 rounded text-sm font-medium transition-colors"
                      >
                        Mark Completed
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
