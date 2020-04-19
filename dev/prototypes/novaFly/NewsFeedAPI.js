// News Feed API

class NewsFeed {
  template = `
    <time>$(date)</time>
    <h3>$(title)</h3>
    <p>$(text)</p>
    <button>$(action)</button>
  `
  constructor(feedElement, newsFile) {
    /*if (!this.checkTypes([feedElement, newsFile], ['object', 'string'])) {
      throw new Error('Not valid data to render article');
      return;
    };*/
    this.feed = feedElement;
    this.newsFile = newsFile;
    this.feedName = feedElement.id;
  }
  async install() {
    if (localStorage[this.feedName + 'State'] !== 'installed') {
      let newsFile = await fetch(this.newsFile);
      let newsList = await newsFile.json();
      localStorage[this.feedName + 'Data'] = newsList;
      localStorage[this.feedName + 'State'] = 'installed';
      return {alreadyInstalled: false, data: JSON.parse(newsList)};
    } else if (localStorage[this.feedName + 'State'] === 'installed') {
      let newsList = localStorage[this.feedName + 'Data'];
      return {alreadyInstalled: true, data: JSON.parse(newsList)};
    };
  }
  async check() {
    let newsFile = await fetch(this.newsFile);
    let newsList = await newsFile.json();
    newsList = JSON.parse(newsList);
    let savedList = JSON.parse(localStorage[this.feedName + 'Data']);
    if (newsList.length !== savedList.length) {
      localStorage[this.feedName + 'Data'] = JSON.stringify(newsList);
      let newNews = this.findNew(newsList, savedList);
      return {anyNews: true, data: newNews};
    } else {
      return {anyNews: false};
    };
  }
  findNew(fetchList, savedList) {
    let newNews = [];
    for (let i = savedList.length; i < fetchList.length; i++) {
      newNews.push(fetchList[i]);
    };
    return newNews;
  }
  async renderAll(newsList) {
    for (let news of newsList) {
        let response = await fetch(news);
        let data = await response.json();
        data = JSON.parse(data);
        this.render(data);
      };
    return {done: true};
  }
  render(data) {
    /*if (!this.checkTypes([data.date, data.title, data.text], ['date', 'string', 'string'])) {
      throw new Error('Not valid data to render article');
      return;
    };*/
    let article = document.createElement('article');
    let filledTemplate = this.template;
    for (let item in data.HTML) {
      console.log([item]);
      console.log(item);
      filledTemplate = filledTemplate.replace(`$(${[item]})`, item);
    };
    console.log(filledTemplate);
    if (data.variables) for (let item of data.variables) {
      article.style.setProperty(item, data[item]);
    };
    article.innerHTML = filledTemplate;
    this.feed.prepend(article);
  }

/*
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
