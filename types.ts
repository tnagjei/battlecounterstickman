/**
 * types.ts
 * 全局 TypeScript 类型定义
 */
import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface QuickNavLink {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  href: string;
}

export interface UpdateItem {
  date: string;
  title: string;
  content: string;
  icon: string; // Emoji or Lucide icon name
}

export interface VideoItem {
  id: string;           // YouTube video ID
  title: string;
  channel: string;
  language: string;
  publishDate: string;
  description: string;
  thumbnailUrl?: string;
}
