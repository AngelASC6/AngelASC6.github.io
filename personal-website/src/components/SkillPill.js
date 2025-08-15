import React from "react";
import { motion } from "framer-motion";

export default function SkillPill({
  skill,
  isLink = false,
  href = "#",
  variants = "",
}) {
  return isLink ? (
    <a
      href={href}
      className="inline-block bg-neutral-800 text-white rounded-lg px-6 py-2 m-2 text-lg hover:bg-neutral-700"
      target="_blank"
      rel="noreferrer"
      variants={variants}
    >
      {skill}
    </a>
  ) : (
    <motion.div
      className="inline-block bg-neutral-800 text-white rounded-lg px-6 py-2 m-2 text-lg"
      variants={variants}
    >
      {skill}
    </motion.div>
  );
}
