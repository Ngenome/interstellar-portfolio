import Image from "next/image";
import React from "react";
import styles from "../styles/Testimonials.module.css";
var testimonials = [
  {
    name: "Elias Kirui",
    contacts: {
      linkedin: "",
      instagram: "",
    },
  },
];
export default function TestimonialPage() {
  return (
    <div>
      <div className={styles.person}>
        <div className={styles.container}>
          <div className={styles.containerInner}>
            <img
              className={styles.circle}
              src="https://media.istockphoto.com/photos/acrylic-canvas-painted-with-blues-and-greens-picture-id174924636?b=1&k=20&m=174924636&s=170667a&w=0&h=nkQhrCBZYVKjY8EF0Xh0Z1gb4ZVT6L00WwUiT3Eylh8="
              //   layout="fill"
            />
            <img
              className={[styles.img, styles.img1].join(" ")}
              src="/m.png"
              //   layout="fill"
            />
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.name}>Alma</div>
        <div className={styles.title}>Product Manager</div>
      </div>
    </div>
  );
}
