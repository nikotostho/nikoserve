type StatusVariant = "new" | "pending" | "progress" | "ship" | "done" | "cancel" | "hold" | "draft";

const variantMap: Record<StatusVariant, string> = {
  new: "st-new",
  pending: "st-pending",
  progress: "st-progress",
  ship: "st-ship",
  done: "st-done",
  cancel: "st-cancel",
  hold: "st-hold",
  draft: "st-draft",
};

type Props = {
  variant: StatusVariant;
  children: React.ReactNode;
};

export default function StatusBadge({ variant, children }: Props) {
  return <span className={`st ${variantMap[variant]}`}>{children}</span>;
}
