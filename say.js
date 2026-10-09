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
   "say": "\"That is helpful to know. Matresa does not replace it. EAPs usually wait for someone to ask for help. We give you an anonymous view of how ready your mothers are to return, so you can act earlier.\"",
   "then": "\"How is your EAP used by pregnant and postpartum employees, do you know?\""
  },
  {
   "n": 2,
   "they": "We have a good maternity policy.",
   "say": "\"A strong policy matters. What I hear is a gap after the leave ends: the weeks when the return is rough and nobody sees it.\"",
   "then": "\"What happens between the end of leave and full performance? Are people leaving 6 to 12 months later?\""
  },
  {
   "n": 3,
   "they": "Budget is tight / frozen.",
   "say": "\"Understood. Many teams cannot add new spend. Do you know what post-maternity exits and absence cost you today?\" If frozen: \"I will not push. When does planning start for next year?\"",
   "then": "If a date: agree a check-back, log Nurture with the date"
  },
  {
   "n": 4,
   "they": "It is not a priority.",
   "say": "\"Fair. Is it that it is not a problem here, or that other things are ahead of it?\"",
   "then": "\"What would have to be true for it to move up?\""
  },
  {
   "n": 5,
   "they": "Send me some information.",
   "say": "\"Happy to. So I send the right thing, what are you trying to solve? And would 15 minutes be easier than an email?\"",
   "then": "If they will not engage, send one short email with one question, not a deck"
  },
  {
   "n": 6,
   "they": "I am not the right person.",
   "say": "\"Thank you. Who would own this, and may I mention you?\"",
   "then": "Get a name or title and a route"
  },
  {
   "n": 7,
   "they": "We do that in-house.",
   "say": "\"Good to hear. What does your data show on women who leave after maternity leave? Most in-house teams tell me they cannot see why.\"",
   "then": "\"How do you measure it today?\""
  },
  {
   "n": 8,
   "they": "What about data privacy? Health data?",
   "say": "\"A very good question. A mother's information belongs to her. Your team only sees anonymised group information, never an individual. If it helps, I can ask our team to send the privacy detail to you and your data protection lead.\"",
   "then": "\"Who would need to be comfortable with it on your side?\" Log a data-agreement flag"
  },
  {
   "n": 9,
   "they": "Is it a medical device? Is it clinical? Do you need Class IIa?",
   "say": "\"Matresa is registered with the MHRA as a Class I medical device and is preparing for Class IIa. It works alongside the NHS and supports mothers, it does not replace their midwife or GP.\" (Say nothing about screening or detecting.)",
   "then": "\"Is that a threshold for you? If Class IIa is a must, I would rather say so now.\""
  },
  {
   "n": 10,
   "they": "You are a small start-up. Is it proven?",
   "say": "\"That is a fair challenge. It was built with clinical expertise and has a research partnership with the University of Warwick, and it is registered as a Class I medical device. I would not ask you to take our word for it.\"",
   "then": "\"What would you need to see?\" Do not cite clients or results you cannot source"
  },
  {
   "n": 11,
   "they": "Who else uses it? Can I speak to a reference?",
   "say": "\"We are not able to name clients at the moment, and I would rather not make claims I cannot show you. A founder can talk you through what we have done.\"",
   "then": "Offer the founder call"
  },
  {
   "n": 12,
   "they": "How much does it cost?",
   "say": "\"It depends on the size of the group and what you want to see. I would rather give you a clear quote after a short conversation than guess.\"",
   "then": "\"Roughly how many colleagues are we talking about, and who signs this off?\""
  },
  {
   "n": 13,
   "they": "We tried something like this and it did not work.",
   "say": "\"Thank you for telling me. What happened?\" Listen. \"That is the thing we are trying not to repeat.\"",
   "then": "\"What would you need to see differently?\""
  },
  {
   "n": 14,
   "they": "Our employees will not use another app.",
   "say": "\"That is common. It is why we start with one group and look at how they use it before anyone decides anything more.\" (Avoid \"pilot\".)",
   "then": "\"Which group would you start with?\""
  },
  {
   "n": 15,
   "they": "Women do not like their employer knowing.",
   "say": "\"Agreed. That is why the employer sees only anonymised, grouped information above a minimum group size, never an individual's answers.\"",
   "then": "\"What would make women in your network trust it?\""
  },
  {
   "n": 16,
   "they": "What about fathers and partners?",
   "say": "\"Good point. Partners are part of the picture and we include them in how we think about the pathway.\"",
   "then": "\"Is shared parental leave something you are looking at?\""
  },
  {
   "n": 17,
   "they": "We are in a restructure / hiring freeze.",
   "say": "\"Understood. I will not push. Is it likely to settle this year?\"",
   "then": "Park in Nurture with a revisit date"
  },
  {
   "n": 18,
   "they": "Is it just for senior women?",
   "say": "\"No. It supports every mother in the group. The leadership pipeline is where the cost shows most for employers.\"",
   "then": "\"Where do you see the drop-off?\""
  },
  {
   "n": 19,
   "they": "Call me later / next quarter.",
   "say": "\"Of course. Which month is best? And what would you want me to have by then?\"",
   "then": "Agree a date, log it"
  },
  {
   "n": 20,
   "they": "Do not call me again.",
   "say": "\"Of course. I will take you off our list today. Thank you for your time.\"",
   "then": "Log \"do not call\" the same day and add them to your suppression list"
  },
  {
   "n": 21,
   "they": "We want a free trial or workshop.",
   "say": "\"We do not run free workshops. What we can offer first is a short free readiness check to see whether this fits, and then a defined first step if it does.\"",
   "then": "\"Would that help?\""
  },
  {
   "n": 22,
   "they": "Our CPO already decided / we only buy through our consultant.",
   "say": "\"Understood. Who is the consultant, and may I ask them for a conversation?\"",
   "then": "Log the consultant (Influence-only)"
  }
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
