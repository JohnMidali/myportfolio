"use client"
import React from "react";


const DarkModeStyles = () => {
  return (
    <>
      <style jsx>{`
        [data-darkreader-inline-bgcolor] {
          background-color: var(--darkreader-inline-bgcolor) !important;
        }
        [data-darkreader-inline-bgimage] {
          background-image: var(--darkreader-inline-bgimage) !important;
        }
        [data-darkreader-inline-border] {
          border-color: var(--darkreader-inline-border) !important;
        }
        [data-darkreader-inline-border-bottom] {
          border-bottom-color: var(
            --darkreader-inline-border-bottom
          ) !important;
        }
        [data-darkreader-inline-border-left] {
          border-left-color: var(--darkreader-inline-border-left) !important;
        }
        [data-darkreader-inline-border-right] {
          border-right-color: var(--darkreader-inline-border-right) !important;
        }
        [data-darkreader-inline-border-top] {
          border-top-color: var(--darkreader-inline-border-top) !important;
        }
        [data-darkreader-inline-boxshadow] {
          box-shadow: var(--darkreader-inline-boxshadow) !important;
        }
        [data-darkreader-inline-color] {
          color: var(--darkreader-inline-color) !important;
        }
        [data-darkreader-inline-fill] {
          fill: var(--darkreader-inline-fill) !important;
        }
        [data-darkreader-inline-stroke] {
          stroke: var(--darkreader-inline-stroke) !important;
        }
        [data-darkreader-inline-outline] {
          outline-color: var(--darkreader-inline-outline) !important;
        }
        [data-darkreader-inline-stopcolor] {
          stop-color: var(--darkreader-inline-stopcolor) !important;
        }
      `}</style>
      <style jsx global>{`
        :root {
          --darkreader-neutral-background: #212222;
          --darkreader-neutral-text: #eae3d9;
          --darkreader-selection-background: #165aaa;
          --darkreader-selection-text: #fbf5ec;
        }
      `}</style>
    </>
  );
};

export default DarkModeStyles;
