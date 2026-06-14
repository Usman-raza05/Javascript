const users = [
    {
        name: "zara khan",
        pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
        bio: "lost in music 🎧 | vibes over everything ✨",
    },
    {
        name: "arjun malhotra",
        pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
        bio: "building dreams with code 💻 | chai lover ☕",
    },
    {
        name: "sana sheikh",
        pic: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400",
        bio: "soft heart, sharp mind 🌙 | poetry addict",
    },
    {
        name: "rahul verma",
        pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
        bio: "gym, grind, repeat 💪 | discipline first",
    },
    {
        name: "meera joshi",
        pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
        bio: "sunsets and silence 🌅 | soul full of art 🎨",
    },
    {
        name: "kabir singh",
        pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
        bio: "chaos in my head ⚡ | calm in my actions",
    },
    {
        name: "riya kapoor",
        pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400",
        bio: "makeup + mindset 💄 | beauty with brains",
    },
    {
        name: "dev patel",
        pic: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400",
        bio: "camera in hand 📷 | chasing stories",
    },
    {
        name: "aliya ansari",
        pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400",
        bio: "moon child 🌙 | overthinker club president",
    },
]

function showUsers(arr) {
    arr.forEach((user) => {
        // create card
        const card = document.createElement("div");
        card.className = "card";

        // create image
        const img = document.createElement("img");
        img.src = user.pic;
        img.className = "bg-img";

        // create blurred layer
        const blur = document.createElement("div");
        blur.className = "blurred-layer";

        // create content container
        const content = document.createElement("div");
        content.className = "content";

        // create h3
        const h3 = document.createElement("h3");
        h3.textContent = user.name;

        // create paragraph
        const p = document.createElement("p");
        p.textContent = user.bio;

        // append elements
        content.appendChild(h3);
        content.appendChild(p);

        card.appendChild(img);
        card.appendChild(blur);
        card.appendChild(content);

        // add to body (or any container)
        document.querySelector(".cards").appendChild(card);
    })
}

showUsers(users)

let inp = document.querySelector("input")
inp.addEventListener("input",()=>{
    let newUsers = users.filter((user)=>{
        return user.name.startsWith(inp.value.toLowerCase())
    })
    document.querySelector(".cards").textContent=""
    showUsers(newUsers)
})