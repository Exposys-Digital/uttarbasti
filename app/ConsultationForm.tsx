'use client'

import styles from './page.module.css'

export default function ConsultationForm() {
  return (
    <div className={styles.leadForm} id="lead-form">
      <input
        suppressHydrationWarning
        id="sb-name"
        type="text"
        placeholder="Your Name"
        aria-label="Your Name"
      />
      <input
        suppressHydrationWarning
        id="sb-mobile"
        type="tel"
        placeholder="Mobile Number"
        aria-label="Mobile Number"
        inputMode="numeric"
        maxLength={10}
        onInput={(e) => {
          const target = e.target as HTMLInputElement
          target.value = target.value.replace(/\D/g, '').slice(0, 10)
        }}
      />
      <input
        suppressHydrationWarning
        id="sb-email"
        type="email"
        placeholder="Email Address"
        aria-label="Email Address"
      />
      <input
        suppressHydrationWarning
        id="sb-time"
        type="text"
        placeholder="Preferred Time (e.g., Morning, Evening)"
        aria-label="Preferred Time"
      />
      <textarea
        suppressHydrationWarning
        id="sb-message"
        placeholder="Your Message (optional)"
        aria-label="Message"
        rows={3}
      />
      <button
        suppressHydrationWarning
        type="button"
        id="sb-submit"
        className={`${styles.btnPrimary} ${styles.fullWidth}`}
        onClick={() => {
          const name = (document.getElementById('sb-name') as HTMLInputElement)?.value
          const mobile = (document.getElementById('sb-mobile') as HTMLInputElement)?.value
          const email = (document.getElementById('sb-email') as HTMLInputElement)?.value
          const preferredTime = (document.getElementById('sb-time') as HTMLInputElement)?.value
          const message = (document.getElementById('sb-message') as HTMLTextAreaElement)?.value
          const btn = document.getElementById('sb-submit') as HTMLButtonElement
          const msg = document.getElementById('sb-msg')

          if (!name || !mobile) { alert('Please enter your name and mobile number.'); return }
          if (mobile.length !== 10) { alert('Please enter a valid 10-digit mobile number.'); return }

          btn.disabled = true
          btn.textContent = 'Booking\u2026'

          fetch('/api/book-consultation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, mobile, email, preferredTime, message }),
          })
            .then(r => {
              if (!r.ok) throw new Error()
              btn.textContent = 'Book Consultation'
              btn.disabled = false
              ;(document.getElementById('sb-name') as HTMLInputElement).value = ''
              ;(document.getElementById('sb-mobile') as HTMLInputElement).value = ''
              ;(document.getElementById('sb-email') as HTMLInputElement).value = ''
              ;(document.getElementById('sb-time') as HTMLInputElement).value = ''
              ;(document.getElementById('sb-message') as HTMLTextAreaElement).value = ''
              if (msg) { msg.style.color = 'green'; msg.textContent = '\u2705 Booked! We\u2019ll contact you shortly.' }
            })
            .catch(() => {
              btn.textContent = 'Book Consultation'
              btn.disabled = false
              if (msg) { msg.style.color = 'red'; msg.textContent = '\u274C Something went wrong. Please try WhatsApp.' }
            })
        }}
      >
        Book Consultation
      </button>
      <p id="sb-msg" style={{ marginTop: '0.5rem', textAlign: 'center', fontSize: '0.9rem' }}></p>
    </div>
  )
}