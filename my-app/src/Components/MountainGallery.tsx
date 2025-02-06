
import React, { useEffect, useState } from "react";
import axios from "axios";
import Styles from "./MountainGallery.module.scss";




interface Image {
 id: string;
 urls: { small: string };
alt_description: string;
}
const MountainGallery: React.FC = () => {
   const [images, setImages] = useState<Image[]>([]);
const [error , seterror] = useState<string | null>(null)
const [searchTerm, setSearchTerm] = useState<string>("mountain");
const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearchTerm(event.target.value);
};
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const apiKey = "qLi2Jwjsg6YdvHr8Bly-NwMwEeFWgGgpQ_s8XzsGrGo";
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${apiKey}&per_page=12`
        );
        setImages(response.data.results);
      } catch (error) {
        seterror("Error fetching data");
      }
    };

    fetchImages();
  }, [searchTerm]);

  return (
    <div className={Styles.galleryContainer}>
      <h1>Mountain Gallery</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search for images..."
      />
      <div className={Styles.grid}>
        {images.map((image) => (
          <img key={image.id} src={image.urls.small} alt={image.alt_description} />

        ))}
      {error && <p className={Styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export default MountainGallery;