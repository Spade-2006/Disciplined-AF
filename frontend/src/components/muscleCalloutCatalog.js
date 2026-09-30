const L = (id) => `${id}-left`
const R = (id) => `${id}-right`
const pair = (id) => [R(id), L(id)]

export const MUSCLE_CALLOUT_GROUPS = [
  {
    id: 'chest',
    label: 'CHEST',
    side: 'left',
    views: ['front', 'side'],
    regionIds: pair('pectoralis-major'),
  },
  {
    id: 'front-delts',
    label: 'FRONT DELTS',
    side: 'right',
    views: ['front'],
    regionIds: pair('deltoid-anterior'),
  },
  {
    id: 'side-delts',
    label: 'SIDE DELTS',
    side: 'right',
    views: ['front', 'side'],
    regionIds: pair('deltoid-lateral'),
  },
  {
    id: 'rear-delts',
    label: 'REAR DELTS',
    side: 'right',
    views: ['back'],
    regionIds: pair('deltoid-posterior'),
  },
  {
    id: 'biceps',
    label: 'BICEPS',
    side: 'left',
    views: ['front', 'side'],
    regionIds: pair('biceps-brachii'),
  },
  {
    id: 'triceps',
    label: 'TRICEPS',
    side: 'right',
    views: ['front', 'side', 'back'],
    regionIds: pair('triceps-brachii'),
  },
  {
    id: 'forearms',
    label: 'FOREARMS',
    side: 'left',
    views: ['front', 'back'],
    regionIds: [...pair('forearm-flexors'), ...pair('forearm-extensors')],
  },
  {
    id: 'traps',
    label: 'TRAPS',
    side: 'left',
    views: ['back'],
    regionIds: pair('trapezius-upper'),
  },
  {
    id: 'mid-back',
    label: 'MID BACK',
    side: 'left',
    views: ['back'],
    regionIds: pair('trapezius-middle'),
  },
  {
    id: 'lats',
    label: 'LATS',
    side: 'right',
    views: ['back'],
    regionIds: pair('latissimus-dorsi'),
  },
  {
    id: 'erectors',
    label: 'ERECTORS',
    side: 'left',
    views: ['back'],
    regionIds: pair('spinal-erectors'),
  },
  {
    id: 'upper-abs',
    label: 'UPPER ABS',
    side: 'right',
    views: ['front'],
    regionIds: pair('rectus-abdominis-upper'),
  },
  {
    id: 'lower-abs',
    label: 'MID / LOWER ABS',
    side: 'right',
    views: ['front'],
    regionIds: [...pair('rectus-abdominis-middle'), ...pair('rectus-abdominis-lower')],
  },
  {
    id: 'obliques',
    label: 'OBLIQUES',
    side: 'left',
    views: ['front', 'side'],
    regionIds: pair('external-oblique'),
  },
  {
    id: 'glutes',
    label: 'GLUTES',
    side: 'right',
    views: ['side', 'back'],
    regionIds: [...pair('gluteus-maximus'), ...pair('gluteus-medius')],
  },
  {
    id: 'quads',
    label: 'QUADS',
    side: 'left',
    views: ['front', 'side'],
    regionIds: [...pair('rectus-femoris'), ...pair('vastus-lateralis'), ...pair('vastus-medialis')],
  },
  {
    id: 'adductors',
    label: 'ADDUCTORS',
    side: 'left',
    views: ['front'],
    regionIds: pair('adductors'),
  },
  {
    id: 'hamstrings',
    label: 'HAMSTRINGS',
    side: 'right',
    views: ['side', 'back'],
    regionIds: [...pair('biceps-femoris'), ...pair('semitendinosus')],
  },
  {
    id: 'calves',
    label: 'CALVES',
    side: 'left',
    views: ['side', 'back'],
    regionIds: [...pair('gastrocnemius'), ...pair('soleus')],
  },
  {
    id: 'tibialis',
    label: 'TIBIALIS',
    side: 'left',
    views: ['front'],
    regionIds: pair('tibialis-anterior'),
  },
]

const REGION_TO_GROUP = new Map(
  MUSCLE_CALLOUT_GROUPS.flatMap((group) => group.regionIds.map((regionId) => [regionId, group])),
)

export function getCalloutGroup(regionId) {
  return REGION_TO_GROUP.get(regionId) ?? null
}

export function isCalloutGroupInView(group, viewMode) {
  return group.views.includes(viewMode)
}

export function createCalloutLayout() {
  return Object.fromEntries(
    MUSCLE_CALLOUT_GROUPS.map((group) => [
      group.id,
      {
        id: group.id,
        visible: false,
        opacity: 0,
        side: group.side,
        anchorX: 50,
        anchorY: 50,
        labelY: 50,
      },
    ]),
  )
}
