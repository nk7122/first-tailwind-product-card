import productDesktop from "./assets/images/image-product-desktop.jpg";
import productMobile from "./assets/images/image-product-mobile.jpg";
import cart from "./assets/images/icon-cart.svg";
function App() {
  return (
    <main className="min-w-screen text-regular text-dark-greyish-blue flex h-screen items-center justify-center bg-cream font-montserrat">
      <div className="grid h-fit w-fit max-w-sm overflow-hidden rounded-xl bg-white sm:max-w-xl sm:auto-rows-max sm:grid-cols-2">
        <div>
          <picture>
            <source media="(max-width: 640px)" srcSet={productMobile} />
            <img
              src={productDesktop}
              alt="Chanel parfume on a table"
              className="h-full w-full"
            />
          </picture>
        </div>
        <div className="p-7">
          <p className="mb-5 uppercase tracking-[0.5mm]">Perfume</p>
          <h1 className="text-very-dark-blue font-fraunces text-4xl font-bold">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="mb-5 mt-5">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex gap-5">
            <span className="font-fraunces text-3xl font-bold text-dark-cyan">
              $149.99
            </span>
            <span className="flex items-center line-through">$169.99</span>
          </div>
          <button className="mt-3 flex w-full justify-center gap-3 rounded-lg bg-dark-cyan p-4 text-[white]">
            <img src={cart} alt="Cart icon" className="mt-1" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;

/*
Problems:

1. font tidak berubah.
2. kadang style warna tidak mau terpilih.
3. faveicon tidak keluar.
4. belum install tailwindcss prettier.

*/

/* 

gunakan -[] atau yang disebut arbitrary value, untuk input ukuran atau value yang kita mau tapi tidak ada di pilihan taildwind 

<source /> digunakan untuk menampilkan sesuatu dengan sebuah kondisi. Dalam project ini, foto yang untuk mobile view.

"sm:" digunakan untuk menset sebuah kondisi. dalam project ini, perubahan bentuk di beda ukuran screen.
*/

/*

  Use the name of the image in vs code instead of the name of the image from the original file out of va code.

  WRONG EXAMPLE:
      <avatar>
        img src={Avatar}
        alt="/Users/naufalfathikhairi/Downloads/product-preview-card-component-main/images/image-product-desktop.jpg"
      </avatar>

*/

/*

Percobaan Tailwind Pertama kali. Nanti bandingkan efisiensi dan efektifitas dengan yang ada di atas.

       <div className=" border-white rounded-lg gap-y-1 px-96 p-96">
        <div className="display: flex pr-40 px-10">
          <img className="h-96" src={Avatar} alt="" />
          <div className="border-white bg-white display: inline px-11">
            <p>PARFUME</p>
            <h1 className="text-3xl font-bold">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="display flex gap-5">
              <h2 className="text-3xl font-bold text-green-700">$149.99</h2>
              <p className="line-through">$169.99</p>
            </div>
            <nav>
              <div className="bg-green-950 rounded-sm text-yellow-50 text-center px-11">
                <button>Add to Cart</button>
              </div>
            </nav>
          </div>
        </div>
      </div>

*/
