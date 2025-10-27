'use client';
import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import GetQuoteModal from '../../../../components/GetQuote';
import BrochureDownloadModal from '../../../../components/BrochureDownload';
import ModalPortal from '../../../../components/ModalPortal';
import { motion } from 'framer-motion';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Sub-product data structure
type SubProduct = {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  brochure?: string;
  specifications?: { name: string; value: string }[];
  parentProduct?: string;
  // optional intro fields exist on some entries
  introTitle?: string;
  introDescription?: string;
};

const allSubProducts: Record<string, SubProduct[]> = {
  'rough-terrain-cranes': [
    {
      id: 'husky-620',
      name: 'HUSKY 620',
      description: 'Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety',
      introTitle: "Meet the HUSKY 620",
      introDescription: "The Husky 620 is a powerful and versatile Rough Terrain Crane designed for lifting loads in rugged, uneven terrains. A load-sensing hydraulic system provides adequate pressure and hydraulic oil flow for independent crane operation. A superstructure frame fabricated from high-tensile steel plates and sections, and an enclosed steel construction, full vision tropical operator cab, add to the model’s durability. It has four hydraulically operated outriggers with graded telescoping beams and vertical jacks fitted with integral holding valves. The long life of TIL Husky 620 minimises ownership costs thereby providing a strong return on your investment.",
      image: `${basePath}/husky-620.jpg`,
      features: ['All-Terrain Capability', 'Enhanced Stability', 'Operator Comfort'],
      brochure: `${basePath}/brochures/husky-620.pdf`,
      specifications: [
        { name: 'MAX. CAPACITY (Outriggers)', value: '20.0 Tonnes at 3m Radius (85% Rating) 360° Slew' },
        { name: 'MAX. CAPACITY (On Tyres)', value: '	16 Tonnes Over Front' },
        { name: 'Boom Length', value: '8.8m - 21.2m three section' },
        { name: 'Maximum Tip Height', value: '23 m' },
        { name: 'Maximum road speed', value: '33 kmph' },
        { name: 'Gross Vehicle Weight', value: '20,210 kgs (with 8m lattice)' }
      ],
      parentProduct: 'rough-terrain-cranes'
    },
    {
      id: 'rt630c',
      name: 'RT 630C',
      description: 'Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety',
      introTitle: "Meet the RT 630C",
      introDescription: "The TIL RT 630C is a hydraulic rough terrain crane for heavy lifting in demanding environments. It has a robust lifting capacity and a four-section telescopic boom for enhanced versatility and reach.  Powered by a diesel engine, this RT crane caters to challenging off-road conditions, making it a great fit for industrial, infrastructure, and construction projects. The high stability, advanced hydraulic system and compact design of an RT 630C add to its efficiency on uneven terrains. The high-strength alloy steel welded section of the carrier and enclosed steel operator's cab fitted with toughened glass add to the safety of the equipment. This model combines mobility, power, versatility and ease of use to deliver high-end output.",
      image: `${basePath}/rt630c.jpg`,
      features: ['Four-Wheel Drive', 'Hydraulic Outriggers', 'Advanced Control System'],
      brochure: `${basePath}/brochures/rt-630c.pdf`,
      specifications: [
        { name: 'MAX. CAPACITY (Outriggers)', value: '30.0 Tonnes at 3m Radius (85% Rating) 360° Slew' },
        { name: 'MAX. CAPACITY (On Tyres)', value: '13.65 Tonnes Over Front' },
        { name: 'Boom Length', value: '8.8m - 29.0m four section' },
        { name: 'Maximum Tip Height', value: '31.2 m' },
        { name: 'Maximum road speed', value: '37 kmph' },
        { name: 'Gross Vehicle Weight', value: '25,350 kgs' }
      ],
      parentProduct: 'rough-terrain-cranes'
    },
    {
      id: 'rt740b',
      name: 'RT 740B',
      description: 'Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety',
      introTitle: "Meet the RT 740B",
      introDescription: "The RT 740B is a versatile RT crane best suited for industrial and construction applications. A powerful hydraulic system allows it to manage heavy loads on rugged or uneven terrains. It has an extendable telescopic boom that offers a wide operating range for varied lifting tasks. The high-strength alloy steel welded section of the carrier and enclosed steel operator's cab fitted with toughened glass add to the safety of the equipment. Advanced LMI and A2B Systems like Load Moment Indicator and Anti-Two Block systems with audio-visual warning and control lever lock-out provide electronic display of boom angle, boom length, radius, relative load moment, maximum permissible load, load indication and warning of impending two-block condition. Overall, the RT 740B is a great choice if you want the right combination of durability, safety and efficiency.",
      image: `${basePath}/rt740b.jpg`,
      features: ['Extended Boom', 'All-Weather Cab', 'Precision Controls'],
      brochure: `${basePath}/brochures/rt-740b.pdf`,
      specifications: [
        { name: 'MAX. CAPACITY (Outriggers)', value: '40.0 Tonnes at 3m Radius (85% Rating) 360° Slew' },
        { name: 'MAX. CAPACITY (On Tyres)', value: '17.35 Tonnes Over Front' },
        { name: 'Boom Length', value: '10.6m - 33.5m trapezoidal' },
        { name: 'Maximum Tip Height', value: '35.9 m' },
        { name: 'Maximum road speed', value: '26 kmph' },
        { name: 'Gross Vehicle Weight', value: '30,077 kgs' }
      ],
      parentProduct: 'rough-terrain-cranes'
    },
    {
      id: 'rt760',
      name: 'RT 760',
      description: 'Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety',
      introTitle: "Meet the RT 760",
      introDescription: "A rough terrain hydraulic crane, RT 760 has dual double-acting hydraulic cylinders with integral holding valves. The high-strength alloy steel welded section of the carrier and enclosed steel operator's cab fitted with toughened glass add to the safety of the equipment. Precision four-way double-acting pilot-operated control valves and our valve banks permit simultaneous control of multiple crane functions. Manufactured for off-road applications like infrastructure, mining and construction, the RT 760 has been designed to offer high performance on rough terrains.",
      image: `${basePath}/rt760.jpg`,
      features: ['Enhanced Load Capacity', 'Advanced Safety Systems', 'Comfortable Operator Station'],
      brochure: `${basePath}/brochures/rt-760.pdf`,
      specifications: [
        { name: 'MAX. CAPACITY (Outriggers)', value: '55.0 Tonnes at 3m Radius (85% Rating) 360° Slew' },
        { name: 'MAX. CAPACITY (On Tyres)', value: '29.45 Tonnes Over Front' },
        { name: 'Boom Length', value: '10.8m - 33.5m four section' },
        { name: 'Maximum Tip Height', value: '35.7 m' },
        { name: 'Maximum road speed', value: '35 kmph' },
        { name: 'Gross Vehicle Weight', value: '41,225 kgs' }
      ],
      parentProduct: 'rough-terrain-cranes'
    },
    {
      id: 'rt880',
      name: 'RT 880',
      description: 'Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety',
      introTitle: "Meet the RT 880",
      introDescription: "The TIL RT 880 is a rough terrain crane well-suited for large construction, infrastructure, and industrial projects that require high-capacity lifting and versatility in tough, uneven terrains. The crane is fitted with an advanced load moment indicator and anti-two block system with audio-visual warning and control lever lockout that offers an electronic display of boom angle, boom length, radius, relative load moment, permissible load, load indication & warning of impending two-block condition for operator ease and safety. The RT 880 provides excellent manoeuvrability with minimal downtime on challenging sites making it a high-performance option for demanding applications.",
      image: `${basePath}/rt880.png`,
      features: ['Maximum Lifting Power', 'Extended Reach Capability', 'State-of-the-Art Controls'],
      brochure: `${basePath}/brochures/rt-880.pdf`,
      specifications: [
        { name: 'MAX. CAPACITY (Outriggers)', value: '75.0 Tonnes at 3m Radius (85% Rating) 360° Slew' },
        { name: 'MAX. CAPACITY (On Tyres)', value: '32.3 Tonnes Over Front' },
        { name: 'Boom Length', value: '11.0m to 34.6m trapezoidal' },
        { name: 'Maximum Tip Height', value: '37.1 m' },
        { name: 'Maximum road speed', value: '30 kmph' },
        { name: 'Gross Vehicle Weight', value: '51,100 kgs' }
      ],
      parentProduct: 'rough-terrain-cranes'
    }
  ],
  'truck-cranes': [
    {
      id: 'hydra-830m',
      name: 'HYDRA 830M',
      description: 'Hydra 830M - Truck Cranes offering greater mobility I Long Lasting & Cost Effective',
      introTitle: "Meet the HYDRA 830M",
      introDescription: "The Hydra 830M is a mobile truck crane manufactured for heavy lifting operations. The equipment is well known for its versatility, compact design and powerful performance, making it a perfect fit for infrastructure and construction projects. The truck has the right combination of safety and comfort. A steel construction full-width cab with an electric fan, interior light, horn, and opening window fitted with toughened glass ensures the operators work in absolute comfort. The Hydra 830M has advanced tracks or wheels that allow it to navigate obstacles with stability and ease.",

      image: `${basePath}/hydra830m.jpg`,
      features: ['Telescopic Boom', 'On-road Mobility', 'Precision Control'],
      brochure: `${basePath}/brochures/hydra-830m.pdf`,
      specifications: [
        { name: 'Max. Capacity (Outriggers)', value: '30.0 Tonnes at 3m Radius (85% Rating) 360° Slew' },
        { name: 'Boom Length', value: '8.8m to 29.0m four section' },
        { name: 'Maximum Tip Height', value: '	31.2 m' },
        { name: 'Maximum road speed', value: '	45 kmph' },
        { name: 'Gross Vehicle Weight', value: '27570 kg (without lattice extension) 28140 kg (with tele lattice extension)' }
      ],
      parentProduct: 'truck-cranes'
    },
    {
      id: 'tms-750b-mk-ii',
      name: 'TMS 750B MK II',
      description: 'Truck Cranes offering greater mobility I Long Lasting & Cost Effective',
      introTitle: "Meet the TMS 750B MK II",
      introDescription: "A truck-mounted crane, the TMS 750B MK II is extensively used for material handling operations across varied industries like construction, infrastructure and old &amp; gas. It is a versatile piece of equipment known for delivering a robust performance and is suited for off-road and on-road operations. The equipment comes with a two-man design, steel construction full-width cab with electric fan, interior light, horn, and operating windows fitted with toughened glass. The crane boasts an advanced LMI system with audio-visual warning &amp; control lever lockout that indicates an electronic display of boom angle, length, radius, relative load moment, permissible load, load indication &amp; warning of impending two-block conditions. If you are looking for the right combination of performance and safety, this truck crane is all you need for your project.",
      image: `${basePath}/tms750b.jpg`,
      features: ['Multi-Section Boom', 'Load Moment Indicator', 'Smooth Operation'],
      brochure: `${basePath}/brochures/tms-750b-mk-ii.pdf`,
      specifications: [
        { name: 'Max. Capacity (Outriggers)', value: '40.0 Tonnes at 3m Radius (85% Rating) 360° Slew' },
        { name: 'Boom Length', value: '	10.6m - 33.5m four section' },
        { name: 'Maximum Tip Height', value: '	35.9 m' },
        { name: 'Maximum road speed', value: '49 kmph' },
        { name: 'Gross Vehicle Weight', value: '34,020 kg' }
      ],
      parentProduct: 'truck-cranes'
    },
    {
      id: 'tms-830',
      name: 'TMS 830',
      description: 'Truck Cranes offering greater mobility I Long Lasting & Cost Effective',
      introTitle: "Meet the TMS 830",
      introDescription: "This truck-mounted crane has been manufactured for heavy lifting operations in infrastructure and construction projects. It stands out for its compact design and reliable performance. Fabricated from high-tensile steel plates and sections, this truck crane is best suited to withstand tough working conditions. It also comes with operational backups like a combined cartridge-type externally mounted hydraulic lock and counterbalance valve to prevent ram collapse in the event of hydraulic failure, which adds to its reliability. Durable and smooth, you can vouch for the TMS 830 to deliver under challenging conditions.",
      image: `${basePath}/tms830.jpg`,
      features: ['High Lifting Capacity', 'Stable Operation', 'Advanced Hydraulics'],
      brochure: `${basePath}/brochures/tms-830.pdf`,
      specifications: [
        { name: 'Max. Capacity (Outriggers)', value: '	30.0 Tonnes at 2.5m Radius (85% Rating) 360° Slew' },
        { name: 'Boom Length', value: '9.94m - 32.7m four section' },
        { name: 'Maximum Tip Height', value: '35.0 m' },
        { name: 'Maximum road speed', value: '47 kmph' },
        { name: 'Gross Vehicle Weight', value: '29405 kg' }
      ],
      parentProduct: 'truck-cranes'
    },
    {
      id: 'tms-845',
      name: 'TMS 845',
      description: 'Truck Cranes offering greater mobility I Long Lasting & Cost Effective',
      introTitle: "Meet the TMS 845",
      introDescription: "The TMS 845 is a sought-after piece of machinery with advanced hydraulic systems offering superior operational efficiency and lifting capabilities. It comes with an elaborate safety system that includes a Pendent Limit Switch on the boom head for over hoist and hydraulic relief valves to protect pumps and structures from excessive pressure. A powerful hydraulic system ensures precise control and smooth operation during lifting tasks. As a truck-mounted crane, its mobility makes it a great fit for off-road and on-road applications.",
      image: `${basePath}/tms845.jpg`,
      features: ['Extended Boom Options', 'Precision Controls', 'Enhanced Safety Features'],
      brochure: `${basePath}/brochures/tms-845.pdf`,
      specifications: [
        { name: 'Max. Capacity (Outriggers)', value: '45.0 Tonnes at 3m Radius (85% Rating) 360° Slew' },
        { name: 'Boom Length', value: '	11m - 41.3m five-section' },
        { name: 'Maximum Tip Height', value: '44.0 m' },
        { name: 'Maximum road speed', value: '47 kmph' },
        { name: 'Gross Vehicle Weight', value: '39,490 kg' }
      ],
      parentProduct: 'truck-cranes'
    },
    {
      id: 'tms-850',
      name: 'TMS 850',
      description: 'Truck Cranes offering greater mobility I Long Lasting & Cost Effective',
      introTitle: "Meet the TMS 850",
      introDescription: "The TMS 850 is a truck crane built for operations in rugged conditions. It has been designed to withstand the requirements of industrial and construction applications. The crane's compact design enables easy manoeuvrability in tight spaces while ensuring robust lifting power. Backed by a seamless and powerful hydraulic system, the TMS 850 ensures both safety and efficiency. The superstructure frame is fabricated from high-tensile steel plates and sections, adding to the crane's sturdy structure.",
      image: `${basePath}/tms850.jpg`,
      features: ['Maximum Load Capacity', 'Advanced Control Systems', 'Operator Comfort'],
      brochure: `${basePath}/brochures/tms-850.pdf`,
      specifications: [
        { name: 'Max. Capacity (Outriggers)', value: '50.0 Tonnes at 2.5m Radius (85% Rating) 360° Slew' },
        { name: 'Boom Length', value: '11.0m - 41.3m five-section' },
        { name: 'Maximum Tip Height', value: '44.0 m' },
        { name: 'Maximum road speed', value: '50 kmph' },
        { name: 'Gross Vehicle Weight', value: '39,490 kg' }
      ],
      parentProduct: 'truck-cranes'
    },
    {
      id: 'tms-855',
      name: 'TMS 855',
      description: 'Truck Cranes offering greater mobility I Long Lasting & Cost Effective',
      introTitle: "Meet the TMS 855",
      introDescription: "The TMS 855, with its mobility and operational efficiency, is an invaluable tool for infrastructure and construction projects. Being truck-mounted, the equipment can easily move across various job sites. The crane operates on a hydraulic system that aids better control for heavy lifting tasks. The TMS is highly valued for its lifting power, mobility, and compactness. A substantial boom reach makes it well-suited for material handling operations.",
      image: `${basePath}/tms855.jpg`,
      features: ['Maximum Load Capacity', 'Advanced Control Systems', 'Operator Comfort'],
      brochure: `${basePath}/brochures/tms-850.pdf`,
      specifications: [
        { name: 'Max. Capacity (Outriggers)', value: '	55.0 Tonnes at 3m Radius (85% Rating) 360° Slew' },
        { name: 'Boom Length', value: '11.2m - 41.3m five-section' },
        { name: 'Maximum Tip Height', value: '44.0 m' },
        { name: 'Maximum road speed', value: '47 kmph' },
        { name: 'Gross Vehicle Weight', value: '42,270 kg' }
      ],
      parentProduct: 'truck-cranes'
    },
    {
      id: 'tms-860',
      name: 'TMS 860',
      description: 'Truck Cranes offering greater mobility I Long Lasting & Cost Effective',
      introTitle: "Meet the TMS 860",
      introDescription: "The TMS 860 is a versatile truck-mounted crane known for its superior lifting capacity and robust design. It has features like sophisticated load moment indicators with audio-visual warning & control lever lockout that indicates electronic display of boom angle, length, radius, relative load moment, permissible load, load indication & warning of impending two-block condition. Top-notch safety devices and an intuitive control system for precise and safe lifting operations make it suitable for heavy-duty material handling projects.",
      image: `${basePath}/tms860.jpg`,
      features: ['Maximum Load Capacity', 'Advanced Control Systems', 'Operator Comfort'],
      brochure: `${basePath}/brochures/tms-850.pdf`,
      specifications: [
        { name: 'Max. Capacity (Outriggers)', value: '	60.0 Tonnes at 3m Radius (85% Rating) 360° Slew' },
        { name: 'Boom Length', value: '11.2m - 41.3m five-section' },
        { name: 'Maximum Tip Height', value: '44.0 m' },
        { name: 'Maximum road speed', value: '' },
        { name: 'Gross Vehicle Weight', value: '42,270 kg' }
      ],
      parentProduct: 'truck-cranes'
    },
    {
      id: 'tms-880m',
      name: 'TMS 880',
      description: 'Truck Cranes offering greater mobility I Long Lasting & Cost Effective',
      introTitle: "Meet the TMS 880",
      introDescription: "The robust TIL TMS 880M is a truck mounted crane specializing in material handling solutions. Apart from an advanced LMI and safety system in place, the crane has an ergonomically designed operator cabin and controller layout to give fatigue free comfort to the operator. The crane is ideal for both on-road and off-road environments and ensures high responsiveness and precision. If you are looking for a reliable and versatile lifting solution, the TMS 880M will be a great choice for your project.",
      image: `${basePath}/tms880m.png`,
      features: ['Maximum Load Capacity', 'Advanced Control Systems', 'Operator Comfort'],
      brochure: `${basePath}/brochures/tms-850.pdf`,
      specifications: [
        { name: 'Max. Capacity (Outriggers)', value: '	80.0 Tonnes at 3m Radius (85% Rating) 360° Slew' },
        { name: 'Boom Length', value: '	12.1m - 43.8m five-section' },
        { name: 'Maximum Tip Height', value: '46.0 m' },
        { name: 'Maximum road speed', value: '49 kmph' },
        { name: 'Gross Vehicle Weight', value: '49,750 kg' }
      ],
      parentProduct: 'truck-cranes'
    }
  ],
  // Add other categories with their sub-products
  'pick-n-carry-cranes': [
    {
      id: 'pixef-215',
      name: 'PIXEF 215',
      description: 'Pick and carry crane offereing Precision , Speed & Durability',
      introTitle: "Meet the PIXEF 215",
      introDescription: "Pixef 215 - Pick and carry crane offereing Precision , Speed & Durability",
      image: `${basePath}/pixef215.jpg`,
      features: ['360° Mobility', 'Quick Setup', 'Easy Operation'],
      brochure: `${basePath}/brochures/pnc-150.pdf`,
      specifications: [],
      parentProduct: 'pick-n-carry-cranes'
    },
    {
      id: 'mobiload-315',
      name: 'MOBILOAD 315',
      description: 'Pick and carry crane offereing Precision , Speed & Durability',
      introTitle: "Meet the MOBILOAD 315",
      introDescription: "Mobiload 315 - Pick and carry crane offereing Precision , Speed & Durability",
      image: `${basePath}/pixef315.jpg`,
      features: ['360° Mobility', 'Quick Setup', 'Easy Operation'],
      brochure: `${basePath}/brochures/pnc-150.pdf`,
      specifications: [],
      parentProduct: 'pick-n-carry-cranes'
    }
  ],
  'articulating-crane': [
    {
      id: 'n80a',
      name: 'TIL N80A',
      description: 'Compact articulating crane for tight spaces',
      introTitle: "TIL N80A",
      introDescription: "Meet the TIL N80A",
      image: `${basePath}/articulating.jpg`,
      features: ['Knuckle Boom Design', 'Remote Control', 'Precision Movement'],
      brochure: `${basePath}/brochures/ac-120.pdf`,
      specifications: [],
      parentProduct: 'articulating-crane'
    }
  ],
  'forklift-trucks': [
    {
      id: 'hyster-h10-16xd',
      name: 'Hyster H10-16XD',
      description: 'Hyster forklifts are engineered to deliver power, performance, and energy efficiency for challenging industrial applications.​',
      introTitle: "",
      introDescription: "",
      image: `${basePath}/hyster-h10-16xd.jpg`,
      features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
      brochure: `${basePath}/brochures/gmk-3050.pdf`,
      specifications: [
        { name: 'Max Capacity', value: '30 Tons' },
        { name: 'Boom Length', value: '35 Meters' },
        { name: 'Engine Power', value: '300 HP' }
      ],
      parentProduct: 'forklift-trucks'
    },
    {
      id: 'hyster-h25-32xd',
      name: 'Hyster H25-32XD',
      description: 'Hyster forklifts are engineered to deliver power, performance, and energy efficiency for challenging industrial applications.​',
      introTitle: "",
      introDescription: "",
      image: `${basePath}/hyster-h25-32xd.jpg`,
      features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
      brochure: `${basePath}/brochures/gmk-3050.pdf`,
      specifications: [
        { name: 'Max Capacity', value: '30 Tons' },
        { name: 'Boom Length', value: '35 Meters' },
        { name: 'Engine Power', value: '300 HP' }
      ],
      parentProduct: 'forklift-trucks'
    },
    {
      id: 'hyster-h36-48xd',
      name: 'Hyster H36-48XD',
      description: 'Hyster forklifts are engineered to deliver power, performance, and energy efficiency for challenging industrial applications.​',
      introTitle: "",
      introDescription: "",
      image: `${basePath}/hyster-h36-48xd.jpg`,
      features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
      brochure: `${basePath}/brochures/gmk-3050.pdf`,
      specifications: [
        { name: 'Max Capacity', value: '30 Tons' },
        { name: 'Boom Length', value: '35 Meters' },
        { name: 'Engine Power', value: '300 HP' }
      ],
      parentProduct: 'forklift-trucks'
    },
    {
      id: 'hyster-h8-10xt',
      name: 'Hyster H8.0-10.0XT',
      description: 'Hyster forklifts are engineered to deliver power, performance, and energy efficiency for challenging industrial applications.​',
      introTitle: "",
      introDescription: "",
      image: `${basePath}/hyster-h8-10xt.jpg`,
      features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
      brochure: `${basePath}/brochures/gmk-3050.pdf`,
      specifications: [
        { name: 'Max Capacity', value: '30 Tons' },
        { name: 'Boom Length', value: '35 Meters' },
        { name: 'Engine Power', value: '300 HP' }
      ],
      parentProduct: 'forklift-trucks'
    },
    {
      id: 'hyster-h8-11xd',
      name: 'Hyster H8-11XD EC B3C0',
      description: 'Hyster forklifts are engineered to deliver power, performance, and energy efficiency for challenging industrial applications.​',
      introTitle: "",
      introDescription: "",
      image: `${basePath}/hyster-h8-11xd.png`,
      features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
      brochure: `${basePath}/brochures/gmk-3050.pdf`,
      specifications: [
        { name: 'Max Capacity', value: '30 Tons' },
        { name: 'Boom Length', value: '35 Meters' },
        { name: 'Engine Power', value: '300 HP' }
      ],
      parentProduct: 'forklift-trucks'
    }
  ],
  'boom-lifts': [
    {
      id: 'a62jrt',
      name: 'A62JRT',
      description: 'Advanced all-terrain crane from the Grove range',
      introTitle: "Meet the A62JRT",
      introDescription: "The Snorkel A62JRT articulating boom lift delivers a superb working envelope with zero tailswing. Offering the largest platform in its class, it can lift two people with tools to a working height of 67 ft. 8 in. (20.8m). A compact length when stowed makes it easy to transport the lift between jobsites. An oscillating front axle keeps the A62JRT steady on uneven ground for all-terrain performance.",
      image: `${basePath}/a62jrt.jpg`,
      features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
      brochure: `${basePath}/brochures/gmk-3050.pdf`,
      specifications: [
      ],
      parentProduct: 'boom-lifts'
    }
  ],
  'reachstackers': [
    {
      id: 'rs46-33ch',
      name: 'RS 46 - 33CH',
      description: 'Advanced all-terrain crane from the Grove range',
      introTitle: "Meet the RS 46 - 33CH",
      introDescription: "RS 46 - 33CH - World class ReachStacker made in india I Moving material from port to home",
      image: `${basePath}/rs46-33ch.jpg`,
      features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
      brochure: `${basePath}/brochures/gmk-3050.pdf`,
      specifications: [
      ],
      parentProduct: 'reachstackers'
    },
    {
      id: 'rs45-31cha336-a404',
      name: 'RS 45 - 31CH A366 / A404',
      description: 'Advanced all-terrain crane from the Grove range',
      introTitle: "Meet the RS 45 - 31CH A366 / A404",
      introDescription: "RS 45 - 31CH A366 / A404 - World class ReachStacker made in india I Moving material from port to home",
      image: `${basePath}/rs45-31cha336-a404.jpg`,
      features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
      brochure: `${basePath}/brochures/gmk-3050.pdf`,
      specifications: [
        
      ],
      parentProduct: 'reachstackers'
    }
  ],
  'grove-range': [
  {
    id: 'rt-530e-2',
    name: 'RT 530E-2',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the RT 530E-2",
    introDescription: "RT 530E-2 - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/rt530e2.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'rt-540e',
    name: 'RT 540E',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the RT 540E",
    introDescription: "RT 540E - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/rt540e.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'rt-550e',
    name: 'RT 550E',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the RT 550E",
    introDescription: "RT 550E - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/rt550e.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'rt765e-2',
    name: 'RT 765E-2',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the RT 765E-2",
    introDescription: "RT 765E-2 - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/rt765e-2.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'rt770e',
    name: 'RT 770E',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the RT 770E",
    introDescription: "RT 770E - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/rt770e.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'rt9130e-2',
    name: 'RT 9130E-2',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the RT 9130E-2",
    introDescription: "RT 9130E-2 - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/rt9130e-2.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'grt9165',
    name: 'GRT 9165',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the GRT 9165",
    introDescription: "GRT 9165 - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/grt9165.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'grt655',
    name: 'GRT 655',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the GRT 655",
    introDescription: "GRT 655 - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/grt655.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'grt655l',
    name: 'GRT 655L',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the GRT 655L",
    introDescription: "GRT 655L - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/grt655l.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'grt880',
    name: 'GRT 880',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the GRT 880",
    introDescription: "GRT 880 - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/grt880.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'grt8100-1',
    name: 'GRT 8100-1',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the GRT 8100-1",
    introDescription: "GRT 8100-1 - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/grt8100-1.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'grt8120',
    name: 'GRT 8120',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the GRT 8120",
    introDescription: "GRT 8120 - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/grt8120.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'tms500-2',
    name: 'TMS 500-2',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the TMS 500-2",
    introDescription: "TMS 500-2 - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/tms500-2.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'tms800-2',
    name: 'TMS 800-2',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the TMS 800-2",
    introDescription: "TMS 800-2 - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/tms800-2.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'tms875-2',
    name: 'TMS 875-2',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the TMS 875-2",
    introDescription: "TMS 875-2 - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/tms875-2.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'tms9000-2',
    name: 'TMS 9000-2',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the TMS 9000-2",
    introDescription: "TMS 9000-2 - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/tms9000-2.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'tts9000-2',
    name: 'TTS 9000-2',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the TTS 9000-2",
    introDescription: "TTS 9000-2 - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/tts9000-2.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'gmk-3050-2',
    name: 'GMK 3050-2',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the GMK 3050-2",
    introDescription: "GMK 3050-2 - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/gmk3050-2.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'gmk-3060l',
    name: 'GMK 3060L',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the GMK 3060L",
    introDescription: "GMK 3060L - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/gmk3060l.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'gmk-4070l',
    name: 'GMK 4070L',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the GMK 4070L",
    introDescription: "GMK 4070L - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/gmk4070l.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'gmk-4080-2',
    name: 'GMK 4080-2',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the GMK 4080-2",
    introDescription: "GMK 4080-2 - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/gmk4080-2.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'gmk-4080l',
    name: 'GMK 4080L',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the GMK 4080L",
    introDescription: "GMK 4080L - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/gmk4080l.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'gmk-4090',
    name: 'GMK 4090',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the GMK 4090",
    introDescription: "GMK 4090 - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/gmk4090.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'gmk-6400',
    name: 'GMK 6400',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the GMK 6400",
    introDescription: "GMK 6400 - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/gmk6400.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'gcd-09',
    name: 'GCD 09',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the GCD 09",
    introDescription: "GCD 09 - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/gcd09.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'gcd-15',
    name: 'GCD-15',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the GCD-15",
    introDescription: "GCD-15 - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/gcd15.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'gcd-20',
    name: 'GCD-20',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the GCD-20",
    introDescription: "GCD-20 - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/gcd20.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  },
  {
    id: 'gcd-25',
    name: 'GCD 25',
    description: 'Advanced all-terrain crane from the Grove range',
    introTitle: "Meet the GCD 25",
    introDescription: "GCD 25 - Rough Terrain Cranes for Challenging Work Sites | Industry-Leading Performance and Safety",
    image: `${basePath}/gcd25.jpg`,
    features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
    brochure: `${basePath}/brochures/gmk-3050.pdf`,
    specifications: [],
    parentProduct: 'grove-range'
  }
],
  'crawler-cranes': [
    {
      id: 'mlc80a-1',
      name: 'MLC 80A-1',
      description: 'Advanced all-terrain crane from the Grove range',
      introTitle: "Meet the MLC 80A-1",
      introDescription: "MLC 80A-1 - Crawler Crane with innovative features & greater velocity",
      image: `${basePath}/mlc80a-1.jpg`,
      features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
      brochure: `${basePath}/brochures/gmk-3050.pdf`,
      specifications: [
        
      ],
      parentProduct: 'crawler-cranes'
    },
    {
      id: 'mlc90A-1',
      name: 'MLC 90A-1',
      description: 'Advanced all-terrain crane from the Grove range',
      introTitle: "Meet the MLC 90A-1",
      introDescription: "MLC 90A-1 - Crawler Crane with innovative features & greater velocity",
      image: `${basePath}/mlc90a-1.jpg`,
      features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
      brochure: `${basePath}/brochures/gmk-3050.pdf`,
      specifications: [
        
      ],
      parentProduct: 'crawler-cranes'
    },
    {
      id: 'mlc100-1',
      name: 'MLC 100-1',
      description: 'Advanced all-terrain crane from the Grove range',
      introTitle: "Meet the MLC100-1",
      introDescription: "MLC 100-1 - Crawler Crane with innovative features & greater velocity",
      image: `${basePath}/mlc100-1.jpg`,
      features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
      brochure: `${basePath}/brochures/gmk-3050.pdf`,
      specifications: [
        
      ],
      parentProduct: 'crawler-cranes'
    },
    {
      id: 'mlc150-1',
      name: 'MLC 150-1',
      description: 'Advanced all-terrain crane from the Grove range',
      introTitle: "Meet the MLC 150-1",
      introDescription: "MLC 150-1 - Crawler Crane with innovative features & greater velocity",
      image: `${basePath}/mlc150a-1.jpg`,
      features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
      brochure: `${basePath}/brochures/gmk-3050.pdf`,
      specifications: [
        
      ],
      parentProduct: 'crawler-cranes'
    },
    {
      id: 'mlc165-1',
      name: 'MLC 165-1',
      description: 'Advanced all-terrain crane from the Grove range',
      introTitle: "Meet the MLC 165-1",
      introDescription: "MLC 165-1 - Crawler Crane with innovative features & greater velocity",
      image: `${basePath}/mlc165-1.jpg`,
      features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
      brochure: `${basePath}/brochures/gmk-3050.pdf`,
      specifications: [
        
      ],
      parentProduct: 'crawler-cranes'
    },
    {
      id: '14000',
      name: '14000',
      description: 'Advanced all-terrain crane from the Grove range',
      introTitle: "Meet the 14000",
      introDescription: "14000 - Crawler Crane with innovative features & greater velocity",
      image: `${basePath}/14000.jpg`,
      features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
      brochure: `${basePath}/brochures/gmk-3050.pdf`,
      specifications: [
        
      ],
      parentProduct: 'crawler-cranes'
    },
    {
      id: 'mlc250',
      name: 'MLC 250',
      description: 'Advanced all-terrain crane from the Grove range',
      introTitle: "Meet the MLC 250",
      introDescription: "MLC 250 - Crawler Crane with innovative features & greater velocity",
      image: `${basePath}/mlc250.jpg`,
      features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
      brochure: `${basePath}/brochures/gmk-3050.pdf`,
      specifications: [
      ],
      parentProduct: 'crawler-cranes'
    },
    {
      id: '999',
      name: '999',
      description: 'Advanced all-terrain crane from the Grove range',
      introTitle: "Meet the 999",
      introDescription: "999 - Crawler Crane with innovative features & greater velocity",
      image: `${basePath}/999.jpg`,
      features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
      brochure: `${basePath}/brochures/gmk-3050.pdf`,
      specifications: [
      ],
      parentProduct: 'crawler-cranes'
    },
    {
      id: 'mlc300',
      name: 'MLC 300',
      description: 'Advanced all-terrain crane from the Grove range',
      introTitle: "Meet the MLC 300",
      introDescription: "MLC 300 - Crawler Crane with innovative features & greater velocity",
      image: `${basePath}/mlc300.jpg`,
      features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
      brochure: `${basePath}/brochures/gmk-3050.pdf`,
      specifications: [
      ],
      parentProduct: 'crawler-cranes'
    },
    {
      id: '16000',
      name: '16000',
      description: 'Advanced all-terrain crane from the Grove range',
      introTitle: "Meet the 16000",
      introDescription: "16000 - Crawler Crane with innovative features & greater velocity",
      image: `${basePath}/16000.jpg`,
      features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
      brochure: `${basePath}/brochures/gmk-3050.pdf`,
      specifications: [
      ],
      parentProduct: 'crawler-cranes'
    },
    {
      id: 'mlc650',
      name: 'MLC 650',
      description: 'Advanced all-terrain crane from the Grove range',
      introTitle: "Meet the MLC 650",
      introDescription: "MLC 650 - Crawler Crane with innovative features & greater velocity",
      image: `${basePath}/mlc650.jpg`,
      features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
      brochure: `${basePath}/brochures/gmk-3050.pdf`,
      specifications: [
      ],
      parentProduct: 'crawler-cranes'
    },
    {
      id: '18000',
      name: '18000',
      description: 'Advanced all-terrain crane from the Grove range',
      introTitle: "Meet the 18000",
      introDescription: "18000 - Crawler Crane with innovative features & greater velocity",
      image: `${basePath}/18000.jpg`,
      features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
      brochure: `${basePath}/brochures/gmk-3050.pdf`,
      specifications: [
      ],
      parentProduct: 'crawler-cranes'
    },
    {
      id: '31000',
      name: '31000',
      description: 'Advanced all-terrain crane from the Grove range',
      introTitle: "Meet the 31000",
      introDescription: "31000 - Crawler Crane with innovative features & greater velocity",
      image: `${basePath}/31000.jpg`,
      features: ['All-Terrain Capability', 'Advanced Load Monitoring', 'Comfortable Cab'],
      brochure: `${basePath}/brochures/gmk-3050.pdf`,
      specifications: [
      ],
      parentProduct: 'crawler-cranes'
    }
  ]
};

// Skeleton Loader Component for Sub-Product
function SubProductSkeleton() {
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

function SubProductContent({ params }: { params: Promise<{ product: string; "sub-product": string }> }) {
  // ✅ unwrap the Promise
  const { product, "sub-product": subProductId } = React.use(params);

  // Find the sub-product by searching through all categories
  let subProduct: SubProduct | null = null;
  let parentProduct: string | null = null;

  for (const category in allSubProducts) {
    const found = allSubProducts[category as keyof typeof allSubProducts].find(
      (p) => p.id === subProductId
    );
    if (found) {
      subProduct = found;
      parentProduct = category;
      break;
    }
  }

  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  if (!subProduct) {
    return notFound();
  }

  return (
    <div className="bg-gradient-to-b from-[#f8f9fa] to-white min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-black/80 to-black/35 h-72 w-full overflow-hidden">
        <img
          src={subProduct.image}
          alt={subProduct.name}
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
                {subProduct.name}
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
                {subProduct.description}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-16 -mt-6 relative z-10">
        <div className="mb-8">
          <Link href={`/category/${parentProduct}`} className="flex items-center text-[#F1B434] hover:underline mb-4">
            <ChevronRight className="w-4 h-4 transform rotate-180 mr-1" />
            Back to {parentProduct?.replace(/-/g, ' ')}
          </Link>
        </div>

        {/* --- Product intro (simple full width text) --- */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            {subProduct.introTitle}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {subProduct.introDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="rounded-xl overflow-hidden shadow-lg w-full h-64 md:h-96">
            <img
              src={subProduct.image}
              alt={subProduct.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div>
            {/* <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Key Features</h2>
              <ul className="space-y-3">
                {subProduct.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 h-5 w-5 text-[#F1B434] mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div> */}

            {subProduct.specifications && subProduct.specifications.length > 0 && (
  <div className="mb-12"> 
    <h2 className="text-xl font-bold text-gray-800 mb-4">Specifications</h2>

    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-yellow-400 text-left text-gray-800">
            <th className="px-4 py-2 font-bold border border-gray-300">Feature</th>
            <th className="px-4 py-2 font-bold border border-gray-300">Details</th>
          </tr>
        </thead>
        <tbody>
          {subProduct.specifications.map((spec, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border border-gray-300 font-medium">
                {spec.name}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}


            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsBrochureModalOpen(true)}
                className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm flex items-center"
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

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md p-8 border border-gray-100"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Need more information about {subProduct.name}?
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
                <Link href="/contact-us">Call Us Now</Link>
                
              </button>
            </div>
          </div>
        </motion.div>
        {/* Brochure modal moved to body via portal */}
        <ModalPortal>
          <BrochureDownloadModal
            isOpen={isBrochureModalOpen}
            onClose={() => setIsBrochureModalOpen(false)}
          />
        </ModalPortal>

        {/* Quote modal moved to body via portal */}
        <ModalPortal>
          <GetQuoteModal
            isOpen={isQuoteModalOpen}
            onClose={() => setIsQuoteModalOpen(false)}
          />
        </ModalPortal>

      </main>
    </div>
  );
}

export default function SubProductPage({ params }: { params: Promise<{ product: string; "sub-product": string }> }) {
  return (
    <Suspense fallback={<SubProductSkeleton />}>
      <SubProductContent params={params} />
    </Suspense>
  );
}

