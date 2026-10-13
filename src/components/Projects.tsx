import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    name: 'Lüks Showroom',
    description: 'Mərmər effekti keramoqranit ilə sərgi məkanı.',
    location: 'Bakı',
    type: 'Kommersiya',
    images: ['https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920'],
  },
  {
    id: 2,
    name: 'Yemək Salonu',
    description: 'Daş effekti keramoqranit ilə müasir reseptor.',
    location: 'Bakı',
    type: 'Reseptor',
    images: ['https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1920'],
  },
  {
    id: 3,
    name: 'Pablic Lavabo',
    description: 'Hər tərəfli dizayn ilə vanna otağı.',
    location: 'Bakı',
    type: 'Kommersiya',
    images: ['https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=1920'],
  },
  {
    id: 4,
    name: 'Dublin Layihəsi',
    description: 'Müasir interior dizayni.',
    location: 'Bakı',
    type: 'Kommersiya',
    images: ['https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=1920'],
  },
  {
    id: 5,
    name: 'Irona Koleksiyası',
    description: 'Keramoqranit ilə həyətə çevrilmiş fəza.',
    location: 'Bakı',
    type: 'Yaşayış',
    images: ['https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1920'],
  },
  {
    id: 6,
    name: 'Mothica Dizayni',
    description: 'Rənglərin harmoniyası ilə yaradılmış məkan.',
    location: 'Bakı',
    type: 'Kommersiya',
    images: ['https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1920'],
  },
  {
    id: 7,
    name: 'Oscar Seriyası',
    description: 'Premium keramoqranit ilə şəxsi layihə.',
    location: 'Bakı',
    type: 'Yaşayış',
    images: ['https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1920'],
  },
  {
    id: 8,
    name: 'Armani Koleksiyası',
    description: 'Zərif və müasir interior dizayni.',
    location: 'Bakı',
    type: 'Kommersiya',
    images: ['https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1920'],
  },
  {
    id: 9,
    name: 'Venato Layihəsi',
    description: 'Natural təbii görünüş ilə məkan.',
    location: 'Bakı',
    type: 'Yaşayış',
    images: ['https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1920'],
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
            Portfoliomuz
          </span>
          <h2 className="heading-md sm:heading-lg mb-4">
            Hazırlanmış Layihələr
          </h2>
          <p className="text-primary/60 max-w-xl mx-auto">
            Müştərilərimiz üçün həyata keçirdiyimiz layihələr
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
                    className="w-full h-52 object-cover object-center transition-transform duration-700 group-hover:scale-[1.02] sm:h-60"
                    decoding="async"
                    loading="lazy"
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
