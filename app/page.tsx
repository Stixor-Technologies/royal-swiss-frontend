import Image from "next/image";
import PageHeader from "@/components/shared/page-header/page-header";
import Dealers from "@/components/shared/dealers/dealers";
import Footer from "@/components/shared/footer/footer";
import AdvertisementPolicy from "@/components/shared/advertisement-policy/advertisement-policy";
import SkillSet from "@/components/shared/skill-set/skill-set";
import LinkButton from "@/components/shared/link-button/link-button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F5]">
      <LinkButton as="button" variant="rounded" text="Get Quote Now" />
      <LinkButton as="button" variant="corner" text="Get a Quote" />
      <LinkButton as="button" variant="sm" text="Contact Us" />
      <LinkButton as="button" variant="lg" text="Send Message" />
      <LinkButton
        as="button"
        variant="lg"
        styles="!max-w-[31.375rem] !h-[3.853rem] hover:!rounded-[2.75rem] before:!hover:rounded-[2.75rem] !font-semibold !text-[1.208rem] !leading-[1.462rem]"
        text="Send Message lg-1"
      />

      <Dealers />
      <AdvertisementPolicy />
      <SkillSet />
      <Footer />
    </main>
  );
}
