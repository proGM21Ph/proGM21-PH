/* ============================================================
   ProGM21 PH Corporation - website content
   EDIT THIS FILE to change text, contact details, prices or photos.
   (index.html does not need to be touched.)

   PHOTOS: upload the picture into the "images" folder on GitHub,
   then type its path here, e.g.  "img": "images/my-photo.jpg"
   GALLERY: add a line like
     {"t": "img", "src": "images/site1.jpg", "cap": "Project in Cebu"},
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
  "brochure": "files/ProGM21_Catalogue_2026.pdf",
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
Weight (width: kg): 200: 11.1 | 250: 11.9 | 300: 12.8 | 350: 13.7 | 400: 14.6 | 450: 15.5 | 500: 16.9 | 600: 19.0
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
      "desc": "Euro Form accessory. Flat ties are available in sizes L100 to L800. See the Pricelist for prices.",
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
      "desc": "Euro Form accessory. Pipe hooks are available in Short and Long. See the Pricelist for prices.",
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
      "desc": "Euro Form accessory. See the Pricelist for the price.",
      "specs": "",
      "sizes": "See Pricelist",
      "accessories": "-",
      "features": "Euro Form accessory",
      "steps": "Installation support: ProGM21 assigns staff to the sales site to provide technical and theoretical support.",
      "safety": "Contact ProGM21 for handling, safety and maintenance guidance for this product.",
      "img": "images/wedge-pin.jpg"
    },
    {
      "id": "outside-corner",
      "name": "Outside Corner",
      "desc": "Euro Form accessory. Outside corner angle is available in L1200 and L2400. See the Pricelist for prices.",
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
      "desc": "Euro Form accessory. Inside corner angle is available in L1200. See the Pricelist for prices.",
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
      "desc": "Euro Form accessory. Contact ProGM21 for sizes and prices.",
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
      "desc": "Euro Form accessory. See the Pricelist for the price.",
      "specs": "",
      "sizes": "See Pricelist",
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
      "features": "Available for rental (see Pricelist)",
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
      "specs": "Height: 150 / 200 / 300 / 400 mm (see Pricelist)",
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
      "src": "images/site-wall-formwork.jpg"
    },
    {
      "t": "img",
      "cap": "Slab formwork with props",
      "src": "images/site-slab-formwork.jpg"
    },
    {
      "t": "img",
      "cap": "Column and slab formwork on site",
      "src": "images/site-column-slab.jpg"
    }
  ],
  "sale4": `Euro Form|200 x 1200|3,378.42|3,226.06
Euro Form|250 x 1200|3,600.09|3,258.64
Euro Form|300 x 1200|3,841.08|3,340.11
Euro Form|350 x 1200|3,972.00|3,421.57
Euro Form|400 x 1200|4,154.24|3,462.31
Euro Form|450 x 1200|4,210.02|3,503.04
Euro Form|500 x 1200|4,451.77|3,584.50
Euro Form|600 x 1200|4,972.44|3,828.90
Inside corner angle|L 1200|2,975.28|2,443.98
Outside corner angle|L 1200|1,564.99|1,466.39
Outside corner angle|L 2400|2,973.49|2,654.89
Reinforced plastic panel|606 x 1820 x 12|2,973.49|-
Column band|400-900|-|4,179.56
Cross bar|-|-|708.40
Shoring V2|2010-3990|2,277.00|1,204.28`,
  "sale3": `Flat ties|L100 31.17 / L120 39.67 / L150 40.38 / L180 41.09 / L200 43.21 / L250 45.74|see sizes
Flat ties|L300 53.13 / L350 56.93 / L400 60.92 / L500 72.26 / L600 78.43 / L800 109.10|see sizes
Wedge pin|-|11.85
Pipe hook|Short / Long|42.22 / 49.62
Doughnut spacer (10-13mm opening)|30 / 40 / 60 mm dia.|6.05 / 7.04 / 7.79
Concrete spacer|20x30x40 / 30x40x50 mm|8.50 / 12.05
Conduit pipe|22mm dia. 100 m / 28mm dia. 50 m|3,366.32 / 2,580.70
Tie wire (L350)|0.8-0.9 mm, 5000 m/box, 10 kg/box|1,488.34
Drip mould|50 m|2,381.64
Filler|10 x 1200 / 20 x 1200 mm|150.41 / 311.19
Filler pin|-|16.19
Level stick|150 mm|148.76
Squid ink|-|165.00
Top bar spacer|110 mm / 75 mm|12.75 / 11.33
Bottom bar spacer|30 mm|5.67
Blind rivet|0.5 x 25 mm|5.42`,
  "rent": `Euro Form (refurbished) 600 x 1200 / 500 x 1200|104|8.70|365.00|626.00|887.00|1,148.00|1,409.00|1,670.00
Euro Form (refurbished) 450 x 1200 / 400 x 1200|96|6.96|304.80|513.60|722.40|931.20|1,140.00|1,348.80
Euro Form (refurbished) 350 / 300 / 250 / 200 x 1200|87|6.09|269.70|452.40|635.10|817.80|1,000.50|1,183.20
Inside corner L1200 / Outside corner L1200 / Reinforced plastic 606x1820x12|87|6.09|269.70|452.40|635.10|817.80|1,000.50|1,183.20
Outside corner angle L2400|87|10.35|397.50|708.00|1,018.50|1,329.00|1,639.50|1,950.00
Hory beam 1450 x 1800|100|5.00|250.00|400.00|550.00|700.00|850.00|1,000.00
Hory beam 1800 x 2500|100|6.67|300.10|500.20|700.30|900.40|1,100.50|1,300.60
Hory beam 2500 x 3200|100|7.78|333.40|566.80|800.20|1,033.60|1,267.00|1,500.40
Hory beam 3200 x 3900|100|8.89|366.70|633.40|900.10|1,166.80|1,433.50|1,700.20
Hory beam 3900 x 4600|100|12.08|462.40|824.80|1,187.20|1,549.60|1,912.00|2,274.40
Hory beam 4600 x 5300|100|14.03|520.90|941.80|1,362.70|1,783.60|2,204.50|2,625.40
Shoring V2 2010-3390|87|6.98|296.40|505.80|715.20|924.60|1,134.00|1,327.20
Shoring holder|50|2.00|110.00|170.00|230.00|290.00|350.00|410.00
Column band 400-900 / Cross bar|50|3.00|140.00|230.00|320.00|410.00|500.00|590.00`
};
