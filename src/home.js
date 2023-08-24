import Coffee from "./mike-kenneally-tNALoIZhqVM-unsplash.jpg";

function loadHomePage() {
  const home = document.createElement("div");

  const coffeeImg = document.createElement("img");
  coffeeImg.src = Coffee;
  home.appendChild(coffeeImg);
  
  const imgCredits = document.createElement("p");
  imgCredits.textContent = "Photo by ";

  const creatorLink = document.createElement("a");
  creatorLink.href = "https://unsplash.com/@asthetik";
  creatorLink.textContent = "Mike Kenneally";
  imgCredits.appendChild(creatorLink);

  imgCredits.innerHTML += " on ";

  const websiteLink = document.createElement("a");
  websiteLink.href = "https://unsplash.com";
  websiteLink.textContent = "Unsplash";
  imgCredits.appendChild(websiteLink);

  home.appendChild(imgCredits);

  const heading = document.createElement("h1");
  heading.textContent = "Coffee Shop";
  home.appendChild(heading);

  const description = document.createElement("p");
  description.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia architecto molestiae beatae accusantium suscipit aliquam asperiores eos praesentium labore vitae nesciunt eum sapiente exercitationem debitis, necessitatibus dolorem! Eos, at non!";
  home.appendChild(description);

  return home;
}

export default loadHomePage;