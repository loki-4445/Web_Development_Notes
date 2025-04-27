import './App.css';
import Header from './compoments/header/Header';
import Profile from './compoments/profile/Profile';

function App() {
  let profile1 = {
    image: "https://img.freepik.com/free-photo/modern-office-space-with-desktops-with-modern-computers-created-with-generative-ai-technology_185193-110089.jpg",
    image1: "https://m.media-amazon.com/images/I/71d+YNmI5CL.jpg",
    title: "It has survived not only five centuries, but also the leap into electr",
    body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    person: 'Vishal',
    date: '23/03/2024'
  };

  let profile2 = {
    image: "https://plus.unsplash.com/premium_photo-1661281350976-59b9514e5364?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlfGVufDB8fDB8fHww",
    image1: "https://m.media-amazon.com/images/I/71d+YNmI5CL.jpg",
    title: "It has survived not only five centuries, but also the leap into electron",
    body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    person: 'Naveen',
    date: '25/03/2024'
  };

  let profile3 = {
    image: "https://www.shutterstock.com/shutterstock/photos/2159023891/display_1500/stock-photo-happy-businesspeople-laughing-while-collaborating-on-a-new-project-in-an-office-group-of-diverse-2159023891.jpg",
    image1: "https://m.media-amazon.com/images/I/71d+YNmI5CL.jpg",
    title: "It has survived not only five centuries, but also the leap into electron",
    body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    person: 'Praveen',
    date: '29/03/2024'
  };

  return (
    <div className="body">
      <Header />
      <div className="pro">
      <Profile profile={profile1} />
      <Profile profile={profile2} />
      <Profile profile={profile3} />
      </div>
    </div>
  );
}


export default App;
