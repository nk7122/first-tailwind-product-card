import productDesktop from "./assets/images/image-product-desktop.jpg";
import productMobile from "./assets/images/image-product-mobile.jpg";
import cart from "./assets/images/icon-cart.svg";
function App() {
  return (
    <main
      className="bg-cream h-screen min-w-screen flex justify-center items-center text-regular 
    text-dark-greyish-blue font-montserrat"
    >
      <div
        className="grid sm:grid-cols-2 bg-[white] sm:auto-rows-max rounded-xl overflow-hidden
       w-fit h-fit sm:max-w-xl max-w-sm "
      >
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
          <p className="uppercase tracking-[0.5mm] mb-5">Perfume</p>
          <h1 className="font-fraunces text-4xl font-bold text-very-dark-blue">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="mb-5 mt-5">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex gap-5">
            <span className="font-fraunces text-dark-cyan text-3xl font-bold">
              $149.99
            </span>
            <span className="line-through flex items-center">$169.99</span>
          </div>
          <button className=" bg-dark-cyan flex gap-3 text-[white] w-full p-4 rounded-lg justify-center mt-3">
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
