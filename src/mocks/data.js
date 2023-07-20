const dataEN = {
    languageInfo: "Dil şuan Türkçe!",
    modeDarkInfo: "View Mode is 🌙 now!",
    modeLightInfo: "View Mode is ☀️ now!",
    header: {
        name: "Almila",
        job: "I am a Frontend Developer...",
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
        birthdateVal: '24.11.1995',
        city: "Residence City",
        cityVal: "Ankara",
        education: "Education",
        educationVal: "Hacettepe Edu. Biology",
        status: "Status",
        statusVal: "Licence Degree 2016",
        position: "Prefered Position",
        positionVal: "Frond-end UI",
        about: "About Me",
        aboutVal1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
        aboutVal2: "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! ",
    },
    projects: {
        title: "Projects",
        projects: [
            {
                img: "img/project1.png",
                title: "Workintech",
                description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
                techs: [
                    "react", "redux", "vercel"
                ]
            },
            {
                img: "img/project2.png",
                title: "Journey",
                description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
                techs: [
                    "react", "redux", "vercel"
                ]
            }
        ]
    },
    footer: {
        title: "Send me a Message!",
        description: "Got a question or proposal, or just want to say hello? Go ahead.",
        mail: "almilasucode@gmail.com"
    }
}


const dataTR = {
    languageInfo: "Language English now!",
    modeDarkInfo: "🌙 mod aktif!",
    modeLightInfo: "☀️ mod aktif!",
    header: {
        name: "Almila",
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
        birthdateVal: '24.11.1995',
        city: "İkamet Şehri",
        cityVal: "Ankara",
        education: "Eğitim",
        educationVal: "Hacettepe Edu. Biology",
        status: "Durumu",
        statusVal: "Lisans 2016",
        position: "Terich Ettiği Rol",
        positionVal: "Frond-end UI",
        about: "Hakkımda",
        aboutVal1: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen...",
        aboutVal2: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum,",
    },
    projects: {
        title: "Projeler",
        projects: [
            {
                img: "img/project1.png",
                title: "Workintech",
                description: "Kullanıcılarınızın hangi tanımlama bilgilerini kabul edeceklerini veya reddedeceklerini seçmelerine olanak tanıyan basit, özelleştirilebilir, minimum kurulumlu bir tanımlama bilgisi eklentisi. Bu, vanilya JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu, kod ve temalar için her türlü özelleştirmeyi mümkün kılar.",
                techs: [
                    "react", "redux", "vercel"
                ]
            },
            {
                img: "img/project2.png",
                title: "Journey",
                description: "Kullanıcılarınızın hangi tanımlama bilgilerini kabul edeceklerini veya reddedeceklerini seçmelerine olanak tanıyan basit, özelleştirilebilir, minimum kurulumlu bir tanımlama bilgisi eklentisi. Bu, vanilya JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu, kod ve temalar için her türlü özelleştirmeyi mümkün kılar.",
                techs: [
                    "react", "redux", "vercel"
                ]
            }
        ]
    },
    footer: {
        title: "Bana mesaj Gönder!",
        description: "Bir sorunuz veya teklifiniz mi var, yoksa sadece merhaba mı demek istiyorsunuz? Görüşelim!",
        mail: "almilasucode@gmail.com"
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