import Img1 from "../../assets/ImageDataHouse/house1.png";
import Img2 from "../../assets/ImageDataHouse/house2.png";
import Img3 from "../../assets/ImageDataHouse/house3.png";
import Img4 from "../../assets/ImageDataHouse/house4.png";
import Img5 from "../../assets/ImageDataHouse/house5.png";
import Img6 from "../../assets/ImageDataHouse/house6.png";
import Img7 from "../../assets/ImageDataHouse/house7.png";
import Img8 from "../../assets/ImageDataHouse/house8.png";
import Img9 from "../../assets/ImageDataHouse/house9.png";
import Img10 from "../../assets/ImageDataHouse/house10.png";
import Img11 from "../../assets/ImageDataHouse/a1.png";
import Img12 from "../../assets/ImageDataHouse/a2.png";
import Img13 from "../../assets/ImageDataHouse/a3.png";
import Img14 from "../../assets/ImageDataHouse/a4.png";
import Img15 from "../../assets/ImageDataHouse/a5.png";
import Img16 from "../../assets/ImageDataHouse/a6.png";

export const HousesData = [
  {
    id: 1,
    img: Img1,
    title: "House 1",
    rating: 5.0,
    color: "Jakarta",
    description: "Deskripsi detail untuk House 1",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "House 2",
    rating: 4,
    color: "Bandung",
    description: "Deskripsi detail untuk House 2",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "House 3",
    rating: 4.7,
    color: "Surabaya",
    description: "Deskripsi detail untuk House 3",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "House 4",
    rating: 3,
    color: "Kupang",
    description: "Deskripsi detail untuk House 4",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "House 5",
    rating: 4.5,
    color: "Bali",
    description: "Deskripsi detail untuk House 5",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "House 6",
    rating: 4.5,
    color: "Yogyakarta",
    description: "Deskripsi detail untuk House 6",
    aosDelay: "800",
  },
  {
    id: 7,
    img: Img7,
    title: "House 7",
    rating: 4.5,
    color: "Lampung",
    description: "Deskripsi detail untuk House 7",
    aosDelay: "800",
  },
  {
    id: 8,
    img: Img8,
    title: "House 8",
    rating: 4.5,
    color: "Medan",
    description: "Deskripsi detail untuk House 8",
    aosDelay: "800",
  },
  {
    id: 9,
    img: Img9,
    title: "House 9",
    rating: 4.5,
    color: "Lampung",
    description: "Deskripsi detail untuk House 9",
    aosDelay: "800",
  },
  {
    id: 10,
    img: Img10,
    title: "House 10",
    rating: 4.5,
    color: "Aceh",
    description: "Deskripsi detail untuk House 10",
    aosDelay: "800",
  },
];

export const RoomsData = [
  {
    id: 11,
    img: Img11,
    title: "On Room",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 12,
    img: Img12,
    title: "On Room",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 13,
    img: Img13,
    title: "On Room",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 14,
    img: Img14,
    title: "On Room",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 15,
    img: Img15,
    title: "On Room",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 16,
    img: Img16,
    title: "On Room",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const ProductsData = [...HousesData, ...RoomsData];
export default ProductsData;
