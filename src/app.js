import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env?.port || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "../public")));

const servicesItems = [
  {
    title: "WorldWide Tours",
    description: `Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.`,
    icon: "globe",
  },
  {
    title: "Hotel Reservation",
    description: `Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.`,
    icon: "hotel",
  },
  {
    title: "Travel Guides",
    description: `Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.`,
    icon: "user",
  },
  {
    title: "Event Management",
    description: `Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.`,
    icon: "cog",
  },
  {
    title: "WorldWide Tours",
    description: `Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.`,
    icon: "globe",
  },
  {
    title: "Hotel Reservation",
    description: `Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.`,
    icon: "hotel",
  },
  {
    title: "Travel Guides",
    description: `Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.`,
    icon: "user",
  },
  {
    title: "Event Management",
    description: `Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.`,
    icon: "cog",
  },
];

const carouselItems = [
  {
    phrase: "Explore The World",
    title: "Let's The World Together!",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    imageSrc: "carousel-2.jpg",
    active: true,
  },
  {
    phrase: "Explore The World",
    title: "Find Your Perfect Tour At Travel",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    imageSrc: "carousel-1.jpg",
    active: false,
  },
  {
    phrase: "Explore The World",
    title: "You Like To Go?",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    imageSrc: "carousel-3.jpg",
    active: false,
  },
];

const categoriesListItems = [
  { description: "First Class Flights" },
  { description: "Handpicked Hotels" },
  { description: "5 Star Accommodations" },
  { description: "Latest Model Vehicles" },
  { description: "150 Premium City Tours" },
  { description: "24/7 Service" },
];

const blogItems = [
  {
    title: "Adventures Trip",
    description:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos",
    likesCount: 1.7,
    commentsCount: 1,
    postedBy: "Royal Hamblin",
    imageSrc: "blog-1.jpg",
    date: "28 Jan 2050",
  },
  {
    title: "Adventures Trip",
    description:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos",
    likesCount: 1.7,
    commentsCount: 1,
    postedBy: "Royal Hamblin",
    imageSrc: "blog-2.jpg",
    date: "28 Jan 2050",
  },
  {
    title: "Adventures Trip",
    description:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos",
    likesCount: 1.7,
    commentsCount: 1,
    postedBy: "Royal Hamblin",
    imageSrc: "blog-3.jpg",
    date: "28 Jan 2050",
  },
];

app.get("/", (req, res) => {
  res.render("index", { carouselItems: carouselItems, services: servicesItems, blogs: blogItems, categoryItems: categoriesListItems });
});

app.get("/about", (req, res) => {
  res.render("about", { categoryItems: categoriesListItems });
});

app.get("/blog", (req, res) => {
  res.render("blog", { blogs: blogItems });
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/services", (req, res) => {
  res.render("services", { services: servicesItems });
});

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
