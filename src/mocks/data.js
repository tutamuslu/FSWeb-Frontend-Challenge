const dataEN = {
    languageInfo: "Dil şuan Türkçe!",
    modeDarkInfo: "View Mode is 🌙 now!",
    modeLightInfo: "View Mode is ☀️ now!",
    header: {
        name: "Tuğba Muslu",
        job: "I am a Full-Stack Developer...",
        description: "...who likes to craft solid and scalable frontend products with great user experiences.",
        changeLang1: "Türkçe",
        changeLang2: "'Ye Geç",
        darkMode: "Dark Mode",
        lightMode: "Light Mode"
    },
    skills: {
        title: "Skills"
    },
    profile: {
        title: "Profile",
        info: "Basic Information",
        birthdate: "Birth Date",
        birthdateVal: '1994',
        city: "Residence City",
        cityVal: "Istanbul",
        education: "Education",
        educationVal: "Duzce Edu. // Workintech",
        status: "Status",
        statusVal: "Licence Degree 2020",
        position: "Prefered Position",
        positionVal: "Full-Stack Developer",
        about: "About Me",
        aboutVal1: "Since I felt close to the software industry, I decided to receive Full-Stack Developer training at Workintech.",
        aboutVal2: "I am now nearing the end of the training. Information about the technologies and projects I experienced throughout my education is as follows.",
    },
    projects: {
        title: "Projects",
        projects: [
            {
                img: "img/project1.png",
                title: "Mini Twitter Site",
                description: "Simple application that includes sign up, log in, tweet, delete, update, comment, retweet and like functions. Front-end react is written with backend java script.",
                techs: [
                    "react", "context api", "java", "spring", "postgresql"
                ],
                link: "#",
                github: "https://github.com/tutamuslu/mini-twitter-x-frontend"
            },
            {
                img: "img/project2.png",
                title: "Portolio Site",
                description: "A React UI application that works with fix data and makes a simple mock API request containing personal information, skills and projects.",
                techs: [
                    "react", "redux", "vercel"
                ],
                link: "#",
                github: "https://github.com/tutamuslu/FSWeb-Frontend-Challenge"
            },
            {
                img: "img/project3.png",
                title: "Pizza Site",
                description: "Simple form application made with React. Includes validations and tests.",
                techs: [
                    "react", "redux", "vercel"
                ],
                link: "https://pizza-tutamuslu.vercel.app/",
                github: "https://github.com/tutamuslu/fsweb-s7-challenge-pizza"
            }
        ]
    },
    footer: {
        title: "Send me a Message!",
        description: "Got a question or proposal, or just want to say hello? Go ahead.",
        mail: "tugba.evli 🐎 gmail.com"
    }
}


const dataTR = {
    languageInfo: "Language English now!",
    modeDarkInfo: "🌙 mod aktif!",
    modeLightInfo: "☀️ mod aktif!",
    header: {
        name: "Tuğba Muslu",
        job: "Front-End UI Geliştirici...",
        description: "harika kullanıcı deneyimleriyle sağlam ve ölçeklenebilir ön uç ürünleri üretmeyi sevenler için...",
        changeLang1: "English",
        changeLang2: "'Switch",
        darkMode: "Koyu Mod",
        lightMode: "Açık Mod"
    },
    skills: {
        title: "Yetenekler"
    },
    profile: {
        title: "Profil",
        info: "Kişisel Bilgiler",
        birthdate: "Doğum Tarihi",
        birthdateVal: '1994',
        city: "İkamet Şehri",
        cityVal: "İstanbul",
        education: "Eğitim",
        educationVal: "Düzce Ün.//Workintech",
        status: "Durumu",
        statusVal: "Lisans 2020",
        position: "Terich Ettiği Rol",
        positionVal: "Full-Stack Dev.",
        about: "Hakkımda",
        aboutVal1: "Kendimi Yazılım sektörüne yakın hissettiğim için Workintech bünyesinde Full-Stack Yazılımcı eğitimi almaya karar verdim. ",
        aboutVal2: "Şuan da eğitimin sonuna yaklaşmış bulunmaktayım. Eğitimim boyunca deneyimlediğim teknolojiler ve projeler ile ilgili bilgiler aşağıdaki gibidir. ",
    },
    projects: {
        title: "Projeler",
        projects: [
            {
                img: "img/project1.png",
                title: "Mini Twitter Site",
                description: "Üye ol, giriş, tweet atmak, silme, güncelleme, yorum yapma, retweet, like fonksiyonlarını içeren basit uygulama. Front-end react, backend java script ile yazılmıştır.",
                techs: [
                    "react", "context api", "java", "spring", "postgresql"
                ],
            },
            {
                img: "img/project2.png",
                title: "Portföy Site",
                description: "Kişisel bilgilerin, yetenek ve projelerin bulunduğu basit mock api isteği yapan fix data ile çalışan bir React ui uygulaması.",
                techs: [
                    "react", "redux", "vercel"
                ]
            },
            {
                img: "img/project3.png",
                title: "Pizza Site",
                description: "React ile yapılmış olan basit form uygulaması. Validasyonları ve testleri içerir.",
                techs: [
                    "react", "redux", "vercel"
                ]
            }
        ]
    },
    footer: {
        title: "Bana mesaj Gönder!",
        description: "Bir sorunuz veya teklifiniz mi var, yoksa sadece merhaba mı demek istiyorsunuz? Görüşelim!",
        mail: "tugba.evli 🐎 gmail.com"
    }
}

const getData = (lang) => {
    if (lang === "tr") {
        return dataTR;
    }
    else {
        return dataEN;
    }
}

module.exports = {
    getData
}