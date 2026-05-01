import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';
import { translations } from '../i18n/translations';

jest.mock('../services/verticalService', () => ({
  fetchVerticals: jest.fn(() => Promise.resolve({
    "first-time": {
      name: "First-time Voter",
      steps: [{ title: "Step 1", details: "Details", checklist: [] }]
    }
  }))
}));

describe('App Component', () => {
  test('renders welcome heading', async () => {
    render(<App />);
    const heading = await screen.findByText(new RegExp(translations.en.home.heading, 'i'));
    expect(heading).toBeInTheDocument();
  });

  test('selects a profile card and shows the guide', async () => {
    render(<App />);
    
    // Find "First-time Voter" card and click it
    const profileName = translations.en.profiles['first-time'].name;
    const card = await screen.findByText(profileName);
    fireEvent.click(card);

    // Should show the guide heading
    await waitFor(() => {
      const guideHeading = screen.getByText(new RegExp(profileName, 'i'));
      expect(guideHeading).toBeInTheDocument();
    });
  });

  test('can go back to profile selection', async () => {
    render(<App />);
    
    // Select profile
    const card = await screen.findByText(translations.en.profiles['first-time'].name);
    fireEvent.click(card);

    // Find "Change Voter Type" button and click it
    await waitFor(() => {
      const backButtons = screen.getAllByLabelText(translations.en.changeVoterType);
      fireEvent.click(backButtons[0]);
    });

    // Should be back at the home screen
    await waitFor(() => {
      const heading = screen.getByText(new RegExp(translations.en.home.heading, 'i'));
      expect(heading).toBeInTheDocument();
    });
  });
});
