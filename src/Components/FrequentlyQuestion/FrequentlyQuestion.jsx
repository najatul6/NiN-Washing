const FrequentlyQuestion = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-deep-blue">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {/* Question No. 01  */}
        <div className="collapse collapse-plus bg-base-200 shadow-inner">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium text-deep-blue">
           <sup className="font-bold text-xl text-white-coffee">Q1</sup> What is power washing?
          </div>
          <div className="collapse-content">
            <p>
              One FAQ we get is what is power washing? Power washing, or
              pressure washing, is the application of a high pressure water
              spray to surfaces that need cleaned.
            </p>
          </div>
        </div>

        {/* Question No. 02  */}
        <div className="collapse collapse-plus bg-base-200 shadow-inner">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium text-deep-blue">
           <sup className="font-bold text-xl text-white-coffee">Q2</sup> Is there a difference between power washing and pressure washing?
          </div>
          <div className="collapse-content">
            <p>
              The terms “power wash” and “pressure wash” are completely
              synonymous. The fact is these terms are used interchangeably to
              describe the process of using high pressure water to clean
              surfaces. We use 3,000 PSI pressure washing machines, both hot and
              cold water units.
            </p>
          </div>
        </div>

        {/* Question No. 03  */}
        <div className="collapse collapse-plus bg-base-200 shadow-inner">
          <input type="radio" name="my-accordion-3"/>
          <div className="collapse-title text-xl font-medium text-deep-blue">
           <sup className="font-bold text-xl text-white-coffee">Q3</sup> What is Soft Washing?
          </div>
          <div className="collapse-content">
            <p>
              Soft Washing is the combination of the use of correct detergents,
              dwell times, and lower pressure rinsing systems. The detergents we
              utilize are effective at killing molds, mildews, and algae,
              allowing us to safely remove the “grime” from any surface.
            </p>
          </div>
        </div>

        {/* Question No. 04  */}
        <div className="collapse collapse-plus bg-base-200 shadow-inner">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium text-deep-blue">
           <sup className="font-bold text-xl text-white-coffee">Q4</sup> How often do most surface need power washed?
          </div>
          <div className="collapse-content">
            <p>
              For the majority of surfaces, an annual power washing should
              suffice. It does depend on the materials used to create/build the
              surface as well as the current condition of the surface, so you
              may need to increase the frequency of power washings.
            </p>
          </div>
        </div>

        {/* Question No. 05  */}
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium text-deep-blue">
           <sup className="font-bold text-xl text-white-coffee">Q1</sup> What are PSI and GPM?
          </div>
          <div className="collapse-content">
            <p>
              Another FAQ is what is PSI and GPM? PSI is the pounds per square
              inch. This is what delivers the punch during a power wash, forcing
              contaminants off the surface.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyQuestion;
