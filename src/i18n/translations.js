export const translations = {
  en: {
    appTitle: "Election Assistant",
    appYear: "2026",
    changeVoterType: "Change Voter Type",
    backToProfiles: "Back to Profiles",
    reset: "Reset",
    print: "Print Checklist",
    share: "Share Guide",
    language: "हिंदी",
    demoMode: "Demo Mode:",
    demoModeText: "Click a marker on the map to view sample polling station details.",
    searchingFor: "Searching",
    home: {
      heading: "Welcome to the",
      subheading: "Election Assistant",
      description: "Your personalized guide to the democratic process. Select your voter profile below to get started.",
      getStarted: "Get Started",
    },
    guide: {
      subtitle: "Follow these steps to ensure your voice is heard in the upcoming elections.",
      stepsTitle: "Step-by-Step Guide",
      timelineTitle: "Action Timeline",
      locationTitle: "Location Guide",
      complete: "Steps Complete",
      markComplete: "Mark Step as Complete",
      markIncomplete: "Mark as Incomplete",
      checklistLabel: "Checklist for this step",
    },
    profiles: {
      "first-time": {
        name: "First-time Voter",
        subtitle: "Voting in India",
        description: "Just turned 18? Discover how to register and cast your very first vote.",
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
      nri: {
        name: "NRI Voter",
        subtitle: "Overseas Citizen",
        description: "Living abroad? Find out how to participate in the democratic process.",
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
      student: {
        name: "Student Voter",
        subtitle: "College / University",
        description: "Studying away from home? Learn how to vote from your current residence.",
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
      senior: {
        name: "Senior Citizen",
        subtitle: "85+ or Elderly Voters",
        description: "Special provisions and home voting options for our senior citizens.",
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
      disability: {
        name: "Voter with Disability",
        subtitle: "PwD Category",
        description: "Accessible voting options, transport facilities, and special assistance.",
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
      municipal: {
        name: "Local-Body Voter",
        subtitle: "Municipal / Panchayat",
        description: "Information for local ward elections and municipal corporation voting.",
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
      },
    },
    mapTips: {
      nri: "NRI voters: Your designated polling station is typically the Indian embassy or consulate in your country of residence.",
      default: "Tip: Most polling booths are located in government schools, community halls, or local municipal buildings.",
    },
    results: {
      embassyFound: "Embassy Found",
      stationFound: "Polling Station Found",
      consulateGeneral: "Consulate General",
      centralBooth: "Central Polling Booth",
    },
  },
  hi: {
    appTitle: "चुनाव सहायक",
    appYear: "२०२६",
    changeVoterType: "मतदाता प्रकार बदलें",
    backToProfiles: "प्रोफ़ाइल पर वापस",
    reset: "रीसेट",
    print: "सूची प्रिंट करें",
    share: "गाइड शेयर करें",
    language: "English",
    demoMode: "डेमो मोड:",
    demoModeText: "नमूना मतदान केंद्र विवरण देखने के लिए मानचित्र पर एक मार्कर पर क्लिक करें।",
    searchingFor: "खोज रहे हैं",
    home: {
      heading: "आपका स्वागत है",
      subheading: "चुनाव सहायक",
      description: "लोकतांत्रिक प्रक्रिया के लिए आपका व्यक्तिगत मार्गदर्शक। शुरू करने के लिए अपनी मतदाता प्रोफ़ाइल चुनें।",
      getStarted: "शुरू करें",
    },
    guide: {
      subtitle: "सुनिश्चित करें कि आपकी आवाज़ आगामी चुनावों में सुनी जाए।",
      stepsTitle: "चरण-दर-चरण मार्गदर्शिका",
      timelineTitle: "कार्य समयरेखा",
      locationTitle: "स्थान मार्गदर्शिका",
      complete: "चरण पूर्ण",
      markComplete: "चरण पूर्ण के रूप में चिह्नित करें",
      markIncomplete: "अपूर्ण के रूप में चिह्नित करें",
      checklistLabel: "इस चरण के लिए जाँचसूची",
    },
    profiles: {
      "first-time": {
        name: "पहली बार मतदाता",
        subtitle: "भारत में मतदान",
        description: "18 साल हो गए? पहली बार मतदाता के रूप में पंजीकरण करें।",
        steps: [
          {
            title: "पात्रता की पुष्टि करें",
            details: "आपको अर्हता तिथि के अनुसार भारतीय नागरिक, 18 वर्ष या उससे अधिक आयु का होना चाहिए।",
            checklist: ["आयु मानदंड की जांच करें", "भारतीय नागरिकता की स्थिति सुनिश्चित करें"]
          },
          {
            title: "निर्वाचन क्षेत्र खोजें",
            details: "उस विधानसभा/संसदीय क्षेत्र की पहचान करें जहां आपका आवासीय पता आता है।",
            checklist: ["निर्वाचन आयोग की वेबसाइट पर अपना क्षेत्र खोजें", "AC/PC नंबर की पहचान करें"]
          },
          {
            title: "फॉर्म 6 भरें",
            details: "पहली बार मतदाताओं के लिए मतदाता सूची में अपना नाम दर्ज कराने के लिए फॉर्म 6 आवश्यक है।",
            checklist: ["nvsp.in या वोटर हेल्पलाइन ऐप से डाउनलोड करें", "पासपोर्ट आकार का फोटो संलग्न करें", "आयु और पते का प्रमाण संलग्न करें", "ऑनलाइन/ऑफलाइन ERO को जमा करें"]
          },
          {
            title: "मतदाता सूची जांचें",
            details: "जमा करने के बाद, सत्यापित करें कि आपका नाम मतदाता सूची में जोड़ दिया गया है।",
            checklist: ["संदर्भ आईडी का उपयोग करके आवेदन की स्थिति ट्रैक करें", "अंतिम मतदाता सूची में नाम खोजें"]
          },
          {
            title: "मतदान का दिन",
            details: "नामित मतदान केंद्र पर अपना वोट डालें।",
            checklist: ["अपने पोलिंग बूथ का स्थान खोजें", "वैध आईडी (EPIC/आधार/पैन) साथ रखें", "अपना वोट डालें!"]
          }
        ],
        timeline: ["जनवरी: पात्रता जांच", "फरवरी: पंजीकरण", "मार्च: सूची सत्यापन", "अप्रैल: मतदान दिवस"],
        mapLabel: "अपना पोलिंग बूथ खोजें"
      },
      nri: {
        name: "NRI मतदाता",
        subtitle: "विदेशी नागरिक",
        description: "विदेश में रहते हैं? लोकतांत्रिक प्रक्रिया में भाग लेने का तरीका जानें।",
        steps: [
          {
            title: "नागरिकता की पुष्टि करें",
            details: "आपके पास भारतीय पासपोर्ट होना चाहिए और किसी अन्य देश की नागरिकता प्राप्त नहीं की होनी चाहिए।",
            checklist: ["वैध भारतीय पासपोर्ट सुनिश्चित करें", "सुनिश्चित करें कि आपने विदेशी नागरिकता नहीं ली है"]
          },
          {
            title: "NRI पंजीकरण",
            details: "अपने गृह निर्वाचन क्षेत्र में विदेशी मतदाता के रूप में पंजीकरण करने के लिए फॉर्म 6A जमा करें।",
            checklist: ["फॉर्म 6A डाउनलोड करें", "वीजा और पासपोर्ट की प्रतियां संलग्न करें", "ERO को ऑनलाइन या डाक द्वारा जमा करें"]
          },
          {
            title: "डाक मतदान",
            details: "यदि भारत लौटना संभव नहीं है, तो डाक मतपत्र के लिए आवेदन करें।",
            checklist: ["अपने क्षेत्र के लिए ETPBS पात्रता की जांच करें", "आवश्यक फॉर्म समय पर जमा करें"]
          },
          {
            title: "दूतावास/वाणिज्य दूतावास मतदान",
            details: "यदि आपके निवास के देश में यह विकल्प उपलब्ध है, तो नामित भारतीय मिशन में मतदान करें।",
            checklist: ["सत्यापित करें कि दूतावास मतदान उपलब्ध है या नहीं", "स्थानीय दूतावास के साथ पंजीकरण करें"]
          },
          {
            title: "स्थिति ट्रैक करें",
            details: "अपने आवेदन और मतपत्र की स्थिति की निगरानी करें।",
            checklist: ["NRI मतदाता सूची में नाम जांचें", "डाक मतपत्र वितरण ट्रैक करें (यदि लागू हो)"]
          }
        ],
        timeline: ["जनवरी: NRI पंजीकरण", "फरवरी: डाक मतपत्र आवेदन", "अप्रैल: दूतावास में मतदान"],
        mapLabel: "भारतीय दूतावास/वाणिज्य दूतावास खोजें"
      },
      student: {
        name: "छात्र मतदाता",
        subtitle: "कॉलेज / विश्वविद्यालय",
        description: "घर से दूर पढ़ रहे हैं? अपने वर्तमान निवास से मतदान करना सीखें।",
        steps: [
          {
            title: "घर या कॉलेज का पता चुनें",
            details: "तय करें कि आप अपने स्थायी घर के पते से वोट डालना चाहते हैं या अपने वर्तमान हॉस्टल/कॉलेज के पते से।",
            checklist: ["मतदान के दिन यात्रा की व्यवहार्यता का मूल्यांकन करें", "पते की प्राथमिकता तय करें"]
          },
          {
            title: "पता अपडेट करें",
            details: "यदि आप अपना पता अपने कॉलेज शहर में बदलते हैं, तो निवास बदलने के लिए फॉर्म 8 जमा करें।",
            checklist: ["हॉस्टल वार्डन प्रमाण पत्र/किराया समझौता प्राप्त करें", "ऑनलाइन फॉर्म 8 जमा करें"]
          },
          {
            title: "पंजीकरण करें",
            details: "यदि पहले से पंजीकृत नहीं हैं, तो नए मतदाता के रूप में पंजीकरण करें।",
            checklist: ["वर्तमान पते के प्रमाण के साथ फॉर्म 6 भरें", "आवेदन जमा करें"]
          },
          {
            title: "मतदान केंद्र खोजें",
            details: "अपने पंजीकृत पते के अनुसार मतदान केंद्र का पता लगाएं।",
            checklist: ["वोटर हेल्पलाइन ऐप देखें", "पार्ट नंबर और सीरियल नंबर नोट करें"]
          },
          {
            title: "मतदान का दिन",
            details: "अपने बूथ पर जाएं और वोट दें।",
            checklist: ["छात्र आईडी / EPIC साथ रखें", "अपना वोट डालें"]
          }
        ],
        timeline: ["जनवरी: पता तय करें", "फरवरी: जरूरत हो तो अपडेट करें", "मार्च: पंजीकरण", "अप्रैल: मतदान"],
        mapLabel: "कॉलेज/घर के पास पोलिंग बूथ"
      },
      senior: {
        name: "वरिष्ठ नागरिक",
        subtitle: "85+ या बुजुर्ग मतदाता",
        description: "वरिष्ठ नागरिकों के लिए विशेष प्रावधान और घर से मतदान के विकल्प।",
        steps: [
          {
            title: "विवरण सत्यापित करें",
            details: "जांचें कि मतदाता सूची में आपका नाम और विवरण सही हैं।",
            checklist: ["NVSP पर नाम खोजें", "किसी भी सुधार के लिए फॉर्म 8 जमा करें"]
          },
          {
            title: "डाक मतपत्र का विकल्प चुनें (यदि पात्र/इच्छुक हों)",
            details: "85+ वर्ष के मतदाता डाक मतपत्र (फॉर्म 12D) के माध्यम से घर से मतदान का विकल्प चुन सकते हैं।",
            checklist: ["पात्रता जांचें (85+ वर्ष)", "चुनाव अधिसूचना के 5 दिनों के भीतर फॉर्म 12D भरें और जमा करें"]
          },
          {
            title: "सुलभ मतदान केंद्र खोजें",
            details: "यदि व्यक्तिगत रूप से मतदान कर रहे हैं, तो अपने पोलिंग बूथ पर सुलभ सुविधाओं की जांच करें।",
            checklist: ["सक्षम ऐप के माध्यम से व्हीलचेयर सहायता का अनुरोध करें", "ग्राउंड फ्लोर बूथ का पता लगाएं"]
          },
          {
            title: "घर या बूथ से मतदान करें",
            details: "मतदान प्रक्रिया या तो घर पर (यदि 12D स्वीकृत है) या बूथ पर पूरी करें।",
            checklist: ["EPIC तैयार रखें", "मतदान टीम के साथ समन्वय करें (घर से मतदान के लिए)"]
          }
        ],
        timeline: ["जनवरी: सूची जांचें", "फरवरी: फॉर्म 12D के लिए आवेदन करें (यदि 85+ हैं)", "अप्रैल: घर से मतदान / मतदान दिवस"],
        mapLabel: "सुलभ पोलिंग बूथ खोजें"
      },
      disability: {
        name: "दिव्यांग मतदाता",
        subtitle: "PwD श्रेणी",
        description: "सुलभ मतदान विकल्प, परिवहन सुविधाएं और विशेष सहायता।",
        steps: [
          {
            title: "सक्षम ऐप के माध्यम से PwD के रूप में पंजीकरण करें",
            details: "विशेष सुविधाओं का लाभ उठाने के लिए मतदाता सूची में खुद को PwD के रूप में चिह्नित करें।",
            checklist: ["ECI सक्षम ऐप डाउनलोड करें", "वैध प्रमाण पत्र के साथ PwD स्थिति अपडेट करें"]
          },
          {
            title: "व्हीलचेयर/सहायक का अनुरोध करें",
            details: "मतदान केंद्र पर पिक-अप/ड्रॉप सुविधा या व्हीलचेयर का अनुरोध करें।",
            checklist: ["सक्षम ऐप के माध्यम से व्हीलचेयर बुक करें", "मुफ्त परिवहन के लिए पंजीकरण करें"]
          },
          {
            title: "डाक मतपत्र का विकल्प चुनें (वैकल्पिक)",
            details: "40%+ विकलांगता वाले PwD मतदाता घर से मतदान का विकल्प चुन सकते हैं।",
            checklist: ["अधिसूचना के 5 दिनों के भीतर फॉर्म 12D जमा करें", "घर पर मतदान अधिकारियों की प्रतीक्षा करें"]
          },
          {
            title: "सुलभ मतदान दिवस",
            details: "दी गई सुविधाओं का उपयोग करते हुए अपना वोट डालें।",
            checklist: ["PwD प्रमाण पत्र और EPIC साथ रखें", "जरूरत के अनुसार ब्रेल मतपत्र / रैंप / साथी का उपयोग करें"]
          }
        ],
        timeline: ["जनवरी: PwD स्थिति चिह्नित करें", "फरवरी: डाक/परिवहन के लिए आवेदन करें", "अप्रैल: मतदान"],
        mapLabel: "सुलभ बूथ और परिवहन खोजें"
      },
      municipal: {
        name: "स्थानीय निकाय मतदाता",
        subtitle: "नगरपालिका / पंचायत",
        description: "स्थानीय वार्ड चुनाव और नगर निगम मतदान की जानकारी।",
        steps: [
          {
            title: "नगरपालिका वार्ड सूची जांचें",
            details: "राज्य चुनाव आयोग स्थानीय चुनाव कराते हैं। अपने राज्य EC की वेबसाइट जांचें।",
            checklist: ["राज्य चुनाव आयोग पोर्टल पर जाएं", "अपना वार्ड नंबर खोजें"]
          },
          {
            title: "वार्ड सीमाएं सत्यापित करें",
            details: "सुनिश्चित करें कि आप अपनी सटीक वार्ड सीमाओं को जानते हैं जो परिसीमन के बाद बदल सकती हैं।",
            checklist: ["हाल के परिसीमन मानचित्र देखें", "अपने विशिष्ट ब्लॉक के लिए पोलिंग बूथ की पुष्टि करें"]
          },
          {
            title: "स्थानीय उम्मीदवारों को जानें",
            details: "अपने वार्ड में कॉर्पोरेटर/पार्षद उम्मीदवारों का पता लगाएं।",
            checklist: ["उम्मीदवारों के हलफनामों की समीक्षा करें", "स्थानीय घोषणापत्रों को समझें"]
          },
          {
            title: "वार्ड मतदान केंद्र खोजें",
            details: "स्थानीय बूथ लोकसभा/विधानसभा बूथों से भिन्न हो सकते हैं।",
            checklist: ["राज्य EC मतदाता पर्ची जांचें", "बूथ का पता लगाएं"]
          },
          {
            title: "मतदान का दिन",
            details: "स्थानीय शासन के लिए अपना वोट डालें।",
            checklist: ["वैध आईडी साथ रखें", "वोट दें"]
          }
        ],
        timeline: ["महीना 1: वार्ड परिसीमन जांच", "महीना 2: उम्मीदवार सूची", "महीना 3: मतदान दिवस"],
        mapLabel: "अपने वार्ड का पोलिंग बूथ खोजें"
      },
    },
    mapTips: {
      nri: "NRI मतदाता: आपका नामित मतदान केंद्र आमतौर पर आपके देश में भारतीय दूतावास या वाणिज्य दूतावास है।",
      default: "सुझाव: अधिकांश मतदान केंद्र सरकारी स्कूलों, सामुदायिक हॉलों या स्थानीय नगर निगम भवनों में स्थित हैं।",
    },
    results: {
      embassyFound: "दूतावास मिला",
      stationFound: "मतदान केंद्र मिला",
      consulateGeneral: "महावाणिज्य दूतावास",
      centralBooth: "केंद्रीय मतदान केंद्र",
    },
  },
};
