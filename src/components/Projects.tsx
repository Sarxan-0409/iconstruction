import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: "Marmo Calacatta",
    description: "Mərmər effekti keramoqranit kolleksiyası.",
    location: "Bakı",
    type: "Kommersiya",
    images: ["/assets/products/recmarmocalacata.jpeg"],
  },
  {
    id: 2,
    name: "Nicewood Beige",
    description: "Taxta effekti keramoqranit kolleksiyası.",
    location: "Bakı",
    type: "Reseptor",
    images: ["/assets/products/nicewoodbeige.jpeg"],
  },
  {
    id: 3,
    name: "Beirut White",
    description: "Açıq rəngli mərmər effekti keramoqranit kolleksiyası.",
    location: "Bakı",
    type: "Kommersiya",
    images: ["/assets/products/beirutwhite.jpeg"],
  },
  {
    id: 4,
    name: "Aspen Noce",
    description: "Taxta effekti keramoqranit kolleksiyası.",
    location: "Bakı",
    type: "Kommersiya",
    images: ["/assets/products/aspennoce.jpeg"],
  },
  {
    id: 5,
    name: "Tropez Antracite",
    description: "Tünd rəngli daş effekti keramoqranit kolleksiyası.",
    location: "Bakı",
    type: "Yaşayış",
    images: ["/assets/products/tropezantracite.jpeg"],
  },
  {
    id: 6,
    name: "Mothica Rose",
    description: "Rose tonlarında keramoqranit kolleksiyası.",
    location: "Bakı",
    type: "Kommersiya",
    images: ["/assets/products/mothicarose.jpeg"],
  },
  {
    id: 7,
    name: "Glam White",
    description: "Açıq mərmər effekti keramoqranit kolleksiyası.",
    location: "Bakı",
    type: "Yaşayış",
    images: ["/assets/products/glamwhite.jpeg"],
  },
  {
    id: 8,
    name: "Cosmopolitan Crystal",
    description: "Kristal görünüşlü mərmər effekti keramoqranit kolleksiyası.",
    location: "Bakı",
    type: "Kommersiya",
    images: ["/assets/products/cosmopolitancrystal.jpeg"],
  },
  {
    id: 9,
    name: "Rec Xtone Grey",
    description: "Boz daş effekti keramoqranit kolleksiyası.",
    location: "Bakı",
    type: "Yaşayış",
    images: ["/assets/products/recxtonegrey.jpeg"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary/60 uppercase tracking-wider mb-4 block">
            Kolleksiyalarımız
          </span>
          <h2 className="heading-md sm:heading-lg mb-4">
            Seçilmiş Kolleksiyalar
          </h2>
          <p className="text-primary/60 max-w-xl mx-auto">
            Məkanınıza uyğun keramoqranit kolleksiyalarından nümunələr
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="break-inside-avoid"
            >
              <div className="card-base card-hover group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={project.images[0]}
                    alt={project.name}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
