const projects = [
  {
    "id": "poker",
    "category": "products",
    "number": "01",
    "type": "Independent product",
    "title": "AI4POKER",
    "subtitle": "Learn the game. Understand the decision.",
    "description": "A browser-based Texas Hold’em learning environment that combines a local game engine, guided practice and contextual coaching.",
    "image": "poker-table.png",
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
        "Project focus",
        "Help beginners connect the rules of Texas Hold’em with the decisions they make during a hand."
      ],
      [
        "Implementation",
        "A React and TypeScript interface connects to a local game engine. Web Workers handle equity estimation; Web Audio supplies locally generated sound."
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
    ],
    "stackLabel": "Technology stack",
    "stack": [
      "React & TypeScript",
      "Vite & Tailwind CSS",
      "Web Workers",
      "Web Audio API",
      "Cloudflare Pages"
    ],
    "highlights": [
      [
        "A complete practice environment",
        "Configurable tables, betting rounds, hand history and settlement bring the rules into a working game."
      ],
      [
        "Coaching connected to game state",
        "The guided first hand and contextual advice respond to the current position, action and stage of play."
      ],
      [
        "Computation off the main thread",
        "A Web Worker estimates hand equity while the interface stays focused on the table and the player’s next action."
      ]
    ]
  },
  {
    "id": "resume",
    "category": "products",
    "number": "02",
    "type": "Independent product",
    "title": "One-Stop Resume",
    "subtitle": "From an existing résumé to a polished PDF.",
    "description": "A full-stack document tool that extracts résumé content, structures it with AI and renders a new, template-based PDF.",
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
        "Project focus",
        "Reduce the manual work involved in turning an existing résumé into a consistent document layout."
      ],
      [
        "Implementation",
        "A Flask API coordinates PDF extraction, AI structuring and browser-based rendering. The frontend follows each job through to its final PDF."
      ]
    ],
    "gallery": [
      [
        "resume-home.png",
        "The working interface: upload and consent on the left, template preview on the right."
      ]
    ],
    "note": "The hosted service may need about a minute to wake after inactivity. AI processing is subject to the service’s available quota.",
    "stackLabel": "Technology stack",
    "stack": [
      "HTML, CSS & JavaScript",
      "Python & Flask",
      "PyMuPDF",
      "Groq API",
      "Playwright / Chromium",
      "Docker & Render"
    ],
    "highlights": [
      [
        "A complete document pipeline",
        "PyMuPDF extracts text, Groq structures the content, and deterministic HTML/CSS templates are rendered to PDF with Chromium."
      ],
      [
        "An asynchronous workflow",
        "A job-based API connects upload, processing, preview and download, with real task states displayed in the browser."
      ],
      [
        "Preview the actual output",
        "Page-by-page previews and zoom controls let users inspect the generated document before downloading it."
      ]
    ]
  },
  {
    "id": "research",
    "category": "research",
    "number": "03",
    "type": "Collaborative research · manuscript",
    "title": "Multimodal AI & virtual-human simulation",
    "subtitle": "Connecting multimodal signals with simulated responses.",
    "description": "Collaborative research combining video-intensity quantification, generated virtual humans and statistical analysis of informational interventions.",
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
        "Research focus",
        "Explore how quantified video exposure relates to simulated PTSD, depression and anxiety measures."
      ],
      [
        "Method",
        "The pipeline combines XD-Violence data, a PandaGPT-based agent and regression analysis of the generated cohort."
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
    "note": "Manuscript prepared for Journal of Affective Disorders. Selected figures are shown here; the full manuscript is not distributed.",
    "stackLabel": "Model stack & analysis",
    "stack": [
      "PandaGPT",
      "ImageBind & Vicuna",
      "CO-STAR prompting",
      "Linear regression",
      "Mixed-effects models"
    ],
    "highlights": [
      [
        "A multimodal scoring pipeline",
        "The manuscript combines video and audio signals to score violence intensity across five dimensions."
      ],
      [
        "A synthetic cohort for analysis",
        "A cohort of 1,154 generated virtual humans supports comparisons of exposure levels and informational interventions."
      ],
      [
        "From research direction to analysis",
        "I helped define the research direction and contributed programming, data analysis and the visual presentation of results."
      ]
    ]
  },
  {
    "id": "olympics",
    "category": "modeling",
    "number": "04",
    "type": "Mathematical Contest in Modeling · 2025",
    "title": "M3POC",
    "subtitle": "Forecasting medals. Examining the drivers.",
    "description": "A competition project that combines athlete-level features, medal forecasting and analysis of coaching effects.",
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
        "Modeling task",
        "Forecast Olympic medal counts and investigate the performance and coaching factors behind them."
      ],
      [
        "Outcome",
        "Honorable Mention in the 2025 Mathematical Contest in Modeling."
      ]
    ],
    "stackLabel": "Modeling methods",
    "stack": [
      "K-means clustering",
      "Random forest",
      "ARIMA",
      "Logistic regression",
      "Difference-in-differences"
    ],
    "highlights": [
      [
        "Different models for different questions",
        "Clustering grades sports, forecasting models estimate medal counts, and logistic regression examines first-medal breakthroughs."
      ],
      [
        "Performance and context together",
        "The framework considers athlete strength, participation, new entrants and host-country effects."
      ],
      [
        "A separate analysis of coaching",
        "Difference-in-differences is used to explore how coaching changes relate to medal outcomes."
      ]
    ]
  },
  {
    "id": "production",
    "category": "modeling",
    "number": "05",
    "type": "China Undergraduate Mathematical Contest in Modeling · 2024",
    "title": "Production decisions under uncertainty",
    "subtitle": "Better sampling. Better production decisions.",
    "description": "A computational framework for choosing inspection and disassembly strategies in electronics manufacturing.",
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
        "Modeling task",
        "Balance inspection cost, product defects and disassembly decisions across a multistage production process."
      ],
      [
        "Outcome",
        "National Second Prize in the 2024 China Undergraduate Mathematical Contest in Modeling."
      ]
    ],
    "stackLabel": "Tools & methods",
    "stack": [
      "Python & C++",
      "NumPy & Matplotlib",
      "Sequential testing",
      "Monte Carlo simulation",
      "Genetic algorithms"
    ],
    "highlights": [
      [
        "Adaptive sampling",
        "Sequential and hypothesis testing support accept-or-reject decisions as inspection evidence accumulates."
      ],
      [
        "Simulation of decision alternatives",
        "Monte Carlo experiments compare inspection and disassembly strategies under the supplied cost and defect assumptions."
      ],
      [
        "Optimization at a larger scale",
        "A genetic algorithm searches the multistage decision space as the number of components and production steps grows."
      ]
    ]
  },
  {
    "id": "quantdia",
    "category": "modeling",
    "number": "06",
    "type": "Statistical modeling competition · 2025",
    "title": "QuantDIA",
    "subtitle": "Prediction with a molecular explanation.",
    "description": "An interpretable machine-learning framework for studying drug-induced autoimmunity from molecular descriptors.",
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
        "Modeling task",
        "Compare interpretable and nonlinear models for identifying compounds associated with drug-induced autoimmunity."
      ],
      [
        "Outcome",
        "Regional Second Prize in the 2025 National College Student Statistical Modeling Competition."
      ]
    ],
    "compare": true,
    "stackLabel": "Technology stack",
    "stack": [
      "Python",
      "scikit-learn",
      "CatBoost",
      "PyTorch",
      "ABESS",
      "Matplotlib"
    ],
    "highlights": [
      [
        "Four complementary models",
        "LASSO, ABESS, CatBoost and a self-attention neural network offer different approaches to feature selection and prediction."
      ],
      [
        "Explicit treatment of class imbalance",
        "The report compares models with and without BorderlineSMOTE on a dataset of 597 drugs and 196 descriptors."
      ],
      [
        "Interpretation alongside prediction",
        "Sparse coefficients and feature importance connect model behavior with molecular structure."
      ]
    ]
  }
];
