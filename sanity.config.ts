import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { consultationBooking } from './sanity-studio/schemas/consultationBooking'
import { ConsultationTable } from './sanity-studio/components/ConsultationTable'

export default defineConfig({
  name: 'sndh-care',
  title: 'SNDH Care',
  projectId: 'v3e1dx5g',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Consultation Bookings')
              .child(
                S.component(ConsultationTable)
                  .title('Consultation Requests')
              ),
          ]),
    }),
  ],
  schema: {
    types: [consultationBooking],
  },
})