const L = (id) => `${id}-left`
const R = (id) => `${id}-right`
const pair = (id) => [R(id), L(id)]

/**
 * Anatomical callout catalog structured precisely after the cinematic reference design:
 * Left column: TRAPS, DELTOID, PECTORALIS, BICEPS, FOREARMS, ABS, QUADS, CALVES
 * Right column: NECK, LATS, SERRATUS, OBLIQUES, TRICEPS, HAMSTRINGS, GLUTES
 */
export const MUSCLE_CALLOUT_GROUPS = [
  // ─── LEFT COLUMN (Viewer's Left) ───
  {
    id: 'traps',
    label: 'TRAPS',
    side: 'left',
    views: ['front', 'side', 'back'],
    regionIds: [R('trapezius-upper'), L('trapezius-upper')],
    defaultY: 16,
  },
  {
    id: 'deltoid',
    label: 'DELTOID',
    side: 'left',
    views: ['front', 'side', 'back'],
    regionIds: [
      R('deltoid-anterior'),
      R('deltoid-lateral'),
      R('deltoid-posterior'),
      L('deltoid-anterior'),
    ],
    defaultY: 21,
  },
  {
    id: 'pectoralis',
    label: 'PECTORALIS',
    side: 'left',
    views: ['front', 'side'],
    regionIds: pair('pectoralis-major'),
    defaultY: 27,
  },
  {
    id: 'biceps',
    label: 'BICEPS',
    side: 'left',
    views: ['front', 'side'],
    regionIds: [R('biceps-brachii'), L('biceps-brachii')],
    defaultY: 33,
  },
  {
    id: 'forearms',
    label: 'FOREARMS',
    side: 'left',
    views: ['front', 'side', 'back'],
    regionIds: [...pair('forearm-flexors'), ...pair('forearm-extensors')],
    defaultY: 38,
  },
  {
    id: 'abs',
    label: 'ABS',
    side: 'left',
    views: ['front'],
    regionIds: [
      ...pair('rectus-abdominis-upper'),
      ...pair('rectus-abdominis-middle'),
      ...pair('rectus-abdominis-lower'),
    ],
    defaultY: 45,
  },
  {
    id: 'quads',
    label: 'QUADS',
    side: 'left',
    views: ['front', 'side'],
    regionIds: [
      ...pair('rectus-femoris'),
      ...pair('vastus-lateralis'),
      ...pair('vastus-medialis'),
      ...pair('adductors'),
    ],
    defaultY: 57,
  },
  {
    id: 'calves',
    label: 'CALVES',
    side: 'left',
    views: ['front', 'side', 'back'],
    regionIds: [
      ...pair('gastrocnemius'),
      ...pair('soleus'),
      ...pair('tibialis-anterior'),
    ],
    defaultY: 69,
  },

  // ─── RIGHT COLUMN (Viewer's Right) ───
  {
    id: 'neck',
    label: 'NECK',
    side: 'right',
    views: ['front', 'side', 'back'],
    regionIds: [L('trapezius-upper')],
    defaultY: 16,
  },
  {
    id: 'lats',
    label: 'LATS',
    side: 'right',
    views: ['front', 'side', 'back'],
    regionIds: pair('latissimus-dorsi'),
    defaultY: 25,
  },
  {
    id: 'serratus',
    label: 'SERRATUS',
    side: 'right',
    views: ['front', 'side'],
    regionIds: [L('external-oblique')],
    defaultY: 31,
  },
  {
    id: 'obliques',
    label: 'OBLIQUES',
    side: 'right',
    views: ['front', 'side'],
    regionIds: pair('external-oblique'),
    defaultY: 37,
  },
  {
    id: 'triceps',
    label: 'TRICEPS',
    side: 'right',
    views: ['front', 'side', 'back'],
    regionIds: pair('triceps-brachii'),
    defaultY: 53,
  },
  {
    id: 'hamstrings',
    label: 'HAMSTRINGS',
    side: 'right',
    views: ['front', 'side', 'back'],
    regionIds: [...pair('biceps-femoris'), ...pair('semitendinosus')],
    defaultY: 61,
  },
  {
    id: 'glutes',
    label: 'GLUTES',
    side: 'right',
    views: ['front', 'side', 'back'],
    regionIds: [...pair('gluteus-maximus'), ...pair('gluteus-medius')],
    defaultY: 68,
  },
]

// Backward-compatibility aliases for earlier ID references
const GROUP_ALIASES = {
  chest: 'pectoralis',
  'front-delts': 'deltoid',
  'side-delts': 'deltoid',
  'rear-delts': 'deltoid',
  'upper-abs': 'abs',
  'lower-abs': 'abs',
}

const REGION_TO_GROUP = new Map()

// Populate direct mappings
for (const group of MUSCLE_CALLOUT_GROUPS) {
  for (const regionId of group.regionIds) {
    if (!REGION_TO_GROUP.has(regionId)) {
      REGION_TO_GROUP.set(regionId, group)
    }
  }
}

export function getCalloutGroup(regionId) {
  if (!regionId) return null
  const direct = REGION_TO_GROUP.get(regionId)
  if (direct) return direct

  // Check alias
  const aliasId = GROUP_ALIASES[regionId]
  if (aliasId) {
    return MUSCLE_CALLOUT_GROUPS.find((g) => g.id === aliasId) ?? null
  }

  // Fallback matching by token
  for (const group of MUSCLE_CALLOUT_GROUPS) {
    if (group.id === regionId) return group
  }
  return null
}

export function isCalloutGroupInView(group, viewMode) {
  if (!group || !group.views) return true
  return group.views.includes(viewMode)
}

export function createCalloutLayout() {
  return Object.fromEntries(
    MUSCLE_CALLOUT_GROUPS.map((group) => [
      group.id,
      {
        id: group.id,
        label: group.label,
        visible: false,
        opacity: 0,
        side: group.side,
        anchorX: 50,
        anchorY: group.defaultY,
        labelX: group.side === 'left' ? 24 : 76,
        labelY: group.defaultY,
      },
    ]),
  )
}
