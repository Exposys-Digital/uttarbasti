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
      />
      <input
        suppressHydrationWarning
        id="sb-time"
        type="text"
        placeholder="Preferred Time (e.g., Morning, Evening)"
        aria-label="Preferred Time"
      />
      <button
        suppressHydrationWarning
        type="button"
        id="sb-submit"
        className={`${styles.btnPrimary} ${styles.fullWidth}`}
        onClick={() => {
          const name = (document.getElementById('sb-name') as HTMLInputElement)?.value
          const mobile = (document.getElementById('sb-mobile') as HTMLInputElement)?.value
          const preferredTime = (document.getElementById('sb-time') as HTMLInputElement)?.value
          const btn = document.getElementById('sb-submit') as HTMLButtonElement
          const msg = document.getElementById('sb-msg')

          if (!name || !mobile) { alert('Please enter your name and mobile number.'); return }

          btn.disabled = true
          btn.textContent = 'Booking\u2026'

          fetch('/api/book-consultation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, mobile, preferredTime, page: 'uttar-basti' }),
          })
            .then(r => {
              if (!r.ok) throw new Error()
              btn.textContent = 'Book Consultation'
              btn.disabled = false
              ;(document.getElementById('sb-name') as HTMLInputElement).value = ''
              ;(document.getElementById('sb-mobile') as HTMLInputElement).value = ''
              ;(document.getElementById('sb-time') as HTMLInputElement).value = ''
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