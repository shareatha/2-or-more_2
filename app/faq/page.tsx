import type { Metadata } from "next";
import Container from "@/components/shared/Container";
import PageHeader from "@/components/shared/PageHeader";
import Accordion from "@/components/faq/Accordion";
import ClosingCTA from "@/components/shared/ClosingCTA";

export const metadata: Metadata = {
  title: "FAQ | 2 OR MORE",
  description:
    "Answers to common questions about event coordination and planning with 2 OR MORE.",
};

export default function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions, Answered"
        image="/images/photos/notebook-menu.jpg"
      />

      <section className="bg-white py-24 sm:py-32">
        <Container>
          <Accordion />
        </Container>
      </section>

      <ClosingCTA title="Still have questions?" />
    </>
  );
}
