import { Box } from "@radix-ui/themes";
import React from "react";
import styles from "./styles.module.css";

interface ScrollAreaProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollArea = ({ children, className }: ScrollAreaProps) => {
  return (
    <Box className={`${styles.scrollArea} ${className}`}>
      <Box className={styles.scrollContentArea}>{children}</Box>
    </Box>
  );
};

export default ScrollArea;
