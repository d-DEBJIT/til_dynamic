'use client';
import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';
import GetQuoteModal from '../../../components/GetQuote';
import BrochureDownloadModal from '../../../components/BrochureDownload';
import { motion } from 'framer-motion';

const slugify = (text: string) =>
  text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const allProducts = [
  {
  id: 'truck-cranes',
  category: 'all-products',
  name: 'Truck Cranes',
  description: 'Backed by a pan-India network of offices and over seven decades of domain expertise in material handling and port equipment solutions, TIL sets the standard in quality, performance, durability and value.',
  introTitle: "",
  introDescription: "TIL is engaged in the design, manufacture and marketing of a comprehensive range of material handling, lifting and port equipment solutions. Acknowledged as a market leader in Mobile Cranes and ReachStackers, TIL is a name that is synonymous with reliability, productivity and efficiency. To complement its wide portfolio of products, TIL offers a range of value-added services and integrated product support with a view to enhancing customer profitability.",
  image: `${basePath}/truck-cranes.jpeg`,
  features: ['Telescopic Boom', 'High Lifting Range', 'On-road Mobility'],
  brochure: `${basePath}/brochures/truck-cranes.pdf`,
  specifications: [
    { name: 'Max Capacity', value: '25-100 Tons' },
    { name: 'Boom Length', value: '30-60 Meters' },
    { name: 'Engine Power', value: '300-450 HP' }
  ],
  readMoreContent: [
    {
      heading: "What are Truck Cranes?",
      text: "A truck crane is a piece of lifting equipment on a customised or standard truck chassis, blending lifting capacity with mobility. It is generally designed to lower, transport and lift materials across industrial projects, logistics and construction sites. Unlike all stationary cranes, this truck-mounted crane travels on highways commuting between job sites without additional transport. This improves utility, providing a combination of truck mobility and traditional crane power."
    },
    {
      heading: "Why Use Truck Cranes on Your Project?",
      text: "A truck-mounted crane plays a crucial role in the development of industrial operations and construction projects. They can lift as well as transport heavy objects that are beyond the possibility of any other lifting mechanism on a construction project.\n\nSo, what makes a truck crane an indispensable piece of equipment?\n\n• Safety and Stability: Equipped with stabilizers or outriggers, truck cranes improve stability during work. Counterweights contribute to maintaining balance and reducing the danger of tipping over. High-end safety features like Load Movement Indicators, make sure that the operator is aware of the maximum lifting capacity, preventing malfunctions and accidents.\n\n• Versatility and Mobility: A truck-mounted crane, mounted on wheels, offers excellent mobility on construction sites. This allows operators to place them exactly where needed. Their versatility makes them best suited for several applications, from handling heavy machinery to construction machinery.\n\n• Productivity and Quick Setup: Setting up a truck with a crane is an instant process. Operators can transfer the crane to the project site, spread outriggers and get the boom ready for a workday. This swift setup enables construction workers to begin their work earlier, enhancing overall productivity."
    },
    {
      heading: "What are the applications of a Truck Crane?",
      text: "The versatility of a truck-mounted crane spreads across several industries, making them an essential part of multiple projects. Some of the most important applications of a truck crane include:\n\n• Mining Operations\n• Construction sites\n• Transportation\n• Infrastructure Projects"
    },
    {
      heading: "Key Features of a Truck Crane",
      text: "The key features of a truck crane or lorry-mounted crane include:\n\n• Hydraulic Crane Boom - These cranes comprise an aluminium or steel boom that extends from its base and supports the weight. It can either be telescopic or straight, providing flexibility based on the crane's application and size.\n\n• Hydraulic Systems - The hydraulic system is the machine's powerhouse, assisting the crane's movement and lifting operations. Key components of this system include:\n  - Hydraulic Pump\n  - Hydraulic Fluid\n  - Hydraulic Cylinders\n  - Control Valves\n\n• Jib - The jib is an extended end of the boom that offers additional flexibility and reach to a lorry-mounted truck. It might be adjustable or fixed, with varying angles and lengths to meet the specific needs of a project. It is vital for overcoming obstacles and accurate load positioning.\n\n• Counterweights - Located at the rear of a large crane truck, these weights help balance the load, minimizing tipping risks and warranting machine stability.\n\n• Outriggers - Outriggers or stabilizers improve stability during operations. They can be operated manually or hydraulically and come in an array of configurations to fit specific requirements.\n\n• Operator's Cab - An operator cab is placed at the top of a truck crane and is the control hub where all the movements are managed by an operator. The cab offers a panoramic view of the site and comes with instruments, safety devices and controls."
    },
    {
      heading: "Why Choose TIL Truck Cranes?",
      text: "The very first truck crane in India was manufactured by TIL! With inter-site mobility and high road speeds, these cranes are best suited for operations across multiple locations. If you are looking for a robust and reliable truck crane, watch out for the latest range of Long Boom Truck Cranes from TIL, designed for optimum lifting performance and greater reach. They are ideal for congested working conditions and tight spaces. To know our boom truck price, click here."
    }
  ],
},
  {
  id: 'pick-n-carry-cranes',
  category: 'all-products',
  name: 'Pick n Carry Cranes',
  description: 'Mobile cranes suitable for fast on-site operations',
  introTitle: "",
  introDescription: "TIL is engaged in the design, manufacture and marketing of a comprehensive range of material handling, lifting and port equipment solutions. Acknowledged as a market leader in Mobile Cranes and Reach Stackers, TIL is a name that is synonymous with reliability, productivity and efficiency. To complement its wide portfolio of products, TIL offers a range of value-added services and integrated product support with a view to enhancing customer profitability.",
  image: `${basePath}/about.jpg`,
  features: ['360° Mobility', 'Operator Cabin Comfort', 'Quick Load Handling'],
  brochure: `${basePath}/brochures/pick-n-carry.pdf`,
  specifications: [
    { name: 'Max Capacity', value: '5-20 Tons' },
    { name: 'Lifting Height', value: '10-20 Meters' },
    { name: 'Engine Power', value: '100-200 HP' }
  ],
  readMoreContent: [
    {
      heading: "What are Pick and Carry Cranes?",
      text: "A pick-and-carry crane is a versatile and highly manoeuvrable mobile crane that can lift loads and move them to another location, eliminating the need to set up a stationary setup. These cranes are equipped with a telescopic boom and offer excellent reach, making them ideal for navigating through tight spaces and confined construction sites. Additionally, a compact design allows them to carry loads to locations and place them with ease."
    },
    {
      heading: "Why Choose Pick and Carry Cranes for Your Project?",
      text: "Some of the top reasons for using a pick-and-carry mobile crane for your project are:\n\n• Increased Productivity and Efficiency: With their capacity to move easily and quickly around the site, pick and carry cranes help speed up moving and lifting tasks, increasing productivity and project timelines.\n\n• Improved Manoeuvrability and Mobility: Pickup cranes can move around the job site, even in confined spaces. Unlike other cranes, they do not need outriggers to be readied before operations, which ensures you save ample time.\n\n• Improved Safety Features: Pick and carry cranes have been designed with safety as the topmost priority. Several models have advanced features like overload protection systems, automatic stability control and a lower centre of gravity. This helps reduce the chances of tripping and makes the crane more stable.\n\n• Compact Size and Versatility: These cranes are compact, making them a great fit to be utilized in spaces where other cranes might not reach. Moreover, a pickup crane is a versatile machine that can be employed for an array of moving and lifting tasks in manufacturing and construction. With a range of attachments like rhino hooks, manual extensions and lifting beams they can be adapted to fit specific requirements of your project.\n\n• Ability to Carry and Lift Heavy Loads: Despite their compact size, pick-and-carry cranes have remarkable lifting capabilities, making them a great choice for tasks that require heavy lifting in small spaces."
    },
    {
      heading: "Applications of a TIL Pick and Carry Crane",
      text: "TIL pick n carry cranes can be used for several applications including:\n\n• Mining\n• Construction\n• Shipping\n• Heavy Industries\n• Oil and Gas\n• Infrastructure Development\n• Engineering Sectors"
    },
    {
      heading: "Why Choose TIL Pick and Carry Crane?",
      text: "TIL Limited offers next-generation pick and carry cranes like PIXEF 215 that exemplify quality, safety, innovative features, operator productivity and a competitive total cost of ownership. Enabled with micro-processor, this 'safe' and 'smart' hydraulic crane has been awarded The India Design Mark in the 15-tonne category for its unique design and concept."
    }
  ]
},
  {
  id: 'rough-terrain-cranes',
  category: 'all-products',
  name: 'Rough Terrain Cranes',
  description: 'Designed for challenging job site conditions',
  introTitle: "",
  introDescription: "TIL is engaged in the design, manufacture and marketing of a comprehensive range of material handling, lifting and port equipment solutions. Acknowledged as a market leader in Mobile Cranes and ReachStackers, TIL is a name that is synonymous with reliability, productivity and efficiency. To complement its wide portfolio of products, TIL offers a range of value-added services and integrated product support with a view to enhance customer profitability…",
  image: `${basePath}/rough-terrain.png`,
  features: ['All-Terrain Tyres', 'Four-Wheel Steering', 'Hydraulic Outriggers'],
  brochure: `${basePath}/brochures/rough-terrain.pdf`,
  specifications: [
    { name: 'Max Capacity', value: '15-50 Tons' },
    { name: 'Boom Length', value: '25-45 Meters' },
    { name: 'Engine Power', value: '250-350 HP' }
  ],
  readMoreContent: [
    {
      heading: "What is a Rough Terrain Crane?",
      text: "Are you looking for equipment designed to work on uneven and rough terrain? A rough terrain crane (RT Crane) is all you need. They are mobile cranes equipped with heavy-duty tyres, capable of manoeuvring in uneven, unpacked ground. Rough Terrain Cranes are a perfect fit for projects carried out in off-road terrain. They are designed to be highly versatile and mobile, making them suitable for lifting in confined spaces. A rough terrain crane is mounted on a four-wheel undercarriage allowing it to travel over coarse terrains such as mud, gravel and rocky surfaces. Some standard applications of a rough terrain crane include:\n\n• Construction\n• Mining\n• Industrial Plants\n• Oil & Gas Industry"
    },
    {
      heading: "Why Choose Rough Terrain Cranes?",
      text: "Rough Terrain Cranes come with an array of benefits, making them the perfect fit for jobs that need heavy lifting. Some of the most prominent reasons to choose Rough Terrain Cranes are:\n\n• Easy Manoeuvrability: Large rubber wheels on a rough terrain crane allow it to navigate rough locations. However, these cranes need great manoeuvrability and control to navigate off-road areas. The equipment's compact design helps it navigate uneven and tight spaces easily. Rough Terrain Cranes come equipped with power-steering and four-wheel drive making navigation easy for the operators.\n\n• Substantial Lifting Capacity: RT Cranes have a remarkable lifting capacity of 30 – 70 tons, depending on the model and size. Its lifting radius helps it move and hoist large objects efficiently. Nevertheless, what sets them apart from other mobile cranes is that Rough Terrain Cranes can lift heavy and large materials while traversing unstable grounds.\n\n• Cost Reduction: Due to its versatility across rugged areas, purchasing a rough terrain crane offers substantial cost savings. The crane takes on the role of multiple lifting equipment, eradicating the need for numerous equipment on a site. Additionally, its ability to carry a variety of materials helps largely reduce labour costs.\n\n• Reduced Risk of Accidents: Using a rough terrain crane increases safety on uneven worksites, even during bad weather. Their manoeuvrability and stability are essential for managing heavy loads on rugged terrains, reducing the risk of an accident. Proper training and good-quality equipment are crucial to avoiding collisions and preventing disasters."
    },
    {
      heading: "Key Features of a Rough Terrain Crane",
      text: "Rough Terrain Cranes are manufactured to be highly versatile and mobile. Some of the most prominent features that make these cranes ideal for uneven and rough terrains include:\n\n• Telescopic boom – RT Cranes are fitted with telescopic booms which can extend to lift heavier loads and reach greater heights.\n• Heavy-duty tyres - They come equipped with heavy-duty, large tyres that offer maximum stability and traction on rugged terrains.\n• Higher lifting capacity - The lifting capacities of these cranes usually range from 30 – 150 tons and sometimes even more, allowing them to lift heavier loads.\n• Cab-mounted controls – In-built cab-mounted controls allow operators to control the equipment from within the cab, adding to its convenience.\n• Bigger engine for high power – Rough Terrain Cranes generally need bigger engines to operate under rough conditions. They commonly have a diesel engine or, in some cases, a gas turbine engine, that gives more torque and power as compared to other types of engines."
    },
    {
      heading: "What are the benefits of using Rough Terrain Cranes?",
      text: "Rough Terrain Cranes are highly specialized and varied. They are ideally driven over rubble, uneven rocks and rough surfaces. A few benefits of using a rough terrain crane are:\n\n• Enhanced safety and stability: Rough Terrain Cranes have oversized, wide tyres with larger diameters, that add to their stability across all surfaces. Thus, they can operate safely with greater control during loading and lifting applications.\n\n• Superior handling on rough terrain: The hyper-sized axles of Rough Terrain Cranes help the tyres to lift and move over difficult surfaces. The machine has an all-wheel drive feature, which, paired with these axles, pushes the wheels over and forward irrespective of the terrain.\n\n• Portability and power: RT cranes have a large range of load capacity that makes them a right fit for varied applications and industries. They are high-performing, portable and powerful."
    },
    {
      heading: "Why Choose TIL Rough Terrain Cranes?",
      text: "If you are looking for a reliable and robust rough terrain crane, TIL Limited offers a comprehensive range of high-performance Rough Terrain Cranes. These cranes are designed to tackle the most ragged and challenging terrains. They infuse efficiency and reliability into your operations."
    }
  ]
},
  {
  id: 'articulating-crane',
  category: 'all-products',
  name: 'TIL N80A',
  description: 'Flexible, jointed cranes ideal for tight spaces',
  introTitle: "",
  introDescription: "An articulating crane, also known as a knuckle boom crane, is a type of crane that uses articulated (jointed) arms or booms to lift and move heavy loads. The arm of the crane has multiple segments that are connected by 'knuckles,' which allow the crane to move with high flexibility and precision. This articulation gives the crane an extended reach and the ability to lift and place loads in tight or difficult-to-access spaces.Key Features of an Articulating Crane:",
  image: `${basePath}/articulating.jpg`,
  features: ['Knuckle Boom Design', 'Compact Operation', 'Remote Control'],
  brochure: `${basePath}/brochures/articulating.pdf`,
  specifications: [
    { name: 'Max Capacity', value: '5-15 Tons' },
    { name: 'Reach', value: '15-30 Meters' },
    { name: 'Engine Power', value: '100-200 HP' }
  ],
  readMoreContent: [
    {
      heading: "What is an Articulating Crane?",
      text: "An articulating crane, also known as a knuckle boom crane, is a type of crane that uses articulated (jointed) arms or booms to lift and move heavy loads. The arm of the crane has multiple segments that are connected by 'knuckles,' which allow the crane to move with high flexibility and precision. This articulation gives the crane an extended reach and the ability to lift and place loads in tight or difficult-to-access spaces."
    },
    {
      heading: "Key Features of an Articulating Crane",
      text: "• Articulated Arms: The crane has multiple sections that are connected by joints, similar to a human arm with elbow joints. These allow the crane to bend and extend, providing versatile movement.\n\n• Compact Design: Articulating cranes are often more compact than traditional cranes, making them ideal for use in confined spaces, urban environments, or for loading and unloading from trucks.\n\n• Hydraulic Systems: The crane typically uses a hydraulic system to operate the arms and extend the boom. This provides the power needed for lifting heavy loads while maintaining smooth movement.\n\n• Versatile Operation: Due to its flexibility, the articulating crane can move loads horizontally, vertically, and even around corners, making it particularly useful for handling materials in locations that require a high degree of manoeuvrability.\n\n• Used for Various Applications: These cranes are commonly used in construction, forestry, and transportation industries, and they are often mounted on trucks, trailers, or other vehicles for mobility."
    },
    {
      heading: "Applications of Articulating Cranes",
      text: "Articulating cranes are versatile machines used across various industries:\n\n• Construction: Ideal for working in tight urban construction sites\n• Forestry: Perfect for handling logs in confined forest areas\n• Transportation: Excellent for loading and unloading trucks and containers\n• Industrial: Suitable for factory operations where space is limited\n• Utilities: Perfect for maintenance work in crowded urban environments"
    },
    {
      heading: "Why Choose TIL Articulating Cranes?",
      text: "TIL's articulating cranes like the TIL N80A are designed with precision engineering and advanced hydraulic systems to deliver exceptional performance in the most challenging environments. Our cranes offer superior manoeuvrability, reliability, and safety features that make them the ideal choice for operations requiring precision lifting in confined spaces."
    }
  ]
},
  {
  id: 'grove-range',
  category: 'new-arrivals',
  name: 'Grove Range',
  description: 'Smart lifting solutions engineered for precision and durability',
  introTitle: "",
  introDescription: "Rich in tradition, the Grove name has been a welcome member of the crane community for over half a century, having earned a reputation for making strong and reliable heavy lifting equipment that are consistently popular with those who operate them. Grove has also led the industry in terms of technological innovation. Its MEGATRAK suspension system, the TWINLOCK boom pinning system and the MEGAFORM boom design are unique to Grove and give end users a competitive advantage. The company offers a full range of mobile hydraulic cranes from 7.7 tonnes to 450 tonnes, with the Grove Range from TIL comprising of Rough Terrain Cranes, Truck Mounted Cranes and All Terrain Cranes.",
  image: `${basePath}/grove-range.png`,
  features: ['Advanced Safety Systems', 'Optimized Weight Distribution', 'Digital Load Monitoring'],
  brochure: `${basePath}/brochures/grove-range.pdf`,
  specifications: [
    { name: 'Max Capacity', value: '30-120 Tons' },
    { name: 'Boom Length', value: '40-80 Meters' },
    { name: 'Engine Power', value: '350-500 HP' }
  ],
  readMoreContent: [
    {
      heading: "What is a Hydraulic Crane?",
      text: "A hydraulic crane like the Grove mobile crane or Grove rough terrain crane is a kind of heavy-duty machine used for hoisting and lifting. Hydraulic cranes depend on diesel-powered or electric-powered motors, and have an internal hydraulic system that helps the crane lift heavy loads. The primary components of hydraulic cranes include a mast, base, boom, jib, a hydraulic pump and a hydraulic base."
    },
    {
      heading: "Why Choose Hydraulic Cranes for Your Project?",
      text: "Hydraulic truck cranes provide several benefits on a construction site. They can lift heavy loads and can be driven over any landscape, which makes them a valuable asset for any construction project.\n\n• Versatile and Compact: Hydraulic cranes can produce a great amount of power, which allows them to function in a more agile manner as compared to conventional cranes. They do not need gears and bulky pulleys and are easier to maintain. Their compact structure helps operators manoeuvre them easily making them the right fit for smaller areas and industrial buildings.\n\n• Greater Mobility: Hydraulic cranes like the Grover rough terrain crane are mounted over a truck and can reach any construction site easily. They can be employed across different projects that require movement and lifting, thus eliminating the need to put up a tower crane each time. It reduces the cost of hiring operators for multiple cranes, making the process more cost-effective.\n\n• Power and Efficiency: Hydraulic cranes are perfect for transportation or construction projects due to their high power and efficiency. They can operate both within industrial sites and manufacturing facilities as well as function outdoors. This versatile aspect makes them an invaluable asset for any construction project that needs constant heavy lifting."
    },
    {
      heading: "Types of TIL Grove Cranes",
      text: "• Rough Terrain Cranes: The rugged deep box-section frames of a Grove Rough Terrain Crane are designed to negotiate the tough conditions found on job sites. Four steering modes allow for easy manoeuvring in tight quarters. Pick-and-carry applications being typical for RTs, Grove Rough Terrain (RT) Cranes are capable of excellent on-rubber operation for enhanced productivity.\n\n• Truck Mounted Cranes: Grove Truck Mounted Cranes with their extensive list of standard features, such as – quick set-up, long reach, high-capacity booms, high road speeds and a front outrigger for 360° operations – are popular choices for crane customers.\n\n• All Terrain Cranes: Grove All Terrain Cranes combine the highway speeds of Truck Cranes with the off-road performance of Rough Terrain Cranes – with travel speeds of up to 55 mph (90 kmph), multiple steering modes that provide job site mobility and the exclusive MEGATRAK™ suspension system, standard on GMK models, which enhances drivability and traction both on-road and off.\n\n• Industrial Cranes: Owing to their compact design, the Yard Boss range of Industrial Cranes from Grove is high on performance and low on maintenance – highly effective and efficient while operating in and out of workshops and sheds, doing small lifting jobs."
    },
    {
      heading: "Why Choose Cranes from the TIL Grove Range?",
      text: "TIL Grove cranes are equipped to handle the toughest conditions at a job site. It has a lift capacity that ranges from 30 t to 150 t. The comfort, productivity and performance features introduced in the machine allow operators to work for longer days without fatigue. Easy maintenance, reliability and quality are some of the features that make TIL Grove cranes a great fit for your business."
    }
  ]
},
  {
  id: 'crawler-cranes',
  category: 'new-arrivals',
  name: 'Crawler Cranes',
  description: 'Robust tracked cranes for heavy-duty lifting',
  introTitle: "",
  introDescription: "To satisfy the diverse needs of customers, the Manitowoc Crane Group has a comprehensive portfolio of Crawler Cranes and the Grove range of cranes that address requirements that are specific to the region and application. For maximum functionality and value, nearly all Manitowoc cranes have been engineered as modular base units, available with add-on components that can be quickly added to expand their functionality. Each product meets the requirements of different regions, including international transportation regulations, operational simplicity and efficiency parameter, even in the most challenging environments.",
  image: `${basePath}/crawler-cranes.png`,
  features: ['Track Mobility', 'High Stability', 'Heavy Lifting Capacity'],
  brochure: `${basePath}/brochures/crawler-cranes.pdf`,
  specifications: [
    { name: 'Max Capacity', value: '50-300 Tons' },
    { name: 'Boom Length', value: '60-120 Meters' },
    { name: 'Engine Power', value: '400-600 HP' }
  ],
  readMoreContent: [
    {
      heading: "What is a Crawler Crane?",
      text: "A crawler crane is a kind of heavy-duty equipment best suited for large scale construction projects that require navigating difficult terrains, greater mobility and higher lifting capacity. A hydraulic crawler crane's crawler-like long tracks offer a stable platform, letting it operate across diverse terrains including mud, gravel and sand."
    },
    {
      heading: "Why Choose Crawler Cranes for Your Project?",
      text: "Incorporating a crawler crane for heavy lifting into your project has many benefits including enhanced efficiency, safety and a greater project success rate.\n\n• Manoeuvrability in Rough Terrains: A standout feature of this crane is its ability to navigate rough terrain. Crawler tracks allow it to move smoothly over muddy, uneven, or rough ground commonly encountered on construction projects. This helps it reach and operate in places inaccessible to other cranes.\n\n• High Stability and Lifting Capacity: A hydraulic crawler crane is known for its remarkable lifting capacity. It can easily tackle heavy loads, making it a perfect fit for large-scale projects where the transfer of substantial materials is needed. Crawler tracks help distribute the equipment's weight evenly, by offering a stable base which prevents the crane from sinking into soft ground or tipping.\n\n• Cost-Effectiveness: The ability to complete multiple tasks with one piece of equipment reduces the overall project cost. Additionally, the efficiency of a boom crawler crane in completing tasks accurately and quickly helps avoid costly delays and keeps the project on schedule.\n\n• Precision and Efficiency in Operations: A hydraulic crawler crane provides precise control over placement and lifting, vital for infrastructure projects demanding accuracy. Its ability to rotate 360 degrees without repositioning reduces downtime, increases operational efficiency and increases productivity."
    },
    {
      heading: "Key Components of a Crawler Crane",
      text: "• Crane Boom - A steel structure that supports the pulley block and hoisting wire rope. The boom is installed directly on the upper slewing platform of a boom crawler crane. The crane jib can be lengthened as per requirement. Additionally, an extra boom can be installed atop the main boom, if required.\n\n• Undercarriage Parts - The walking components, also commonly known as chassis, are the base of the rotary device. The chassis mainly includes a driving wheel, track shoes, track rollers, idlers and several others.\n\n• Load Handling Device - The pick-up device of a crawler is generally a hook. The electromagnetic suction cup and grab form the accessory devices.\n\n• Counterweight - The counterweight is an iron block with a particular shape installed towards the end of the crane's slewing platform. The iron can be unloaded and transported separately if required.\n\n• Hydraulic Drive System - The components of the hydraulic drive system are divided into the motor, hydraulic pump, cylinder, fuel tank, oil pipe, control valve etc.\n\n• Power Unit - A boom crawler crane's power unit is the energy source used for all types of construction machinery. The diesel engines for hydraulic crawler cranes are generally four-stroke diesel engines.\n\n• Slewing Bearing - Slew bearings are fitted on the undercarriage to support the upper slewing part of the equipment. Apart from a slewing bearing, a crawler crane swing system also comprises stationary and rolling parts along with the frame that fixes the support device.\n\n• Safety Device - The safety device aids a hydraulic crawler crane's safe and smooth operation. Major safety parts of the crane include a protection device to protect the boom from over-tilting, moment limiter, hoisting overwinter, etc.\n\n• Control Device - The control device has a vital role in controlling and operating each working mechanism of the crane. This enables actions like starting, reversing, adjusting speed and stopping function as per requirement. The control device includes a control valve, joystick, switch, controller and button."
    },
    {
      heading: "Applications of a Crawler Crane",
      text: "You can use a crawler crane for heavy lifting and moving materials on your project. Crawler cranes are a great option when your project requires some extra height. One of the greatest advantages of these cranes is that they can be positioned on unstable grounds.\n\nSome of the main application areas of a crawler crane are:\n\n• Construction\n• Commercial Developments\n• Oil and Gas\n• Agriculture\n• Water Treatment Facilities\n• Railway Infrastructure\n• Highway Projects"
    },
    {
      heading: "Why Choose TIL Manitowoc Crawler Cranes?",
      text: "TIL Manitowoc houses an all-inclusive range of crawler cranes that satisfy varied region and application-specific needs. All cranes are engineered as modular base units for maximum value and functionality. They come equipped with add-on components that can be added to expand the crane's functionality."
    }
  ]
},
  {
  id: 'forklift-trucks',
  category: 'best-sellers',
  name: 'Forklift Trucks',
  description: 'Efficient material handling for warehouses and logistics',
  introTitle: "",
  introDescription: "The partnership between Hyster-Yale and TIL represents the synergy between two leading companies with complementary strategic visions and product technologies, reinforced by a shared commitment to enhance customer profitability. TIL offers the best selection of Hyster® High Capacity Forklift Trucks, Container Handlers and ReachStackers, backed by unmatched product support and customer service, to ensure high return on investment by way of definite gains in productivity.",
  image: `${basePath}/forklift.png`,
  features: ['Precision Steering', 'High Load Capacity', 'Compact Turning Radius'],
  brochure: `${basePath}/brochures/forklift.pdf`,
  specifications: [
    { name: 'Max Capacity', value: '2-10 Tons' },
    { name: 'Lift Height', value: '3-8 Meters' },
    { name: 'Engine Power', value: '50-150 HP' }
  ],
  readMoreContent: [
    {
      heading: "What is a Forklift Truck?",
      text: "A forklift truck is a motor-driven industrial truck used for moving and lifting goods atop a pallet inside a storage facility, distribution centre, or warehouse. The lifting mechanism of the truck is supported by its frame, which includes a carriage, wheels, counterweights and a mast. Some forklifts, by design, let operators sit while operating or driving the machine.\n\nWith a wide range of power options and sizes, a warehouse forklift is suited for both large and small industrial operations. They are highly versatile and can be employed across various applications."
    },
    {
      heading: "Why Choose Forklift Trucks for Your Project?",
      text: "The versatility of a material-handling forklift truck is often underrated in terms of versatility. Here are a few reasons why you must employ forklift trucks for your project:\n\n• Easy Manoeuvrability: Speed and manoeuvrability are important factors to be considered while transporting heavy loads across a warehouse. A warehouse forklift truck can work with a varied range of settings. If your warehouse has sharp corners and narrow aisles, a forklift is just what you need. However, since this can be challenging, having an operator certification is important.\n\n• Shift Materials with Ease: A material-handling forklift truck is the best choice when you need to shift bulky, heavy loads. Bulk shipments can be quite heavy, even when the products are lightweight. Unloading manually is never a great option when time is limited. Thus, forklifts help you move shipping containers and pallets with goods around the warehouse with ease.\n\n• Improved Safety: Before forklifts were invented, workers used complex systems of pulleys and ropes to move heavy loads. These systems were not quite safe as workers were in danger of snapping ropes and dropping these heavy goods. Forklifts offer a much safer way of operating, thereby reducing injuries and increasing overall productivity."
    },
    {
      heading: "What are the Applications of a Forklift Truck?",
      text: "Some of the most common applications of a material-handling forklift truck include:\n\n• Construction Sites\n• Warehouses\n• Recycling Operations\n• Dockyards\n• Snow Plows"
    },
    {
      heading: "Key Features of a Material Handling Forklift Truck to Consider",
      text: "While performance needs vary from project to project, here are some of the primary features of a warehouse forklift truck to be considered:\n\n• Load Capacity: The load capacity of this machine is the maximum load the truck can handle at a certain point in time. This information is available on the load capacity data plate, which is clearly made visible to the operators. While a general forklift can manage loads ranging from one to five tons, other heavy-duty forklifts have a load capacity of about 50 tons.\n\n• Battery Health and Life: In the case of electric forklifts, the power is generated by the batteries. This makes them an integral part of your project. Every warehouse forklift truck is sold with the necessary guidance on standard battery sizes and types. Mostly, the utilization and application need of the project must be understood in-depth to size the chargers and battery properly.\n\n• Acceleration or Travel Speed: As forklift operations greatly depend on travel conditions, loads and several other variables, there is no such accepted speed in the industry. Most forklift models are delivered with a pre-set speed set by the manufacturer. While efficiency and output can be achieved with a faster speed, safety becomes a vital factor to be considered."
    },
    {
      heading: "Why Choose a Hyster TIL Forklift Truck?",
      text: "Hyster TIL forklifts range from a capacity of 8 tons to 48 tons and are equipped to provide application-focused solutions to customers across a wide range of heavy industries. Forklift Trucks from Hyster TIL are dependable, serviceable, and ergonomically designed to achieve maximum productivity, by way of continuous technological upgradation."
    }
  ]
},
  {
  id: 'reachstackers',
  category: 'best-sellers',
  name: 'ReachStackers',
  description: 'Container handling equipment for ports and yards',
  introTitle: "",
  introDescription: "The partnership between Hyster-Yale and TIL represents the synergy between two leading companies with complementary strategic visions and product technologies, reinforced by a shared commitment to enhance customer profitability. TIL offers the best selection of Hyster® High Capacity Forklift Trucks, Container Handlers and ReachStackers, backed by reliable product support and customer service, to offer high return on investment by way of gains in productivity.",
  image: `${basePath}/reachstackers.png`,
  features: ['Extended Reach', 'Twistlock Compatibility', 'High Stack Efficiency'],
  brochure: `${basePath}/brochures/reachstackers.pdf`,
  specifications: [
    { name: 'Max Capacity', value: '30-50 Tons' },
    { name: 'Lift Height', value: '4-6 Containers' },
    { name: 'Engine Power', value: '200-300 HP' }
  ],
  readMoreContent: [
    {
      heading: "What is a ReachStacker?",
      text: "A ReachStacker is a kind of heavy-duty container stacker used for handling multimodal cargo containers in rail yards, ports and terminals. It comes with a telescopic arm or boom called a 'spreader' that lets it move, lift and stack containers efficiently. These machines are versatile and capable of stacking containers in multiple rows and transporting them over short distances. This makes a reachstacker machine a great fit for areas with space constraints. Moreover, they provide a more economical and efficient solution as compared to other types of container handling machines."
    },
    {
      heading: "Why Choose ReachStackers for Your Project?",
      text: "A reachstacker crane offers several benefits that make it an attractive option for material handling operations. Some of the key advantages of using a reachstacker for your project include:\n\n• Increased Flexibility and Versatility: One of the main advantages of using a reachstacker crane for your project is their ability to handle containers of various sizes without the help of additional equipment. This not only saves time but eradicates the need for multiple pieces of equipment, thereby saving a great deal of expense. Reachstackers offer a great deal of flexibility with their exceptional manoeuvring capabilities and compact design. They can navigate through tight spaces in ports and container yards with ease, warranting efficient material handling.\n\n• Enhanced Efficiency in Container Handling: A reachstacker truck is designed to offer maximum efficiency in material handling operations. Reachstackers can access containers stacked high, removing the need to employ additional equipment or cranes. This diminishes operational downtime and enhances overall productivity. Apart from their reach, reachstackers come with impressive lifting capacities. They can easily handle heavy containers and offer the necessary stability and strength to execute the job efficiently.\n\n• Affordable Solution for Container Handling: Investing in a reach container stacker can set you up for long-term savings in material handling operations. By eradicating the need for several pieces of equipment, a reachstacker crane reduces maintenance costs and capital expenditure. Additionally, its versatility maximizes the use of available machinery and helps in improved resource allocation.\n\n• Reliability and Durability: With regular servicing and proper maintenance, reachstackers can offer consistent performance over a long time. This translates into higher returns on investment and lower operational costs."
    },
    {
      heading: "What Are the Applications of a ReachStacker?",
      text: "Reachstackers are primarily used to handle materials, loose goods and semi-trailers in a plethora of settings including:\n\n• Industrial Applications\n• Terminal and Port Operations\n• Heavy-lift Applications\n• Container Dumping\n• Steel Handling\n• Barge handling\n• Second Rail Handing"
    },
    {
      heading: "Key Features of a ReachStacker",
      text: "A ReachStacker is a powerful and versatile equipment used for container and material handling. Some key features of a reachstacker are:\n\n• High Lifting Capacity: Reachstackers can lift heavy loads, generally within a range of 30 to 45 tons, depending on the reach distance and model. This makes them a great choice for transporting shipping containers.\n\n• Telescopic Boom or Spreader: A reach stacker crane comes with a telescopic boom called a spreader that can extend upward and forward. This allows them to access containers stacked at various depths and heights, especially in cramped spaces.\n\n• Hydraulic Stabilizers: Several reachstackers have hydraulic stabilizers that offer added stability, especially while managing heavy loads for a longer period.\n\n• Manoeuvrability and Mobility: With pivoting steering and all-wheel drive, a reach truck stacker is supremely manoeuvrable, which allows it to function efficiently in confined spaces like narrow passages in container yards.\n\n• Efficiency and Power: Reachstackers are usually powered by diesel engines, even though electric models are gradually gaining popularity. They are equipped to function efficiently with emission-saving and reducing technologies.\n\n• Operator Controls and Cabin: A reach stacker truck is fitted with an enclosed, ergonomic operator cabin that offers exceptional visibility and includes advanced cameras, control systems and automation features to guarantee an efficient and safe operation.\n\n• Safety Features: Reachstackers include several safety features like stability control, load sensors, alarms and anti-slip tyres, that guarantee safety during manoeuvring and heavy lifting."
    },
    {
      heading: "Why Choose Hyster-TIL ReachStacker?",
      text: "Hyster TIL ReachStackers represent the synergy between two leading companies with complementary strategic visions and product technologies, reinforced by a shared commitment to enhance customer profitability. TIL offers the best selection of Hyster® High Capacity Forklift Trucks, Container Handlers and ReachStackers, backed by reliable product support and customer service, to offer high return on investment by way of gains in productivity. Our Reachstackers are subjected to the most stringent international test protocols making them the best in class. Some of the most attractive features of the Hyster TIL Reachstacker include an integrated armrest and joystick, robust metal front and fenders, enhanced visibility, and easy engine access. While the maximum lifting capacity of other Reachstackers is 45 T, our machines have a capacity of 46 T, making it a great choice for extensive material handling projects."
    }
  ]
},
  {
    id: 'boom-lifts',
    category: 'services',
    name: 'Boom Lifts',
    description: 'Elevated work platforms for maintenance and construction',
    introTitle: "",
    introDescription: "Snorkel boom lifts are precisely what you need to safely lift people to work at height. It's pretty straightforward – superb maneuverability makes it easy to reach areas with limited access. Also known as a cherry picker, Snorkel articulated boom lifts provide a full working envelope. Up-and-over capabilities with smooth, proportional controls provide precise operation. High-reaching telescopic boom lifts are simple to operate and simple to maintain, even in rough terrain. Electric boom lifts offer clean, quiet operation and versatility in narrow spaces. Cost-efficient Snorkel towable boom lifts are rugged, reliable and a great return on investment. The Snorkel family of boom lifts combines power and precision for efficient working at height. Ranging from 41 ft. 9 in. (12.9m) to 132 ft. (40.4m) in maximum working height, and maximum platform capacities ranging from 425 lbs. (200kg) to 600 lbs. (272kg), there is a Snorkel boom lift for almost any application.",
    image: `${basePath}/boomlifts.png`,
    features: ['Articulating Arm', 'Vertical and Horizontal Reach', 'Safe Cage Platform'],
    brochure: `${basePath}/brochures/boomlifts.pdf`,
    specifications: [
      { name: 'Max Height', value: '20-50 Meters' },
      { name: 'Platform Capacity', value: '200-300 kg' },
      { name: 'Engine Power', value: '50-100 HP' }
    ],
    readMoreContent: [
    ]
  }
];

const subProducts = {
  'rough-terrain-cranes': [
    { id: 'husky-620', name: 'HUSKY 620', image: `${basePath}/husky-620.jpg` },
    { id: 'rt630c', name: 'RT 630C', image: `${basePath}/rt630c.jpg` },
    { id: 'rt740b', name: 'RT 740B', image: `${basePath}/rt740b.jpg` },
    { id: 'rt760', name: 'RT 760', image: `${basePath}/rt760.jpg` },
    { id: 'rt880', name: 'RT 880', image: `${basePath}/rt880.png` }
  ],
  'forklift-trucks': [
    { id: 'hyster-h10-16xd', name: 'Hyster H10-16XD', image: `${basePath}/hyster-h10-16xd.jpg` },
    { id: 'hyster-h25-32xd', name: 'Hyster H25-32XD', image: `${basePath}/hyster-h25-32xd.jpg` },
    { id: 'hyster-h36-48xd', name: 'Hyster H36-48XD', image: `${basePath}/hyster-h36-48xd.jpg` },
    { id: 'hyster-h8-10xt', name: 'Hyster H8.0-10.0XT', image: `${basePath}/hyster-h8-10xt.jpg` },
    { id: 'hyster-h8-11xd', name: 'Hyster H8-11XD EC B3C0', image: `${basePath}/hyster-h8-11xd.png` }
  ],
  'reachstackers': [
    { id: 'rs46-33ch', name: 'RS 46 - 33CH', image: `${basePath}/rs46-33ch.jpg` },
    { id: 'rs45-31cha336-a404', name: 'RS 45 - 31CH A366 / A404', image: `${basePath}/rs45-31cha336-a404.jpg` },
  ],
  'boom-lifts': [
    { id: 'a62jrt', name: 'A62JRT', image: `${basePath}/a62jrt.jpg` }
  ],
  'truck-cranes': [
    { id: 'hydra-830m', name: 'HYDRA 830M', image: `${basePath}/hydra830m.jpg` },
    { id: 'tms-750b-mk-ii', name: 'TMS 750B MK II', image: `${basePath}/tms750b.jpg` },
    { id: 'tms-830', name: 'TMS 830', image: `${basePath}/tms830.jpg` },
    { id: 'tms-845', name: 'TMS 845', image: `${basePath}/tms845.jpg` },
    { id: 'tms-850', name: 'TMS 850', image: `${basePath}/tms850.jpg` },
    { id: 'tms-855', name: 'TMS 855', image: `${basePath}/tms855.jpg` },
    { id: 'tms-860', name: 'TMS 860', image: `${basePath}/tms860.jpg` },
    { id: 'tms-880m', name: 'TMS 880M', image: `${basePath}/tms880m.png` }
  ],
  'crawler-cranes': [
    { id: 'mlc80a-1', name: 'MLC 80A-1', image: `${basePath}/mlc80a-1.jpg` },
    { id: 'mlc90A-1', name: 'MLC 90A-1', image: `${basePath}/mlc90a-1.jpg` },
    { id: 'mlc100-1', name: 'MLC 100-1', image: `${basePath}/mlc100-1.jpg` },
    { id: 'mlc150-1', name: 'MLC 150-1', image: `${basePath}/mlc150a-1.jpg` },
    { id: 'mlc165-1', name: 'MLC 165-1', image: `${basePath}/mlc165-1.jpg` },
    { id: '14000', name: '14000', image: `${basePath}/14000.jpg` },
    { id: 'mlc250', name: 'MLC 250', image: `${basePath}/mlc250.jpg` },
    { id: '999', name: '999', image: `${basePath}/999.jpg` },
    { id: 'mlc300', name: 'MLC 300', image: `${basePath}/mlc300.jpg` },
    { id: '16000', name: '16000', image: `${basePath}/16000.jpg` },
    { id: 'mlc650', name: 'MLC 650', image: `${basePath}/mlc650.jpg` },
    { id: '18000', name: '18000', image: `${basePath}/18000.jpg` },
    { id: '31000', name: '31000', image: `${basePath}/31000.jpg` },
  ],
  'pick-n-carry-cranes': [
    { id: 'pixef-215', name: 'PIXEF 215', image: `${basePath}/pixef215.jpg` },
    { id: 'mobiload-315', name: 'MOBILOAD 315', image: `${basePath}/pixef315.jpg` }
  ],
  'grove-range': [
    { id: 'rt-530e-2', name: 'RT 530E-2', image: `${basePath}/rt530e2.jpg` },
    { id: 'rt-540e', name: 'RT 540E', image: `${basePath}/rt540e.jpg` },
    { id: 'rt-550e', name: 'RT 550E', image: `${basePath}/rt550e.jpg` },
    { id: 'rt765e-2', name: 'RT 765E-2', image: `${basePath}/rt765e-2.jpg` },
    { id: 'rt770e', name: 'RT 770E', image: `${basePath}/rt770e.jpg` },
    { id: 'rt9130e-2', name: 'RT 9130E-2', image: `${basePath}/rt9130e-2.jpg` },
    { id: 'grt9165', name: 'GRT 9165', image: `${basePath}/grt9165.jpg` },
    { id: 'grt655', name: 'GRT 655', image: `${basePath}/grt655.jpg` },
    { id: 'grt655l', name: 'GRT 655L', image: `${basePath}/grt655l.jpg` },
    { id: 'grt880', name: 'GRT 880', image: `${basePath}/grt880.jpg` },
    { id: 'grt8100-1', name: 'GRT 8100-1', image: `${basePath}/grt8100-1.jpg` },
    { id: 'grt8120', name: 'GRT 8120', image: `${basePath}/grt8120.jpg` },
    { id: 'tms500-2', name: 'TMS 500-2', image: `${basePath}/tms500-2.jpg` },
    { id: 'tms800-2', name: 'TMS 800-2', image: `${basePath}/tms800-2.jpg` },
    { id: 'tms875-2', name: 'TMS 875-2', image: `${basePath}/tms875-2.jpg` },
    { id: 'tms9000-2', name: 'TMS 9000-2', image: `${basePath}/tms9000-2.jpg` },
    { id: 'tts9000-2', name: 'TTS 9000-2', image: `${basePath}/tts9000-2.jpg` },
    { id: 'gmk-3050-2', name: 'GMK 3050-2', image: `${basePath}/gmk3050-2.jpg` },
    { id: 'gmk-3060l', name: 'GMK 3060L', image: `${basePath}/gmk3060l.jpg` },
    { id: 'gmk-4070l', name: 'GMK 4070L', image: `${basePath}/gmk4070l.jpg` },
    { id: 'gmk-4080-2', name: 'GMK 4080-2', image: `${basePath}/gmk4080-2.jpg` },
    { id: 'gmk-4080l', name: 'GMK 4080L', image: `${basePath}/gmk4080l.jpg` },
    { id: 'gmk-4090', name: 'GMK 4090', image: `${basePath}/gmk4090.jpg` },
    { id: 'gmk-6400', name: 'GMK 6400', image: `${basePath}/gmk6400.jpg` },
    { id: 'gcd-09', name: 'GCD 09', image: `${basePath}/gcd09.jpg` },
    { id: 'gcd-15', name: 'GCD 15', image: `${basePath}/gcd15.jpg` },
    { id: 'gcd-20', name: 'GCD 20', image: `${basePath}/gcd20.jpg` },
    { id: 'gcd-25', name: 'GCD 25', image: `${basePath}/gcd25.jpg` }
  ],
  'articulating-crane': [
    { id: 'n80a', name: 'TIL N80A', image: `${basePath}/articulating.jpg` }
  ],
};

// Read More Modal Component
function ReadMoreModal({ 
  isOpen, 
  onClose, 
  content 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  content: Array<{ heading: string; text: string }> | undefined;
}) {
  if (!isOpen || !content) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">Product Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 space-y-6">
          {content.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {section.heading}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {section.text}
              </p>
            </div>
          ))}
        </div>
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#F1B434] text-white font-medium rounded-lg hover:bg-[#d89c2a] transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// Skeleton Loader Component
function ProductSkeleton() {
  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white min-h-screen font-sans">
      {/* Hero Section Skeleton */}
      <div className="relative bg-gray-300 h-72 w-full overflow-hidden animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-400 via-gray-300 to-transparent z-10" />
        <div className="absolute inset-0 z-20 flex items-center pt-6">
          <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
            <div className="max-w-2xl">
              <div className="h-4 bg-gray-400 rounded w-1/4 mb-4"></div>
              <div className="h-10 bg-gray-400 rounded w-3/4 mb-4"></div>
              <div className="w-24 h-1.5 bg-gray-400 rounded-full mb-4"></div>
              <div className="h-6 bg-gray-400 rounded w-full mb-2"></div>
              <div className="h-6 bg-gray-400 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-16 -mt-6 relative z-10">
        <div className="mb-8">
          <div className="h-5 bg-gray-300 rounded w-32"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image Skeleton */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-gray-300 h-96 animate-pulse"></div>

          {/* Product Details Skeleton */}
          <div>
            <div className="mb-8">
              <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
              <ul className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-gray-300 rounded-full mr-3"></div>
                    <div className="h-5 bg-gray-300 rounded w-full"></div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
              <div className="bg-gray-100 rounded-lg p-6">
                <ul className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex justify-between border-b border-gray-200 pb-2">
                      <div className="h-5 bg-gray-300 rounded w-1/3"></div>
                      <div className="h-5 bg-gray-300 rounded w-1/4"></div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="h-10 bg-gray-300 rounded w-40"></div>
              <div className="h-10 bg-gray-300 rounded w-32"></div>
            </div>
          </div>
        </div>

        {/* Read More Button Skeleton */}
        <div className="flex justify-center mb-12">
          <div className="h-12 bg-gray-300 rounded w-64 animate-pulse"></div>
        </div>

        {/* Sub-Products Section Skeleton */}
        <div className="mb-16">
          <div className="h-7 bg-gray-300 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="bg-gray-300 h-48 animate-pulse"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA Skeleton */}
        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <div className="max-w-2xl mx-auto text-center">
            <div className="h-7 bg-gray-300 rounded w-3/4 mx-auto mb-3"></div>
            <div className="h-5 bg-gray-300 rounded w-full mb-4"></div>
            <div className="h-5 bg-gray-300 rounded w-2/3 mx-auto mb-6"></div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <div className="h-10 bg-gray-300 rounded w-40"></div>
              <div className="h-10 bg-gray-300 rounded w-32"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ProductContent({ params }: { params: { product: string } }) {
  const product = allProducts.find(p => p.id === params.product);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isReadMoreModalOpen, setIsReadMoreModalOpen] = useState(false);

  if (!product) {
    return notFound();
  }

  const currentSubProducts = subProducts[params.product as keyof typeof subProducts] || [];

  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-black/80 to-black/35 h-72 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 z-20 flex items-center pt-6">
          <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
            >
              <motion.span
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F1B434] to-[#F1B434] text-sm font-bold tracking-tight mb-2 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                
              </motion.span>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {product.name}
              </motion.h1>

              <motion.div
                className="w-24 h-1.5 bg-gradient-to-r from-[#F1B434] to-[#F1B434] rounded-full mb-4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />

              <motion.p
                className="text-lg text-gray-200 max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {product.description}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-16 -mt-6 relative z-10">
        <div className="mb-8">
          <Link href="/category" className="flex items-center text-[#F1B434] hover:underline mb-4">
            <ChevronRight className="w-4 h-4 transform rotate-180 mr-1" />
            Back to Products
          </Link>
        </div>
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
          {/* Left: Product Image */}
          <div className="rounded-xl overflow-hidden shadow-lg lg:sticky lg:top-24">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right: Product Intro Description */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About the Product</h2>
              <p className="text-gray-700 leading-relaxed">
                {product.introDescription || "Detailed product information will be available soon."}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsBrochureModalOpen(true)}
                className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
              >
                Download Brochure
              </button>

              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-6 py-3 bg-[#F1B434] text-white font-medium rounded-lg hover:bg-[#d89c2a] transition-colors shadow-md"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>

        {/* Read More Link - Only show if product has readMoreContent */}
{product.readMoreContent && product.readMoreContent.length > 0 && (
  <div className="flex justify-left mb-12">
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={() => setIsReadMoreModalOpen(true)}
      className="text-[#F1B434] hover:text-[#d89c2a] font-medium underline underline-offset-4 transition-colors duration-300 cursor-pointer"
    >
      Read More About {product.name}
    </motion.button>
  </div>
)}

        {/* Sub-Products Section */}
        {currentSubProducts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentSubProducts.map((subProduct, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden group cursor-pointer border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={subProduct.image}
                      alt={subProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#F1B434] transition-colors">
                      {subProduct.name}
                    </h3>
                    <div>
                      <Link href={`/category/${params.product}/${subProduct.id}`} passHref>
                        <button
                          className="flex items-center px-6 py-3 bg-[#F1B434] text-white font-medium rounded-lg hover:bg-[#d89c2a] transition-colors shadow-md"
                        >
                          View Product
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md p-8 border border-gray-100"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Need more information about {product.name}?
            </h2>
            <p className="text-gray-600 mb-6">
              Our product specialists are ready to help you with specifications, pricing, and any other questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                className="px-6 py-3 bg-[#F1B434] text-white font-medium rounded-lg hover:bg-[#d89c2a] transition-colors shadow-md"
              >
                Contact Our Experts
              </button>
              <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                Call Us Now
              </button>
            </div>
          </div>
        </motion.div>

        {/* Modals */}
        <BrochureDownloadModal
          isOpen={isBrochureModalOpen}
          onClose={() => setIsBrochureModalOpen(false)}
        />
        <GetQuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
        />
        <ReadMoreModal
          isOpen={isReadMoreModalOpen}
          onClose={() => setIsReadMoreModalOpen(false)}
          content={product.readMoreContent}
        />
      </main>
    </div>
  );
}

export default function ProductPage({ params }: { params: { product: string } }) {
  return (
    <Suspense fallback={<ProductSkeleton />}>
      <ProductContent params={params} />
    </Suspense>
  );
}