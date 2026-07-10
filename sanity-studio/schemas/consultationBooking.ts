export const consultationBooking = {
  name: 'consultationBooking',
  title: 'Consultation Bookings',
  type: 'document',
  fields: [
    { name: 'name', title: 'Patient Name', type: 'string' },
    { name: 'mobile', title: 'Mobile Number', type: 'string' },
    { name: 'email', title: 'Email Address', type: 'string' },
    { name: 'preferredTime', title: 'Preferred Time', type: 'string' },
    { name: 'message', title: 'Message', type: 'text' },
    { name: 'submittedAt', title: 'Submitted At', type: 'datetime' },
  ],
  preview: {
    select: { title: 'name', subtitle: 'mobile' },
  },
  orderings: [
    {
      title: 'Newest First',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
  ],
}

export default consultationBooking