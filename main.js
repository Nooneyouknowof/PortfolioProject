const Projects = ["Cube-CSS", "PizzaPlace", "PixelArt", "BasicPong", "CircleArt", "Smile"];
const Descriptions = ["A 3D Cube with animations made from HTML and CSS", "A highly detailed frompage about Pizza", "A Self portrait made out of 50,400 colored divs"];
const frame = document.getElementById("frame");

function link(str) {return `https://nooneyouknowof.github.io/${arg}/`};

Projects.forEach((item, index) => {
    const content = document.createElement("div");
    content.classList.add("content");
    const title = document.createElement("h2");
    title.textContent = item;
    const box = document.createElement("div");
    box.classList.add("box");
    box.textContent = Descriptions[index];
    content.append(title);
    content.append(box);
    content.addEventListener('click', function(event) {
        const link = `https://nooneyouknowof.github.io/${item}/`;
        window.open(link, '_blank');
    });
    frame.append(content);
});

