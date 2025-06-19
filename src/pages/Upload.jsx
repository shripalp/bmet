function Upload() {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">Upload a Document</h1>
          <form
            action="/upload.php"
            method="POST"
            encType="multipart/form-data"
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium mb-1">Choose File</label>
              <input
                type="file"
                name="file"
                required
                className="block w-full text-sm border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Upload;
// This code defines a simple upload page where users can upload documents.  