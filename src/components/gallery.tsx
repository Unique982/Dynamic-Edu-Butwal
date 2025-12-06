import Image from "next/image";

const galleryItems = [
  { id: 1, image: "/download.jpg" },
  { id: 2, image: "/download1.jpg" },
  { id: 3, image: "/download5.jpg" },
  { id: 4, image: "/download3.jpg" },
  { id: 5, image: "/download4.jpg" },
  { id: 6, image: "/download7.jpg" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="pt-8 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
            Gallery
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Moments of Excellence
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Glimpses of our vibrant learning community in action.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.slice(0, 8).map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-xl shadow hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={item.image}
                alt="Gallery Image"
                width={700}
                height={500}
                className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
