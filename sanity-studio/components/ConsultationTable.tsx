'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'v3e1dx5g',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

type Booking = {
  _id: string
  name: string
  mobile: string
  email: string
  preferredTime: string
  message: string
  submittedAt: string
}

export function ConsultationTable() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  const fetchBookings = async () => {
    const data = await client.fetch(
      `*[_type == "consultationBooking"] | order(submittedAt desc)`
    )
    setBookings(data)
    setLoading(false)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this entry?')) return
    setDeletingId(id)
    try {
      const res = await fetch('/api/delete-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      })
      if (!res.ok) throw new Error()
      setBookings((prev) => prev.filter((b) => b._id !== id))
    } catch {
      alert('Failed to delete. Please try again.')
    } finally {
      setDeletingId(null)
    }
  }

  useEffect(() => {
    fetchBookings()
  }, [])

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
        Consultation Requests
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
          <thead>
            <tr style={{ background: '#f3f4f6', textAlign: 'left' }}>
              <th style={th}>Name</th>
              <th style={th}>Mobile</th>
              <th style={th}>Email</th>
              <th style={th}>Preferred Time</th>
              <th style={th}>Message</th>
              <th style={th}>Submitted At</th>
              <th style={th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b._id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                <td style={td}>{b.name}</td>
                <td style={td}>{b.mobile}</td>
                <td style={td}>{b.email || '—'}</td>
                <td style={td}>{b.preferredTime || '—'}</td>
                <td style={{ ...td, maxWidth: '220px', whiteSpace: 'pre-wrap' }}>{b.message || '—'}</td>
                <td style={td}>{b.submittedAt ? new Date(b.submittedAt).toLocaleString() : '—'}</td>
                <td style={td}>
                  <button
                    onClick={() => handleDelete(b._id)}
                    disabled={deletingId === b._id}
                    style={{
                      background: '#ef4444',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '0.4rem 0.85rem',
                      cursor: deletingId === b._id ? 'not-allowed' : 'pointer',
                      fontSize: '0.85rem',
                      opacity: deletingId === b._id ? 0.6 : 1,
                    }}
                  >
                    {deletingId === b._id ? 'Deleting…' : 'Delete'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

const th: React.CSSProperties = {
  padding: '0.75rem 1rem',
  fontWeight: '600',
  borderBottom: '2px solid #e5e7eb',
}

const td: React.CSSProperties = {
  padding: '0.75rem 1rem',
  verticalAlign: 'middle',
}