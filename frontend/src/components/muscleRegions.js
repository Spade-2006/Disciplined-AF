function bilateral(id, label, position, scale, shape = 'fusiform', layer = 'anterior', rotation = [0, 0, 0]) {
  const [x, y, z] = position
  return [
    { id: `${id}-right`, label: `${label} / R`, side: 'R', layer, shape, position: [-x, y, z], scale, rotation },
    { id: `${id}-left`, label: `${label} / L`, side: 'L', layer, shape, position: [x, y, z], scale, rotation },
  ]
}

export const MUSCLE_REGIONS = [
  ...bilateral('pectoralis-major', 'Pectoralis major', [0.3, 3.71, 0.34], [0.34, 0.24, 0.15], 'fan'),
  ...bilateral('deltoid-anterior', 'Anterior deltoid', [0.57, 3.91, 0.22], [0.19, 0.27, 0.17], 'cap'),
  ...bilateral('deltoid-lateral', 'Lateral deltoid', [0.72, 3.9, 0.02], [0.21, 0.27, 0.22], 'cap', 'lateral'),
  ...bilateral('deltoid-posterior', 'Posterior deltoid', [0.57, 3.91, -0.22], [0.19, 0.27, 0.16], 'cap', 'posterior'),
  ...bilateral('trapezius-upper', 'Upper trapezius', [0.2, 4.02, -0.16], [0.21, 0.31, 0.13], 'fan', 'posterior'),
  ...bilateral('trapezius-middle', 'Middle trapezius', [0.17, 3.66, -0.3], [0.18, 0.35, 0.08], 'flat', 'posterior'),
  ...bilateral('biceps-brachii', 'Biceps brachii', [0.77, 3.39, 0.15], [0.15, 0.34, 0.13]),
  ...bilateral('triceps-brachii', 'Triceps brachii', [0.77, 3.39, -0.15], [0.15, 0.35, 0.13], 'fusiform', 'posterior'),
  ...bilateral('forearm-flexors', 'Forearm flexors', [0.93, 2.85, 0.105], [0.12, 0.37, 0.11], 'taper'),
  ...bilateral('forearm-extensors', 'Forearm extensors', [0.93, 2.85, -0.105], [0.12, 0.37, 0.11], 'taper', 'posterior'),
  ...bilateral('latissimus-dorsi', 'Latissimus dorsi', [0.39, 3.28, -0.25], [0.25, 0.49, 0.12], 'fan', 'posterior'),
  ...bilateral('spinal-erectors', 'Spinal erectors', [0.115, 3.12, -0.305], [0.1, 0.51, 0.09], 'fusiform', 'posterior'),
  ...bilateral('rectus-abdominis-upper', 'Rectus abdominis / upper', [0.13, 3.39, 0.35], [0.12, 0.13, 0.07], 'flat'),
  ...bilateral('rectus-abdominis-middle', 'Rectus abdominis / middle', [0.13, 3.12, 0.34], [0.12, 0.13, 0.07], 'flat'),
  ...bilateral('rectus-abdominis-lower', 'Rectus abdominis / lower', [0.125, 2.86, 0.32], [0.115, 0.12, 0.065], 'flat'),
  ...bilateral('external-oblique', 'External oblique', [0.37, 3.03, 0.2], [0.12, 0.36, 0.105], 'taper', 'lateral', [0, 0, -0.14]),
  ...bilateral('gluteus-maximus', 'Gluteus maximus', [0.21, 2.62, -0.22], [0.23, 0.25, 0.14], 'fan', 'posterior'),
  ...bilateral('gluteus-medius', 'Gluteus medius', [0.34, 2.78, -0.13], [0.15, 0.17, 0.12], 'cap', 'lateral'),
  ...bilateral('rectus-femoris', 'Rectus femoris', [0.14, 1.9, 0.22], [0.145, 0.56, 0.13]),
  ...bilateral('vastus-lateralis', 'Vastus lateralis', [0.37, 1.91, 0.12], [0.16, 0.53, 0.15], 'fusiform', 'lateral'),
  ...bilateral('vastus-medialis', 'Vastus medialis', [0.13, 1.52, 0.22], [0.14, 0.34, 0.14], 'taper'),
  ...bilateral('adductors', 'Adductor group', [0.105, 1.9, 0.015], [0.13, 0.43, 0.14], 'fusiform', 'medial'),
  ...bilateral('biceps-femoris', 'Biceps femoris', [0.37, 1.88, -0.18], [0.14, 0.53, 0.13], 'fusiform', 'posterior'),
  ...bilateral('semitendinosus', 'Semitendinosus', [0.15, 1.88, -0.22], [0.12, 0.54, 0.12], 'fusiform', 'posterior'),
  ...bilateral('gastrocnemius', 'Gastrocnemius', [0.245, 0.86, -0.045], [0.16, 0.39, 0.15], 'cap', 'posterior'),
  ...bilateral('soleus', 'Soleus', [0.24, 0.46, -0.045], [0.13, 0.27, 0.12], 'taper', 'posterior'),
  ...bilateral('tibialis-anterior', 'Tibialis anterior', [0.22, 0.69, 0.14], [0.095, 0.35, 0.085], 'taper'),
]

export function getMuscleCategory(regionId = '') {
  if (regionId.includes('pectoralis')) return 'CHEST'
  if (regionId.includes('deltoid')) return 'SHOULDERS'
  if (regionId.includes('biceps') || regionId.includes('triceps') || regionId.includes('forearm')) return 'ARMS'
  if (regionId.includes('abdominis') || regionId.includes('oblique')) return 'CORE'
  if (regionId.includes('latissimus') || regionId.includes('trapezius') || regionId.includes('erectors')) return 'BACK'
  if (regionId.includes('glute')) return 'GLUTES'
  if (regionId.includes('femoris') || regionId.includes('vastus') || regionId.includes('adductors')) return 'THIGHS'
  if (regionId.includes('gastrocnemius') || regionId.includes('soleus') || regionId.includes('tibialis')) return 'LOWER LEG'
  return 'MUSCLE GROUP'
}