import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import StepGuide from '../components/StepGuide';
import { translations } from '../i18n/translations';

const mockVertical = {
  name: "Test Voter",
  steps: [
    {
      title: "Step 1",
      details: "Details 1",
      checklist: ["Task 1", "Task 2"]
    },
    {
      title: "Step 2",
      details: "Details 2",
      checklist: ["Task 3"]
    }
  ]
};

describe('StepGuide Component', () => {
  const t = translations.en;

  test('renders steps and toggles expansion', () => {
    const setCompletedSteps = jest.fn();
    render(
      <StepGuide 
        vertical={mockVertical} 
        completedSteps={[]} 
        setCompletedSteps={setCompletedSteps} 
        t={t} 
      />
    );

    // Should show the title of the first step
    expect(screen.getByText('Step 1')).toBeInTheDocument();

    // First step is usually expanded by default in the component state (useState(0))
    // Check if details are visible
    expect(screen.getByText('Details 1')).toBeInTheDocument();

    // Click the second step to expand it
    const step2Header = screen.getByText('Step 2');
    fireEvent.click(step2Header);

    // Now Step 2 details should be visible
    expect(screen.getByText('Details 2')).toBeInTheDocument();
  });

  test('can mark a step as complete', () => {
    const setCompletedSteps = jest.fn();
    const { rerender } = render(
      <StepGuide 
        vertical={mockVertical} 
        completedSteps={[]} 
        setCompletedSteps={setCompletedSteps} 
        t={t} 
      />
    );

    // Find the complete button for the expanded step (Step 1)
    const completeButtons = screen.getAllByLabelText(new RegExp(t.guide.markComplete, 'i'));
    fireEvent.click(completeButtons[0]);

    // setCompletedSteps should be called with the index 0
    expect(setCompletedSteps).toHaveBeenCalledWith([0]);
  });

  test('shows completed state correctly', () => {
    render(
      <StepGuide 
        vertical={mockVertical} 
        completedSteps={[0]} 
        setCompletedSteps={jest.fn()} 
        t={t} 
      />
    );

    // The title should have a "completed" screen reader text or similar
    // And the button should say "Mark as Incomplete"
    expect(screen.getByLabelText(new RegExp(t.guide.markIncomplete, 'i'))).toBeInTheDocument();
  });
});
