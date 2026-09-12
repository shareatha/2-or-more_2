import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import PageHeader from "@/components/shared/PageHeader";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import ClosingCTA from "@/components/shared/ClosingCTA";

export const metadata: Metadata = {
  title: "Portfolio | 2 OR MORE",
  description:
    "Weddings, celebrations, showers, and corporate events coordinated by 2 OR MORE across Delaware, Maryland & Pennsylvania.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Real Events, Real Details"
        description="A look at the weddings, celebrations, showers, and corporate events we've helped bring to life."
        image="/images/photos/tablescape-black-gold.jpg"
      />

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <PortfolioGrid />
        </Container>
      </section>

      <ClosingCTA title="Ready to plan something worth remembering?" />
    </>
  );
}
