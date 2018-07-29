// @flow
import * as d3 from 'd3'

export type TrackId = 'SELF' | 'TEAM' | 'PEERS' | 'SUPERIORS' |
  'BUSINESS' | 'WORK/LIFE'

  // 'MOBILE' | 'WEB_CLIENT' | 'FOUNDATIONS' | 'SERVERS' |
  //   'PROJECT_MANAGEMENT' | 'COMMUNICATION'

export type Milestone = 0 | 1 | 2 | 3

export type MilestoneMap = {
  'SELF': Milestone,
  'TEAM': Milestone,
  'PEERS': Milestone,
  'SUPERIORS': Milestone,
  'BUSINESS': Milestone,
  'WORK/LIFE': Milestone
}

export type QuizResults = {
  'name': string,
  'answerValues': number
}

export const milestones = [0, 1, 2, 3]

export const milestoneToPoints = (milestone: Milestone): number => {
  return Math.floor(milestone/3);
}

// export const pointsToLevels = {
//   '0': '1.1',
//   '5': '1.2',
//   '11': '1.3',
//   '17': '2.1',
//   '23': '2.2',
//   '29': '2.3',
//   '36': '3.1'
// }

// export const maxLevel = 36

export type Track = {
  shortDisplayName: string,
  longDisplayName: string,
  category: string, // TK categoryId type?
  description: string,
  questions: QuestionsList,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }
}

export type QuestionsList = [string, string, string];

type Tracks = {|
  'SELF': Track,
  'TEAM': Track,
  'PEERS': Track,
  'SUPERIORS': Track,
  'BUSINESS': Track,
  'WORK/LIFE': Track,
|}

export const tracks: Tracks = {
  "SELF": {
    "shortDisplayName": "Self",
    "longDisplayName": "Managing Yourself",
    "category": "A",
    "description": "Your first direct report is yourself. At the tactical level, this requires the ability to prioritize your time and attention to ensure your activities drive the greatest benefits for the team. But managing yourself also requires gaining the self-awareness of your own strengths and weaknesses as a leader. After all, no matter the situation, you are always leading.",
    "questions": [
      "I take time to prioritize what I need to get done and always work on the most important things first.",
      "I control my calendar, and regularly weed out meetings and other demands on my time if I don't know their importance.",
      "I take time away from the day-to-day needs of my job to focus on the big picture."
    ],
    "resources": {
      "articles": [
        {
          title: 'Managerial Leverage: The Practice of Doing The Right Things at the Right Time',
          link: ''
        },
        {
          title: 'Important vs. Urgent',
          link: 'https://medium.com/unexpected-leadership/important-vs-urgent-2862873be284'
        },
        {
          title: 'Clarity Breaks',
          link: 'https://medium.com/unexpected-leadership/clarity-breaks-316d5a2b08ee'
        },
        {
          title: 'Managing Your Calendar',
          link: 'https://medium.com/unexpected-leadership/managing-your-calendar-f43c832af678'
        },
      ],
      "books": [
        {
          title: "High Output Management",
          author: "Andy Grove"
        },
      ],
      "videos": []
    },
    "milestones": [{}, {}, {}, {}, {}],
  },

  "TEAM": {
    "shortDisplayName": "Team",
    "longDisplayName": "Managing Your Team",
    "category": "B",
    "description": "A great manager does through others, which can be a challenge when you first land in the role. Effective teams are more than a collection of high-performers, and are seen when the team works together to achieve goals. Great managers create clarity for where the team is going, then elevates their reports to make it happen.",
    "questions": [
      "My team comes to me with solutions, not just problems.",
      "I know what each of my team members hope to do with their career and what keeps them up at night.",
      "My team works effectively together—they help each other with their work even if they have different roles."
    ],
    "resources": {
      "articles": [
        {
          title: 'Three Powerful Conversations Managers Must Have to Develop Their People',
          link: 'http://firstround.com/review/three-powerful-conversations-managers-must-have-to-develop-their-people/'
        },
        {
          title: 'Daniel Debow’s Helpful Hierarchy',
          link: 'https://medium.com/unexpected-leadership/daniel-debows-helpful-hierarchy-a94fea3dc7e'
        },
        {
          title: 'Negative Feedback Antipatterns',
          link: 'http://www.dein.fr/2016-12-02-negative-feedback-antipatterns.html'
        },
      ],
      "books": [
        {
          title: 'Radical Candor',
          author: 'Kim Scott'
        }
      ],
      "videos": []
    },
    "milestones": [{}, {}, {}, {}, {}],
  },

  "PEERS": {
    "shortDisplayName": "Peers",
    "longDisplayName": "Managing Your Peers",
    "category": "C",
    "description": "Moving things forward within an organization often requires cross-functional collaboration. In these situations, you don’t have the formal authority you have when managing your team. When managing sideways, great managers start by understanding the point of view of their peers, then build from a place of consensus. And it doesn’t hurt to develop informal relationships—grabbing lunch with a peer to learn about their role and their priorities can pay dividends when you work together on a project.",
    "questions": [
      "The manager team in my department works effectively together to accomplish the needs of the business.",
      "I regularly connect with managers outside my department and understand how my work impacts them.",
      "I am able to put the needs of the business and my department ahead of the needs of my team."
    ],
    "resources": {
      "articles": [
        {
          title: 'Four Types of Conflict',
          link: 'https://medium.com/unexpected-leadership/four-types-of-conflict-caff94e96a2f'
        },
        {
          title: '90% Agreement Rule',
          link: ''
        },
      ],
      "books": [],
      "videos": []
    },
    "milestones": [{}, {}, {}, {}, {}],
  },

  "SUPERIORS": {
    "shortDisplayName": "Superiors",
    "longDisplayName": "Managing Up",
    "category": "D",
    "description": "Whether it’s keeping your boss proactively informed or raising awareness of your team’s work with leaders up the managerial food chain, strong managers dedicate time and attention to managing up within their organization.",
    "questions": [
      "I am able to approach my boss when I'm facing a difficult situation.",
      "I know what I can do to help my boss without having to ask.",
      "I know my boss's top three priorities at any given time."
    ],
    "resources": {
      "articles": [],
      "books": [],
      "videos": []
    },
    "milestones": [{}, {}, {}, {}, {}],
  },

  "BUSINESS": {
    "shortDisplayName": "Business",
    "longDisplayName": "Managing Your Business",
    "category": "E",
    "description": "Whether you’re an operational wizard, a marketing maverick, or a sales savant, when you begin your role as a manager there are some fundamental skills that will help regardless of function. Project planning and management, finance basics, and organizational alignment are all within the domain of managing the business.",
    "questions": [
      "I know the major objectives of the company and how I contribute to their success.",
      "My team understands how their work impacts the bigger picture.",
      "I understand the how the business works—how a dollar enters, moves through, and leaves the organization."
    ],
    "resources": {
      "articles": [
        {
          title: 'Project Planning: Where Managers Go Wrong',
          link: 'https://medium.com/unexpected-leadership/project-planning-where-managers-go-wrong-3eb60cd0109c'
        },
        {
          title: 'WTF is Strategy',
          link: 'https://medium.com/unexpected-leadership/wtf-is-strategy-5a5ade951e94'
        },
      ],
      "books": [],
      "videos": []
    },
    "milestones": [{}, {}, {}, {}, {}],
  },

  "WORK/LIFE": {
    "shortDisplayName": "Work/Life",
    "longDisplayName": "Managing Work & Life",
    "category": "F",
    "description": "We bring our full selves to work, whether we want to or not. Taking time away from work is important, whether that’s unplugging over the weekend or taking a vacation. And it’s equally important to know what drives us outside the office.",
    "questions": [
      "I am happy with the amount of hours I work each week.",
      "My friends and family would say I have a full life outside of work.",
      "My coworkers know and respect my life outside of work."
    ],
    "resources": {
      "articles": [],
      "books": [],
      "videos": []
    },
    "milestones": [{}, {}, {}, {}, {}],
  }
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

// export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
//   let pointsByCategory = new Map()
//   trackIds.forEach((trackId) => {
//     const milestone = milestoneMap[trackId]
//     const categoryId = tracks[trackId].category
//     let currentPoints = pointsByCategory.get(categoryId) || 0
//     pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
//   })
//   return Array.from(categoryIds.values()).map(categoryId => {
//     const points = pointsByCategory.get(categoryId)
//     return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
//   })
// }

// export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
//   trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
//     .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#E18132', '#454E52', '#E53332', '#2BC237', '#327DF6', '#4B2366'])


// #57e5ae
// #199dbf
// #f5b431
