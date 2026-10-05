import Link from "next/link";

type PageHeaderProps = {
  title: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
  actions?: React.ReactNode;
};

/**
 * Reusable page header for the User panel.
 * Most user pages follow the same pattern: breadcrumb + title + description
 * + trailing action buttons. Using this component avoids duplicating the
 * `page-head` markup across 15 pages.
 */
export default function PageHeader({ title, description, breadcrumb, actions }: PageHeaderProps) {
  return (
    <div className="page-head">
      <div>
        {breadcrumb ? (
          <nav className="crumb mb-1.5">
            {breadcrumb.map((crumb, index) => (
              <span key={`${crumb.label}-${index}`} className="flex items-center gap-1.5">
                {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span className="is-current">{crumb.label}</span>}
                {index < breadcrumb.length - 1 ? (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 6 6 6-6 6" />
                  </svg>
                ) : null}
              </span>
            ))}
          </nav>
        ) : null}
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
    </div>
  );
}
