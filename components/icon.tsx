import React from "react";

import {
  AcademicCapIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BoltIcon,
  BookOpenIcon,
  CheckIcon,
  ChevronLeftIcon,
  LinkIcon,
  PlusIcon,
  SparklesIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { cn } from "@/lib/utils";

function GithubIcon({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function TwitterIcon({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function Spinner({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}

const icons = {
  academic_cap: AcademicCapIcon,
  arrow_down: ArrowDownIcon,
  arrow_left: ArrowLeftIcon,
  arrow_right: ArrowRightIcon,
  bolt: BoltIcon,
  book_open: BookOpenIcon,
  check_mark: CheckIcon,
  chevron_left: ChevronLeftIcon,
  github: GithubIcon,
  link: LinkIcon,
  plus: PlusIcon,
  sparkles: SparklesIcon,
  spinner: Spinner,
  trash: TrashIcon,
  twitter: TwitterIcon,
  x_mark: XMarkIcon,
};

export type icons = keyof typeof icons;

export interface IconProps {
  className?: string;
  name: keyof typeof icons;
}

export default function Icon({ className, name = "bolt" }: IconProps) {
  const Icon = icons[name] || BoltIcon;
  return <Icon className={cn("w-4 h-4 text-secondary", className)} />;
}
