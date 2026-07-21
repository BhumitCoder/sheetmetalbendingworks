import type { Service } from "@/lib/firestore/types";

export type ServiceFaq = {
  question: string;
  answer: string;
};

type ServiceSeoEntry = {
  metaTitle: string;
  metaDescription: string;
  intro: string;
  applications: string[];
  process: string[];
  keywords: string[];
  faqs: ServiceFaq[];
};

const serviceSeoMap: Record<string, ServiceSeoEntry> = {
  "cnc-plate-bending": {
    metaTitle: "Precision CNC Plate Bending in Surat",
    metaDescription:
      "CNC plate bending service in Surat that pairs press brake forming with our laser and plasma cutting lines for consistent, drawing-accurate bent parts.",
    intro:
      "Alongside our laser and plasma cutting lines, Balaji Engineering Works runs a CNC plate bending service in Surat, turning flat blanks into accurately angled, fabrication-ready sections with repeatable results job after job.",
    applications: [
      "Brackets and channels used in structural fabrication",
      "Side plates, enclosures, and mounting hardware for machinery",
      "Custom heavy bent profiles, supports, and frames",
      "Volume bending runs handled for fabrication contractors",
    ],
    process: [
      "Studying the drawing and confirming that each bend is achievable",
      "Selecting material, setting thickness, and mapping the bend order",
      "Programming the CNC press brake and forming under controlled conditions",
      "Checking every angle and getting parts ready to ship",
    ],
    keywords: [
      "cnc plate bending service in surat",
      "press brake bending services surat",
      "mild steel plate bending service surat",
      "industrial plate bending job work gujarat",
    ],
    faqs: [
      {
        question: "Is CNC plate bending available at your Surat unit?",
        answer:
          "Absolutely. Our Surat facility handles CNC plate bending for structural work, general fabrication, and industrial plate forming of every kind.",
      },
      {
        question: "Will you quote from CAD files or from a sample size?",
        answer:
          "Certainly. Send us DXF, DWG, or PDF files, or simply the dimensions, and our team studies the job first before sending across a quote.",
      },
      {
        question: "Are one-off pieces and repeat batches both possible?",
        answer:
          "They are. Depending on the thickness and the profile, we take on single prototype bends as well as ongoing production quantities.",
      },
    ],
  },
  "sheet-metal-shearing-cutting": {
    metaTitle: "Sheet Metal Shearing Cutting in Surat | Cut to Size",
    metaDescription:
      "Sheet metal shearing cutting service in Surat delivering hydraulically sheared blanks, cut-to-size sheets, and clean material ready for the next stage.",
    intro:
      "For jobs that call for straight cuts rather than laser or plasma profiling, Balaji Engineering Works offers a sheet metal shearing cutting service in Surat that produces uniform blanks and reliably prepped material ahead of bending, welding, or fabrication.",
    applications: [
      "Sheet and plate blanks sheared to the size you need",
      "Stock preparation feeding CNC bending and fabrication",
      "Strip cutting for jobs that repeat in production",
      "Backup cutting for large industrial fabrication work",
    ],
    process: [
      "Going over the drawing, the required size, and the thickness",
      "Dialling in the hydraulic shear for the length and grade in hand",
      "Running the batch while holding each cut to size",
      "Checking, stacking, and readying material for dispatch",
    ],
    keywords: [
      "sheet metal shearing cutting service in surat",
      "hydraulic shearing service surat",
      "cut to size sheet metal service surat",
      "plate shearing cutting gujarat",
    ],
    faqs: [
      {
        question: "How much can your shearing line handle?",
        answer:
          "Our shearing covers material up to 32 mm thick and lengths reaching 5 meters, with the exact limit depending on the grade and the nature of the job.",
      },
      {
        question: "Are sheared blanks good enough to feed straight into fabrication?",
        answer:
          "Yes indeed. Shearing is a go-to method for straight blanks, strips, and production-ready stock that then moves on to bending, welding, or assembly.",
      },
      {
        question: "Can a shearing order also cover bending or fabrication?",
        answer:
          "Of course. Plenty of clients bundle shearing with CNC bending, welding, and fabrication so lead times shrink and coordination stays simple.",
      },
    ],
  },
  "cnc-laser-cutting": {
    metaTitle: "CNC Laser Cutting in Surat | Fiber Laser Job Work",
    metaDescription:
      "CNC laser cutting services in Surat delivering clean-edged mild steel and stainless profiles, production blanks, and precise fabrication parts, fast.",
    intro:
      "CNC laser cutting is at the heart of what we do. Balaji Engineering Works delivers CNC laser cutting services in Surat with crisp cut edges, rapid quoting, and precise, drawing-driven processing of sheet metal for demanding buyers.",
    applications: [
      "Profile parts and production blanks cut to spec",
      "Laser-cut components feeding downstream fabrication",
      "Precision plates, brackets, and machine enclosures",
      "MS and SS sheet cutting handled as custom job work",
    ],
    process: [
      "Opening the drawing file and confirming an efficient nest",
      "Locking in the material grade and thickness",
      "Firing the laser and tagging each batch as it comes off",
      "Inspecting the parts and packing them for dispatch",
    ],
    keywords: [
      "cnc laser cutting services in surat",
      "laser cutting services in surat",
      "fiber laser cutting gujarat",
      "sheet laser cutting job work surat",
    ],
    faqs: [
      {
        question: "Which file types work for a CNC laser cutting quote?",
        answer:
          "Send DXF, DWG, STEP, or PDF files, or even a drawing-based brief, and we will use them to quote and to plan the CNC laser cutting run.",
      },
      {
        question: "Are both mild and stainless steel sheets laser cut here?",
        answer:
          "They are. We laser cut MS and stainless steel routinely, with the specifics guided by the thickness and the production volume involved.",
      },
      {
        question: "Can laser-cut parts move on to bending or fabrication?",
        answer:
          "Definitely. A great many jobs pair laser cutting with sheet bending or fabrication under one roof, trimming both lead time and back-and-forth.",
      },
    ],
  },
  "plate-rolling": {
    metaTitle: "Plate Rolling in Surat | Shells & Cylinders",
    metaDescription:
      "Plate rolling service in Surat forming cylinders, shells, ducts, and curved sections with accurate radius control for heavy fabrication projects.",
    intro:
      "Balaji Engineering Works runs a plate rolling service in Surat for anyone needing curved steel sections, shells, ducts, or heavy fabricated parts, backing accurate radius control with grounded, hands-on manufacturing know-how.",
    applications: [
      "Fabrication of cylinders and pressure shells",
      "Curved sections for structural and industrial use",
      "Rolled pieces for tanks and ducting",
      "Formed plates supplied into larger project fabrication",
    ],
    process: [
      "Looking over the drawing and the target radius",
      "Planning around the plate thickness and width",
      "Setting up the rolls and starting the forming pass",
      "Verifying the curve before anything ships out",
    ],
    keywords: [
      "plate rolling service in surat",
      "plate rolling bending services",
      "plate bending service surat",
      "heavy plate rolling gujarat",
    ],
    faqs: [
      {
        question: "Do you take on custom-radius plate rolling?",
        answer:
          "We do. Rolling is set up to suit your specific plate thickness, width, radius, and the end use the part is being fabricated for.",
      },
      {
        question: "Does plate rolling suit heavy fabrication projects?",
        answer:
          "Very much so. It is a mainstay for shells, curved sections, ducts, covers, and other formed components used in industry.",
      },
      {
        question: "May I send a drawing to check rolling feasibility?",
        answer:
          "Please do. Share the drawing or the radius you need and our team will assess whether the piece fits our rolling capability.",
      },
    ],
  },
  "cnc-plasma-cutting": {
    metaTitle: "Surat CNC Plasma Cutting & Profile Cutting",
    metaDescription:
      "CNC plasma cutting services in Surat for thick-plate profiles, base plates, flanges, brackets, and dependable fabrication-ready steel components.",
    intro:
      "Plasma cutting rounds out our profile-cutting strengths. Balaji Engineering Works provides CNC plasma cutting services in Surat for thick-plate work, profile-based fabrication parts, and steady output that industrial projects can count on.",
    applications: [
      "Base plates and mounting plates",
      "Support components and structural brackets",
      "Flanges and one-off industrial profiles",
      "Heavy fabricated parts for project-driven jobs",
    ],
    process: [
      "Reviewing the drawing and the profile to be cut",
      "Confirming the grade and the plate thickness",
      "Running the CNC plasma cut and marking each part",
      "Inspecting the output and planning the dispatch",
    ],
    keywords: [
      "cnc plasma cutting services in surat",
      "plasma profile cutting surat",
      "thick plate plasma cutting gujarat",
      "industrial plate cutting service surat",
    ],
    faqs: [
      {
        question: "Is CNC plasma cutting offered in Surat?",
        answer:
          "It is. We plasma cut for industrial buyers across Surat and the surrounding area, focusing on thick plate and profile-based fabrication work.",
      },
      {
        question: "Which parts are a good match for plasma cutting?",
        answer:
          "Plasma cutting excels at base plates, flanges, brackets, structural pieces, and heavy-duty profile cutting jobs of this sort.",
      },
      {
        question: "Do you cut from DXF files or fabrication drawings?",
        answer:
          "We do. Pass along DXF, DWG, or PDF files, or a drawing-based brief, and our team will review the job and quote it.",
      },
    ],
  },
  assembly: {
    metaTitle: "Industrial Assembly & Fit-Up Services in Surat",
    metaDescription:
      "Assembly services in Surat combining welding, riveting, and fit-up to join laser-cut and fabricated parts into finished industrial products.",
    intro:
      "Balaji Engineering Works offers assembly services in Surat that bring several fabricated parts together into working sub-assemblies or complete industrial products, with tight dimensional fit-up and coordinated production throughout.",
    applications: [
      "Sub-assemblies built from cut and bent parts",
      "Product build-up using welding and riveting",
      "Integration of machine frames and utility parts",
      "Project assemblies finished and ready to dispatch",
    ],
    process: [
      "Studying part drawings and setting the assembly order",
      "Fitting and aligning the cut, bent, or rolled components",
      "Joining by welding, riveting, or whichever method is specified",
      "Running a final dimensional and visual check before dispatch",
    ],
    keywords: [
      "assembly services in surat",
      "industrial assembly work surat",
      "fabrication assembly services gujarat",
      "sheet metal assembly job work surat",
    ],
    faqs: [
      {
        question: "Are assembly services available in Surat?",
        answer:
          "Yes. Our Surat unit assembles fabricated metal parts, welded structures, and industrial sub-assemblies of many kinds.",
      },
      {
        question: "Can assembly be joined with cutting and bending?",
        answer:
          "It can. Many jobs run laser cutting, bending, welding, and final assembly together within a single manufacturing scope.",
      },
      {
        question: "Do you handle project-based fabricated assemblies?",
        answer:
          "We do. Both one-off custom assembly jobs and recurring production assemblies are supported, whatever the requirement calls for.",
      },
    ],
  },
  welding: {
    metaTitle: "Sheet Metal Welding & Fabrication in Surat",
    metaDescription:
      "Welding services in Surat producing strong joints on sheet metal parts, fabricated sections, frames, supports, and industrial steel components.",
    intro:
      "Balaji Engineering Works provides welding services in Surat built around strong, fabrication-grade joints, giving custom and repeat industrial jobs the practical, dependable weld support they need.",
    applications: [
      "Joining sheet metal parts and fabricated sections",
      "Brackets, supports, and frames",
      "Welded machine and utility components",
      "Assembly support across industrial fabrication projects",
    ],
    process: [
      "Assessing the joint type, part fit-up, and fabrication drawing",
      "Cleaning surfaces and fixturing the parts for alignment",
      "Welding to suit the fabrication requirement",
      "Checking joint quality before the next step or dispatch",
    ],
    keywords: [
      "welding services in surat",
      "fabrication welding services surat",
      "sheet metal welding work gujarat",
      "industrial welding job work surat",
    ],
    faqs: [
      {
        question: "Are welding services offered in Surat?",
        answer:
          "Yes. We weld for sheet metal fabrication, industrial structures, and assembly jobs across Surat and the region.",
      },
      {
        question: "Is welding available for custom fabrication work?",
        answer:
          "It is. Our welding suits both one-off custom pieces and repeat fabrication runs equally well.",
      },
      {
        question: "Can welding be paired with assembly support?",
        answer:
          "Certainly. Welding frequently ties in with cutting, bending, and assembly as part of a single project scope.",
      },
    ],
  },
  "deep-drawing": {
    metaTitle: "Deep Drawing in Surat | Press-Formed Sheet Parts",
    metaDescription:
      "Deep drawing service in Surat shaping flat sheet into 3D formed components and container-type parts with repeatable, die-based production.",
    intro:
      "Balaji Engineering Works offers a deep drawing service in Surat that transforms flat sheet into three-dimensional formed parts, backed by consistent repeatability and hands-on, die-based production support.",
    applications: [
      "Deep-profile and container-style components",
      "Formed sheet parts for industrial use",
      "Deep drawn items made in repeat production",
      "Press-formed utility and process parts",
    ],
    process: [
      "Reviewing the drawing, the depth ratio, and material suitability",
      "Settling on the blank size and the tooling needed",
      "Drawing over the die with the process kept under control",
      "Checking the formed shape and its dimensional consistency",
    ],
    keywords: [
      "deep drawing service in surat",
      "sheet metal deep drawing surat",
      "deep drawn components manufacturer gujarat",
      "press formed sheet metal parts surat",
    ],
    faqs: [
      {
        question: "Is deep drawing available in Surat?",
        answer:
          "Yes. We offer deep drawing in Surat for 3D formed sheet metal components and for jobs that repeat in production.",
      },
      {
        question: "Which products lend themselves to deep drawing?",
        answer:
          "Deep drawing works well for container-like parts, deep profiles, and formed sheet components that need die-based shaping.",
      },
      {
        question: "Will deep drawing hold up for repeat production?",
        answer:
          "It will. Where the geometry allows, deep drawing is a strong fit for repeat and production-oriented forming.",
      },
    ],
  },
  finishing: {
    metaTitle: "Surat Metal Finishing | Powder Coat & Polish",
    metaDescription:
      "Metal finishing services in Surat covering painting, polishing, coating, and surface treatment to complete and protect fabricated components.",
    intro:
      "Balaji Engineering Works provides metal finishing services in Surat that lift surface appearance, guard against corrosion, and leave parts ready for use once fabrication or forming is done.",
    applications: [
      "Fabricated components brought to a finished surface",
      "Protective treatments for industrial parts",
      "A cleaner look for customer-facing metal products",
      "Coating and polishing carried out after fabrication",
    ],
    process: [
      "Understanding the finish needed and the part's current state",
      "Prepping surfaces for the chosen finishing method",
      "Arranging the finish, whether coating, painting, or polishing",
      "Checking the finished look and the condition for dispatch",
    ],
    keywords: [
      "metal finishing services in surat",
      "industrial metal finishing surat",
      "powder coating and polishing gujarat",
      "fabricated component finishing surat",
    ],
    faqs: [
      {
        question: "Are metal finishing services offered in Surat?",
        answer:
          "Yes. We handle metal finishing in Surat for fabricated and industrial parts that need a better surface or added protection.",
      },
      {
        question: "Which finishing methods can you arrange?",
        answer:
          "Depending on the part, we can arrange painting, polishing, powder coating coordination, and other protective or cosmetic treatments.",
      },
      {
        question: "Can finishing follow on after fabrication?",
        answer:
          "It can. Finishing is usually the closing stage once cutting, bending, welding, or assembly is complete.",
      },
    ],
  },
  stamping: {
    metaTitle: "Sheet Metal Stamping in Surat | Press Parts",
    metaDescription:
      "Sheet metal stamping service in Surat for repeat-production parts, press-formed components, and efficient high-volume manufacturing runs.",
    intro:
      "Balaji Engineering Works provides a sheet metal stamping service in Surat for buyers after repeatable part production, press-based forming, and efficient throughput on higher-volume sheet metal work.",
    applications: [
      "Metal parts made in repeat production",
      "Sheet components for automotive and appliance use",
      "Pressed industrial items",
      "Manufacturing jobs geared toward volume",
    ],
    process: [
      "Reviewing the part drawing, the volume, and tooling suitability",
      "Confirming the material, the blanking, and the press needed",
      "Stamping with repeatability held in check",
      "Checking output consistency before packing and dispatch",
    ],
    keywords: [
      "sheet metal stamping service in surat",
      "metal stamping job work surat",
      "press stamping services gujarat",
      "stamped sheet metal parts surat",
    ],
    faqs: [
      {
        question: "Is sheet metal stamping available in Surat?",
        answer:
          "Yes. We run sheet metal stamping in Surat for repeat-production parts and volume-focused manufacturing jobs.",
      },
      {
        question: "Does stamping suit high-volume needs?",
        answer:
          "It does. Stamping comes into its own where quick cycle times and repeat output matter for larger quantities.",
      },
      {
        question: "Can stamped parts go on to further fabrication or finishing?",
        answer:
          "They can. Stamped parts fold neatly into later steps such as assembly, welding, or finishing, depending on the design.",
      },
    ],
  },
  punching: {
    metaTitle: "Sheet Metal Punching in Surat | CNC Turret Press",
    metaDescription:
      "Sheet metal punching service in Surat producing holes, cutouts, mounting features, and repeat-production sheet components with accuracy.",
    intro:
      "Balaji Engineering Works provides a sheet metal punching service in Surat for buyers needing repeat hole patterns, cutouts, mounting features, and production-ready sheet components.",
    applications: [
      "Hole patterns for mounting and function",
      "Sheet cutouts and utility features",
      "Punched parts made in repeat production",
      "Prep work for industrial sheet metal components",
    ],
    process: [
      "Reviewing the hole pattern, the sheet layout, and the volume",
      "Preparing the punch tooling and setting up the part",
      "Punching the holes and any required sheet features",
      "Checking repeatability and readying parts for the next step",
    ],
    keywords: [
      "sheet metal punching service in surat",
      "sheet punching job work surat",
      "metal hole punching services gujarat",
      "punched sheet metal parts surat",
    ],
    faqs: [
      {
        question: "Is sheet metal punching available in Surat?",
        answer:
          "Yes. We offer sheet metal punching in Surat for holes, cutouts, and repeat-production sheet component needs.",
      },
      {
        question: "Does punching suit mass production?",
        answer:
          "It does. Punching is a strong choice for repeat work where identical holes or features are needed across large quantities.",
      },
      {
        question: "Can punched parts head to bending or assembly next?",
        answer:
          "They can. Punched parts are often made first, then routed to bending, welding, or assembly per the project sequence.",
      },
    ],
  },
};

export function getServiceSeoContent(service: Service): ServiceSeoEntry {
  return serviceSeoMap[service.id] ?? {
    metaTitle: `${service.title} in Surat`,
    metaDescription: `${service.title} from Balaji Engineering Works in Surat, Gujarat for fabrication and industrial job work requirements.`,
    intro: service.description,
    applications: [
      "Industrial fabrication work",
      "Project-based steel processing",
      "Custom manufacturing requirements",
      "Repeat production jobs",
    ],
    process: [
      "Requirement review",
      "Material confirmation",
      "Production planning",
      "Inspection and dispatch",
    ],
    keywords: [service.title, "Balaji Engineering Works", "Surat fabrication"],
    faqs: [
      {
        question: `Do you provide ${service.title.toLowerCase()} in Surat?`,
        answer:
          "Yes. We support Surat and Gujarat buyers with drawing-based quotations and fabrication-oriented production support.",
      },
    ],
  };
}

export function getAllServiceFaqs(): ServiceFaq[] {
  return Object.values(serviceSeoMap).map((entry) => entry.faqs[0]);
}
