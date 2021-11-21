const CHAPTERS = [1,2,3,4];

export default class ChapterLoader {
    constructor() {
        this.currentChapter;
        this.chapters = [];
        this.sidebar = document.querySelector('.sidebar');
        this.mainView = document.querySelector('.main-view');

        this.init();
    }

    init() {
        CHAPTERS.forEach(chapter => {
            const moduleName = `Chapter${chapter}`;
            const folderName = `chapter${chapter}`
            const path = `./chapters/${folderName}/${moduleName}`;
            const show = import(`${path}`);

            this.chapters.push({
                moduleName,
                name: `Chapter ${chapter}`,
                module: show
            });
        });
    }

    loadChapterMenu() {
        const menu = document.createElement('ul');
        menu.classList.add('menu');
        this.chapters.forEach(chapter => {
            const menuItem = document.createElement('li');
            menuItem.onclick = () => {
                this.destroyChapter();
                this.removeAllClasses();
                this.showChapter(chapter);
                menuItem.classList.add('selected');
            };
            menuItem.textContent = chapter.name;
            menuItem.className = 'menu-item';

            menu.appendChild(menuItem);
        });

        this.sidebar.appendChild(menu);
    }

    removeAllClasses() {
        this.mainView.textContent = '';
        document.querySelectorAll('.menu-item')
            .forEach(ele => ele.classList.remove('selected'));
    }

    showChapter(chapter) {
        this.currentChapter = chapter;
        chapter.module
            .then(module => {
                module.show(this.mainView);
            })
            .catch(error => {
                console.error(`${chapter.name} does not exists`);
            });
    }

    destroyChapter() {
        if (!this.currentChapter) {
            return;
        }

        this.currentChapter.module
            .then(module => {
                module.destroy();
            })
            .catch(error => {
                console.error(`${chapter.name} does not exists`);
            });
    }
}
