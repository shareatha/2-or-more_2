import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import WeddingPricingGrid from "@/components/services/WeddingPricingGrid";
import CategoryCascadeRow from "@/components/services/CategoryCascadeRow";
import SignatureAndPowerHour from "@/components/home/SignatureAndPowerHour";
import ALaCarteList from "@/components/services/ALaCarteList";
import ClosingCTA from "@/components/shared/ClosingCTA";
import { CELEBRATION_INCLUDES, CORPORATE_INCLUDES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services & Pricing | 2 or More",
  description:
    "Compare wedding coordination and planning packages, social event coordination, and corporate event services from 2 or More.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services & Pricing"
        title="Find the Right Level of Support"
        description="Every package starts here — during your consultation, we'll customize the details to fit your event."
        image="/images/photos/tablescape-gold.jpg"
      />

      <WeddingPricingGrid />

      <CategoryCascadeRow
        id="celebrations"
        title="Celebrations"
        price="Social Event Coordination — Starting at $850"
        description="For birthdays, showers, graduations, anniversaries, and every milestone worth marking. We step in to run the day so you can be a guest at your own celebration."
        tags={CELEBRATION_INCLUDES}
        image="/images/photos/champagne-toast.jpg"
        ctaLabel="Plan My Celebration"
        imageFirst
      />

      <CategoryCascadeRow
        id="corporate"
        title="Corporate + Community"
        price="Custom services available"
        description="Every organization's event is different, so pricing is built around your goals, guest count, and timeline."
        tags={CORPORATE_INCLUDES}
        image="/images/photos/tablescape-black-gold.jpg"
        ctaLabel="Inquire About Your Event"
        imageFirst={false}
      />

      <SignatureAndPowerHour />

      <ALaCarteList />

      <ClosingCTA title="Ready to compare your options?" />
    </>
  );
}
