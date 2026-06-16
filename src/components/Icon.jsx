import React from "react";
import { icons } from "lucide-react";

export const Icon = ({ name, color, size }) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    return <icons.Code size={size} className={color} />;
  }

  return <LucideIcon size={size} className={color} />;
};