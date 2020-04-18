// News Feed API

class NewsFeed {
  constructor(feedElement, newsFile) {
    /*if (!this.checkTypes([feedElement, newsFile], ['object', 'string'])) {
      throw new Error('Not valid data to render article');
      return;
    };*/
    this.feed = feedElement;
    this.newsFile = newsFile;
    this.cacheName = this.feed.id;
  }
  async install() {
    if (localStorage.getItem(this.cacheName) == 'true') {
      caches.open(this.feedName).then(async (cache) => {
        let cacheNews = await cache.match(this.newsFile);
        let newsList = cacheNews.json();
        this.renderAll(newsList);
        return;
      })
    };
    caches.open(this.feedName).then(async (cache) => {
      cache.add(this.newsFile);
      let fetchNews = await fetch(this.newsFile);
      let newsList = response.json();
      cache.addAll(newsList);
      this.renderAll(newsList);
      localStorage.setItem(this.cacheName, 'true');
    })
  }
  async check() {
    let fetchNews = await fetch(this.newsFile);
    let fetchList = fetchNews.json();
    let cacheNews;
    caches.open(this.feedName).then(async (cache) => {
      cacheNews = await cache.match(this.newsFile);
    })
    let cacheList = cacheNews.json();
    if (fetchList.length != cacheList.length) {
      let newNews = this.compare(fetchList, cacheList);
      this.renderAll(newNews);
    };
  }
  compare(fetchList, cacheList) {
    let newNews = [];
    for (let i = cacheList.length; i < fetchList.length; i++) {
      newNews.push(fetchList[i]);
    };
    return newNews;
  }
  async renderAll(array) {
    for (let item of array) {
        let response = await fetch(item);
        let data = response.json();
        this.render(data);
      };
  }
  render(data) {
    /*if (!this.checkTypes([data.date, data.title, data.text], ['date', 'string', 'string'])) {
      throw new Error('Not valid data to render article');
      return;
    };*/
    let article = document.createElement('article');
    article.innerHTML = `
      <time>${data.date}</time>
      <h3>${data.title}</h3>
      <p>${data.text}</p>
    `;
    article.style.setProperty('--bg', data.image || 'null');
    this.feed.append(article);
  }/*
  checkTypes([...arguments], [...rightTypes]) {
    let booleanValues = [];
    for (let i = 0; i < arguments.length; i++) {
      if (rightTypes[i] != 'date' || 'array') {
        if (typeof arguments[i] === rightTypes[i]) booleanValues.push(true);
        else booleanValues.push(false);
      } else if (rightTypes[i] === 'date') {
        let parsedDate = arguments[i].match(/\d\d\s\d\d\s\d\d\d\d/).join('');
        if (arguments[i] === parsedDate) booleanValues.push(true);
        else booleanValues.push(false);
      } else if (rightTypes[i] === 'array') {
        if (Array.isArray(arguments[i])) booleanValues.push(true);
        else booleanValues.push(false);
      };
    };
    for (let boolean of booleanValues) {
      if (boolean === false) {
        break;
        return false;
      };
    };
    return true;
  };*/
};