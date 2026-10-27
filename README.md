# Maximum Clinics

Single-page site for Maximum Clinics, a multi-specialty clinic in Jammu.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Update clinic details

Phone numbers, the WhatsApp link, address, hours, doctors, specialties, and reviews live in `src/lib/site.ts`. Replace the placeholder contact details before sharing this with patients.

WhatsApp and phone buttons stay visible but do nothing while `contactActionsEnabled` is `false` in `src/lib/site.ts`. Set it to `true` after the client approves those actions.

The appointment form checks the fields, then prepares a message on this device. It does not store the request. Patients confirm the visit by WhatsApp or phone.
