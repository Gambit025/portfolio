const projects = [
  {
    "id": "poker",
    "category": "products",
    "number": "01",
    "type": "Independent product",
    "title": "AI4POKER",
    "subtitle": "Making a complex game approachable.",
    "description": "A browser-based Texas Hold’em practice environment that brings rules, guided play and contextual coaching into one learning experience.",
    "image": "poker-home.png",
    "tags": [
      "Interactive learning",
      "Product development"
    ],
    "year": "Live project",
    "url": "https://ai4poker.pages.dev/",
    "steps": [
      "Configure a table",
      "Practice a hand",
      "Review the decision"
    ],
    "sections": [
      [
        "The problem",
        "Learning the rules is only the first step. Beginners also need to understand how position, stack size and the actions of other players shape a decision."
      ],
      [
        "The approach",
        "I built an environment that lets a beginner start with a guided first hand or configure a practice table. Table size, pace, blinds and starting chips are adjustable; coaching can be enabled alongside play."
      ],
      [
        "What I built",
        "A playable practice interface with virtual chips, a guided introduction, coaching, hand history and rules accessible from the table. The interface keeps the current hand and supporting explanations close together."
      ]
    ],
    "gallery": [
      [
        "poker-settings.png",
        "Configurable table setup: player count, pace, blinds, stack size and coaching."
      ],
      [
        "poker-table.png",
        "The guided first-hand interface combines a practice table with contextual teaching."
      ]
    ]
  },
  {
    "id": "resume",
    "category": "products",
    "number": "02",
    "type": "Independent product",
    "title": "One-Stop Resume",
    "subtitle": "Let good content find its form.",
    "description": "An AI-assisted document tool that restructures an existing text-based résumé PDF and turns it into a consistently formatted document.",
    "image": "resume-home.png",
    "tags": [
      "Document workflow",
      "AI integration"
    ],
    "year": "Live project",
    "url": "https://one-stop-resume.onrender.com/",
    "steps": [
      "Upload a résumé",
      "Structure the content",
      "Preview the PDF"
    ],
    "sections": [
      [
        "The problem",
        "Reformatting a résumé often takes time away from improving its content. I wanted to make the path from an existing document to a clean layout easier to follow."
      ],
      [
        "The approach",
        "The workflow reads a text-based PDF, uses Groq to structure the extracted content, and generates a template-based PDF. A preview panel makes the intended output visible before a user begins."
      ],
      [
        "What I built",
        "An upload-to-preview experience with file constraints, explicit processing consent, a template example, preview zoom controls and guidance for checking the generated document."
      ]
    ],
    "gallery": [
      [
        "resume-home.png",
        "The working interface: upload and consent on the left, template preview on the right."
      ]
    ],
    "note": "The hosted service may need about a minute to wake after inactivity. AI processing is subject to the service’s available quota."
  },
  {
    "id": "research",
    "category": "research",
    "number": "03",
    "type": "Collaborative research · manuscript",
    "title": "Multimodal AI & virtual-human simulation",
    "subtitle": "From video signals to simulated responses.",
    "description": "A multimodal large-language-model pipeline for violence-intensity quantification, virtual-human simulation and informational micro-intervention.",
    "image": "research-exposure.png",
    "tags": [
      "Multimodal AI",
      "Statistical analysis",
      "Visualization"
    ],
    "role": "Co-author · research direction, programming, data analysis and visualization",
    "year": "Manuscript draft",
    "steps": [
      "Quantify exposure",
      "Simulate responses",
      "Evaluate interventions"
    ],
    "sections": [
      [
        "Research question",
        "How can a multimodal AI pipeline quantify the intensity of violent video content and explore its association with simulated mental-health responses?"
      ],
      [
        "Study approach",
        "The manuscript combines XD-Violence video data, violence scoring across five dimensions and a cohort of 1,154 generated virtual humans. It analyzes simulated PTSD, anxiety and depression measures, followed by three informational intervention conditions."
      ],
      [
        "My contribution",
        "I helped define the research direction and contributed programming, data analysis and research visualizations. My contribution spanned shaping the study’s focus, implementing parts of the computational workflow, analyzing the data and communicating the findings through figures."
      ],
      [
        "Reported findings and limits",
        "The manuscript reports 83.17% violence-type recognition accuracy and associations between exposure intensity and simulated symptom severity. These are manuscript-reported findings in a synthetic cohort; they do not establish clinical effectiveness in real participants."
      ]
    ],
    "gallery": [
      [
        "research-exposure.png",
        "Original manuscript Figure 3: exposure groups, generated virtual humans and statistical analyses."
      ],
      [
        "research-interventions.png",
        "Original manuscript Figure 5: intervention outcomes in the virtual-human simulation."
      ]
    ],
    "note": "Manuscript draft prepared for Journal of Affective Disorders. Selected figures are shared here; the full manuscript is not distributed."
  },
  {
    "id": "olympics",
    "category": "modeling",
    "number": "04",
    "type": "Mathematical Contest in Modeling · 2025",
    "title": "M3POC",
    "subtitle": "Looking beyond the medal table.",
    "description": "A mixed modeling approach to Olympic medal prediction, first-medal breakthroughs and the influence of coaching.",
    "visual": "medals",
    "tags": [
      "Random forest",
      "ARIMA",
      "Difference-in-differences"
    ],
    "role": "Team project · mathematical modeling and programming",
    "year": "2025",
    "award": "Honorable Mention · MCM",
    "paper": "olympics-paper.pdf",
    "certificate": "mcm-certificate.pdf",
    "certImage": "mcm-certificate.png",
    "steps": [
      "Quantify athlete strength",
      "Forecast medal counts",
      "Study coaching effects"
    ],
    "sections": [
      [
        "The question",
        "How can athlete performance, the structure of sports and historical results be combined to forecast Olympic medals and explore the potential influence of coaching?"
      ],
      [
        "Modeling approach",
        "The team graded sports using K-means, combined random-forest and ARIMA forecasts, and used logistic regression to study potential first-medal countries. A difference-in-differences component explored coaching effects."
      ],
      [
        "My contribution",
        "I was responsible for mathematical modeling and programming within the team."
      ],
      [
        "Outcome",
        "The team received Honorable Mention in the 2025 Mathematical Contest in Modeling."
      ]
    ]
  },
  {
    "id": "production",
    "category": "modeling",
    "number": "05",
    "type": "China Undergraduate Mathematical Contest in Modeling · 2024",
    "title": "Production decisions under uncertainty",
    "subtitle": "Inspect less. Decide with evidence.",
    "description": "Sequential testing, Monte Carlo simulation and genetic algorithms for inspection and disassembly decisions in electronics manufacturing.",
    "visual": "production",
    "tags": [
      "Sequential testing",
      "Monte Carlo",
      "Genetic algorithms"
    ],
    "role": "Team project · mathematical modeling and programming",
    "year": "2024",
    "award": "National Second Prize",
    "paper": "production-paper.pdf",
    "certificate": "cumcm-certificate.pdf",
    "certImage": "cumcm-certificate.png",
    "steps": [
      "Sample adaptively",
      "Simulate production",
      "Optimize decisions"
    ],
    "sections": [
      [
        "The problem",
        "A manufacturer must decide which components and finished products to inspect, whether to disassemble defective units and how to manage the resulting costs."
      ],
      [
        "Modeling approach",
        "The team combined sequential probability-ratio testing and hypothesis testing for sampling, used Monte Carlo simulation to evaluate alternative decisions, and applied a genetic algorithm to the larger multistage decision space."
      ],
      [
        "My contribution",
        "I was responsible for mathematical modeling and programming within the competition team."
      ],
      [
        "Outcome",
        "The team received the 2024 national second prize."
      ]
    ]
  },
  {
    "id": "quantdia",
    "category": "modeling",
    "number": "06",
    "type": "Statistical modeling competition · 2025",
    "title": "QuantDIA",
    "subtitle": "Prediction with an explanation.",
    "description": "An interpretable machine-learning framework for predicting drug-induced autoimmunity from molecular descriptors.",
    "visual": "molecules",
    "tags": [
      "Machine learning",
      "Feature selection",
      "Imbalanced data"
    ],
    "role": "Team project · mathematical modeling and programming",
    "year": "2025",
    "award": "Regional Second Prize",
    "paper": "quantdia-paper.docx",
    "paperLabel": "Download original report · DOCX",
    "certificate": "stat-certificate.pdf",
    "certImage": "stat-certificate.png",
    "steps": [
      "196 descriptors",
      "Compare four models",
      "Interpret the signal"
    ],
    "sections": [
      [
        "The problem",
        "Drug-induced autoimmunity is a rare adverse response. This competition project explores whether molecular descriptors can help identify potentially higher-risk compounds in a small, imbalanced dataset."
      ],
      [
        "Modeling approach",
        "The report describes 597 drugs and 196 molecular descriptors. The team compared LASSO logistic regression, ABESS, CatBoost and a self-attention neural network, with and without BorderlineSMOTE."
      ],
      [
        "My contribution",
        "I was responsible for mathematical modeling and programming as part of the competition team. The project combines model selection, class-imbalance handling and performance comparison."
      ],
      [
        "Results and interpretation",
        "The report records self-attention-network MCC of 0.7028 with resampling. The interactive comparison below shows the reported AUC values."
      ]
    ],
    "compare": true
  }
];
