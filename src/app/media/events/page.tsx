import React from 'react';
import { prisma } from '../../../lib/prisma';
import EventsClient from './EventsClient';

interface EventImage {
  banner_alt: string;
  banner_image: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  endDate: string;
  location: string;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
  images: EventImage[];
  modification_time: Date | null;
}

async function getEventsData(): Promise<{
  upcomingEvents: Event[];
  pastEvents: Event[];
}> {
  try {
    // Fetch all published events ordered by precedence (lower number = higher priority)
    const happenings = await prisma.happenings.findMany({
      where: {
        published: 1
      },
      orderBy: [
        { precedence: 'asc' }, // Lower precedence numbers first
        { modification_time: 'desc' }
      ]
    });

    // Transform database data to match component structure
    const transformedEvents: Event[] = happenings.map((happening, index) => {
      // Parse the images JSON array
      let images: EventImage[] = [];
      try {
        images = JSON.parse(happening.images);
      } catch (error) {
        console.error('Error parsing images JSON for event:', happening.id, error);
        images = [];
      }

      // Use the first image as the main display image
      const mainImage = images.length > 0 
        ? `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${images[0].banner_image}`
        : `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/no_image.jpg`;

      // Extract year from modification_time for date display
      const eventYear = happening.modification_time?.getFullYear() || new Date().getFullYear();
      
      // Create event dates based on modification_time
      const eventDate = new Date(happening.modification_time || new Date());
      const endDate = new Date(eventDate);
      endDate.setDate(endDate.getDate() + 3); // Assume 3-day event

      return {
        id: happening.id,
        title: happening.name,
        date: eventDate.toISOString().split('T')[0],
        endDate: endDate.toISOString().split('T')[0],
        location: 'TIL Locations', // You can modify this based on your needs
        description: `${happening.name} - TIL Event`, // Basic description
        image: mainImage,
        category: 'Corporate Event', // Default category
        featured: index < 4, // Make first 4 events featured
        images: images,
        modification_time: happening.modification_time
      };
    });

    const currentDate = new Date();
    
    // For now, we'll treat all events as past events since they seem to be historical
    // If you want to separate upcoming vs past, you'll need to add event_date field to your table
    const pastEvents = transformedEvents;
    const upcomingEvents: Event[] = []; // Empty for now since all events are past

    return {
      upcomingEvents,
      pastEvents
    };
  } catch (error) {
    console.error('Error fetching events:', error);
    return {
      upcomingEvents: [],
      pastEvents: []
    };
  }
}

export default async function EventsPage() {
  const { upcomingEvents, pastEvents } = await getEventsData();

  return (
    <EventsClient 
      initialUpcomingEvents={upcomingEvents}
      initialPastEvents={pastEvents}
    />
  );
}