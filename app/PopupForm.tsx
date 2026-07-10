'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'

export default function PopupForm() {
  const [visible, setVisible] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', mobile: '', email: '', preferredTime: '', message: '' })

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name === 'mobile') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10)
      setForm(prev => ({ ...prev, mobile: digitsOnly }))
      return
    }
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    if (!form.name || !form.mobile) {
      alert('Please enter your name and mobile number.')
      return
    }
    if (form.mobile.length !== 10) {
      alert('Please enter a valid 10-digit mobile number.')
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/book-consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', mobile: '', email: '', preferredTime: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.55)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '16px',
        padding: '2rem',
        width: '100%',
        maxWidth: '440px',
        position: 'relative',
        boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
        maxHeight: '90vh',
        overflowY: 'auto',
      }}>
        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            fontSize: '1.4rem',
            cursor: 'pointer',
            color: '#6b6b8a',
            lineHeight: 1,
          }}
          aria-label="Close"
        >
          ×
        </button>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <p style={{ fontSize: '2rem' }}>✅</p>
            <h3 style={{ color: '#2d1b69', fontFamily: 'Georgia, serif', marginBottom: '0.5rem' }}>
              Consultation Booked!
            </h3>
            <p style={{ color: '#6b6b8a', fontSize: '0.95rem' }}>
              We&apos;ll contact you shortly.
            </p>
            <button
              onClick={() => setVisible(false)}
              className={styles.btnPrimary}
              style={{ marginTop: '1.5rem' }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 style={{
              fontFamily: 'Georgia, serif',
              color: '#2d1b69',
              fontSize: '1.3rem',
              marginBottom: '0.4rem',
              paddingRight: '1.5rem',
            }}>
              Book a Free Consultation
            </h3>
            <p style={{ color: '#6b6b8a', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
              Fill in your details and our team will get in touch with you.
            </p>

            <div className={styles.leadForm}>
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                aria-label="Your Name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number *"
                aria-label="Mobile Number"
                value={form.mobile}
                onChange={handleChange}
                inputMode="numeric"
                maxLength={10}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                aria-label="Email Address"
                value={form.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="preferredTime"
                placeholder="Preferred Time (e.g., Morning, Evening)"
                aria-label="Preferred Time"
                value={form.preferredTime}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Your Message (optional)"
                aria-label="Message"
                rows={3}
                value={form.message}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === 'loading'}
                className={`${styles.btnPrimary} ${styles.fullWidth}`}
              >
                {status === 'loading' ? 'Booking\u2026' : 'Book Consultation'}
              </button>
              {status === 'error' && (
                <p style={{ color: 'red', textAlign: 'center', fontSize: '0.88rem', marginTop: '0.5rem' }}>
                  Something went wrong. Please try WhatsApp.
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}