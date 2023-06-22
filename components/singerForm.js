export default function SingerForm() {
  return (
    <main>
      <div className="h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="p-5 bg-blue-200 shadow-md shadow-blue-100 rounded-md mx-auto w-1/2">
            <div>
              
                <h1 className="text-3xl text-center mb-5 text-blue-500">Singer Voting Form</h1>
              
              <form>
                <div className="flex gap-3 flex-col">
                  <div>
                    <input
                      type="text"
                      className="rounded focus:outline-blue-500  text-black px-3 w-full border border-gray-200 h-10"
                      placeholder="Singer Name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="rounded focus:outline-blue-500 text-black px-3 w-full border border-gray-200 h-10"
                      placeholder="Singer Photo Link"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="rounded focus:outline-blue-500 text-black px-3 w-full border border-gray-200 h-10"
                      placeholder="Song Name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="rounded focus:outline-blue-500 text-black px-3 w-full border border-gray-200 h-10"
                      placeholder="Year"
                    />
                  </div>
                  <div>
                    <button>
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
