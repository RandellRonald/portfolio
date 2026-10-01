export const profile = {
 name:'Randell Ronald', email:'randellronald5@gmail.com', phone:'8075548419',
 github:'https://github.com/RandellRonald', linkedin:'https://www.linkedin.com/in/randell-ronald-60492336b/',
};
export const skills=[{name:'Languages',items:['Python','JavaScript','HTML','CSS']},{name:'Frontend',items:['React']},{name:'Platforms',items:['Firebase']},{name:'Tools',items:['Git','GitHub']}];
export const projects=[
 {
  name:'SLAB',
  category:'Construction Services Marketplace',
  image:'/images/slab.png',
  alt:'SLAB platform interface',
  description:'Connecting sites with the right equipment and service providers.',
  details:['Connects customers with verified construction equipment (JCB, crane) and service providers through booking, transparent estimates, smart matching, tracking, and site operations across Kerala.'],
  tech:['React','TypeScript','FastAPI','Python','SQL','Supabase'],
  url:'https://github.com/RandellRonald/Slab'
 },
 {
  name:'SmartLand',
  category:'Location Intelligence',
  image:'/images/smartland.png',
  alt:'SmartLand location analysis interface',
  description:'Turn coordinates into clear, explainable location insight.',
  details:['Analyzes geographic locations using deterministic spatial rules and public datasets to provide environmental risk, infrastructure, and livability context for real-world location decisions.'],
  tech:['Python','FastAPI','JavaScript','Leaflet','GeoJSON'],
  url:'https://github.com/RandellRonald/Smartland'
 },
 {
  name:'AutoBlueprint',
  category:'Architectural Planning System',
  image:'/images/autoblueprint.png',
  alt:'AutoBlueprint interface showing a generated residential model',
  description:'Generate constraint-aware residential blueprints from real-world rules.',
  details:['A backend-driven planning system that generates 2D architectural blueprints and derives 3D models using deterministic geometry, validation, circulation logic, and real-world measurements.'],
  tech:['Python','FastAPI','Shapely','React','SVG','Three.js','SQLite'],
  url:'https://github.com/RandellRonald/AutoBlueprint'
 },
 {
  name:'AutoKey3D',
  category:'Parametric 3D Generation',
  image:'/images/autokey3d.png',
  alt:'AutoKey3D generated key model interface',
  description:'Generate unique, manufacturable 3D key models programmatically.',
  details:['Generates parametric 3D key designs, previews them interactively, and produces STL output while using SHA256-based hashing for design uniqueness.'],
  tech:['Python','FastAPI','CadQuery','JavaScript','WebGL','STL'],
  url:'https://github.com/RandellRonald/AutoKey3D'
 }
];
