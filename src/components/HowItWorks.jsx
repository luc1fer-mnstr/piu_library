const HowItWorks = () => {
    return (
      <section id="howitwork" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">How It Works</h2>
          <p className="text-lg text-center text-gray-600 mb-6">
            Welcome to the PIU Online Library, exclusively for PIU students! Created by the second-year students of PIU Batch 1, this platform provides access to a vast collection of academic resources.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-orange-400">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Search for Books</h3>
              <p className="text-gray-500">To access the library’s extensive collection, simply log in with your student ID.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-orange-400">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Read Online</h3>
              <p className="text-gray-500">Enjoy the flexibility of reading books directly on the platform or opt for audio versions to listen on the go.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-orange-400">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Download Books</h3>
              <p className="text-gray-500">Download your favorite books and audio resources for offline access.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  