import type { ReactNode } from "react";

/**
 * Configuration contract for the shared dashboard shell
 * (`src/components/dashboard/dashboard-shell.tsx`).
 *
 * Every panel area of the application — User (`/user`), Vendor (`/vendor`)
 * and the future Admin (`/admin`) — provides one of these configs from its
 * own feature folder (`src/features/<panel>/lib/<panel>-panel-config.tsx`)
 * and passes it to `<DashboardShell>` in its route-group layout:
 *
 *   src/app/(panels)/<panel>/layout.tsx
 *
 * The shell owns the frame (sidebar, topbar, drawer, footer, interactions);
 * the config owns everything that differs per panel: navigation, branding,
 * the signed-in identity and the topbar shortcuts. To add a new panel, create
 * its config, wrap its routes in `<DashboardShell config={...}>` and add the
 * role guard comment to its layout — no changes to the shell are required.
 */

export type PanelNavItem = {
  href: string;
  label: string;
  /** Small counter badge rendered on the right of the item. */
  pill?: string;
  icon: ReactNode;
};

export type PanelNavGroup = {
  title: string;
  items: PanelNavItem[];
};

export type PanelUserMeta = {
  /** Single-letter avatar label. */
  initial: string;
  name: string;
  role: string;
};

export type PanelTopbarAction = {
  href: string;
  label: string;
  icon: ReactNode;
  /** Maps to the design-system button variant (`btn-primary` / `btn-outline`). */
  variant: "primary" | "outline";
};

export type PanelAccountMenuItem = {
  href: string;
  label: string;
  icon: ReactNode;
  /** Renders the danger (red) style, e.g. Sign out. */
  danger?: boolean;
  /** Inserts a divider above this item. */
  separatorAbove?: boolean;
};

export type PanelShellConfig = {
  /** Panel root path, e.g. "/user" or "/vendor". Used for active-nav rules. */
  rootPath: string;
  brand: {
    /** Where the logo links to (convention: the panel dashboard). */
    href: string;
    /** Small caption under the HaatBazar wordmark, e.g. "Seller Centre". */
    subtitle: string;
  };
  nav: PanelNavGroup[];
  /** Static shortcut links rendered below the nav groups. */
  shortcuts: PanelNavItem[];
  /** Identity shown in the sidebar footer and topbar account menu. */
  user: PanelUserMeta;
  topbar: {
    searchPlaceholder: string;
    /** Primary call-to-action on the left of the icon cluster. */
    primaryAction?: PanelTopbarAction;
    /** Notification/message flyouts — omit for panels that do not have them. */
    notificationsHref?: string;
    notificationCount?: string;
    messagesHref?: string;
    messageCount?: string;
    accountMenu: PanelAccountMenuItem[];
  };
};
