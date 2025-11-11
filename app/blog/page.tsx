import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/Navbar";

export default function Blog() {
  const articles = [
    {
      title: "Receive money in any currency with no fees",
      author: "By Claire Robinson",
      img: "/images/image-currency.jpg",
      note: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
      link: "",
    },
    {
      title: "Treat yourself without worrying about money",
      author: "By Wilson Hutton",
      img: "/images/image-restaurant.jpg",
      note: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
      link: "",
    },
    {
      title: "Take your card wherever you go",
      author: "By Wilson Hutton",
      img: "/images/image-plane.jpg",
      note: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
      link: "",
    },
    {
      title: "Our invite-only Beta accounts are now live!",
      author: "By Claire Robinson",
      img: "/images/image-confetti.jpg",
      note: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
      link: "",
    },
  ];

  return (
    <>
    <NavBar/>
      <h1 className="pt-40 pb-4 ml-25 mr-20 text-5xl text-center text-teal-900">
        Welcome to DigitalBank blog!!
      </h1>
      <p className="text-center ml-25">
        Explore the DigitalBank Blog for key fintech insights, updates, and tips to boost your business. <br /> From startups to established enterprises, find everything you need to enhance payment <br /> processing and embrace fintech innovation.
      </p>
      <section className="py-16 ml-25 mr-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-medium text-primary mb-8">
            Most Popular News
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {articles.map((a) => (
              <article
                key={a.title}
                className="bg-white shadow rounded overflow-hidden"
              >
                <div className="relative h-40">
                  <Image
                    src={a.img}
                    alt={a.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-400 mb-2">{a.author}</p>
                  <Link href={a.link}>
                    <h3 className="font-semibold mb-2 text-sm text-gray-800 hover:text-teal-700 transition-colors duration-200">
                      {a.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-gray-500">{a.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
