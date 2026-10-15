import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import CommerceMockup from '../components/mockups/CommerceMockup';

export default function DigitalCommerce() {
  return (
    <ServiceTemplate
      slug="digital-commerce-enablement"
      seoTitle="Sales System Setup for South African Businesses"
      description="Build a connected sales system. We bring your storefront, payments, marketplaces, customer journeys and follow-up into one practical system that helps more prospects become customers."
      Mockup={CommerceMockup}
      accent="purple"
      showCarousel
    />
  );
}
