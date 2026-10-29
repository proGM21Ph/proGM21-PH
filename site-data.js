/* ============================================================
   ProGM21 PH Corporation - website content
   EDIT THIS FILE to change text, contact details or photos.
   (index.html does not need to be touched.)

   PHOTOS: upload the picture into the "images" folder on GitHub,
   then type its path here, e.g.  "img": "images/my-photo.jpg"
   GALLERY: add a line like
     {"t": "img", "src": "images/site1.jpg", "cap": "Project in Cebu", "cat": "install"},
   "cat" is the group: meeting, install, arrival or delivery.
   use "t": "video" for videos (.mp4).
   NEW PRODUCT: copy one whole product block { ... } inside
   "products": [ ... ], paste it below, then change the text.
   Text with several lines is written between backticks ` `.
   Keep every comma and quote exactly as they are.
   ============================================================ */
const SITE = {
  "brand": "ProGM21 PH Corporation",
  "contact": {
    "name": "Ma’am Sheena Broña",
    "mobile": "(032) 402-1517",
    "viber": "+63 966-154-1528",
    "email": "progm21sales@gmail.com",
    "address": "Square One Bldg. Unit-2C, Lopez Jaena St. Tipolo, Mandaue City, Philippines, 6014",
    "facebook": "",
    "whatsapp": "+63 966-154-1528",
    "messenger": ""
  },
  "about": `ProGM21 PH Corporation is a domestic corporation registered with the SEC and BIR on March 6, 2017. It provides construction consumables, construction materials (including the Euroform system) and construction consultation, and was the first provider in the country of a Korean-based product using share wall technology.

Vision: Be a pioneer in the world; a corporate that provides solutions when clients face problems or barriers.
Mission: Be the supportive provider to business partners, the good organization to society, and the trusted corporate to people.
Goal: Be a solution provider to customers nationwide and worldwide with productive construction materials and consumable items.

Consulting: construction advice, value engineering, technical studies and support, and schedule management.`,
  "consultImg": "images/construction-consultation.jpg",
  "logo": "images/logo.png",
  "brochure": "",
  "clients": `TL Construction Co
PLD Construction
HAMM-Asia Global Builders Corporation
RGB Construction Services
Shalom Construction Incorporated
Devcon Structures
Rudhil Construction & Ent. Inc.
ACH Global Corporation
TechWise Engineering
Biometrix Systems & Trading Corp.
Del Viejo Construction
Primary Structures Corporation
Albatech Construction
Arki Build Solution
Paler Construction Corporation
Philkonst Global Corporation
Abalos Design & Construction
SeventySeven Living Spaces`,
  "products": [
    {
      "id": "euroform",
      "name": "Euro Form System",
      "desc": "A formwork system combining the advantages of wooden and metal formwork. The frame is metal and the plate is water-resistant plywood, so panels are light, easy to dismantle and shorten the construction period. It is standardized and modular, customized to the site (including 3D modeling), giving cleaner concrete surfaces than conventional methods. ProGM21 rents or sells Euro Form.",
      "specs": `Panel height: 1200 mm
Panel widths: 200, 250, 300, 350, 400, 450, 500, 600 mm
Weight by panel width: 200: 11.1 | 250: 11.9 | 300: 12.8 | 350: 13.7 | 400: 14.6 | 450: 15.5 | 500: 16.9 | 600: 19.0
Frame / plate: metal frame, water-resistant plywood`,
      "sizes": "200, 250, 300, 350, 400, 450, 500, 600 x 1200 mm; corner angles L1200 / L2400",
      "accessories": "Flat ties, hooks, wedge pin, outside corner, inside corner, C-clamp, cross bar",
      "features": `Easy to assemble by combining panels; no special tools required
Fewer workers and less construction time
Reusable many times
Excellent frame durability
Various sizes for different structures`,
      "steps": "Installation support: ProGM21 assigns staff to the sales site to provide technical and theoretical support.",
      "safety": "Contact ProGM21 for handling, safety and maintenance guidance for this product.",
      "img": "images/euroform-panel.jpg"
    },
    {
      "id": "flat-ties",
      "name": "Flat Ties",
      "desc": "Euro Form accessory. Flat ties are available in sizes L100 to L800. See the Sizes page for all sizes.",
      "specs": "Sizes: L100, L120, L150, L180, L200, L250, L300, L350, L400, L500, L600, L800",
      "sizes": "L100 to L800",
      "accessories": "-",
      "features": `Euro Form accessory
12 sizes from L100 to L800`,
      "steps": "Installation support: ProGM21 assigns staff to the sales site to provide technical and theoretical support.",
      "safety": "Contact ProGM21 for handling, safety and maintenance guidance for this product.",
      "img": "images/flat-ties.jpg"
    },
    {
      "id": "hooks",
      "name": "Hooks",
      "desc": "Euro Form accessory. Pipe hooks are available in Short and Long. See the Sizes page for all sizes.",
      "specs": "Types: Short / Long",
      "sizes": "Short / Long",
      "accessories": "-",
      "features": `Euro Form accessory
Available in Short and Long`,
      "steps": "Installation support: ProGM21 assigns staff to the sales site to provide technical and theoretical support.",
      "safety": "Contact ProGM21 for handling, safety and maintenance guidance for this product.",
      "img": "images/hooks.jpg"
    },
    {
      "id": "wedge-pin",
      "name": "Wedge Pin",
      "desc": "Euro Form accessory. See the Sizes page for details.",
      "specs": "",
      "sizes": "See Sizes page",
      "accessories": "-",
      "features": "Euro Form accessory",
      "steps": "Installation support: ProGM21 assigns staff to the sales site to provide technical and theoretical support.",
      "safety": "Contact ProGM21 for handling, safety and maintenance guidance for this product.",
      "img": "images/wedge-pin.jpg"
    },
    {
      "id": "outside-corner",
      "name": "Outside Corner",
      "desc": "Euro Form accessory. Outside corner angle is available in L1200 and L2400. See the Sizes page for all sizes.",
      "specs": "Sizes: L1200 / L2400",
      "sizes": "L1200 / L2400",
      "accessories": "-",
      "features": `Euro Form accessory
Available in L1200 and L2400`,
      "steps": "Installation support: ProGM21 assigns staff to the sales site to provide technical and theoretical support.",
      "safety": "Contact ProGM21 for handling, safety and maintenance guidance for this product.",
      "img": "images/outside-corner.jpg"
    },
    {
      "id": "inside-corner",
      "name": "Inside Corner",
      "desc": "Euro Form accessory. Inside corner angle is available in L1200. See the Sizes page for all sizes.",
      "specs": "Size: L1200",
      "sizes": "L1200",
      "accessories": "-",
      "features": "Euro Form accessory",
      "steps": "Installation support: ProGM21 assigns staff to the sales site to provide technical and theoretical support.",
      "safety": "Contact ProGM21 for handling, safety and maintenance guidance for this product.",
      "img": "images/inside-corner.jpg"
    },
    {
      "id": "c-clamp",
      "name": "C-Clamp",
      "desc": "Euro Form accessory. Contact ProGM21 for sizes and quotation.",
      "specs": "",
      "sizes": "Contact ProGM21",
      "accessories": "-",
      "features": "Euro Form accessory",
      "steps": "Installation support: ProGM21 assigns staff to the sales site to provide technical and theoretical support.",
      "safety": "Contact ProGM21 for handling, safety and maintenance guidance for this product.",
      "img": "images/c-clamp.jpg"
    },
    {
      "id": "cross-bar",
      "name": "Cross Bar",
      "desc": "Euro Form accessory. See the Sizes page for details.",
      "specs": "",
      "sizes": "See Sizes page",
      "accessories": "-",
      "features": "Euro Form accessory",
      "steps": "Installation support: ProGM21 assigns staff to the sales site to provide technical and theoretical support.",
      "safety": "Contact ProGM21 for handling, safety and maintenance guidance for this product.",
      "img": "images/cross-bar.jpg"
    },
    {
      "id": "rpp",
      "name": "Reinforced Plastic Panel",
      "desc": "A reinforced plastic formwork panel, shown in slab and wall applications.",
      "specs": `Size: 606 x 1820 x 12 mm
Weight: 9.50 kg
Specific gravity: 1.17
Tensile strength: 78 kj/m3
Reusability: 40 times`,
      "sizes": "606 x 1820 x 12 mm",
      "accessories": "-",
      "features": `Light weight (9.50 kg)
Up to 40 reuses`,
      "steps": "Installation support: ProGM21 assigns staff to the sales site to provide technical and theoretical support.",
      "safety": "Contact ProGM21 for handling, safety and maintenance guidance for this product.",
      "img": "images/reinforced-plastic-panel.jpg"
    },
    {
      "id": "hory",
      "name": "Hory Beam",
      "desc": "Beam system for slab and wall formwork, available for rental in several sizes.",
      "specs": "Sizes: 1450x1800, 1800x2500, 2500x3200, 3200x3900, 3900x4600, 4600x5300",
      "sizes": "See specifications",
      "accessories": "-",
      "features": "Available for rental (see Sizes page)",
      "steps": "Installation support: ProGM21 assigns staff to the sales site to provide technical and theoretical support.",
      "safety": "Contact ProGM21 for handling, safety and maintenance guidance for this product.",
      "img": "images/hory-beam.jpg"
    },
    {
      "id": "spacers",
      "name": "Rebar Spacers",
      "desc": "Spacers keep reinforcement in the correct position, which supports both structural performance and durability. Top rebar spacers have four legs and an open structure for good concrete fill, with a clip that holds rebar tightly. Bottom rebar spacers cover about 30 mm.",
      "specs": `Top rebar spacer: 75 mm to 220 mm
Bottom rebar spacer: 30 mm`,
      "sizes": "Top 75 mm to 220 mm; Bottom 30 mm",
      "accessories": "-",
      "features": `Open structure for proper concrete filling
Clip type holds rebar securely`,
      "steps": "",
      "safety": "Contact ProGM21 for handling, safety and maintenance guidance for this product.",
      "img": "images/rebar-spacers.jpg"
    },
    {
      "id": "doughnut-spacer",
      "name": "Doughnut Spacer",
      "desc": "The doughnut spacer has a spoke-wheel design that lets concrete flow, and a center that holds various rebar diameters.",
      "specs": `Diameter: 30, 40, 60 mm
Rebar opening: 10-13 mm`,
      "sizes": "30 / 40 / 60 mm dia.",
      "accessories": "-",
      "features": `Spoke-wheel design lets concrete flow
Center holds various rebar diameters`,
      "steps": "",
      "safety": "Contact ProGM21 for handling, safety and maintenance guidance for this product.",
      "img": "images/doughnut-spacer.jpg"
    },
    {
      "id": "concrete-spacer",
      "name": "Concrete Spacer",
      "desc": "Concrete spacers maintain the gap between rebar and formwork.",
      "specs": "Sizes: 20x30x40 / 30x40x50 mm",
      "sizes": "20x30x40 / 30x40x50 mm",
      "accessories": "-",
      "features": "Maintains the gap between rebar and formwork",
      "steps": "",
      "safety": "Contact ProGM21 for handling, safety and maintenance guidance for this product.",
      "img": "images/concrete-spacer.jpg"
    },
    {
      "id": "conduit",
      "name": "Conduit Pipe",
      "desc": "Conduit pipe is lightweight, supplied in rolls over 100 m long (fewer connection points), made of PE and PVC with no shrinkage in high or low temperatures, and its fractured inner design makes wire insertion easy.",
      "specs": "Conduit pipe: 22mm and 28mm dia.; rolls of 100 m / 50 m",
      "sizes": "22 mm and 28 mm dia.",
      "accessories": "-",
      "features": `Lightweight, easy to transport
Fewer connection points (rolls over 100 m)
Easy wire insertion`,
      "steps": "",
      "safety": "Contact ProGM21 for handling, safety and maintenance guidance for this product.",
      "img": "images/conduit-pipe.jpg"
    },
    {
      "id": "level-stick",
      "name": "Level Stick",
      "desc": "The level stick lets you check the slab reference level by eye to avoid excess concrete and chipping.",
      "specs": "Height: 150 / 200 / 300 / 400 mm (see Sizes page)",
      "sizes": "150 / 200 / 300 / 400 mm",
      "accessories": "-",
      "features": `Check the slab level by eye
Helps reduce unnecessary concrete and rework`,
      "steps": "",
      "safety": "Contact ProGM21 for handling, safety and maintenance guidance for this product.",
      "img": "images/level-stick.jpg"
    },
    {
      "id": "drip-mould",
      "name": "Drip Mould",
      "desc": "Drip mould stops water from running along the wall surface under slab eaves, balconies and window tops.",
      "specs": "Length: 50 m",
      "sizes": "50 m",
      "accessories": "-",
      "features": `Stops water running along the wall surface
For slab eaves, balconies and window tops`,
      "steps": "",
      "safety": "Contact ProGM21 for handling, safety and maintenance guidance for this product.",
      "img": "images/drip-mould.jpg"
    },
    {
      "id": "railings",
      "name": "Balcony and Stair Railings",
      "desc": "Balcony and stair railings with zinc hot-dip galvanizing and powder coating finish.",
      "specs": "Finish: zinc hot-dip galvanizing with powder coating",
      "sizes": "Custom",
      "accessories": "-",
      "features": "Galvanized and powder coated",
      "steps": "",
      "safety": "Contact ProGM21 for handling, safety and maintenance guidance for this product.",
      "img": "images/stair-railing.jpg"
    }
  ],
  "gallery": [
    {
      "t": "img",
      "cap": "Euroform wall formwork on site",
      "src": "images/site-wall-formwork.jpg", "cat": "install"
    },
    {
      "t": "img",
      "cap": "Slab formwork with props",
      "src": "images/site-slab-formwork.jpg", "cat": "install"
    },
    {
      "t": "img",
      "cap": "Column and slab formwork on site",
      "src": "images/site-column-slab.jpg", "cat": "install"
    },
    {
      "t": "img",
      "cap": "Euroform column formwork with rebar on site",
      "src": "images/site-column-beam-rebar.jpg", "cat": "install"
    },
    {
      "t": "video",
      "cap": "Euroform formwork on site (video 1)",
      "src": "images/site-video-1.mp4", "cat": "install"
    },
    {
      "t": "video",
      "cap": "Euroform formwork on site (video 2)",
      "src": "images/site-video-2.mp4", "cat": "install"
    },
    {"t": "img", "src": "images/client-visit-1.jpg", "cat": "meeting", "cap": "Conduct client visits to introduce and present our Euroform products"},
    {"t": "img", "src": "images/client-visit-2.jpg", "cat": "meeting", "cap": "Conduct client visits to introduce and present our Euroform products"},
    {"t": "img", "src": "images/client-visit-3.jpg", "cat": "meeting", "cap": "Conduct client visits to introduce and present our Euroform products"},
    {"t": "img", "src": "images/client-visit-4.jpg", "cat": "meeting", "cap": "Conduct client visits to introduce and present our Euroform products"},
    {"t": "img", "src": "images/client-visit-5.jpg", "cat": "meeting", "cap": "Conduct client visits to introduce and present our Euroform products"},
    {"t": "img", "src": "images/client-visit-6.jpg", "cat": "meeting", "cap": "Conduct client visits to introduce and present our Euroform products"},
    {"t": "img", "src": "images/client-visit-7.jpg", "cat": "meeting", "cap": "Conduct client visits to introduce and present our Euroform products"},
    {"t": "img", "src": "images/client-visit-8.jpg", "cat": "meeting", "cap": "Conduct client visits to introduce and present our Euroform products"},
    {"t": "img", "src": "images/client-visit-9.jpg", "cat": "meeting", "cap": "Conduct client visits to introduce and present our Euroform products"},
    {"t": "img", "src": "images/client-visit-10.jpg", "cat": "meeting", "cap": "Conduct client visits to introduce and present our Euroform products"},
    {"t": "img", "src": "images/client-visit-11.jpg", "cat": "meeting", "cap": "Conduct client visits to introduce and present our Euroform products"},
    {"t": "img", "src": "images/euroform-arrival-1.jpg", "cat": "arrival", "cap": "Newly arrived Euroform product from Korea"},
    {"t": "img", "src": "images/euroform-arrival-2.jpg", "cat": "arrival", "cap": "Newly arrived Euroform product from Korea"},
    {"t": "img", "src": "images/euroform-arrival-3.jpg", "cat": "arrival", "cap": "Newly arrived Euroform product from Korea"},
    {"t": "img", "src": "images/euroform-arrival-4.jpg", "cat": "arrival", "cap": "Newly arrived Euroform product from Korea"},
    {"t": "img", "src": "images/euroform-arrival-5.jpg", "cat": "arrival", "cap": "Newly arrived Euroform product from Korea"},
    {"t": "img", "src": "images/rcg-cagayan-shipment-1.jpg", "cat": "delivery", "cap": "Items shipped for RCG project in Cagayan"},
    {"t": "img", "src": "images/rcg-cagayan-shipment-2.jpg", "cat": "delivery", "cap": "Items shipped for RCG project in Cagayan"},
    {"t": "img", "src": "images/rcg-cagayan-shipment-3.jpg", "cat": "delivery", "cap": "Items shipped for RCG project in Cagayan"}
  ],
  "sizes1": `Euro Form|200 x 1200|1|1
Euro Form|250 x 1200|1|1
Euro Form|300 x 1200|1|1
Euro Form|350 x 1200|1|1
Euro Form|400 x 1200|1|1
Euro Form|450 x 1200|1|1
Euro Form|500 x 1200|1|1
Euro Form|600 x 1200|1|1
Inside corner angle|L1200|1|1
Outside corner angle|L1200|1|1
Outside corner angle|L2400|1|1
Reinforced plastic panel|606 x 1820 x 12|1|0
Column band|400-900|0|1
Cross bar|-|0|1
Shoring V2|2010-3990|1|1`,
  "sizes2": `Flat ties|L100 / L120 / L150 / L180 / L200 / L250 / L300 / L350 / L400 / L500 / L600 / L800
Wedge pin|-
Pipe hook|Short / Long
Doughnut spacer (10-13mm opening)|30 / 40 / 60 mm dia.
Concrete spacer|20x30x40 / 30x40x50 mm
Conduit pipe|22mm dia. 100 m / 28mm dia. 50 m
Tie wire (L350)|0.8-0.9 mm, 5000 m/box, 10 kg/box
Drip mould|50 m
Filler|10 x 1200 / 20 x 1200 mm
Filler pin|-
Level stick|150 mm
Squid ink|-
Top bar spacer|110 mm / 75 mm
Bottom bar spacer|30 mm
Blind rivet|0.5 x 25 mm`,
  "sizes3": `Euro Form (refurbished)|600 x 1200 / 500 x 1200 / 450 x 1200 / 400 x 1200 / 350 x 1200 / 300 x 1200 / 250 x 1200 / 200 x 1200
Inside corner angle|L1200
Outside corner angle|L1200 / L2400
Reinforced plastic panel|606 x 1820 x 12
Hory beam|1450 x 1800 / 1800 x 2500 / 2500 x 3200 / 3200 x 3900 / 3900 x 4600 / 4600 x 5300
Shoring V2|2010-3390
Shoring holder|-
Column band|400-900
Cross bar|-`
};
