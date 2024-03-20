import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <section
        className="bg-white min-h-screen px-[2em] bg-hero-mobile bg-[80%_-30vh] bg-cover bg-no-repeat lg:px-[5em] lg:bg-hero-desktop lg:bg-[40vw_-28vh]">
        <div
          className="container text-black flex flex-col-reverse gap-10 max-w-screen overflow-x-hidden mx-auto pt-[4em] lg:min-h-screen lg:items-center lg:flex-row">
          <div className="flex flex-col gap-3 content-center items-start lg:h-100 lg:w-1/2 xl:w-2/5">
            <h1 className="text-4xl md:text-5xl text-center mx-auto lg:text-left lg:mx-0 load-hidden animate-fade-in">
              Next generation AI Powered healthcare and diagnosis
            </h1>
            <p className="text-center lg:text-left lg:w-4/5 load-hidden animate-fade-in animate-delay-200">
              Answer questions for instant personalized reports, explore alternative medicines, and get disease
              predictions with diet recommendations.
              <br />Your wellness, simplified.
            </p>
            <div className="flex flex-row gap-x-2">
              <Button asChild><Link href={'/chat'}>Ask AI-med</Link></Button>
              <Button asChild variant="outline"><Link href={'/scan'}>MedScan</Link></Button>
            </div>
          </div>

          <div className={`relative overflow-hidden h-[50vh] md:h-[60vh] lg:static lg:h-auto`}
          >
            <div
              className="absolute grid grid-cols-3 grid-rows-4 gap-5 bottom-0 lg:w-1/2 lg:right-0 lg:bottom-[unset] lg:top-2/4 lg:translate-y-[-40%] lg:translate-x-[7vw] lg:scale-60 xl:max-w-3/5 xl:grid-cols-[repeat(auto-fit,_minmax(150px,1fr))]">
              <img className="w-[300px] object-contain row-start-2 row-span-2 load-hidden animate-slide-up"
                src="/img/phone-mockup-1.png" alt="" />
              <img className="w-[300px] object-contain col-start-2 row-span-2 load-hidden animate-slide-up animate-delay-200"
                src="/img/phone-mockup-2.png" alt="" />
              <img className="w-[300px] object-contain row-start-3 row-span-2 load-hidden animate-slide-up animate-delay-300"
                src="/img/phone-mockup-3.png" alt="" />
              <img className="w-[300px] object-contain row-start-2 row-span-2 load-hidden animate-slide-up animate-delay-400"
                src="/img/phone-mockup-4.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-200 text-black py-[3em] px-[2em] md:py-[4em] lg:p-[5em]">
        <div className="container max-w-screen-xl mx-auto">
          <div className="max-w-screen-sm load-hidden animate-fade-in animate-delay-200">
            <h2 className="w-80 mx-auto mb-4 text-3xl text-center md:w-full md:text-4xl lg:text-left lg:ml-0">
              Why choose Us?
            </h2>
            <p className="text-center lg:text-left">
              Experience seamless integration of cutting-edge AI technologies, providing unparalleled personalized health
              insights and
              medication recommendations tailored to your individual needs.
            </p>
          </div>

          <div className="flex flex-wrap mt-10 md:mt-20">
            <div
              className="flex flex-col items-center gap-5 p-5 w-full md:p-3 md:w-1/2 lg:w-1/4 lg:items-start load-hidden animate-slide-up">
              <img className="aspect-square object-contain w-16" src="/img/icon-online.svg" alt="Online Banking" />
              <h3 className="text-[1.25em] md:text-[1.75em] text-center lg:text-left">
                Health <br />Assessment
              </h3>
              <p className="text-center lg:text-left">
                Users can answer a series of questions related to their health, lifestyle, and medical history. Based on
                their responses,
                a health report is generated, providing insights into their current health status.
              </p>
            </div>

            <div
              className="flex flex-col items-center gap-5 p-5 w-full md:p-3 md:w-1/2 lg:w-1/4 lg:items-start load-hidden animate-slide-up animate-delay-200">
              <img className="aspect-square object-contain w-16" src="/img/icon-budgeting.svg" alt="Simple Budgeting" />
              <h3 className="text-[1.25em] md:text-[1.75em] text-center lg:text-left">
                Personalized Medication:
              </h3>
              <p className="text-center lg:text-left">
                A Personalized drug combination recommendations based on individual health profiles and medical
                conditions. By analyzing user data and
                medical history, the system suggests the most effective and suitable medication combinations tailored to
                each user&apos;s specific needs.
              </p>
            </div>

            <div
              className="flex flex-col items-center gap-5 p-5 w-full md:p-3 md:w-1/2 lg:w-1/4 lg:items-start load-hidden animate-slide-up animate-delay-300">
              <img className="aspect-square object-contain w-16" src="/img/icon-onboarding.svg" alt="Fast Onboarding" />
              <h3 className="text-[1.25em] md:text-[1.75em] text-center lg:text-left">
                Find similar<br />Patients
              </h3>
              <p className="text-center lg:text-left">
                This feature enables to find patients which have similar disease history to get moral support and tips to
                recover faster.
              </p>
            </div>

            <div
              className="flex flex-col items-center gap-5 p-5 w-full md:p-3 md:w-1/2 lg:w-1/4 lg:items-start load-hidden animate-slide-up animate-delay-400">
              <img className="aspect-square object-contain w-16" src="/img/icon-api.svg" alt="Open API" />
              <h3 className="text-[1.25em] md:text-[1.75em] text-center lg:text-left">
                Prediction & Recommendations
              </h3>
              <p className="text-center lg:text-left">
                Detects and predicts diseases based on various factors such as symptoms, medical history, and lifestyle.
                In addition to disease identification,
                the system offers personalized diet and food recommendations based on the symptoms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 text-black py-[4em] px-[2em] lg:p-[5em]">
        <div className="container max-w-screen-xl mx-auto">
          <h2 className="mx-auto mb-2 text-3xl text-center md:text-4xl lg:text-left lg:mx-0 load-hidden animate-fade-in">
            Latest Articles
          </h2>

          <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-8 mt-8 md:mt-10 md:gap-5">
            <div
              className="group bg-white rounded-md overflow-hidden cursor-pointer hover:drop-shadow-sm load-hidden animate-slide-up animate-delay-200">
              <img className="object-cover w-full h-[250px] transition-transform duration-600 group-hover:scale-105"
                src="/img/image-currency.jpg" alt="Article thumbnail" />
              <div className="flex flex-col gap-3 p-5 md:px-5 md:py-7">
                <span className="text-xs">By WHO</span>
                <h3 className="text-lg leading-6 group-hover:text-secondary">
                  Say hello to healthy lifestyle hacks
                </h3>
                <p>
                  Say hello to healthy lifestyle hacks Say hello to healthy lifestyle hacks
                  Say hello to healthy lifestyle hacks
                </p>
              </div>
            </div>

            <div
              className="group bg-white rounded-md overflow-hidden cursor-pointer hover:drop-shadow-sm load-hidden animate-slide-up animate-delay-300">
              <img className="object-cover w-full h-[250px] transition-transform duration-600 group-hover:scale-105"
                src="/img/image-restaurant.jpg" alt="Article thumbnail" />
              <div className="flex flex-col gap-3 p-5 md:px-5 md:py-7">
                <span className="text-xs">By WHO</span>
                <h3 className="text-lg leading-6 group-hover:text-secondary">
                  Treat yourself without worrying about money
                </h3>
                <p>
                  List of food and dishes which are healthy as well as tasty.
                </p>
              </div>
            </div>

            <div
              className="group bg-white rounded-md overflow-hidden cursor-pointer hover:drop-shadow-sm load-hidden animate-slide-up animate-delay-400">
              <img className="object-cover w-full h-[250px] transition-transform duration-600 group-hover:scale-105"
                src="/img/image-plane.jpg" alt="Article thumbnail" />
              <div className="flex flex-col gap-3 p-5 md:px-5 md:py-7">
                <span className="text-xs">By WHO</span>
                <h3 className="text-lg leading-6 group-hover:text-secondary">
                  Be aware of these medicinal drugs
                </h3>
                <p>
                  Be aware of these medicinal drugs Be aware of these medicinal drugs
                  Be aware of these medicinal drugs
                </p>
              </div>
            </div>

            <div
              className="group bg-white rounded-md overflow-hidden cursor-pointer hover:drop-shadow-sm load-hidden animate-slide-up animate-delay-500">
              <img className="object-cover w-full h-[250px] transition-transform duration-600 group-hover:scale-105"
                src="/img/image-confetti.jpg" alt="Article thumbnail" />
              <div className="flex flex-col gap-3 p-5 md:px-5 md:py-7">
                <span className="text-xs">By WHO</span>
                <h3 className="text-lg leading-6 group-hover:text-secondary">
                  Curated list of food items for healthy lifestyle!
                </h3>
                <p>
                  Curated list of food items for healthy lifestyle Curated list of food items for healthy lifestyle
                  Curated list of food items for healthy lifestyle!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
