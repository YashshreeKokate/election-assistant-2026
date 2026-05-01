# Election Assistant 2026

A modern, interactive React web application designed to guide different types of voters through the election process in India. Supports 6 voter profiles with step-by-step guides, action timelines, and an interactive map.

---

## 🚀 Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/YashshreeKokate/election-assistant-2026.git
cd election-assistant-2026

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

To build for production:
```bash
npm run build
```

---

## 🗺️ Map Integration

The Location Guide uses a real SVG India map (via `react-simple-maps` and TopoJSON) with all 29 state capital markers. It currently runs in **Demo Mode** — clicking a marker shows a sample polling station address.

To enable live map search with real locations, integrate a mapping API:

1. Go to [Google Cloud Console](https://console.cloud.google.com/maps)
2. Create a project and enable **Maps JavaScript API** + **Places API**
3. Create an API Key under **Credentials**
4. Add the script to `index.html`:
   ```html
   <script async src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&libraries=places&loading=async"></script>
   ```
5. Replace the `PollingStationMap` component's demo mode logic with the Google Places `textSearch` call

---

## 🌐 Supported Voter Verticals

| Vertical | Description |
|---|---|
| **First-time Voter** | Eligibility, Form 6, voter list verification |
| **NRI Voter** | Form 6A, postal ballot, embassy voting |
| **Student Voter** | Home vs college address, Form 8 |
| **Senior Citizen** | Form 12D (85+), accessible booths |
| **Voter with Disability (PwD)** | Saksham App, transport, postal ballot |
| **Local-Body / Municipal Voter** | Ward lists, delimitation, ward booths |

---

## 🌍 Language Support

Toggle between **English** and **हिंदी** (Hindi) using the language button in the top navigation bar.

---

## ♿ Accessibility

- Full ARIA labels and roles on all interactive elements
- Keyboard navigation (Tab to move, Enter/Space to expand steps)
- Screen reader announcements for vertical changes and step progress
- Skip-to-content link at the top of the page
- Focus-visible styles on all interactive controls

---

## 🖨️ Print & Share

- **Print Checklist**: Use the 🖨️ button to print your personalized step-by-step checklist (navigation is hidden in print view)
- **Share Guide**: Opens the native Web Share dialog (mobile) or copies the URL to clipboard (desktop)

---

## 📦 Tech Stack

- [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- [Lucide React](https://lucide.dev/) for icons
- [react-simple-maps](https://www.react-simple-maps.io/) for the India TopoJSON map

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ProfileSelector.jsx  # Home screen with 6 voter profile cards
│   ├── StepGuide.jsx        # Expandable step accordion with progress
│   ├── Timeline.jsx         # Horizontal/vertical action timeline
│   └── PollingStationMap.jsx# Interactive India map with markers
├── config/
│   └── verticals.js         # All step/timeline/map data for each vertical
├── i18n/
│   └── translations.js      # English & Hindi UI strings
├── App.jsx                  # Main shell, state, localStorage, lazy loading
└── index.css                # Tailwind + global styles
```
