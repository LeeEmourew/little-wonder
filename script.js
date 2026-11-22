document.addEventListener("DOMContentLoaded", () => {

    console.log("Little Wonder: JavaScript подключён!");

    /* =====================================

       1. МУЗЫКА

    ===================================== */

    const music = document.getElementById("backgroundMusic");

    const musicButton = document.getElementById("musicButton");

    if (music && musicButton) {

        musicButton.addEventListener("click", async () => {

            if (music.paused) {

                try {

                    await music.play();

                    musicButton.classList.add("playing");

                    musicButton.innerHTML =

                        '♫ <span>Выключить музыку</span>';

                } catch (error) {

                    console.error("Ошибка музыки:", error);

                    alert(

                        "Не удалось включить музыку. Проверь файл music/melody.mp3"

                    );

                }

            } else {

                music.pause();

                musicButton.classList.remove("playing");

                musicButton.innerHTML =

                    '♫ <span>Включить музыку</span>';

            }

        });

        music.addEventListener("ended", () => {

            musicButton.classList.remove("playing");

            musicButton.innerHTML =

                '♫ <span>Включить музыку</span>';

        });

    }


/* =====================================

       2. КНИГА

    ===================================== */

    const pages = [

        {

            title: "Мальчик, который умел мечтать",

            text: `Жил-был мальчик по имени Мишка.

Он ещё не знал, сколько удивительных открытий ждёт его впереди.

Но у него уже было самое главное: большое сердце, любопытство и целая вселенная фантазии.`

        },

        {

            title: "Там, где начинается волшебство",

            text: `Однажды Мишка заметил необычную тропинку.

Она была похожа на солнечный луч, который случайно упал на землю.

Мальчик решил последовать за ней. Ведь самые интересные приключения начинаются с любопытства.`

        },

        {

            title: "Страна удивительных чудес",

            text: `За холмами оказался удивительный мир.

Там облака были похожи на сахарную вату, цветы светились в темноте, а маленькие птицы знали все секреты Вселенной.

Мишка понял, что попал в особенное место.`

        },

        {

            title: "И жили долго и счастливо",

            text: `Когда приключение подошло к концу, Мишка понял одну важную вещь.

Волшебство совсем не обязательно искать далеко.

Оно живёт в доброте, в семье, в смехе и в людях, которые любят тебя.

И эта история никогда не закончится.`

        }

    ];

    let currentPage = 0;

    const bookContainer =

        document.querySelector(".book-container");

    const openBookButton =

        document.getElementById("openBook");

    const closeBookButton =

        document.getElementById("closeBook");

    const pageTitle =

        document.getElementById("pageTitle");

    const pageText =

        document.getElementById("pageText");

    const pageCounter =

        document.getElementById("pageCounter");

    const chapterNumber =

        document.getElementById("chapterNumber");

    const previousPage =

        document.getElementById("previousPage");

    const nextPage =

        document.getElementById("nextPage");

    function updateBook() {

        pageTitle.textContent =

            pages[currentPage].title;

        pageText.textContent =

            pages[currentPage].text;

        pageCounter.textContent =

            `${currentPage + 1} / ${pages.length}`;

        chapterNumber.textContent =

            `CHAPTER 0${currentPage + 1}`;

        previousPage.disabled =

            currentPage === 0;

        nextPage.disabled =

            currentPage === pages.length - 1;

    }

    if (

        bookContainer &&

        openBookButton &&

        closeBookButton &&

        pageTitle &&

        pageText &&

        pageCounter &&

        chapterNumber &&

        previousPage &&

        nextPage

    ) {

        openBookButton.addEventListener("click", () => {

            currentPage = 0;

            updateBook();

            bookContainer.classList.add("open");

        });

        closeBookButton.addEventListener("click", () => {

            bookContainer.classList.remove("open");

        });

        nextPage.addEventListener("click", () => {

            if (currentPage < pages.length - 1) {

                currentPage++;

                updateBook();

            }

        });

        previousPage.addEventListener("click", () => {

            if (currentPage > 0) {

                currentPage--;

                updateBook();

            }

        });

        updateBook();

        console.log("Книга подключена!");

    } else {

        console.error("Не найдены элементы книги!");

    }


/* =====================================

       3. СЛАЙД-ШОУ С НАСТОЯЩИМИ КАРТИНКАМИ

    ===================================== */

    const slides = [

        {

            image: "images/slides/slide1.jpg",

            title: "Секретный сад",

            description: "Там, где цветы знают тысячи историй."

        },

        {

            image: "images/slides/slide2.jpg",

            title: "Лунная ночь",

            description: "Когда звёзды освещают путь мечтателям."

        },

        {

            image: "images/slides/slide3.jpg",

            title: "Крылья мечты",

            description: "Каждая большая история начинается с мечты."

        },

        {

            image: "images/slides/slide4.jpg",

            title: "Солнечное утро",

            description: "Впереди целый мир новых открытий."

        },

        {

            image: "images/slides/slide5.jpg",

            title: "Место, где тебя любят",

            description: "Самое уютное место на свете."

        }

    ];

    let slideIndex = 0;

    const slidePicture =

        document.getElementById("slidePicture");

    const slideTitle =

        document.getElementById("slideTitle");

    const slideDescription =

        document.getElementById("slideDescription");

    const slideDots =

        document.getElementById("slideDots");

    const nextSlideButton =

        document.getElementById("nextSlide");

    const prevSlideButton =

        document.getElementById("prevSlide");

    function updateSlide() {

        if (

            !slidePicture ||

            !slideTitle ||

            !slideDescription

        ) {

            return;

        }

        const slide = slides[slideIndex];

        const image = document.createElement("img");

        image.src = slide.image;

        image.alt = slide.title;

        image.onerror = () => {

            console.error(

                "Не найдена картинка:",

                slide.image

            );

            image.alt = "Не удалось загрузить изображение";

            image.classList.add("image-error");

        };

        slidePicture.replaceChildren(image);

        slideTitle.textContent = slide.title;

        slideDescription.textContent =

            slide.description;

        slidePicture.style.animation = "none";

        void slidePicture.offsetWidth;

        slidePicture.style.animation =

            "slideFade 0.6s ease";

        if (slideDots) {

            const dots =

                slideDots.querySelectorAll("button");

            dots.forEach((dot, index) => {

                dot.classList.toggle(

                    "active",

                    index === slideIndex

                );

            });

        }

    }

    function createDots() {

        if (!slideDots) return;

        slideDots.innerHTML = "";

        slides.forEach((slide, index) => {

            const dot = document.createElement("button");

            dot.type = "button";

            dot.setAttribute(

                "aria-label",

                `Перейти к слайду ${index + 1}`

            );

            dot.addEventListener("click", () => {

                slideIndex = index;

                updateSlide();

            });

            slideDots.appendChild(dot);

        });

    }

    if (

        slidePicture &&

        slideTitle &&

        slideDescription &&

        nextSlideButton &&

        prevSlideButton &&

        slideDots

    ) {

        nextSlideButton.addEventListener("click", () => {

            slideIndex =

                (slideIndex + 1) % slides.length;

            updateSlide();

        });

        prevSlideButton.addEventListener("click", () => {

            slideIndex =

                (slideIndex - 1 + slides.length) % slides.length;

            updateSlide();

        });

        createDots();

        updateSlide();

        console.log("Слайд-шоу подключено!");

    } else {

        console.error("Не найдены элементы слайд-шоу!");

    }

    /* =====================================
   4. СЕКРЕТНОЕ ПИСЬМО
===================================== */

const secretButton = document.getElementById("secretButton");
const secretMessage = document.getElementById("secretMessage");

if (secretButton && secretMessage) {

    secretButton.addEventListener("click", () => {

        const isOpen = secretMessage.classList.toggle("visible");

        secretButton.textContent = isOpen
            ? "Закрыть письмо ✉"
            : "Открыть секретное письмо ✉";

        if (isOpen) {

            setTimeout(() => {
                secretMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }, 150);

        }

    });

}



    /* =====================================

       5. ФОТОГРАФИИ ВОСПОМИНАНИЙ

    ===================================== */

    document.querySelectorAll(".memory-card img")

        .forEach((image) => {

            image.addEventListener("error", () => {

                image.style.display = "none";

                const placeholder =

                    document.createElement("div");

                placeholder.className =

                    "photo-placeholder";

                placeholder.textContent =

                    "Фотография скоро появится ✿";

                image.parentElement.insertBefore(

                    placeholder,

                    image.nextSibling

                );

            });

        });

    /* =====================================

       6. АНИМАЦИЯ ПОЯВЛЕНИЯ СЕКЦИЙ

    ===================================== */

    const revealElements =

        document.querySelectorAll(

            ".section-heading, .book-container, .memory-card, .slideshow"

        );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },

            {

                threshold: 0.12

            }

        );

        revealElements.forEach((element) => {

            element.classList.add("reveal");

            observer.observe(element);

        });

    } else {

        revealElements.forEach((element) => {

            element.classList.add("visible");

        });

    }
    /* =====================================
   7. ХРОНИКА МИШКИ
===================================== */

const memoryForm = document.getElementById("memoryForm");
const timelineList = document.getElementById("timelineList");

if (memoryForm && timelineList) {

    let memories = [];

    try {
        memories = JSON.parse(
            localStorage.getItem("mishkaMemories") || "[]"
        );
    } catch (error) {
        console.error("Не удалось загрузить воспоминания:", error);
        memories = [];
    }

    function renderMemories() {

        timelineList.replaceChildren();

        if (memories.length === 0) {

            const empty = document.createElement("div");
            empty.className = "timeline-empty";
            empty.textContent = "Здесь появится первая история Мишки ✿";

            timelineList.appendChild(empty);
            return;
        }

        const sortedMemories = [...memories].sort((a, b) =>
            b.date.localeCompare(a.date)
        );

        sortedMemories.forEach((memory) => {

            const entry = document.createElement("article");
            entry.className = "timeline-entry";

            const date = document.createElement("div");
            date.className = "timeline-date";

            const dateParts = memory.date.split("-");

            date.textContent = dateParts.length === 3
                ? `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`
                : memory.date;

            const title = document.createElement("h3");
            title.textContent = memory.title;

            const description = document.createElement("p");
            description.textContent = memory.description;

            entry.append(date, title, description);

            if (memory.image) {

                const image = document.createElement("img");

                image.src = memory.image;
                image.alt = memory.title;

                image.onerror = () => {
                    image.remove();
                    console.warn("Не найдена фотография:", memory.image);
                };

                entry.appendChild(image);
            }

            timelineList.appendChild(entry);

        });

    }

    memoryForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const title = document.getElementById("memoryTitle").value.trim();
        const date = document.getElementById("memoryDate").value;
        const description = document.getElementById("memoryDescription").value.trim();
        const image = document.getElementById("memoryImage").value.trim();

        if (!title || !date || !description) {
            alert("Заполни название, дату и историю.");
            return;
        }

        const newMemory = {
            title,
            date,
            description,
            image
        };

        memories.push(newMemory);

        try {

            localStorage.setItem(
                "mishkaMemories",
                JSON.stringify(memories)
            );

        } catch (error) {

            memories.pop();

            alert("Не удалось сохранить запись. Возможно, закончилось место в браузере.");

            console.error(error);
            return;

        }

        renderMemories();
        memoryForm.reset();

        alert("Новое воспоминание сохранено! ✨");

    });

    renderMemories();

}

/* =====================================
   8. КАРТА ПРИКЛЮЧЕНИЙ LITTLE WONDER
===================================== */

const adventurePlaces = {
    forest: {
        title: "Лес открытий",
        subtitle: "THE FOREST OF DISCOVERY",
        image: "images/adventures/forest.jpg",
        description: "Здесь начинается самое интересное. Среди высоких деревьев прячутся маленькие чудеса, неизвестные тропинки и удивительные открытия. Каждый шаг может привести к чему-то новому. Не бойся исследовать мир, задавать вопросы и находить собственные ответы.",
        icon: "🌳"
    },

    lake: {
        title: "Озеро мечтаний",
        subtitle: "THE LAKE OF DREAMS",
        image: "images/adventures/lake.jpg",
        description:"Говорят, что в этом озере отражаются не только облака, но и самые смелые мечты. Здесь можно загадать желание, придумать невероятное приключение и представить, каким станет завтрашний день. Ведь большие истории начинаются с маленькой мечты.",
        icon: "🌊"
    },

    valley: {
        title: "Долина чудес",
        subtitle: "THE VALLEY OF WONDERS",
        image: "images/adventures/valley.jpg",
        description:
            "Это место для тех, кто умеет замечать красоту в мелочах. Здесь цветут необычные цветы, встречаются добрые истории и случаются неожиданные события. Иногда настоящее чудо совсем рядом, нужно только внимательно посмотреть.",
        icon: "🌷"
    },

    home: {
        title: "Дом тепла",
        subtitle: "THE HOME OF LOVE",
        image: "images/adventures/home.jpg",
        description:
            "Самое уютное место на всей карте. Здесь всегда найдётся место для объятий, смеха, семейных историй и тёплых вечеров. И куда бы ни привели тебя приключения, помни: есть люди, которые всегда будут рады твоему возвращению.",
        icon: "🏡"
    }
};

const adventureMap = document.querySelector(".adventure-map");
const adventureButtons = document.querySelectorAll(".map-place");

const adventureDetail = document.getElementById("adventureDetail");
const adventureWelcome = document.getElementById("adventureWelcome");
const adventureContent = document.getElementById("adventureContent");

const adventureTitle = document.getElementById("adventureTitle");
const adventureSubtitle = document.getElementById("adventureSubtitle");
const adventureDescription = document.getElementById("adventureDescription");
const adventureMedia = document.getElementById("adventureMedia");

const adventureNoteForm = document.getElementById("adventureNoteForm");
const adventureNote = document.getElementById("adventureNote");
const adventureNotes = document.getElementById("adventureNotes");

const adventurePhoto = document.getElementById("adventurePhoto");
const adventureVideo = document.getElementById("adventureVideo");
const saveAdventureMedia = document.getElementById("saveAdventureMedia");

const adventureStorageKey = "littleWonderAdventureData";

let adventureData = {};

try {
    adventureData =
        JSON.parse(localStorage.getItem(adventureStorageKey)) || {};
} catch (error) {
    adventureData = {};
}

let activeAdventurePlace = null;

function saveAdventureData() {
    try {
        localStorage.setItem(
            adventureStorageKey,
            JSON.stringify(adventureData)
        );
        return true;
    } catch (error) {
        alert("Не удалось сохранить данные. Возможно, хранилище браузера заполнено.");
        return false;
    }
}

/* ОТРИСОВКА ФОТОГРАФИИ ИЛИ ВИДЕО */

function renderAdventureMedia(placeId) {

    if (!adventureMedia) return;

    adventureMedia.innerHTML = "";

    const data = adventureData[placeId] || {};
    const place = adventurePlaces[placeId];

    // 1. Сначала показываем личную фотографию
    if (data.photo) {

        const image = document.createElement("img");
        image.src = data.photo;
        image.alt = place.title;

        adventureMedia.appendChild(image);
        return;
    }

    // 2. Если есть видео, показываем его
    if (data.video) {

        const videoUrl = data.video;

        const youtubeMatch = videoUrl.match(
            /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/
        );

        if (youtubeMatch) {

            const iframe = document.createElement("iframe");
            iframe.src = "https://www.youtube-nocookie.com/embed/" + youtubeMatch[1];
            iframe.title = "Видео " + place.title;
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;

            adventureMedia.appendChild(iframe);
            return;
        }

        if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(videoUrl)) {

            const video = document.createElement("video");
            video.src = videoUrl;
            video.controls = true;
            video.playsInline = true;

            adventureMedia.appendChild(video);
            return;
        }
    }

    // 3. Если личных фото и видео нет, показываем фото из папки
    if (place.image) {

        const image = document.createElement("img");
        image.src = place.image;
        image.alt = place.title;

        image.onerror = () => {
            adventureMedia.innerHTML = "";

            const placeholder = document.createElement("div");
            placeholder.className = "adventure-placeholder";
            placeholder.textContent = "✨";

            adventureMedia.appendChild(placeholder);

            console.error("Не удалось загрузить фотографию:", place.image);
        };

        adventureMedia.appendChild(image);
        return;
    }

    // 4. Запасная заглушка
    const placeholder = document.createElement("div");
    placeholder.className = "adventure-placeholder";
    placeholder.textContent = place.icon || "✨";

    adventureMedia.appendChild(placeholder);
}


/* ОТРИСОВКА ЛИЧНЫХ ВОСПОМИНАНИЙ */

function renderAdventureNotes(placeId) {

    if (!adventureNotes) return;

    adventureNotes.innerHTML = "";

    const data = adventureData[placeId] || {};
    const notes = data.notes || [];

    if (notes.length === 0) {

        const empty = document.createElement("p");
        empty.className = "adventure-empty";
        empty.textContent =
            "Здесь пока нет записей. Твоя история только начинается.";

        adventureNotes.appendChild(empty);
        return;
    }

    notes.forEach((note) => {

        const card = document.createElement("div");
        card.className = "adventure-note-card";

        const text = document.createElement("p");
        text.textContent = note.text;

        const date = document.createElement("small");
        date.textContent = note.date;

        card.appendChild(text);
        card.appendChild(date);

        adventureNotes.appendChild(card);
    });
}

/* ОТКРЫТИЕ МЕСТА НА КАРТЕ */

function openAdventurePlace(placeId, button) {

    const place = adventurePlaces[placeId];

    if (
        !place ||
        !adventureDetail ||
        !adventureWelcome ||
        !adventureContent ||
        !adventureTitle ||
        !adventureSubtitle ||
        !adventureDescription
    ) {
        console.error("Не найдены необходимые элементы карты приключений.");
        return;
    }

    activeAdventurePlace = placeId;

    adventureButtons.forEach((item) => {
        item.classList.remove("selected");
    });

    if (button) {
        button.classList.add("selected");
    }

    adventureTitle.textContent = place.title;
    adventureSubtitle.textContent = place.subtitle;
    adventureDescription.textContent = place.description;

    adventureWelcome.hidden = true;
    adventureContent.hidden = false;

    renderAdventureMedia(placeId);
    renderAdventureNotes(placeId);

    adventureDetail.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}

/* ОБРАБОТЧИКИ КНОПОК КАРТЫ */

if (adventureMap && adventureDetail) {

    adventureButtons.forEach((button) => {

        button.addEventListener("click", () => {

            const placeId = button.dataset.place;

            openAdventurePlace(placeId, button);

        });

    });

}

/* ДОБАВЛЕНИЕ ВОСПОМИНАНИЯ */

if (adventureNoteForm && adventureNote) {

    adventureNoteForm.addEventListener("submit", (event) => {

        event.preventDefault();

        if (!activeAdventurePlace) {
            alert("Сначала выбери место на карте.");
            return;
        }

        const text = adventureNote.value.trim();

        if (!text) return;

        if (!adventureData[activeAdventurePlace]) {
            adventureData[activeAdventurePlace] = {};
        }

        if (!adventureData[activeAdventurePlace].notes) {
            adventureData[activeAdventurePlace].notes = [];
        }

        adventureData[activeAdventurePlace].notes.push({
            text: text,
            date: new Date().toLocaleDateString("ru-RU")
        });

        if (saveAdventureData()) {
            adventureNoteForm.reset();
            renderAdventureNotes(activeAdventurePlace);
        }

    });

}

/* УМЕНЬШЕНИЕ ФОТОГРАФИИ ПЕРЕД СОХРАНЕНИЕМ */

function compressAdventurePhoto(file)


{

    return new Promise((resolve, reject) => {

        const reader = new FileReader();

        reader.onload = () => {

            const image = new Image();

            image.onload = () => {

                const maxSize = 1100;
                const scale = Math.min(
                    1,
                    maxSize / Math.max(image.width, image.height)
                );

                const canvas = document.createElement("canvas");

                canvas.width = Math.round(image.width * scale);
                canvas.height = Math.round(image.height * scale);

                const context = canvas.getContext("2d");

                context.drawImage(
                    image,
                    0,
                    0,
                    canvas.width,
                    canvas.height
                );

                resolve(canvas.toDataURL("image/jpeg", 0.75));
            };

            image.onerror = () => reject(
                new Error("Не удалось прочитать изображение.")
            );

            image.src = reader.result;
        };

        reader.onerror = () => reject(
            new Error("Не удалось загрузить файл.")
        );

        reader.readAsDataURL(file);
    });
}

/* СОХРАНЕНИЕ ФОТО ИЛИ ВИДЕО */

if (saveAdventureMedia) {

    saveAdventureMedia.addEventListener("click", async () => {

        if (!activeAdventurePlace) {
            alert("Сначала выбери место на карте.");
            return;
        }

        const file = adventurePhoto && adventurePhoto.files[0];
        const videoLink = adventureVideo
            ? adventureVideo.value.trim()
            : "";

        if (!file && !videoLink) {
            alert("Выбери фотографию или добавь ссылку на видео.");
            return;
        }

        if (!adventureData[activeAdventurePlace]) {
            adventureData[activeAdventurePlace] = {};
        }

        if (file) {

            if (!file.type.startsWith("image/")) {
                alert("Пожалуйста, выбери изображение.");
                return;
            }

            try {

                const compressedPhoto = await compressAdventurePhoto(file);

                adventureData[activeAdventurePlace].photo = compressedPhoto;
                delete adventureData[activeAdventurePlace].video;

            } catch (error) {

                alert("Не получилось обработать фотографию.");
                console.error(error);
                return;
            }

        } else if (videoLink) {

            try {

                const parsedUrl = new URL(videoLink);

                if (!["https:", "http:"].includes(parsedUrl.protocol)) {
                    alert("Укажи корректную ссылку на видео.");
                    return;
                }

                const isYoutube =
                    parsedUrl.hostname.includes("youtube.com") ||
                    parsedUrl.hostname === "youtu.be";

                const isVideoFile = /\.(mp4|webm|ogg)$/i.test(parsedUrl.pathname);

                if (!isYoutube && !isVideoFile) {
                    alert("Поддерживаются ссылки YouTube или прямые ссылки на MP4, WebM и OGG.");
                    return;
                }

                adventureData[activeAdventurePlace].video = parsedUrl.href;
                delete adventureData[activeAdventurePlace].photo;

            } catch (error) {

                alert("Проверь ссылку на видео.");
                return;
            }
        }

        if (saveAdventureData()) {

            if (adventurePhoto) adventurePhoto.value = "";
            if (adventureVideo) adventureVideo.value = "";

            renderAdventureMedia(activeAdventurePlace);

            alert("Оформление места сохранено! ✨");
        }

    });

}

console.log("Карта приключений Little Wonder загружена!");

/* =====================================
   9. ПИСЬМА ИЗ БУДУЩЕГО
===================================== */

const letterButtons = document.querySelectorAll(".letter-button");

letterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const letterId = button.dataset.letter;
        const letter = document.getElementById(letterId);

        if (!letter) return;

        const isOpen = letter.classList.toggle("open");

        button.textContent = isOpen
            ? "Закрыть письмо"
            : "Открыть письмо";

    });

});

/* =====================================
   10. СОЗВЕЗДИЕ МЕЧТАНИЙ
===================================== */

const dreamForm = document.getElementById("dreamForm");
const dreamInput = document.getElementById("dreamInput");
const dreamDescription = document.getElementById("dreamDescription");
const dreamsList = document.getElementById("dreamsList");
const dreamsCount = document.getElementById("dreamsCount");

const dreamsStorageKey = "littleWonderDreams";

let dreams = [];

try {
    dreams = JSON.parse(localStorage.getItem(dreamsStorageKey)) || [];
} catch (error) {
    dreams = [];
}

function saveDreams() {
    localStorage.setItem(dreamsStorageKey, JSON.stringify(dreams));
}

function renderDreams() {

    if (!dreamsList || !dreamsCount) return;

    dreamsList.innerHTML = "";

    let completedCount = 0;

    dreams.forEach((dream) => {

        const isCompleted = Boolean(dream.completed);

        if (isCompleted) {
            completedCount++;
        }

        const card = document.createElement("div");
        card.className = "dream-item";

        if (isCompleted) {
            card.classList.add("completed");
        }

        const star = document.createElement("span");
        star.className = "dream-star";
        star.textContent = "✦";

        const content = document.createElement("div");
        content.className = "dream-content";

        const title = document.createElement("h4");
        title.textContent = dream.title;

        const description = document.createElement("p");
        description.textContent = dream.description ||
            "Однажды эта мечта обязательно исполнится.";

        const label = document.createElement("label");
        label.className = "dream-check";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = isCompleted;

        checkbox.addEventListener("change", () => {

            dream.completed = checkbox.checked;

            saveDreams();
            renderDreams();

        });

        const labelText = document.createElement("span");
        labelText.textContent = isCompleted
            ? "Мечта исполнена!"
            : "Я исполнил эту мечту";

        label.appendChild(checkbox);
        label.appendChild(labelText);

        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(label);

        card.appendChild(star);
        card.appendChild(content);

        dreamsList.appendChild(card);

    });

    dreamsCount.textContent = completedCount;

}



if (dreamForm && dreamInput && dreamDescription && dreamsList && dreamsCount) {

    dreamForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const title = dreamInput.value.trim();
        const description = dreamDescription.value.trim();

        if (!title) return;

        dreams.push({
            id: Date.now(),
            title: title,
            description: description,
            completed: false
        });

        saveDreams();
        renderDreams();

        dreamForm.reset();
    });

    renderDreams();
}



    console.log("Все функции сайта успешно инициализированы!");

});


