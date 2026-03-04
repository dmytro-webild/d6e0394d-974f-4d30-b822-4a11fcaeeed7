"use client";

import { BarChart3, Layers, MapPin, Phone, Star, Zap } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import FeatureCardSeven from "@/components/sections/feature/FeatureCardSeven";
import MediaAbout from "@/components/sections/about/MediaAbout";
import MetricCardTwo from "@/components/sections/metrics/MetricCardTwo";
import TestimonialCardTwelve from "@/components/sections/testimonial/TestimonialCardTwelve";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterMedia from "@/components/sections/footer/FooterMedia";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="mediumSmall"
      sizing="largeSmall"
      background="circleGradient"
      cardStyle="solid"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Nitin Auto Xerox"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Why Us", id: "about" },
            { name: "Contact", id: "contact" },
          ]}
          button={{ text: "Call Now", href: "tel:076988 17274" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Fast, Reliable Xerox & Printing in Bhavnagar"
          description="High-quality printing, T-shirt printing, and stationery services with quick turnaround times and affordable pricing. Open daily until 9:30 PM. Located in Nirmal Nagar for your convenience."
          background={{ variant: "circleGradient" }}
          tag="Quick Turnaround"
          tagIcon={Zap}
          tagAnimation="slide-up"
          buttons={[
            { text: "Call Now", href: "tel:076988 17274" },
            { text: "Learn More", href: "#services" },
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/woman-work-office-using-printer_23-2149456923.jpg?_wi=1"
          imageAlt="Professional xerox and printing services"
          mediaAnimation="opacity"
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardSeven
          title="Our Services"
          description="Complete printing and xerox solutions for all your needs"
          tag="What We Offer"
          tagIcon={Layers}
          tagAnimation="slide-up"
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "High-Quality Xerox & Printing",              description:
                "Professional photocopying and color/black-and-white printing with sharp, vibrant results. Fast turnaround times for bulk orders.",              imageSrc:
                "http://img.b2bpic.net/free-photo/woman-work-office-using-printer_23-2149456923.jpg?_wi=2",              imageAlt: "Xerox and printing services"},
            {
              id: 2,
              title: "T-Shirt & Custom Printing",              description:
                "Personalized t-shirt printing with custom designs. Perfect for events, businesses, and individual orders with quick delivery.",              imageSrc:
                "http://img.b2bpic.net/free-photo/young-man-screen-printing_1163-2777.jpg",              imageAlt: "T-shirt printing service"},
            {
              id: 3,
              title: "Stationery & Office Supplies",              description:
                "Wide range of high-quality stationery products including letterheads, envelopes, notebooks, and business cards.",              imageSrc:
                "http://img.b2bpic.net/free-photo/flat-lay-office-desk-arrangement_23-2148707946.jpg",              imageAlt: "Stationery and office supplies"},
            {
              id: 4,
              title: "Civil Maps & Technical Drawings",              description:
                "Specialized large-format printing for architectural plans, civil drawings, and technical blueprints with precision accuracy.",              imageSrc:
                "http://img.b2bpic.net/free-photo/overhead-view-woman-s-hand-cutting-fabric-smaller-part-with-rotary-cutter-wooden-table_23-2148164436.jpg",              imageAlt: "Civil map and technical drawing printing"},
          ]}
          animationType="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Why Choose Nitin Auto Xerox"
          description="Located in Nirmal Nagar, Bhavnagar, we've been serving the community with reliable, affordable printing services. Open daily until 9:30 PM for your convenience. Customer satisfaction and quality are our priorities."
          tag="Local Service"
          tagIcon={MapPin}
          tagAnimation="slide-up"
          buttons={[{ text: "Visit Us Today", href: "tel:076988 17274" }]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/manager-arranging-racks-with-clothes_482257-85378.jpg"
          imageAlt="Nitin Auto Xerox local service"
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Our Track Record"
          description="Trusted service provider in Bhavnagar"
          tag="Statistics"
          tagIcon={BarChart3}
          tagAnimation="slide-up"
          textboxLayout="default"
          metrics={[
            { id: "1", value: "4.8★", description: "Google Ratings" },
            { id: "2", value: "1000+", description: "Happy Customers" },
            { id: "3", value: "24hrs", description: "Urgent Orders" },
            {
              id: "4",              value: "Open till 9:30 PM",              description: "Extended Hours"},
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",              name: "Rajesh Kumar",              imageSrc:
                "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=1",              imageAlt: "Rajesh Kumar"},
            {
              id: "2",              name: "Priya Patel",              imageSrc:
                "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=2",              imageAlt: "Priya Patel"},
            {
              id: "3",              name: "Amit Singh",              imageSrc:
                "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=3",              imageAlt: "Amit Singh"},
            {
              id: "4",              name: "Meera Desai",              imageSrc:
                "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=4",              imageAlt: "Meera Desai"},
          ]}
          cardTitle="Over 1000 customers trust Nitin Auto Xerox for fast, reliable printing and xerox services"
          cardTag="Customer Testimonials"
          cardTagIcon={Star}
          cardAnimation="blur-reveal"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          title="Ready to Print?"
          description="Call us today or visit our store in Nirmal Nagar, Bhavnagar. We're open daily until 9:30 PM and ready to help with all your printing needs."
          tagIcon={Phone}
          tagAnimation="slide-up"
          background={{ variant: "circleGradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/young-beautiful-female-support-phone-operator-speaking-consulting-office_176420-952.jpg"
          imageAlt="Contact Nitin Auto Xerox"
          mediaAnimation="opacity"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/office-with-computer-glass-table_1232-514.jpg"
          imageAlt="Nitin Auto Xerox store"
          columns={[
            {
              title: "Services",              items: [
                { label: "Xerox & Printing", href: "#services" },
                { label: "T-Shirt Printing", href: "#services" },
                { label: "Stationery", href: "#services" },
                { label: "Technical Drawings", href: "#services" },
              ],
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
              ],
            },
            {
              title: "Contact",              items: [
                { label: "Phone: 076988 17274", href: "tel:076988 17274" },
                {
                  label: "Location: Nirmal Nagar, Bhavnagar",                  href: "#"},
                { label: "Open till 9:30 PM Daily", href: "#" },
              ],
            },
          ]}
          logoText="Nitin Auto Xerox"
          copyrightText="© 2025 Nitin Auto Xerox & Stationery. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
