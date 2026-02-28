import { newsletterData } from "../../../public/newsletter";

export default function StayConnect() {
  return (
    <section className="py-20 bg-neutral text-base-content">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Text */}
        <h2 className="text-3xl md:text-4xl font-bold">
          {newsletterData.title}
        </h2>

        <p className="mt-3 text-lg text-base-content/50">{newsletterData.subtitle}</p>

        <p className="mt-4 text-base-content/70">{newsletterData.description}</p>

        {/* Form */}
        <form className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder={newsletterData.placeholder}
            className="w-full sm:w-80 px-5 py-3 rounded-xl bg-base-200 text-base-content outline-none"
          />
          <button
            type="submit"
            className="px-8 py-3 rounded-xl bg-base-200 text-primary font-semibold hover:bg-gray-200 transition"
          >
            {newsletterData.buttonText}
          </button>
        </form>

        {/* Note */}
        <p className="mt-4 text-sm text-gray-400">{newsletterData.note}</p>
      </div>
    </section>
  );
}
