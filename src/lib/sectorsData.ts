export type SectorFaq = {
  question: string;
  answer: string;
};

export type Sector = {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  headline: string;
  body: string[];
  services: string[];
  applications: string[];
  whyUs: string[];
  faqs: SectorFaq[];
};

export const sectorsData: Sector[] = [
  {
    id: "automotive",
    name: "Automotive Industry",
    description: "Laser-cut chassis parts, profiled body panels, brackets, and structural blanks for passenger cars, commercial trucks, and two-wheelers.",
    icon: "car",
    image: "/sector-automotive.png",
    metaTitle: "CNC Laser Cutting for Automotive | Surat",
    metaDescription: "CNC laser and plasma cutting for automotive parts in Surat — profiled chassis brackets, panel blanks, guards, and structural components for OEMs and Tier-1 suppliers across India.",
    keywords: [
      "automotive sheet metal fabrication India",
      "chassis parts manufacturer Surat",
      "car body panel fabrication",
      "automotive bracket manufacturer Gujarat",
      "sheet metal auto parts OEM supplier",
      "vehicle underbody parts fabrication",
    ],
    headline: "CNC Laser and Plasma Profile Cutting for Automotive OEMs and Tier-1 Suppliers",
    body: [
      "Balaji Engineering Works cuts high-accuracy automotive components on CNC laser and plasma systems, supporting car, commercial truck, and two-wheeler programmes throughout India. Every profile leaves our machines to the tight edge quality and repeat dimensional accuracy that automotive quality plans call for, whether the order is a first prototype or a full production release.",
      "Because contour cutting sits at the heart of what we do, we hold nesting tolerances tight and keep heat-affected zones minimal on CRCA, HRCA, galvanized, and stainless grades. Downstream press braking, MIG and TIG welding, and surface treatment run in the same plant, so a laser-cut underbody bracket or an outer panel blank moves from profile to finished part without leaving our floor.",
      "Backed by more than 25 years of metal-cutting experience and a facility in Kamrej, Surat, we give automotive OEMs and ancillary suppliers dependable profile quality, predictable turnaround, and clear updates on every job we run.",
    ],
    services: [
      "CNC laser cutting of body panel blanks and profiles",
      "Press brake forming of chassis brackets and mounts",
      "MIG/TIG welding of sub-assemblies and weldments",
      "Deep drawing of enclosure and housing parts",
      "Surface finishing — powder coating, zinc plating",
      "Prototype-to-production scale-up",
    ],
    applications: [
      "Chassis and sub-frame brackets",
      "Door hinges and reinforcement panels",
      "Underbody guards and skid plates",
      "Engine bay mounting brackets",
      "Fuel tank guards and covers",
      "Commercial vehicle cargo floor sections",
    ],
    whyUs: [
      "25+ years of profile cutting for automotive and ancillary makers across Gujarat and Maharashtra",
      "Laser cutting, plasma cutting, press braking, welding, and finishing all handled in-house",
      "Prototype nests welcome — no minimum quantity on development parts",
    ],
    faqs: [
      {
        question: "Which automotive parts can Balaji Engineering Works laser cut and fabricate?",
        answer: "Our CNC laser and plasma lines produce chassis brackets, underbody guards, panel blanks, door reinforcements, engine bay mounts, fuel tank guards, and commercial vehicle floor sections. Send DXF, DWG, STEP, or PDF geometry and we cut anything from a single prototype to a full production nest.",
      },
      {
        question: "Which materials do you profile cut for automotive work?",
        answer: "We cut CRCA (Cold Rolled Close Annealed), HRCA (Hot Rolled Close Annealed), galvanized steel, and SS 304/316 grades typical of automotive builds. The right grade is chosen around the structural load, corrosion exposure, and weight target of each part.",
      },
      {
        question: "Do you supply laser-cut parts to automotive OEMs and Tier-1 suppliers?",
        answer: "Yes. We deliver profile-cut and fabricated components to automotive OEMs and Tier-1 ancillary suppliers across Gujarat and Maharashtra, holding steady quality and reliable timing on both prototype nests and repeat production runs.",
      },
      {
        question: "What surface finishes can you apply to automotive parts?",
        answer: "After cutting and forming we arrange powder coating, zinc plating, epoxy primer, or leave parts in raw steel. If your engineering or quality team has a specific finish callout, send it across and we will match it.",
      },
      {
        question: "How quickly can automotive components be turned around?",
        answer: "Prototype profiles usually dispatch within 5 to 10 working days once the drawing is approved. Production batches are slotted according to volume and complexity, and we confirm a firm delivery schedule before cutting begins.",
      },
    ],
  },
  {
    id: "aviation",
    name: "Aviation",
    description: "Precision laser-cut parts, airside ground support equipment, hangar structures, and profiled airport infrastructure components.",
    icon: "plane",
    image: "/sector-aviation.png",
    metaTitle: "Aviation CNC Laser & Plasma Cutting - Surat",
    metaDescription: "Tight-tolerance CNC laser and plasma cutting for aviation in Surat — ground support equipment, MRO parts, hangar structures, and airside infrastructure profiles across India.",
    keywords: [
      "aviation sheet metal fabrication India",
      "aircraft ground support equipment fabrication",
      "hangar structural steel Surat",
      "airport infrastructure metal parts",
      "MRO sheet metal components India",
      "precision aviation parts manufacturer Gujarat",
    ],
    headline: "Tight-Tolerance Laser and Plasma Cutting for Aviation Ground Support and Infrastructure",
    body: [
      "Aviation work leaves no room for loose tolerances or rough edges. Balaji Engineering Works serves aviation customers with CNC laser cutting, CNC plasma cutting, and structural fabrication for ground-based needs — ground support equipment (GSE), MRO workshops, hangar interiors, and airside service structures — where clean profiles and traceable material matter on every part.",
      "We profile aerospace-grade aluminium, stainless steel, and mild steel, holding the tight contour accuracy these components require straight off the cutting bed and following with precision press braking. Welding runs to documented procedures, and each critical joint is checked visually and dimensionally before it ships.",
      "Whether the job is a single bespoke ground support trolley or a repeating run of hangar rack systems and service pit covers, we bring the flexibility and inspection discipline that aviation ground operations expect.",
    ],
    services: [
      "CNC laser cutting to tight aviation tolerances",
      "Precision press braking of aluminium and SS components",
      "Structural MIG/TIG welding with procedure documentation",
      "Ground support equipment (GSE) fabrication",
      "Hangar shelving, racks, and enclosure fabrication",
      "Surface preparation and primer coating",
    ],
    applications: [
      "Ground support equipment trolleys and frames",
      "Aircraft wheel chocks and safety barriers",
      "Hangar tool storage and racking systems",
      "Airside access covers and service pit lids",
      "MRO workshop workbenches and storage",
      "Cable trays and enclosure panels for airport infrastructure",
    ],
    whyUs: [
      "Documented welding procedures and inspection records shared on request",
      "Comfortable cutting aluminium, SS 304/316, and mild steel for ground-based aviation parts",
      "Rapid prototype cutting for MRO and retrofit projects",
    ],
    faqs: [
      {
        question: "What aviation ground support equipment does Balaji Engineering Works make?",
        answer: "We cut and fabricate ground support trolleys and frames, aircraft wheel chocks, safety barriers, airside access covers, MRO workshop workbenches, and hangar and maintenance-facility racking systems.",
      },
      {
        question: "Which materials do you cut for aviation-grade parts?",
        answer: "We profile aerospace-grade aluminium (6061, 5052), SS 304/316, and mild steel to your callout. The grade follows the weight target, corrosion environment, and structural load of each ground-based component.",
      },
      {
        question: "Do you supply weld inspection records for aviation parts?",
        answer: "Yes. We keep documented welding procedures and issue visual inspection records for every structural aviation component. Dimensional inspection reports for critical parts are also available on request.",
      },
      {
        question: "Can you cut custom MRO parts from our drawings?",
        answer: "Yes. Send DXF, DWG, STEP, IGES, or PDF geometry for MRO replacement or retrofit parts. Prototype cutting typically turns around in 5 to 7 working days once the drawing is reviewed and approved.",
      },
    ],
  },
  {
    id: "construction-architecture",
    name: "Construction and Architecture",
    description: "Profile-cut metal roofing, structural supports, facade cladding, handrails, staircases, and architectural metalwork for commercial and residential projects.",
    icon: "building2",
    image: "/sector-construction.png",
    metaTitle: "Structural & Architectural Cutting - Surat",
    metaDescription: "CNC laser and plasma profile cutting for construction in Surat — roofing, facade cladding, staircases, handrails, and structural supports for architects and contractors across India.",
    keywords: [
      "structural steel fabrication Surat Gujarat",
      "metal facade cladding manufacturer India",
      "architectural metalwork fabrication",
      "construction sheet metal parts",
      "metal staircase handrail manufacturer",
      "building steel structure contractor India",
    ],
    headline: "Structural and Architectural Profile Cutting for Construction Projects",
    body: [
      "From high-rise towers to residential villas, Balaji Engineering Works cuts and fabricates structural steel and architectural metal that carries load reliably while reading clean on the finished building. We work hand in hand with architects, PMCs, and main contractors so every profile matches the project drawings.",
      "Our CNC cutting and fabrication cover metal roofing systems, facade cladding panels, structural columns and beams, staircases, balustrades, handrails, and canopy frames. We profile mild steel, galvanized steel, stainless steel, and CORTEN-look material, with powder coating and zinc priming on hand to meet both the look and the weathering the project demands.",
      "Based in Kamrej, Surat — a centre for construction and metal processing alike — we move quickly from drawing to dispatch, comfortable handling one-off custom elements as well as large repeat runs for commercial sites.",
    ],
    services: [
      "Structural steel cutting, drilling, and welding",
      "Metal roof sheet profiling and gutter fabrication",
      "Facade cladding panel production",
      "Custom staircase and balustrade fabrication",
      "Handrail systems in MS, SS, and aluminium",
      "Canopy, pergola, and shade structure fabrication",
    ],
    applications: [
      "Metal roofing sheets and ridge caps",
      "Facade cladding and curtain wall panels",
      "Structural columns, beams, and purlins",
      "Internal and external staircases",
      "Balustrades, handrails, and safety railings",
      "Commercial canopies and entrance canopies",
    ],
    whyUs: [
      "Direct coordination with architects and structural engineers to hold design intent",
      "In-house powder coating and zinc priming for weather-resistant finishes",
      "Large-project capacity backed by dedicated production scheduling",
    ],
    faqs: [
      {
        question: "What structural and sheet metal cutting do you do for construction?",
        answer: "We profile and fabricate metal roofing systems, facade cladding panels, structural columns and beams, staircases, balustrades, handrails, canopy frames, and purlins. We cut from architect or structural engineer drawings and coordinate with main contractors on site needs.",
      },
      {
        question: "Do you work directly with architects and PMCs?",
        answer: "Yes. We liaise directly with architects, project management consultants, and main contractors so the cut and fabricated metalwork lines up with design intent, project specifications, and installation requirements.",
      },
      {
        question: "What finishes can you apply to architectural metalwork?",
        answer: "We offer powder coating in any RAL colour, zinc priming, epoxy primer, coordinated hot-dip galvanizing, and brushed or mill finishes on stainless steel. For CORTEN-effect looks, we can advise on material and finish choices.",
      },
      {
        question: "Can you fabricate custom staircases and handrail systems?",
        answer: "Yes. We fabricate internal and external staircases, balustrades, and handrail systems in mild steel, stainless steel, and aluminium to architectural drawings, handling both straight and curved profiles.",
      },
      {
        question: "What is your capacity for large construction projects?",
        answer: "Dedicated production scheduling lets us take on large project volumes and phase deliveries to your site installation timeline. Send your BOQ and drawings and we will assess capacity and timing.",
      },
    ],
  },
  {
    id: "energy-power",
    name: "Energy and Power",
    description: "Profile-cut sheet metal and structural components for wind turbines, solar mounting systems, power plant infrastructure, and electrical enclosures.",
    icon: "zap",
    image: "/sector-energy.png",
    metaTitle: "Energy Sector Laser & Plasma Cutting - Surat",
    metaDescription: "CNC laser and plasma cutting for the energy sector in Surat — solar mounting structures, wind turbine parts, power plant enclosures, and transformer housings for India's energy projects.",
    keywords: [
      "solar panel mounting structure manufacturer India",
      "wind turbine parts fabrication Surat",
      "power plant sheet metal components",
      "electrical enclosure fabrication Gujarat",
      "transformer housing manufacturer India",
      "renewable energy metal parts supplier",
    ],
    headline: "Profile Cutting for Wind, Solar, and Conventional Power Infrastructure",
    body: [
      "India's fast-growing energy sector — solar farms, wind parks, and thermal and hydro plants — needs corrosion-resistant profiles and structural parts at scale. Balaji Engineering Works cuts and fabricates components built to hold up in punishing outdoor service, from high UV and coastal salt spray to sustained heat.",
      "Our CNC cutting produces solar mounting frames and racking, wind turbine nacelle covers and bracket sets, transformer housings, electrical panel enclosures, cable trays, and power station structural steel. Hot-dip galvanizing, powder coating, and zinc-rich primer keep these field-deployed parts durable over the long haul.",
      "We handle both low-volume bespoke fabrication for one-off power projects and high-volume repeat cutting for solar EPC contractors who need thousands of identical profiles to match part for part.",
    ],
    services: [
      "Solar panel mounting frame and structure fabrication",
      "Wind turbine component fabrication",
      "Electrical enclosure and panel box fabrication",
      "Cable tray and cable management system production",
      "Transformer housing and substation enclosure fabrication",
      "Hot-dip galvanizing coordination and powder coating",
    ],
    applications: [
      "Solar ground-mount and rooftop racking frames",
      "Wind turbine nacelle and hub structural brackets",
      "HT/LT electrical panel enclosures",
      "Cable trays for power plants and substations",
      "Transformer plinth frames and protective enclosures",
      "Generator housing and canopy panels",
    ],
    whyUs: [
      "Fluent in the corrosion-protection specs outdoor energy infrastructure calls for",
      "Volume cutting capacity for solar EPC and wind project contractors",
      "Galvanizing, powder coating, and zinc priming in-house or through trusted partners",
    ],
    faqs: [
      {
        question: "Do you cut and fabricate solar panel mounting structures?",
        answer: "Yes. We cut ground-mount and rooftop solar racking frames and structural supports for solar EPC contractors, running high-volume repeat orders that stay dimensionally consistent across large batches.",
      },
      {
        question: "What corrosion protection can you offer on energy sector parts?",
        answer: "We coordinate hot-dip galvanizing and apply powder coating and zinc-rich primer in-house. These finishes shield outdoor energy infrastructure from UV, coastal salt spray, and humidity.",
      },
      {
        question: "Can you fabricate electrical panel enclosures and cable trays?",
        answer: "Yes. We cut and fabricate HT/LT electrical panel enclosures, cable trays, transformer housings, and substation structures in mild steel and stainless steel to your specifications.",
      },
      {
        question: "Do you supply solar EPC contractors in India?",
        answer: "Yes. We supply solar mounting frames and structural components to EPC contractors nationwide, with capacity for large project volumes and phased deliveries matched to site installation timelines.",
      },
    ],
  },
  {
    id: "general-manufacturing",
    name: "General Manufacturing",
    description: "Custom profile-cut sheet metal parts, enclosures, machine guards, and fabricated assemblies for diverse industrial machinery and production equipment.",
    icon: "factory",
    image: "/sector-manufacturing.png",
    metaTitle: "Custom Laser Cutting for Manufacturing - Surat",
    metaDescription: "Contract CNC laser and plasma cutting in Surat — custom enclosures, machine guards, panels, and assemblies for industrial equipment. Job-work profile cutting from Balaji Engineering Works.",
    keywords: [
      "custom sheet metal parts manufacturer India",
      "industrial machine guard fabrication",
      "contract sheet metal fabrication Surat",
      "enclosure sheet metal manufacturer Gujarat",
      "job work sheet metal Surat India",
      "industrial equipment sheet metal parts",
    ],
    headline: "Contract Laser and Plasma Cutting for Industrial Equipment and Machinery",
    body: [
      "Manufacturers across India come to Balaji Engineering Works for contract profile cutting — enclosures, machine guards, covers, brackets, panels, and custom assemblies cut and fabricated to their own drawings. We are set up for one-off samples, short prototype nests, and recurring production batches alike.",
      "Need a guard for a conveyor line, a control panel enclosure, a jig, or a mounting frame? Our team reads your drawing, flags any DFM improvement worth making, and delivers accurately cut parts against a committed date.",
      "We take standard 2D formats (DXF, DWG, PDF) and 3D models (STEP, IGES), and issue first-article inspection reports on new parts. With laser cutting, plasma cutting, press braking, welding, tapping, and finishing all under one roof, we keep subcontracting low and lead times predictable.",
    ],
    services: [
      "Laser cutting from customer-supplied drawings",
      "Press brake forming to tight angle tolerances",
      "Sheet metal enclosure and housing fabrication",
      "Machine guard and safety cover fabrication",
      "Tapping, punching, and hardware insertion",
      "First-article inspection and dimensional reporting",
    ],
    applications: [
      "Control panel and electrical enclosures",
      "Machine guards, covers, and safety screens",
      "Industrial jigs and fixture components",
      "Conveyor frame sections and covers",
      "Equipment mounting brackets and frames",
      "Custom sub-assemblies and weldments",
    ],
    whyUs: [
      "Job work welcome — we cut to your drawings with no design fees",
      "DXF, DWG, STEP, IGES, and PDF accepted, with fast DFM review",
      "Prototype through production batch in one plant under the same quality checks",
    ],
    faqs: [
      {
        question: "Do you accept job-work orders from customer drawings?",
        answer: "Yes. We take job-work orders in DXF, DWG, STEP, IGES, and PDF formats. Every drawing gets a manufacturability check, and we come back with a quote and lead time within 4 to 8 business hours.",
      },
      {
        question: "What is your minimum order quantity for custom parts?",
        answer: "Anything from a single prototype piece up to a large production batch. There is no fixed minimum — we size each job around the process, material, and complexity of the part.",
      },
      {
        question: "What kinds of enclosures and housings can you make?",
        answer: "We cut and fabricate control panel enclosures, electrical junction boxes, machine housings, equipment covers, and custom industrial enclosures in mild steel, stainless steel, and aluminium to your exact drawings.",
      },
      {
        question: "Can you provide first-article inspection reports?",
        answer: "Yes. For new part numbers we supply first-article inspection (FAI) reports verifying dimensions against the drawing before full production starts.",
      },
      {
        question: "Do you offer tapping, punching, and hardware insertion?",
        answer: "Yes. Alongside cutting, bending, and welding, we handle tapping, punching, countersinking, and PEM nut or stud insertion as value-added operations on sheet metal parts.",
      },
    ],
  },
  {
    id: "agriculture-heavy-machinery",
    name: "Agriculture and Heavy Machinery",
    description: "Profile-cut and fabricated parts for tractors, combine harvesters, agricultural implements, and heavy earthmoving and construction equipment.",
    icon: "cog",
    image: "/sector-agriculture.png",
    metaTitle: "Agri & Heavy Machinery Cutting - Surat",
    metaDescription: "CNC laser and plasma cutting for agriculture and heavy machinery in Surat — rugged profiled parts for tractors, harvesters, implements, and earthmoving equipment built for field service.",
    keywords: [
      "tractor sheet metal parts manufacturer India",
      "agricultural equipment fabrication Surat",
      "combine harvester parts fabrication",
      "heavy machinery sheet metal Gujarat",
      "farm equipment structural parts India",
      "earthmoving equipment sheet metal parts",
    ],
    headline: "Heavy-Gauge Profile Cutting for Agricultural and Heavy Equipment Makers",
    body: [
      "Farm machinery and heavy equipment take a beating in the field — heavy vibration, abrasive dust, UV, and rough handling. Balaji Engineering Works cuts heavy-gauge profiles and structural steel built to survive it, supplying tractor OEMs, implement makers, and construction equipment assemblers.",
      "We profile bonnet panels, fender assemblies, tool frame sections, cultivator tines, seed drill frames, chassis brackets, and cab structure parts. Plasma and laser cutting handle HRCA, CRCA, and wear-resistant grades, with weld quality and dimensions verified at each stage before dispatch.",
      "Our press brakes take heavy-gauge bends and our MIG line is at home with structural weldments that need full-penetration joints and high fatigue life. We ship both individual profiles and pre-welded sub-units to shorten your final assembly.",
    ],
    services: [
      "Heavy-gauge press braking and CNC cutting",
      "Structural MIG welding for high-fatigue parts",
      "Tractor bonnet and fender panel fabrication",
      "Agricultural implement frame and chassis work",
      "Abrasion-resistant steel (AR plate) cutting and forming",
      "Sub-assembly welding to reduce your assembly time",
    ],
    applications: [
      "Tractor bonnet, hood, and fender panels",
      "Seed drill and planter frame sections",
      "Rotavator and cultivator tine assemblies",
      "Combine harvester cutter bar components",
      "Loader and backhoe bucket side plates",
      "Earthmover cab structure and canopy panels",
    ],
    whyUs: [
      "Heavy-gauge bending up to 8 mm mild steel",
      "Structural weld know-how for vibration and high-load duty",
      "Supplying major agricultural OEMs and implement makers across Gujarat",
    ],
    faqs: [
      {
        question: "What agricultural machinery parts can you cut and fabricate?",
        answer: "We profile tractor bonnets, hoods, fenders, seed drill frames, rotavator tine assemblies, combine harvester cutter bar parts, planter frames, and earthmover cab panels, working in HRCA, CRCA, and wear-resistant grades.",
      },
      {
        question: "Can you handle heavy-gauge steel for agricultural equipment?",
        answer: "Yes. Our press brakes bend heavy-gauge mild steel up to 8 mm, suitable for structural brackets, chassis parts, and loader bucket side plates on agricultural and earthmoving machines. Thicker plate is cut on our plasma line.",
      },
      {
        question: "Do you fabricate sub-assemblies for agricultural OEMs?",
        answer: "Yes. We supply welded sub-assemblies and pre-built structural units to agricultural OEMs and implement makers, cutting your final assembly time and simplifying supply.",
      },
      {
        question: "What welding do you use for heavy agricultural parts?",
        answer: "We MIG weld structural agricultural weldments that need full-penetration joints and high fatigue resistance. Every critical weld is checked visually and dimensionally before it leaves the plant.",
      },
    ],
  },
  {
    id: "crushing-mining",
    name: "Crushing and Mining",
    description: "Profile-cut conveyor frames, crusher liners, equipment housing, structural steelwork, and wear-resistant components for mining and mineral processing.",
    icon: "hammer",
    image: "/sector-mining.png",
    metaTitle: "Crushing & Mining Plasma Cutting - Surat",
    metaDescription: "Heavy CNC plasma and laser cutting for crushing and mining in Surat — conveyor frames, crusher housings, chutes, hoppers, and wear-plate profiles for mineral processing across India.",
    keywords: [
      "crusher parts fabrication India",
      "conveyor frame manufacturer Surat Gujarat",
      "mining equipment fabrication India",
      "hopper chute sheet metal manufacturer",
      "wear plate steel fabrication India",
      "mineral processing equipment parts",
    ],
    headline: "Heavy Plasma and Laser Cutting for Crushing, Conveying, and Mining Equipment",
    body: [
      "Crushing and mining punish fabricated parts — nonstop vibration, heavy impact, and abrasive flow call for heavy structural steel and wear-plate profiles cut to exact geometry. Balaji Engineering Works has deep experience supplying cut and fabricated parts to stone crushing plants, mineral processing units, and bulk material handling contractors.",
      "We profile conveyor frames and roller supports, crusher body panels and liners, feed hoppers, discharge chutes, magnetic separator housings, and vibrating screen frames. Depending on thickness and wear demand, cutting runs on CNC plasma or laser across mild steel, high-tensile steel, and AR wear plate, and we coordinate hot-dip galvanizing for outdoor or wet installs.",
      "Our welders are practised at full-penetration structural joints that ride out constant dynamic loading, and we issue dimensional inspection reports on critical structural parts for your install and maintenance records.",
    ],
    services: [
      "Heavy structural steel cutting, drilling, and welding",
      "Conveyor frame and support structure fabrication",
      "Hopper and chute fabrication in MS and AR plate",
      "Crusher housing and body panel fabrication",
      "Vibrating screen and feeder frame fabrication",
      "Wear liner installation and plate replacement services",
    ],
    applications: [
      "Conveyor belt frame sections and stringer supports",
      "Feed hoppers and discharge chutes",
      "Crusher side plates, access doors, and covers",
      "Vibrating screen and grizzly feeder frames",
      "Magnetic separator and dust suppression housings",
      "Belt conveyor drive and tail pulley support frames",
    ],
    whyUs: [
      "Experienced cutting AR plate (Hardox equivalent) and welding heavy structures",
      "Full-penetration welds with dimensional checks on critical load-bearing parts",
      "On-time supply to crushing plant and conveyor integrators across India",
    ],
    faqs: [
      {
        question: "What crushing and mining parts do you cut and fabricate?",
        answer: "We profile conveyor belt frame sections, feed hoppers, discharge chutes, crusher side plates and access covers, vibrating screen frames, grizzly feeder frames, and belt conveyor drive and tail pulley supports.",
      },
      {
        question: "Can you cut abrasion-resistant (AR) plate?",
        answer: "Yes. We cut and form AR plate (Hardox equivalent grades) for wear-critical parts such as hopper liners, chute liners, and conveyor impact zones. Cutting runs on CNC plasma or laser depending on plate thickness.",
      },
      {
        question: "What welding standard do you follow on structural mining parts?",
        answer: "We use full-penetration MIG welding on load-bearing structures and supply dimensional inspection reports for critical parts. Weld procedure documentation is available on request for audit purposes.",
      },
      {
        question: "Do you supply conveyor system integrators directly?",
        answer: "Yes. We deliver cut and fabricated structural parts directly to conveyor integrators, crushing plant contractors, and mineral processing equipment makers across India.",
      },
    ],
  },
  {
    id: "defense-military",
    name: "Defense and Military",
    description: "Profile-cut structural and protective components for defense vehicles, shelters, storage systems, and military infrastructure applications.",
    icon: "shield",
    image: "/sector-defense.png",
    metaTitle: "Defense Sector Metal Cutting - Surat",
    metaDescription: "Precision CNC laser and plasma cutting for defense in Surat — vehicle components, protective enclosures, storage systems, and base infrastructure profiles with material traceability.",
    keywords: [
      "defense sheet metal fabrication India",
      "military vehicle parts fabrication",
      "defense enclosure manufacturer Gujarat",
      "military shelter structural steel India",
      "defense storage fabrication Surat",
      "armored vehicle component manufacturer India",
    ],
    headline: "Structural and Protective Cutting for Defense and Military Applications",
    body: [
      "Defense work sets the bar high on structural integrity, dimensional accuracy, and material compliance. Balaji Engineering Works cuts and fabricates sheet metal and structural steel for defense-related ground applications — vehicle ancillaries, equipment shelters, storage and transport systems, and base infrastructure.",
      "We profile high-tensile steel, MS plate, SS grades, and aluminium alloys to the customer callout, with full heat-number traceability where required. Welding follows documented procedures, and each structural weld is visually inspected before dispatch.",
      "We serve defense contractors and sub-contractors in vehicle assembly, ordnance storage, and field infrastructure. Our Kamrej, Surat facility runs under tight quality control, and every defense project is handled in confidence.",
    ],
    services: [
      "High-tensile and thick-plate cutting and forming",
      "Structural welding with documented procedures",
      "Protective enclosure and housing fabrication",
      "Vehicle body panel and bracket fabrication",
      "Storage rack and container structural fabrication",
      "Material traceability documentation on request",
    ],
    applications: [
      "Military vehicle body panels and protective covers",
      "Equipment shelter and field station structures",
      "Ammunition and equipment storage rack systems",
      "Generator and equipment protective enclosures",
      "Vehicle underbody guards and blast deflection plates",
      "Communication shelter frames and cable management",
    ],
    whyUs: [
      "Documented weld procedures and material traceability for defense-grade parts",
      "Strict confidentiality kept across all defense-related work",
      "Practised with high-tensile plate and heavy structural cutting for rugged duty",
    ],
    faqs: [
      {
        question: "What defense-related parts do you cut and fabricate?",
        answer: "We profile military vehicle body panels and protective covers, equipment shelter frames, ammunition and storage rack systems, generator enclosures, underbody guards, communication shelter frames, and cable management for base infrastructure.",
      },
      {
        question: "Do you keep defense orders confidential?",
        answer: "Yes. Every defense project is handled in strict confidence. Component details, quantities, and customer identities stay within our production team and are not shared outside it.",
      },
      {
        question: "Can you supply material traceability for defense parts?",
        answer: "Yes. We can provide material test certificates with heat-number traceability, weld procedure documentation, and dimensional inspection records for critical defense-grade structural components.",
      },
      {
        question: "What steel grades do you cut for defense work?",
        answer: "We cut high-tensile steel (HT 500, HT 550), mild steel plate, SS 304/316, and aluminium alloys to the defense customer's callout. Grade selection follows the structural, weight, and ballistic-protection needs of each part.",
      },
    ],
  },
  {
    id: "interior-exterior-design",
    name: "Interior and Exterior Design",
    description: "CNC laser-cut metal art, decorative facade panels, elevation cladding, pergolas, feature walls, and custom architectural metalwork.",
    icon: "palette",
    image: "/sector-interior-design.png",
    metaTitle: "Decorative Laser-Cut Metalwork - Surat",
    metaDescription: "Custom CNC laser-cut metal panels, decorative facades, feature walls, pergolas, and elevation cladding in Surat for interior designers and architects. Premium architectural metalwork.",
    keywords: [
      "CNC laser cut decorative metal panels India",
      "architectural metal facade fabrication Surat",
      "feature wall metal fabrication Gujarat",
      "decorative steel panel manufacturer India",
      "pergola metal fabrication Surat",
      "elevation cladding metal manufacturer India",
    ],
    headline: "Custom CNC Laser-Cut Decorative and Architectural Metalwork",
    body: [
      "Balaji Engineering Works marries engineering precision with design flair, cutting custom decorative metalwork for interior designers, architects, and developers nationwide. From intricately laser-cut feature panels to full building elevations, we turn a design file into fabricated metal with clean, consistent edges throughout.",
      "Working from architect DXF or vector artwork, we laser cut decorative screens, jali panels, pergola structures, privacy screens, staircase balustrades, facade cladding, and bespoke furniture frames in mild steel, stainless steel, corten steel, and aluminium. Powder coating comes in any RAL colour, and raw-steel patina finishes are available on request.",
      "Indoors we produce wall art panels, suspended ceiling elements, partition screens, and decorative door frames; outdoors, elevation panels, gate designs, facade cladding, and landscape structures. Everything is cut to drawing and packed to protect the finish through transport and installation.",
    ],
    services: [
      "CNC laser cutting of intricate decorative patterns",
      "Powder coating in custom RAL colours",
      "Facade cladding and elevation panel fabrication",
      "Pergola and outdoor shade structure fabrication",
      "Decorative balustrade and handrail fabrication",
      "Feature wall panel and suspended element production",
    ],
    applications: [
      "Decorative laser-cut wall and ceiling panels",
      "Elevation facade cladding and rainscreen panels",
      "Hotel lobby and commercial interior feature walls",
      "Residential and commercial pergolas and canopies",
      "Privacy screens, partition panels, and room dividers",
      "Decorative gate designs and entrance features",
    ],
    whyUs: [
      "Vector artwork to finished panel — laser cutting through powder coating all in-house",
      "Custom RAL powder coating with samples before you approve production",
      "Packaging engineered to protect decorative finishes en route to site",
    ],
    faqs: [
      {
        question: "Can you laser cut custom decorative panels from my design?",
        answer: "Yes. Send your design as a DXF or vector file (AI, EPS, SVG) and we will cut the pattern cleanly in your chosen material — mild steel, stainless steel, or aluminium. We can advise on minimum feature size and thickness for the intended use.",
      },
      {
        question: "What powder coating colours can you offer on decorative metalwork?",
        answer: "We powder coat in any RAL colour and can run a sample piece before full production to confirm the colour and finish suit your project. Matte, satin, and gloss finishes are all available.",
      },
      {
        question: "What materials suit exterior facade cladding panels?",
        answer: "We cut facade cladding in mild steel (powder coated), stainless steel (brushed or powder coated), and aluminium. Outdoors, we recommend powder coating over a weather-resistant primer base for lasting finish durability.",
      },
      {
        question: "What is the lead time for decorative laser-cut panels?",
        answer: "Standard decorative panels usually dispatch within 7 to 14 working days once the design is approved and the material is confirmed. Large runs with several panel designs are scheduled by total quantity and complexity.",
      },
      {
        question: "Do you fabricate pergolas and outdoor shade structures?",
        answer: "Yes. We fabricate custom pergolas, canopies, and shade structures in mild steel and aluminium, powder coated for weather resistance. We work from your or your architect's drawings and can suggest structural sizing for the span and load.",
      },
    ],
  },
  {
    id: "marine-industry",
    name: "Marine Industry",
    description: "Corrosion-resistant profile cutting and fabrication for shipbuilding, vessel interiors, offshore platforms, and port infrastructure.",
    icon: "anchor",
    image: "/sector-marine.png",
    metaTitle: "Marine Laser Cutting & Fabrication - Surat",
    metaDescription: "Marine-grade CNC cutting in SS 316, aluminium, and galvanized steel in Surat — profiled parts for shipbuilding, vessel components, port infrastructure, and offshore structures.",
    keywords: [
      "marine sheet metal fabrication India",
      "shipbuilding component manufacturer Gujarat",
      "SS 316 marine fabrication Surat",
      "offshore structural steel fabrication India",
      "vessel interior fabrication India",
      "port infrastructure metal fabrication",
    ],
    headline: "Corrosion-Resistant Profile Cutting for Marine and Offshore Applications",
    body: [
      "Marine service demands corrosion-resistant material and flawless welds. Balaji Engineering Works cuts and fabricates for shipbuilders, vessel operators, port authorities, and offshore contractors in marine-grade material — chiefly SS 316, aluminium alloys, and hot-dip galvanized mild steel — so parts stand up to salt spray, humidity, and immersion.",
      "We profile vessel interior panels and bulkhead sections, engine room enclosures, port infrastructure metalwork, offshore safety barriers, gangways, and deck fittings. Our TIG welding delivers full-penetration, low-distortion joints on stainless and aluminium, which is essential for watertight and structurally demanding marine assemblies.",
      "From a single bespoke vessel component to repeat runs of port equipment parts, we bring the material knowledge and cutting precision marine customers rely on — with inspection records and material certificates available on every order.",
    ],
    services: [
      "SS 316 and aluminium TIG welding for marine parts",
      "Vessel interior panel and bulkhead fabrication",
      "Deck fitting and gangway structural fabrication",
      "Hot-dip galvanizing coordination for MS marine parts",
      "Engine room enclosure and ventilation panel fabrication",
      "Material certifications and weld inspection records",
    ],
    applications: [
      "Vessel hull reinforcement plates and patches",
      "Bulkhead and interior cabin panels",
      "Engine room enclosures and cable tray systems",
      "Gangways, railings, and safety barriers",
      "Port crane support structures and equipment housings",
      "Offshore platform access ladders and walkways",
    ],
    whyUs: [
      "Marine-grade sourcing — SS 316, aluminium 5052/6061, and galvanized steel",
      "TIG welding for watertight, low-distortion marine assemblies",
      "Material test certificates and weld inspection records on request",
    ],
    faqs: [
      {
        question: "What marine and offshore parts can you cut and fabricate?",
        answer: "We profile vessel interior panels and partitions, deck fixtures and housings, offshore platform handrail systems, gangways, cable trays, and structural support frames for marine and port infrastructure.",
      },
      {
        question: "Which materials do you use for marine-grade work?",
        answer: "We work mainly in SS 304, SS 316, and SS 316L for high-corrosion marine environments. For structural parts we use mild steel with heavy-duty marine paint or hot-dip galvanizing as specified.",
      },
      {
        question: "Do you TIG weld stainless steel marine parts?",
        answer: "Yes. We TIG weld stainless marine parts where clean, full-penetration welds and corrosion resistance are critical. All stainless seams are passivated and inspected before dispatch.",
      },
      {
        question: "Can you provide material test certificates for marine parts?",
        answer: "Yes. We provide material test certificates (MTCs) with heat-number traceability and weld inspection records on request — the documentation classification societies and marine QA teams commonly require.",
      },
    ],
  },
  {
    id: "railway-transportation",
    name: "Railway and Transportation",
    description: "Profile-cut sheet metal components for train carriages, metro systems, bus bodywork, and railway station infrastructure.",
    icon: "train",
    image: "/sector-railway.png",
    metaTitle: "Railway & Transport Laser Cutting - Surat",
    metaDescription: "Precision CNC laser and plasma cutting for railway and transport in Surat — coach panels, metro parts, bus bodywork, and station infrastructure for Indian Railways and metro suppliers.",
    keywords: [
      "railway coach sheet metal fabrication India",
      "metro train parts manufacturer Gujarat",
      "bus body sheet metal fabrication Surat",
      "rail station infrastructure steel fabrication",
      "train carriage interior panel manufacturer",
      "transportation sheet metal supplier India",
    ],
    headline: "Precision Profile Cutting for Rail Coaches, Metro Systems, and Transit Infrastructure",
    body: [
      "India's growing railway and metro networks need profiled components that pair dimensional precision with consistent finish and high-volume reliability. Balaji Engineering Works cuts and fabricates carriage interior panels, under-frame brackets, flooring sections, roof panels, and structural parts for coach builders, metro rolling-stock contractors, and railway infrastructure firms.",
      "We profile CRCA, stainless steel, and aluminium for interior and semi-structural use, with powder coating, epoxy primer, and anodizing available to meet railway specifications. Laser cutting keeps blank sizes uniform across high-volume runs, and our press braking repeats formed profiles to the tight angle tolerances modular coach interiors depend on.",
      "For station and depot infrastructure we supply canopy structures, platform edge panels, signage frames, seating structures, and utility enclosures — cut to project drawings and delivered with packaging that guards finished surfaces.",
    ],
    services: [
      "High-volume laser cutting for carriage panel blanks",
      "Repeatable press braking for interior profile consistency",
      "Structural welding for coach sub-frames and brackets",
      "Aluminium and SS interior panel fabrication",
      "Station infrastructure canopy and structural work",
      "Powder coating and epoxy primer for railway spec finishes",
    ],
    applications: [
      "Train and metro coach interior wall and ceiling panels",
      "Under-frame mounting brackets and support structures",
      "Roof panel sections and door frame reinforcements",
      "Platform edge cladding and signage frames",
      "Station canopy structural sections",
      "Depot tool storage and equipment enclosures",
    ],
    whyUs: [
      "High-volume cutting with consistent dimensions across large batches",
      "Experienced with railway-specification powder coating and epoxy primer",
      "Supplying Indian Railways contractors and metro project subcontractors",
    ],
    faqs: [
      {
        question: "What railway components do you cut and fabricate?",
        answer: "We profile train carriage interior panels, under-seat equipment housings, cable tray and conduit systems, station canopy supports, platform edge frames, driver cab panels, and metro coach interior fixtures.",
      },
      {
        question: "Which materials do you use for railway and metro work?",
        answer: "We cut SS 304/316, 6061 aluminium, and mild steel to the rolling-stock maker's or railway contractor's callout. Grade selection follows the fire-resistance, weight, and structural needs of each application.",
      },
      {
        question: "Can you supply Indian Railways contractors and metro vendors?",
        answer: "Yes. We supply cut and fabricated sheet metal components to Indian Railways contractors, metro rail project subcontractors, and railway station infrastructure firms across India.",
      },
      {
        question: "Do you handle powder coating for railway interior parts?",
        answer: "Yes. We powder coat in specified RAL or railway standard colours, with surface prep and primer for interior and exterior railway parts. Colour and finish samples are available before full production.",
      },
      {
        question: "What volume can you handle for railway production orders?",
        answer: "We take both prototype and production-volume railway orders, and schedule phased deliveries to match rolling-stock assembly or infrastructure construction timelines. Send your BOQ for a capacity assessment.",
      },
    ],
  },
];
