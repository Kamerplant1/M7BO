import { useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery";

import bram2 from "./assets/bram2.png";
import angybird from "./assets/angybird.png";
import aislop from "./assets/aislop.png";

const images: GalleryItem[] = [
  {
    original: bram2,
    thumbnail: bram2,
  },
  {
    original: angybird,
    thumbnail: angybird,
  },
  {
    original: aislop,
    thumbnail: aislop,
  },
];

export default function MyGallery() {
  const galleryRef = useRef<ImageGalleryRef>(null);

  return (
    <ImageGallery
      ref={galleryRef}
      items={images}
      onSlide={(index) => console.log("Slid to", index)}
    />
  );
}