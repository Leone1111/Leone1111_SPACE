import type { CollectionEntry } from "astro:content";

export type Note = CollectionEntry<"notes">;
export type CategoryKey = Note["data"]["category"];

export const categories: Array<{ key: CategoryKey; label: string; href: string; description: string }> = [
  {
    key: "ideas",
    label: "想法",
    href: "/ideas",
    description: "记录尚未成形的观察、问题和长期思考。",
  },
  {
    key: "books",
    label: "读书",
    href: "/books",
    description: "整理读书笔记、摘录、评论和延伸问题。",
  },
  {
    key: "papers",
    label: "论文",
    href: "/papers",
    description: "沉淀论文阅读、方法复现和文献线索。",
  },
  {
    key: "projects",
    label: "项目",
    href: "/projects",
    description: "追踪个人项目、工具原型和阶段性成果。",
  },
  {
    key: "scripts",
    label: "脚本",
    href: "/scripts",
    description: "保存可复用的代码脚本、命令片段和自动化流程。",
  },
  {
    key: "research",
    label: "科研",
    href: "/research",
    description: "归档科研项目、实验进展和阶段性问题。",
  },
];

export const categoryLabels = Object.fromEntries(
  categories.map((category) => [category.key, category.label]),
) as Record<CategoryKey, string>;

export function sortByDate(notes: Note[]) {
  return [...notes].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function getNoteUrl(note: Note) {
  return `/notes/${note.id}`;
}

export function getTagUrl(tag: string) {
  return `/tags/${encodeURIComponent(tag.toLowerCase())}`;
}

export function normalizeTag(tag: string) {
  return tag.trim().toLowerCase();
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}
