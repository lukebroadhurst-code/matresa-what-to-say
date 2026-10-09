window.SAY = {
 "personas": [
  {
   "key": "dei",
   "label": "Head of DEI",
   "hook": "Your latest pay gap report shows [specific]. I am calling because maternal attrition is usually the part reports cannot explain.",
   "hookSpoken": true,
   "problem": "Most employers can show when a woman left but not why. The data stops at 'resigned'.",
   "question": "Can you show your board the link between motherhood and your Director-level attrition?",
   "avoid": "emotional framing, \"supporting mums\", anything that sounds like a perk or a campaign.",
   "ask": "a 20-minute conversation about getting board-safe data, not another programme."
  },
  {
   "key": "hr",
   "label": "HR Director",
   "hook": "Post-maternity cases tend to land on HR as escalations: flexible working requests, absence, a manager who does not know what to say.",
   "hookSpoken": true,
   "problem": "By the time it reaches you it is already expensive.",
   "question": "Are post-maternity cases mostly handled case by case when they arrive?",
   "avoid": "academic language, anything that sounds complex to implement.",
   "ask": "a short conversation about reducing the number of cases that reach HR."
  },
  {
   "key": "cpo",
   "label": "CPO / CHRO",
   "hook": "a pay gap report, a board commitment, a new equality action plan, the 2027 employment changes (verify wording before use).",
   "hookSpoken": false,
   "problem": "Senior women are most likely to leave 12 to 18 months after parental leave, and most employers cannot see it coming.",
   "question": "Do you measure female attrition by motherhood status, or is it one number?",
   "avoid": "emotional storytelling, small tactical framing, anything that sounds like \"pilot only\".",
   "ask": "20 minutes with a founder. Expect a referral down to HR or Benefits; thank them and ask for the introduction by name, then log it."
  },
  {
   "key": "benefits",
   "label": "Head of Benefits",
   "hook": "I am calling about maternity benefits that are on the menu but not well used.",
   "hookSpoken": true,
   "problem": "Most benefits teams cannot show what maternal spend returns, and cannot see usage among pregnant and postpartum staff.",
   "question": "Is your EAP used by pregnant and postpartum employees? Do you know how well?",
   "avoid": "language that sounds like replacing or competing with the EAP; \"another app\".",
   "ask": "a conversation about getting an anonymous view that sits on top of existing benefits."
  },
  {
   "key": "wellbeing",
   "label": "Head of Wellbeing",
   "hook": "The gap between the GP and Google: mothers with nobody to ask between appointments.",
   "hookSpoken": true,
   "problem": "Generic wellbeing tools rarely reach this group.",
   "question": "Are pregnant and postpartum employees using your current programmes? How do you know?",
   "avoid": "a CFO-heavy ROI opening; over-commercial framing.",
   "ask": "a conversation about what a credible, human-led support pathway would need to look like."
  },
  {
   "key": "network",
   "label": "Network chair",
   "hook": "they care about the issue personally and professionally.",
   "hookSpoken": false,
   "problem": "",
   "question": "",
   "avoid": "",
   "ask": "their view of what mothers in the network need, and who in HR or the executive sponsors the network. Do not sell."
  }
 ],
 "open": "Hello [name], it is [you] from Matresa. I know I have called out of the blue: have you got 30 seconds for me to say why, and you can tell me to go away?",
 "question": "If I asked you why women at [company] who go on maternity leave are leaving in the 6 to 18 months after they return, would you know the specific reasons?",
 "ask": "That is what we help with. Would 20 minutes next week with [Mari-Carmen] be useful to see whether it is relevant to you? I can send two or three times.",
 "notNow": "Is it not a priority, or is it that this is not the right moment?",
 "notNowAfter": "Then ask permission to check back and agree a date.",
 "gatekeeper": {
  "say": "Hello, it is [you] from Matresa. I am trying to reach [name] about how [company] supports colleagues through maternity leave and the return to work. Who looks after that? Is [name] the right person, or would [title] be better?",
  "note": "Never lie about the reason or pretend to know the person. If the EA offers to take a message, leave the reason in one sentence and the best time you will call again."
 },
 "voicemail": {
  "say": "Hello [name], [you] from Matresa. I am calling because [hook, one sentence]. I will send you a short note, and I will try you again on [day]. My number is [number]. Thank you.",
  "note": "Do not leave a pitch, a price or a client name. Never leave more than two voicemails in a sequence."
 },
 "wrong": "If you reach someone who is not the right person: thank them, ask who owns it, and ask whether you may use their name. Log it.",
 "objections": [
  {
   "n": 1,
   "they": "We already have an EAP / a wellbeing app.",
   "short": "Already have an EAP",
   "group": "Already have something",
   "rank": 1,
   "behind": "They fear duplication and being replaced",
   "say": "\"That is helpful to know. Matresa does not replace it. EAPs usually wait for someone to ask for help. We give you an anonymous view of how ready your mothers are to return, so you can act earlier.\"",
   "then": "\"How is your EAP used by pregnant and postpartum employees, do you know?\"",
   "sayParts": [
    {
     "t": "say",
     "x": "That is helpful to know. Matresa does not replace it. EAPs usually wait for someone to ask for help. We give you an anonymous view of how ready your mothers are to return, so you can act earlier."
    }
   ],
   "thenParts": [
    {
     "t": "say",
     "x": "How is your EAP used by pregnant and postpartum employees, do you know?"
    }
   ]
  },
  {
   "n": 2,
   "they": "We have a good maternity policy.",
   "short": "Good maternity policy",
   "group": "Already have something",
   "rank": 7,
   "behind": "Policy is not the problem in their mind",
   "say": "\"A strong policy matters. What I hear is a gap after the leave ends: the weeks when the return is rough and nobody sees it.\"",
   "then": "\"What happens between the end of leave and full performance? Are people leaving 6 to 12 months later?\"",
   "sayParts": [
    {
     "t": "say",
     "x": "A strong policy matters. What I hear is a gap after the leave ends: the weeks when the return is rough and nobody sees it."
    }
   ],
   "thenParts": [
    {
     "t": "say",
     "x": "What happens between the end of leave and full performance? Are people leaving 6 to 12 months later?"
    }
   ]
  },
  {
   "n": 3,
   "they": "Budget is tight / frozen.",
   "short": "No budget",
   "group": "Money and timing",
   "rank": 2,
   "behind": "Real, or a polite no",
   "say": "\"Understood. Many teams cannot add new spend. Do you know what post-maternity exits and absence cost you today?\" If frozen: \"I will not push. When does planning start for next year?\"",
   "then": "If a date: agree a check-back, log Nurture with the date",
   "sayParts": [
    {
     "t": "say",
     "x": "Understood. Many teams cannot add new spend. Do you know what post-maternity exits and absence cost you today?"
    },
    {
     "t": "note",
     "x": "If frozen:"
    },
    {
     "t": "say",
     "x": "I will not push. When does planning start for next year?"
    }
   ],
   "thenParts": [
    {
     "t": "note",
     "x": "If a date: agree a check-back, log Nurture with the date"
    }
   ]
  },
  {
   "n": 4,
   "they": "It is not a priority.",
   "short": "Not a priority",
   "group": "Money and timing",
   "rank": 4,
   "behind": "No trigger",
   "say": "\"Fair. Is it that it is not a problem here, or that other things are ahead of it?\"",
   "then": "\"What would have to be true for it to move up?\"",
   "sayParts": [
    {
     "t": "say",
     "x": "Fair. Is it that it is not a problem here, or that other things are ahead of it?"
    }
   ],
   "thenParts": [
    {
     "t": "say",
     "x": "What would have to be true for it to move up?"
    }
   ]
  },
  {
   "n": 5,
   "they": "Send me some information.",
   "short": "Send me some info",
   "group": "Brush-offs",
   "rank": 3,
   "behind": "Brush-off or genuine",
   "say": "\"Happy to. So I send the right thing, what are you trying to solve? And would 15 minutes be easier than an email?\"",
   "then": "If they will not engage, send one short email with one question, not a deck",
   "sayParts": [
    {
     "t": "say",
     "x": "Happy to. So I send the right thing, what are you trying to solve? And would 15 minutes be easier than an email?"
    }
   ],
   "thenParts": [
    {
     "t": "note",
     "x": "If they will not engage, send one short email with one question, not a deck"
    }
   ]
  },
  {
   "n": 6,
   "they": "I am not the right person.",
   "short": "Not my area",
   "group": "Brush-offs",
   "rank": 5,
   "behind": "Genuine, or avoiding",
   "say": "\"Thank you. Who would own this, and may I mention you?\"",
   "then": "Get a name or title and a route",
   "sayParts": [
    {
     "t": "say",
     "x": "Thank you. Who would own this, and may I mention you?"
    }
   ],
   "thenParts": [
    {
     "t": "note",
     "x": "Get a name or title and a route"
    }
   ]
  },
  {
   "n": 7,
   "they": "We do that in-house.",
   "short": "We do it in-house",
   "group": "Already have something",
   "rank": 8,
   "behind": "Pride, or a real programme",
   "say": "\"Good to hear. What does your data show on women who leave after maternity leave? Most in-house teams tell me they cannot see why.\"",
   "then": "\"How do you measure it today?\"",
   "sayParts": [
    {
     "t": "say",
     "x": "Good to hear. What does your data show on women who leave after maternity leave? Most in-house teams tell me they cannot see why."
    }
   ],
   "thenParts": [
    {
     "t": "say",
     "x": "How do you measure it today?"
    }
   ]
  },
  {
   "n": 8,
   "they": "What about data privacy? Health data?",
   "short": "Data privacy",
   "group": "Trust and proof",
   "rank": 9,
   "behind": "Legitimate and often a blocker",
   "say": "\"A very good question. A mother's information belongs to her. Your team only sees anonymised group information, never an individual. If it helps, I can ask our team to send the privacy detail to you and your data protection lead.\"",
   "then": "\"Who would need to be comfortable with it on your side?\" Log a data-agreement flag",
   "sayParts": [
    {
     "t": "say",
     "x": "A very good question. A mother's information belongs to her. Your team only sees anonymised group information, never an individual. If it helps, I can ask our team to send the privacy detail to you and your data protection lead."
    }
   ],
   "thenParts": [
    {
     "t": "say",
     "x": "Who would need to be comfortable with it on your side?"
    },
    {
     "t": "note",
     "x": "Log a data-agreement flag"
    }
   ]
  },
  {
   "n": 9,
   "they": "Is it a medical device? Is it clinical? Do you need Class IIa?",
   "short": "Medical device? Class IIa?",
   "group": "Trust and proof",
   "rank": 12,
   "behind": "Regulation or procurement worry",
   "say": "\"Matresa is registered with the MHRA as a Class I medical device and is preparing for Class IIa. It works alongside the NHS and supports mothers, it does not replace their midwife or GP.\" (Say nothing about screening or detecting.)",
   "then": "\"Is that a threshold for you? If Class IIa is a must, I would rather say so now.\"",
   "sayParts": [
    {
     "t": "say",
     "x": "Matresa is registered with the MHRA as a Class I medical device and is preparing for Class IIa. It works alongside the NHS and supports mothers, it does not replace their midwife or GP."
    },
    {
     "t": "warn",
     "x": "Say nothing about screening or detecting."
    }
   ],
   "thenParts": [
    {
     "t": "say",
     "x": "Is that a threshold for you? If Class IIa is a must, I would rather say so now."
    }
   ]
  },
  {
   "n": 10,
   "they": "You are a small start-up. Is it proven?",
   "short": "You are a start-up",
   "group": "Trust and proof",
   "rank": 11,
   "behind": "Risk",
   "say": "\"That is a fair challenge. It was built with clinical expertise and has a research partnership with the University of Warwick, and it is registered as a Class I medical device. I would not ask you to take our word for it.\"",
   "then": "\"What would you need to see?\" Do not cite clients or results you cannot source",
   "sayParts": [
    {
     "t": "say",
     "x": "That is a fair challenge. It was built with clinical expertise and has a research partnership with the University of Warwick, and it is registered as a Class I medical device. I would not ask you to take our word for it."
    }
   ],
   "thenParts": [
    {
     "t": "say",
     "x": "What would you need to see?"
    },
    {
     "t": "note",
     "x": "Do not cite clients or results you cannot source"
    }
   ]
  },
  {
   "n": 11,
   "they": "Who else uses it? Can I speak to a reference?",
   "short": "Who else uses it?",
   "group": "Trust and proof",
   "rank": 13,
   "behind": "Social proof",
   "say": "\"We are not able to name clients at the moment, and I would rather not make claims I cannot show you. A founder can talk you through what we have done.\"",
   "then": "Offer the founder call",
   "sayParts": [
    {
     "t": "say",
     "x": "We are not able to name clients at the moment, and I would rather not make claims I cannot show you. A founder can talk you through what we have done."
    }
   ],
   "thenParts": [
    {
     "t": "note",
     "x": "Offer the founder call"
    }
   ]
  },
  {
   "n": 12,
   "they": "How much does it cost?",
   "short": "How much is it?",
   "group": "Money and timing",
   "rank": 6,
   "behind": "Budget and scale",
   "say": "\"It depends on the size of the group and what you want to see. I would rather give you a clear quote after a short conversation than guess.\"",
   "then": "\"Roughly how many colleagues are we talking about, and who signs this off?\"",
   "sayParts": [
    {
     "t": "say",
     "x": "It depends on the size of the group and what you want to see. I would rather give you a clear quote after a short conversation than guess."
    }
   ],
   "thenParts": [
    {
     "t": "say",
     "x": "Roughly how many colleagues are we talking about, and who signs this off?"
    }
   ]
  },
  {
   "n": 13,
   "they": "We tried something like this and it did not work.",
   "short": "Tried this before",
   "group": "Already have something",
   "rank": 14,
   "behind": "Scar tissue",
   "say": "\"Thank you for telling me. What happened?\" Listen. \"That is the thing we are trying not to repeat.\"",
   "then": "\"What would you need to see differently?\"",
   "sayParts": [
    {
     "t": "say",
     "x": "Thank you for telling me. What happened?"
    },
    {
     "t": "note",
     "x": "Listen."
    },
    {
     "t": "say",
     "x": "That is the thing we are trying not to repeat."
    }
   ],
   "thenParts": [
    {
     "t": "say",
     "x": "What would you need to see differently?"
    }
   ]
  },
  {
   "n": 14,
   "they": "Our employees will not use another app.",
   "short": "Staff won't use another app",
   "group": "Not sure it fits",
   "rank": 15,
   "behind": "Engagement fatigue",
   "say": "\"That is common. It is why we start with one group and look at how they use it before anyone decides anything more.\" (Avoid \"pilot\".)",
   "then": "\"Which group would you start with?\"",
   "sayParts": [
    {
     "t": "say",
     "x": "That is common. It is why we start with one group and look at how they use it before anyone decides anything more."
    },
    {
     "t": "warn",
     "x": "Avoid the word \"pilot\"."
    }
   ],
   "thenParts": [
    {
     "t": "say",
     "x": "Which group would you start with?"
    }
   ]
  },
  {
   "n": 15,
   "they": "Women do not like their employer knowing.",
   "short": "Women won't want us knowing",
   "group": "Trust and proof",
   "rank": 19,
   "behind": "Privacy and trust",
   "say": "\"Agreed. That is why the employer sees only anonymised, grouped information above a minimum group size, never an individual's answers.\"",
   "then": "\"What would make women in your network trust it?\"",
   "sayParts": [
    {
     "t": "say",
     "x": "Agreed. That is why the employer sees only anonymised, grouped information above a minimum group size, never an individual's answers."
    }
   ],
   "thenParts": [
    {
     "t": "say",
     "x": "What would make women in your network trust it?"
    }
   ]
  },
  {
   "n": 16,
   "they": "What about fathers and partners?",
   "short": "What about dads?",
   "group": "Not sure it fits",
   "rank": 21,
   "behind": "Equity and policy",
   "say": "\"Good point. Partners are part of the picture and we include them in how we think about the pathway.\"",
   "then": "\"Is shared parental leave something you are looking at?\"",
   "sayParts": [
    {
     "t": "say",
     "x": "Good point. Partners are part of the picture and we include them in how we think about the pathway."
    }
   ],
   "thenParts": [
    {
     "t": "say",
     "x": "Is shared parental leave something you are looking at?"
    }
   ]
  },
  {
   "n": 17,
   "they": "We are in a restructure / hiring freeze.",
   "short": "Restructure or freeze",
   "group": "Money and timing",
   "rank": 16,
   "behind": "Real red flag",
   "say": "\"Understood. I will not push. Is it likely to settle this year?\"",
   "then": "Park in Nurture with a revisit date",
   "sayParts": [
    {
     "t": "say",
     "x": "Understood. I will not push. Is it likely to settle this year?"
    }
   ],
   "thenParts": [
    {
     "t": "note",
     "x": "Park in Nurture with a revisit date"
    }
   ]
  },
  {
   "n": 18,
   "they": "Is it just for senior women?",
   "short": "Only senior women?",
   "group": "Not sure it fits",
   "rank": 22,
   "behind": "Fairness",
   "say": "\"No. It supports every mother in the group. The leadership pipeline is where the cost shows most for employers.\"",
   "then": "\"Where do you see the drop-off?\"",
   "sayParts": [
    {
     "t": "say",
     "x": "No. It supports every mother in the group. The leadership pipeline is where the cost shows most for employers."
    }
   ],
   "thenParts": [
    {
     "t": "say",
     "x": "Where do you see the drop-off?"
    }
   ]
  },
  {
   "n": 19,
   "they": "Call me later / next quarter.",
   "short": "Call me later",
   "group": "Brush-offs",
   "rank": 10,
   "behind": "Brush-off or genuine",
   "say": "\"Of course. Which month is best? And what would you want me to have by then?\"",
   "then": "Agree a date, log it",
   "sayParts": [
    {
     "t": "say",
     "x": "Of course. Which month is best? And what would you want me to have by then?"
    }
   ],
   "thenParts": [
    {
     "t": "note",
     "x": "Agree a date, log it"
    }
   ]
  },
  {
   "n": 20,
   "they": "Do not call me again.",
   "short": "Do not call me again",
   "group": "Stop",
   "rank": 20,
   "behind": "Opt-out",
   "say": "\"Of course. I will take you off our list today. Thank you for your time.\"",
   "then": "Log \"do not call\" the same day and add them to your suppression list",
   "sayParts": [
    {
     "t": "say",
     "x": "Of course. I will take you off our list today. Thank you for your time."
    }
   ],
   "thenParts": [
    {
     "t": "note",
     "x": "Log \"do not call\" the same day and add them to your suppression list"
    }
   ]
  },
  {
   "n": 21,
   "they": "We want a free trial or workshop.",
   "short": "Free trial or workshop",
   "group": "Brush-offs",
   "rank": 17,
   "behind": "Free-value expectation",
   "say": "\"We do not run free workshops. What we can offer first is a short free readiness check to see whether this fits, and then a defined first step if it does.\"",
   "then": "\"Would that help?\"",
   "sayParts": [
    {
     "t": "say",
     "x": "We do not run free workshops. What we can offer first is a short free readiness check to see whether this fits, and then a defined first step if it does."
    }
   ],
   "thenParts": [
    {
     "t": "say",
     "x": "Would that help?"
    }
   ]
  },
  {
   "n": 22,
   "they": "Our CPO already decided / we only buy through our consultant.",
   "short": "We buy through a consultant",
   "group": "Brush-offs",
   "rank": 18,
   "behind": "Process",
   "say": "\"Understood. Who is the consultant, and may I ask them for a conversation?\"",
   "then": "Log the consultant (Influence-only)",
   "sayParts": [
    {
     "t": "say",
     "x": "Understood. Who is the consultant, and may I ask them for a conversation?"
    }
   ],
   "thenParts": [
    {
     "t": "note",
     "x": "Log the consultant (Influence-only)"
    }
   ]
  }
 ],
 "groups": [
  "Already have something",
  "Money and timing",
  "Brush-offs",
  "Trust and proof",
  "Not sure it fits",
  "Stop"
 ],
 "escape": "I do not want to guess. Let me find out and come back to you by [day].",
 "never": [
  "diagnose",
  "detect",
  "screening",
  "regulated",
  "clinical-grade",
  "pilot",
  "platform",
  "any client name",
  "any price",
  "any statistic you cannot source"
 ]
};
