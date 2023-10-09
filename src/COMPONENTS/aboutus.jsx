import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Us</h2>
          <p className="mt-4 text-xl text-gray-600">
            Here are ten compelling reasons to partner with us for your event management needs:
          </p>
        </div>
        <div className="mt-10 space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
      
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Expertise</h3>
              <p className="mt-2 text-base text-gray-600">
                With years of experience in event management, we bring a wealth of knowledge and expertise to ensure your event's success.
              </p>
            </div>
          </div>
          
        
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Customization</h3>
              <p className="mt-2 text-base text-gray-600">
                We tailor our services to your unique requirements, ensuring that your event reflects your vision and goals.
              </p>
            </div>
          </div>
          
        
          
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
