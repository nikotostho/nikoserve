import type { ReactNode } from "react";
import AnnouncementBar from "@/components/storefront/announcement-bar";
import BackToTop from "@/components/storefront/back-to-top";
import LocationDialog from "@/components/storefront/location-dialog";
import MobileBottomNavigation from "@/components/storefront/mobile-bottom-navigation";
import MobileMenuDrawer from "@/components/storefront/mobile-menu-drawer";
import SiteFooter from "@/components/storefront/site-footer";
import SiteHeader from "@/components/storefront/site-header";

export default function StorefrontShell({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      {children}
      <SiteFooter />
      <BackToTop />
      <MobileBottomNavigation />
      <MobileMenuDrawer />
      <LocationDialog />
    </>
  );
}
