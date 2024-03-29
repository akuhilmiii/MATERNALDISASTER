import Navbar from './Navbar'
import Footer from './Footer'

const products = [
    {
      id: 1,
      name: 'TERNALA',
      href: '#',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1-rw2hFlu14O3_Xe9XyAFGvCpAU1EtJWb',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 199.00',
      color: 'Black',
    },
    {
      id: 1,
      name: 'PRUFAL',
      href: '#',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1aMbwQ64uPITFkBIASamYDtElX4JCV7gf',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 299.000',
      color: 'Black',
    },
    {
      id: 1,
      name: 'STICKOZ',
      href: '#',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1VpOW0BewaL5Mv-KlaGmyoMxSlydrrheX',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 169.000',
      color: 'Black',
    },
    {
      id: 1,
      name: 'STARK',
      href: '#',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1QL3m_ttru1o4osQj7_tYJjKSva2vK63a',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 299.00',
      color: 'Black',
    },
    {
      id: 1,
      name: 'VINIES',
      href: '#',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1Zg7v6xfgdwS8dU67m9DxUwuvfS0Ont3a',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 169.000',
      color: 'Black',
    },
    {
      id: 1,
      name: 'STAKEN',
      href: '#',
      imageSrc: 'https://drive.google.com/uc?export=view&id=18_3O0uLEJTu7WHwGLZsdOL3cz_NkyNvN',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 179.000',
      color: 'Black',
    },
    {
      id: 1,
      name: 'THRAVEN',
      href: '#',
      imageSrc: 'https://drive.google.com/uc?export=view&id=1wA2KbE0l1L486ORqZRnL9F4xP4u8zPBh',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 179.000',
      color: 'Black',
    },
    {
      id: 1,
      name: 'SAINTE',
      href: '#',
      imageSrc: 'https://drive.google.com/uc?export=view&id=16fhMOkCoznLpVJwMPe5kK-6JTdio1-cT',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 179.000',
      color: 'Black',
    },
    // More products...
  ]
  
  export default function Example() {
    return (
        <>
        <Navbar/>
      <div className="bg-black">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-15 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-white">Catalog</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-sm text-white">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
      </>
    )
  }
  