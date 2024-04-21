import { useApp } from './use-app';
function App() {

  const {
    images, 
    breeds, 
    loading, 
    selectedBreed, 
    currentIndex, 
    loadingModal, 
    handleBreedClick, 
    handleNextClick, 
    handlePrevClick, 
    handleBackgroundClick
  } = useApp();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Dog Breeds</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {breeds.map((breed, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 cursor-pointer" onClick={() => handleBreedClick(breed)}>
              <p className="text-lg font-semibold">{breed}</p>
            </div>
          ))}
        </div>
      )}

      {selectedBreed && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-50" onClick={handleBackgroundClick}>
          <div className="bg-white p-4 rounded-lg relative" onClick={(e) => e.stopPropagation()}>
            {loadingModal ? (
              <p>Loading...</p>
            ) : (
              <>
                <div className="relative">
                  <img src={images[currentIndex]} alt={selectedBreed} className="w-full h-64 object-cover rounded-lg" />
                  <button className="absolute top-1/2 transform -translate-y-1/2 -left-8 text-gray-500 hover:text-gray-700" onClick={handlePrevClick}>
                    &#8249;
                  </button>
                  <button className="absolute top-1/2 transform -translate-y-1/2 -right-8 text-gray-500 hover:text-gray-700" onClick={handleNextClick}>
                    &#8250;
                  </button>
                </div>
                <p className="text-lg font-semibold text-center mt-4">{selectedBreed}</p>
              </>
            )}
          </div>
        </div>
      )}

      {selectedBreed && (
        <div className="fixed inset-x-0 bottom-0 z-50 bg-white p-4">
          <button className="text-blue-500 hover:text-blue-700 mr-4" onClick={handlePrevClick}>
            Previous
          </button>
          <button className="text-blue-500 hover:text-blue-700" onClick={handleNextClick}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
