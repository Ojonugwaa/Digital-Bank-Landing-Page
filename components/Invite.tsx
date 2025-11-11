import Image from "next/image";

export default function Invite() {
  return (
    <section className=" overflow-hidden md:ml-20 relative">
      <div className=" mx-auto px-6 grid  lg:grid-cols-2 gap-10 items-center space-y-20">
        <div className="relative order-1 lg:order-2 h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] ">
          <div className="absolute inset-0 -z-10 -top-24  md:-top-40 lg:-top-52 scale-x-[-1] right-[-150px] justify-center">
            <Image
              src="/images/bg-intro-desktop.svg"
              alt="Background"
              fill
              
              className="lg:translate-y-8 object-cover lg:object-right object-center transition-all duration-200"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center -mt-24 md:mt-0">
            <Image
              src="/images/image-mockups.png"
              alt="Phone"
              width={700}
              height={700}
              className="object-contain lg:translate-x-30"
            />
          </div>
        </div>

        <div className=" order-2 lg:order-1 space-y-5 text-center lg:text-left mr-5">
          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight text-primary">
            Next generation <br /> digital banking
          </h1>
          <p className="text-gray-500 max-w-xs mx-auto lg:mx-0">
            Take your financial life online. Your Digitalbank account will be a
            one-stop-shop for spending,saving, budgeting, investing and much
            more.
          </p>
          <div>
            <button className="inline-flex items-center gap-3 bg-linear-to-r from-teal-500 to-green-600 text-white px-5 py-2 rounded-3xl hover:from-teal-400 hover:to-teal-500 transition">
              Request Invite
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
