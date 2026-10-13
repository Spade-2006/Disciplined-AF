const fs = require('fs');
let code = fs.readFileSync('C:\\\\Programming\\\\Projects\\\\Disciplined-AF\\\\generate_hamstrings_exercises.js', 'utf-8');

const arrayMatch = code.match(/const hamstringsExercises = (\[[\s\S]*?\]);\n\n/);
if (!arrayMatch) {
  console.log("Could not find array");
  process.exit(1);
}

const getArr = new Function('return ' + arrayMatch[1]);
const arr = getArr();

let out = "export const hamstringsExercises = [\n";
let lastCat = "";
arr.forEach((ex) => {
  let category = "";
  if (ex.id.includes("rdl")) category = "ROMANIAN DEADLIFTS (RDL)";
  else if (ex.id.includes("stiff_leg")) category = "STIFF-LEG DEADLIFTS";
  else if (ex.id.includes("good_morning")) category = "GOOD MORNINGS";
  else if (ex.id.includes("leg_curl") && !ex.id.includes("slide") && !ex.id.includes("stability") && !ex.id.includes("suspension") && !ex.id.includes("inverse")) category = "LEG CURLS";
  else if (ex.id.includes("slide") || ex.id.includes("towel") || ex.id.includes("paper_plate") || ex.id.includes("valslide")) category = "SLIDER CURLS";
  else if (ex.id.includes("stability_ball")) category = "STABILITY BALL CURLS";
  else if (ex.id.includes("suspension_trainer")) category = "SUSPENSION TRAINER CURLS";
  else if (ex.id.includes("nordic")) category = "NORDIC CURLS";
  else if (ex.id.includes("glute_ham") || ex.id.includes("razor")) category = "GLUTE-HAM RAISES (GHR)";
  else if (ex.id.includes("bridge") || ex.id.includes("walkout")) category = "BRIDGES & WALKOUTS";
  else if (ex.id.includes("hyperextension")) category = "REVERSE HYPEREXTENSIONS";
  else if (ex.id.includes("inverse_leg_curl")) category = "INVERSE LEG CURLS";

  if (category !== lastCat) {
    if (lastCat !== "") out += "\n";
    out += `  // ${category}\n`;
    lastCat = category;
  }
  
  // Custom format arrays with spaces
  const formatArr = (a) => `[${a.map(x => `"${x}"`).join(', ')}]`;

  // single line format
  out += `  { id: "${ex.id}", name: "${ex.name}", primaryMuscles: ${formatArr(ex.primaryMuscles)}, secondaryMuscles: ${formatArr(ex.secondaryMuscles)}, equipment: ${formatArr(ex.equipment)}, environment: ${formatArr(ex.environment)}, difficulty: "${ex.difficulty}", movement: "${ex.movement}" },\n`;
});
out = out.slice(0, -2) + "\n];\n"; // remove last comma

fs.writeFileSync('C:\\\\Programming\\\\Projects\\\\Disciplined-AF\\\\generate_hamstrings_exercises.js', out, 'utf-8');
