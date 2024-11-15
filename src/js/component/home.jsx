import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
	  <div>
		<Navbar />
		<Jumbotron />
		<div className="container-fluid text-center" style={{ position: "relative", bottom: "60px" }}>
		  <div className="row justify-content-center row-cols-1 row-cols-md-4 g-4">
			<Cards imgUrl="https://imgs.search.brave.com/1VknSsSZ7FbKv-yB46WKTe77s1YmmM6zWY4DOFifXqg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzM2Lzg0Lzgz/LzM2MF9GXzIzNjg0/ODM0MV8wQjQ2VDZ5/cGhKbURDZkNManJV/QktjcXdHRGJ3ZHQ2/VC5qcGc" />
			<Cards imgUrl="https://imgs.search.brave.com/Lt2OrLEBsHEIrUg6zlZFzsfUS7QqSg8f3pnyZZ01luA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vcGhvdG9z/L2xvdmVseS12aW50/YWdlLWZpYXQtNTAw/LXBhcmtlZC1pbi10/aGUtcGlhenphLWRp/LXNwYWduYS1kaXN0/cmljdC1pbi1waWN0/dXJlLWlkMTM3MTI0/MzQ3ND9iPTEmaz0y/MCZtPTEzNzEyNDM0/NzQmcz0xNzA2Njdh/Jnc9MCZoPTNyRjlz/dWd4Zy1rVFdKV2Vo/MktKM1dsckstUEoz/UFhNMVRiZldOYWE4/bFk9.jpeg" />
			<Cards imgUrl="https://imgs.search.brave.com/cUNOGNhlNd-MBkBa0SHiCnprJV7LOKWAxLf8miGso3A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vcGhvdG9z/L2ZpYXQtNTAwLWNy/ZWFtLWNvbG9yLXBp/Y3R1cmUtaWQxMzUy/Njg4NTY3P2I9MSZr/PTIwJm09MTM1MjY4/ODU2NyZzPTE3MDY2/N2Emdz0wJmg9NzRr/YW5XdlIxYjVTdFQy/UGg2WS05TDFiZXBn/NzI0QkdhRkZlR2lm/U0dJaz0.jpeg" />
			<Cards imgUrl="https://imgs.search.brave.com/LLjbJ9ibVlLZNP8AlFsilqRZF1SerbGNzsuLLmuOtwk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vcGhvdG9z/L2ZpYXQtNTAwLWVu/Z2luZS1waWN0dXJl/LWlkNDg0Mzc3ODA1/P2I9MSZrPTIwJm09/NDg0Mzc3ODA1JnM9/MTcwNjY3YSZ3PTAm/aD1zUGZLd3ZEdXY5/NnZNaVJqZlpVc21S/aEczTy1lRkdQdWZD/azl3RWo2N1RZPQ.jpeg" />
		  </div>
		</div>
		<Footer />
	  </div>
	);
  };

  export default Home;