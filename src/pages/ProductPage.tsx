import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ZoomIn, Share2, Heart, MessageCircle, Phone, ArrowLeft } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  images: string[];
  collection: string;
  color?: string;
  surface?: string;
  category?: string;
  dimensions?: string;
  thickness?: string;
}

const products: Product[] = [
  { id: '1', name: 'Amalfi Antracite', collection: 'Amalfi', color: 'Antracite', surface: 'Parlak', category: 'Daş Effekti', images: ['/assets/products/amalfiantracite.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '2', name: 'Amalfi Grey', collection: 'Amalfi', color: 'Grey', surface: 'Parlak', category: 'Daş Effekti', images: ['/assets/products/amalfigrey.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '3', name: 'Amalfi White', collection: 'Amalfi', color: 'White', surface: 'Parlak', category: 'Daş Effekti', images: ['/assets/products/amalfiwhite.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '4', name: 'Antalya Antracite', collection: 'Antalya', color: 'Antracite', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/antalyaantracite.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '5', name: 'Antalya Light Grey', collection: 'Antalya', color: 'Light Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/antalyalightgrey.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '6', name: 'Aspen Noce', collection: 'Aspen', color: 'Noce', surface: 'Matte', category: 'Taxta Effekti', images: ['/assets/products/aspennoce.jpeg'], dimensions: '30×120cm', thickness: '10mm' },
  { id: '7', name: 'Beirut Beige', collection: 'Beirut', color: 'Beige', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/assets/products/beirutbeige.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '8', name: 'Beirut Beige Decor', collection: 'Beirut', color: 'Beige', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/assets/products/beirutbeigedecor.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '9', name: 'Beirut Grey', collection: 'Beirut', color: 'Grey', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/assets/products/beirutgrey.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '10', name: 'Beirut Grey Decor', collection: 'Beirut', color: 'Grey', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/assets/products/beirutgreydecor.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '11', name: 'Beirut White', collection: 'Beirut', color: 'White', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/assets/products/beirutwhite.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '12', name: 'Bonita Gold', collection: 'Bonita', color: 'Gold', surface: 'Parlak', category: 'Taxta Effekti', images: ['/assets/products/bonitagold.jpeg'], dimensions: '30×120cm', thickness: '10mm' },
  { id: '13', name: 'Carestone Dark Grey', collection: 'Carestone', color: 'Dark Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/carestonedarkgrey.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '14', name: 'Cluster Antracite', collection: 'Cluster', color: 'Antracite', surface: 'Parlak', category: 'Daş Effekti', images: ['/assets/products/clusterantracite.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '15', name: 'Cluster Grey', collection: 'Cluster', color: 'Grey', surface: 'Parlak', category: 'Daş Effekti', images: ['/assets/products/clustergrey.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '16', name: 'Cluster Ivory', collection: 'Cluster', color: 'Ivory', surface: 'Parlak', category: 'Daş Effekti', images: ['/assets/products/clusterivory.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '17', name: 'Cosmopolitan Crystal', collection: 'Cosmopolitan', color: 'Crystal', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/assets/products/cosmopolitancrystal.jpeg'], dimensions: '120×120cm', thickness: '10mm' },
  { id: '18', name: 'Cosmopolitan Steel', collection: 'Cosmopolitan', color: 'Steel', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/assets/products/cosmopolitansteel.jpeg'], dimensions: '120×120cm', thickness: '10mm' },
  { id: '19', name: 'Delta Antracite', collection: 'Delta', color: 'Antracite', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/deltaantracite.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '20', name: 'Delta Beige', collection: 'Delta', color: 'Beige', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/deltabeige.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '21', name: 'Delta Smoke', collection: 'Delta', color: 'Smoke', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/deltasmoke.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '22', name: 'Ebrue Blue', collection: 'Ebrue', color: 'Blue', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/ebrueblue.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '23', name: 'Fano Black', collection: 'Fano', color: 'Black', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/fanoblack.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '24', name: 'Gisborne Beige', collection: 'Gisborne', color: 'Beige', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/gisbornebeige.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '25', name: 'Gisborne Dark Grey', collection: 'Gisborne', color: 'Dark Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/gisbornedarkgrey.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '26', name: 'Glam White', collection: 'Glam', color: 'White', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/assets/products/glamwhite.jpeg'], dimensions: '120×120cm', thickness: '10mm' },
  { id: '27', name: 'Glossy White', collection: 'Glossy', color: 'White', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/assets/products/glossywhite.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '28', name: 'Havuz Blue', collection: 'Havuz', color: 'Blue', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/havuzblue.jpeg'], dimensions: '30×120cm', thickness: '10mm' },
  { id: '29', name: 'Kaizen White', collection: 'Kaizen', color: 'White', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/kaizenwhite.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '30', name: 'Lauren Light Grey', collection: 'Lauren', color: 'Light Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/laurenlightgrey.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '31', name: 'Levante Grey', collection: 'Levante', color: 'Grey', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/assets/products/levantegrey.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '32', name: 'Luton Light Grey', collection: 'Luton', color: 'Light Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/lutonlightgrey.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '33', name: 'Magnus Grey', collection: 'Magnus', color: 'Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/magnusgrey.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '34', name: 'Magnus White', collection: 'Magnus', color: 'White', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/magnuswhite.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '35', name: 'Matis Blue', collection: 'Matis', color: 'Blue', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/assets/products/matisblue.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '36', name: 'Mothica Rose', collection: 'Mothica', color: 'Rose', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/mothicarose.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '37', name: 'Nicewood Beige', collection: 'Nicewood', color: 'Beige', surface: 'Matte', category: 'Taxta Effekti', images: ['/assets/products/nicewoodbeige.jpeg'], dimensions: '30×120cm', thickness: '10mm' },
  { id: '38', name: 'Nicewood Cream', collection: 'Nicewood', color: 'Cream', surface: 'Matte', category: 'Taxta Effekti', images: ['/assets/products/nicewoodcream.jpeg'], dimensions: '30×120cm', thickness: '10mm' },
  { id: '39', name: 'Nicewood Grey', collection: 'Nicewood', color: 'Grey', surface: 'Matte', category: 'Taxta Effekti', images: ['/assets/products/nicewoodgrey.jpeg'], dimensions: '30×120cm', thickness: '10mm' },
  { id: '40', name: 'Pinapulpis Beige', collection: 'Pinapulpis', color: 'Beige', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/pinapulpisbeige.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '41', name: 'Pinapulpis Dark Grey', collection: 'Pinapulpis', color: 'Dark Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/pinapulpisdarkgrey.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '42', name: 'Pinapulpis Light Grey', collection: 'Pinapulpis', color: 'Light Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/pinapulpislightgrey.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '43', name: 'Rec Marmo Calacata', collection: 'Rec Marmo', color: 'Calacata', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/assets/products/recmarmocalacata.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '44', name: 'Rec Shine Grey', collection: 'Rec Shine', color: 'Grey', surface: 'Parlak', category: 'Mərmər Effekti', images: ['/assets/products/recshinegrey.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '45', name: 'Rec Shine Grey Relief', collection: 'Rec Shine', color: 'Grey', surface: 'Relief', category: 'Mərmər Effekti', images: ['/assets/products/recshinegreyrelief.jpeg'], dimensions: '60×60cm', thickness: '10mm' },
  { id: '46', name: 'Rec Unica White', collection: 'Rec Unica', color: 'White', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/recunicawhite.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '47', name: 'Rec Xtone Antracite', collection: 'Rec Xtone', color: 'Antracite', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/recxtoneantracite.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '48', name: 'Rec Xtone Grey', collection: 'Rec Xtone', color: 'Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/recxtonegrey.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '49', name: 'Rio Grande Grey', collection: 'Rio Grande', color: 'Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/riograndegrey.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '50', name: 'Social Antracite', collection: 'Social', color: 'Antracite', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/socialantracite.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '51', name: 'Social Beige', collection: 'Social', color: 'Beige', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/socialbeige.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '52', name: 'Social Grey', collection: 'Social', color: 'Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/socialgrey.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '53', name: 'Statue Light Grey', collection: 'Statue', color: 'Light Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/statuelightgrey.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '54', name: 'Taxim Beige', collection: 'Taxim', color: 'Beige', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/taximbeige.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '55', name: 'Taxim Dark Grey', collection: 'Taxim', color: 'Dark Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/taximdarkgrey.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '56', name: 'Taxim Light Grey', collection: 'Taxim', color: 'Light Grey', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/taximlightgrey.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
  { id: '57', name: 'Tropez Antracite', collection: 'Tropez', color: 'Antracite', surface: 'Matte', category: 'Daş Effekti', images: ['/assets/products/tropezantracite.jpeg'], dimensions: '60×120cm', thickness: '10mm' },
];

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p: Product) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-md mb-4">Məhsul Tapılmadı</h1>
          <Link to="/catalog" className="btn-primary">
            Kataloqa Qayıt
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p: Product) => p.id !== id && p.collection === product.collection).slice(0, 4);

  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-16">
      <div className="container-section">
        <nav className="flex items-center gap-2 text-sm text-primary/60 mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Ana Səhifə</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/catalog" className="hover:text-primary transition-colors">Katalog</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-primary">{product.name}</span>
        </nav>

        <Link
          to="/catalog"
          className="inline-flex items-center gap-2 text-sm text-primary/60 hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Kataloqa Qayıt
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative">
              <div
                className={`aspect-square rounded-3xl overflow-hidden bg-secondary/30 cursor-zoom-in ${
                  isZoomed ? 'fixed inset-4 z-50 bg-white rounded-3xl' : ''
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    isZoomed ? 'scale-100' : 'hover:scale-105'
                  }`}
                />
                {isZoomed && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsZoomed(false);
                    }}
                    className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-soft"
                  >
                    <span className="text-lg">×</span>
                  </button>
                )}
              </div>

              {product.images.length > 1 && (
                <div className="flex gap-3 mt-4">
                  {product.images.map((img: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        selectedImage === idx ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <span className="text-sm text-primary/60 mb-2 block">{product.collection}</span>
                <h1 className="heading-md">{product.name}</h1>
              </div>
              <div className="flex gap-2">
                <button className="p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <p className="text-lg text-primary/70 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-secondary/30 rounded-2xl">
                <span className="text-sm text-primary/60 block mb-1">Kateqoriya</span>
                <span className="font-medium">{product.category}</span>
              </div>
              <div className="p-4 bg-secondary/30 rounded-2xl">
                <span className="text-sm text-primary/60 block mb-1">Rəng</span>
                <span className="font-medium">{product.color}</span>
              </div>
              <div className="p-4 bg-secondary/30 rounded-2xl">
                <span className="text-sm text-primary/60 block mb-1">Ölçülər</span>
                <span className="font-medium">{product.dimensions}</span>
              </div>
              <div className="p-4 bg-secondary/30 rounded-2xl">
                <span className="text-sm text-primary/60 block mb-1">Səth</span>
                <span className="font-medium">{product.surface}</span>
              </div>
              <div className="p-4 bg-secondary/30 rounded-2xl">
                <span className="text-sm text-primary/60 block mb-1">Qalınlıq</span>
                <span className="font-medium">{product.thickness}</span>
              </div>
            </div>

            {product.features && (
              <div className="mb-8">
                <h3 className="font-semibold mb-3">Xüsusiyyətlər</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-primary/70">
                      <div className="w-1.5 h-1.5 bg-accent-sand rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.applications && (
              <div className="mb-8">
                <h3 className="font-semibold mb-3">Tətbiq Sahələri</h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-secondary rounded-xl text-sm"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://wa.me/994502132130"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp ilə Əlaqə</span>
              </a>
              <a
                href="tel:+994502132130"
                className="btn-secondary flex-1 gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Zəng Et</span>
              </a>
            </div>
          </motion.div>
        </div>

        {relatedProducts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-24"
          >
            <h2 className="heading-sm mb-8">Oxşar Məhsullar</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="card-base card-hover group"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover img-zoom"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium group-hover:text-primary/80 transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-sm text-primary/60">{p.collection}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
