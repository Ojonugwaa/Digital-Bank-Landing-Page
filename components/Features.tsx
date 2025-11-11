import Image from "next/image";

export default function Features() {
  const items = [
    {
      title: "Online Banking",
      text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      icon: "/images/icon-online.svg",
    },
    {
      title: "Simple Budgeting",
      text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
      icon: "/images/icon-budgeting.svg",
    },
    {
      title: "Fast Onboarding",
      text: "We do not do branches. Open your account in minutes online and start taking control of your finances right away.",
      icon: "/images/icon-onboarding.svg",
    },
    {
      title: "Open API",
      text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
      icon: "/images/icon-api.svg",
    },
  ];

  return (
    <section className="section-bg py-16 md:mx-20 mx-5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-3xl font-medium lg:text-left text-center text-primary mb-4">
          Why Choose Digitalbank?
        </h2>
        <p className="text-gray-500 max-w-xl mb-10 lg:text-left text-center">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.{" "}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-8">
          {items.map((it) => (
            <div key={it.title} className="text-center px-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-white shadow flex items-center justify-center mb-4">
                <Image src={it.icon} alt={it.title} width={45} height={45} />
              </div>
              <h3 className="font-semibold mb-2">{it.title}</h3>
              <p className="text-sm text-gray-500 text-left">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
