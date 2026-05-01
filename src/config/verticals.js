export const verticals = {
  "first-time": {
    name: "First‑time Voter (India)",
    steps: [
      {
        title: "Confirm eligibility",
        details: "You must be an Indian citizen, 18 years or older as of the qualifying date.",
        checklist: ["Check age criteria", "Ensure Indian citizenship status"]
      },
      {
        title: "Find constituency",
        details: "Identify the Assembly/Parliamentary constituency where your residential address falls.",
        checklist: ["Locate your neighborhood on EC website", "Identify AC/PC number"]
      },
      {
        title: "Fill Form 6",
        details: "Form 6 is required for first-time voters to register their names in the electoral roll.",
        checklist: ["Download from nvsp.in or Voter Helpline App", "Attach passport size photo", "Attach age & address proof", "Submit online/offline to ERO"]
      },
      {
        title: "Check voter list",
        details: "After submission, verify if your name has been added to the electoral roll.",
        checklist: ["Track application status using reference ID", "Search name in final electoral roll"]
      },
      {
        title: "Polling day",
        details: "Cast your vote at the designated polling station.",
        checklist: ["Find your polling booth location", "Carry valid ID (EPIC/Aadhar/PAN)", "Cast your vote!"]
      }
    ],
    timeline: ["Jan: Eligibility check", "Feb: Register", "Mar: List verification", "Apr: Election day"],
    mapLabel: "Find your polling booth"
  },
  "nri": {
    name: "Overseas / NRI Voter",
    steps: [
      {
        title: "Confirm citizenship",
        details: "You must hold an Indian passport and not have acquired citizenship of any other country.",
        checklist: ["Ensure valid Indian Passport", "Ensure you haven't taken foreign citizenship"]
      },
      {
        title: "NRI registration",
        details: "Submit Form 6A to register as an overseas elector in your home constituency.",
        checklist: ["Download Form 6A", "Attach visa and passport copies", "Submit to ERO online or via post"]
      },
      {
        title: "Postal voting",
        details: "Apply for a postal ballot if returning to India is not feasible.",
        checklist: ["Check ETPBS eligibility for your region", "Submit required forms on time"]
      },
      {
        title: "Embassy/consulate voting",
        details: "Vote at the designated Indian Mission if this option is available in your country of residence.",
        checklist: ["Verify if embassy voting is available", "Register with the local embassy"]
      },
      {
        title: "Track status",
        details: "Monitor your application and ballot status.",
        checklist: ["Check name in NRI electoral roll", "Track postal ballot delivery (if applicable)"]
      }
    ],
    timeline: ["Jan: Register as NRI", "Feb: Apply for postal ballot", "Apr: Vote at embassy"],
    mapLabel: "Find Indian embassy/consulate"
  },
  "student": {
    name: "Student Voter",
    steps: [
      {
        title: "Choose home/college address",
        details: "Decide whether to vote from your permanent home address or your current hostel/college address.",
        checklist: ["Evaluate travel feasibility on election day", "Decide on address preference"]
      },
      {
        title: "Update address",
        details: "If you change your address to your college town, submit Form 8 for shifting residence.",
        checklist: ["Obtain hostel warden certificate/rent agreement", "Submit Form 8 online"]
      },
      {
        title: "Register",
        details: "Register as a new voter if not already registered.",
        checklist: ["Fill Form 6 with current address proof", "Submit application"]
      },
      {
        title: "Find polling station",
        details: "Locate the polling station corresponding to your registered address.",
        checklist: ["Check Voter Helpline App", "Note down part number and serial number"]
      },
      {
        title: "Voting day",
        details: "Go to your booth and vote.",
        checklist: ["Carry Student ID / EPIC", "Cast your vote"]
      }
    ],
    timeline: ["Jan: Decide address", "Feb: Update if needed", "Mar: Register", "Apr: Vote"],
    mapLabel: "Polling booth near college/home"
  },
  "senior": {
    name: "Senior Citizen Voter",
    steps: [
      {
        title: "Verify details",
        details: "Check that your name and details are correct on the electoral roll.",
        checklist: ["Search name on NVSP", "Submit Form 8 for any corrections"]
      },
      {
        title: "Opt for postal ballot (if eligible/desired)",
        details: "Voters aged 85+ can opt to vote from home via postal ballot (Form 12D).",
        checklist: ["Check eligibility (85+ years)", "Fill and submit Form 12D within 5 days of election notification"]
      },
      {
        title: "Find accessible polling station",
        details: "If voting in person, check for accessibility features at your polling booth.",
        checklist: ["Request wheelchair assistance via Saksham app", "Locate ground-floor booth"]
      },
      {
        title: "Vote from home or booth",
        details: "Complete the voting process either at home (if 12D approved) or at the booth.",
        checklist: ["Keep EPIC ready", "Coordinate with polling team (for home voting)"]
      }
    ],
    timeline: ["Jan: Check list", "Feb: Apply for Form 12D (if 85+)", "Apr: Home voting / Election day"],
    mapLabel: "Find accessible polling booth"
  },
  "disability": {
    name: "Voter with Disability (PwD)",
    steps: [
      {
        title: "Register as PwD via Saksham App",
        details: "Mark yourself as PwD in the electoral roll to avail special facilities.",
        checklist: ["Download ECI Saksham App", "Update PwD status with valid certificate"]
      },
      {
        title: "Request wheelchair/assistant",
        details: "Request pick-up/drop facility or wheelchair at the polling station.",
        checklist: ["Book wheelchair via Saksham app", "Register for free transport"]
      },
      {
        title: "Opt for postal ballot (optional)",
        details: "PwD voters with 40%+ disability can opt for home voting.",
        checklist: ["Submit Form 12D within 5 days of notification", "Wait for polling officials at home"]
      },
      {
        title: "Accessible voting day",
        details: "Cast your vote utilizing the provided facilities.",
        checklist: ["Carry PwD certificate and EPIC", "Use braille ballot / ramp / companion as needed"]
      }
    ],
    timeline: ["Jan: Mark PwD status", "Feb: Apply for postal/transport", "Apr: Vote"],
    mapLabel: "Find accessible booth & transport"
  },
  "municipal": {
    name: "Local-Body Election Voter",
    steps: [
      {
        title: "Check municipal ward list",
        details: "State Election Commissions conduct local polls. Check your State EC website.",
        checklist: ["Visit State Election Commission portal", "Find your ward number"]
      },
      {
        title: "Verify ward limits",
        details: "Ensure you know your exact ward boundaries which may change post-delimitation.",
        checklist: ["Check recent delimitation maps", "Confirm polling booth for your specific block"]
      },
      {
        title: "Know local candidates",
        details: "Find out the corporator/councillor candidates in your ward.",
        checklist: ["Review candidate affidavits", "Understand local manifestos"]
      },
      {
        title: "Find ward polling station",
        details: "Local booths may differ from Lok Sabha/Assembly booths.",
        checklist: ["Check State EC voter slip", "Locate booth"]
      },
      {
        title: "Voting day",
        details: "Cast your vote for local governance.",
        checklist: ["Carry valid ID", "Vote"]
      }
    ],
    timeline: ["Month 1: Ward delimitation check", "Month 2: Candidate list", "Month 3: Election day"],
    mapLabel: "Find your ward's polling booth"
  }
};
