function GamePage() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <iframe
          src="/Game/index.html"
          title="My Game"
          width="100%"
          height="600"
          className="rounded shadow-lg"
        ></iframe>
      </div>
    );
  }
  
  export default GamePage;
  