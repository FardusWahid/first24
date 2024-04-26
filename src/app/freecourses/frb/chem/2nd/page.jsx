'use client'
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import Navbar from "@/components/header";


const API_KEY = 'AIzaSyBRxPt8NOlqBUKrNvUtHeuCjs9Z3MWUzrs';
const playlistId = 'PLjo9h8F7l8RChFBCyuS--MAlO9Ii-3ckB';
const videosPerPage = 9; 

function App() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const isLargeScreen = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${API_KEY}&maxResults=150`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error.message || 'Failed to fetch data');
        }

        setVideos(data.items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching playlist data:', error);
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, []);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  return (
    <div>
 <Navbar/>
      <h1 className='text-center font-bold mt-2 text-2xl'>Chemistry 2nd  </h1><br />

      {loading && <p className=" flex justify-center items-center text-white">Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <div className="w-full h-full flex flex-wrap justify-center gap-5  ">
          {currentVideos.map(video => (
            <div key={video.id} className="card  hover:ring-blue-700 shadow-md shadow-blue-600 lg:w-[480px]">

              <section className='w-full flex justify-center '>
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                  controls={true}
                  width={isLargeScreen ? 475 : 340}
                  height={isLargeScreen ? 290 : 230}
                  lazy={true} 
                  light={true}
                 playing={true}
                 

                
                />

              </section>
            </div>
          ))}
        </div>
      )}
      {/* Pagination */}
      <div className="flex justify-center m-8 gap-4">
        {[...Array(Math.ceil(videos.length / videosPerPage))].map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)} className={`mx-1 ring-1 ring-yellow-600 shadow-inner shadow-gray-600 px-3 py-1 rounded-full ${currentPage === index + 1 ? 'bg-black text-white' : 'bg-sky-300 text-black'}`}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;