// News Feed API v.1.0.0

class NewsFeed {
  consoleStart = '[News Feed API]';
  consoleStyle = 'background-color: hsl(225, 30%, 15%); color: white; padding: 3px 4px;';
  constructor(feedElement, newsFile) {
    this.feed = feedElement;
    this.newsFile = newsFile;
    this.feedName = feedElement.id;
  }
  async install() {
    if (this.error) return;
    if (localStorage[this.feedName + 'State'] !== 'installed') {
      let newsFile = await fetch(this.newsFile);
      if (!newsFile.ok) {
        console.error(`${consoleStart} News File have %c${response.status} status%cCheck way to your News File or change file`, consoleStyle);
        return;
      };
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
  template = {}
  setTemplate(template, variablesBoolean) {
    this.template.HTML = template;
    this.template.variables = variablesBoolean;
  }
  setDefaultTemplate() {
    let defaultTemplate = `
      <time>$(date)</time>
      <h3>$(title)</h3>
      <p>$(text)</p>
    `;
    this.setTemplate(defaultTemplate, false);
    console.warn(`${consoleStart} Set your custom template for render with %csetTemplate()%cmethod`, this.consoleStyle);
  }
  render(data) {
    if (!this.template.HTML) this.setDefaultTemplate();
    let filledTemplate = this.template.HTML;
    for (let item in data.HTML) {
      filledTemplate = filledTemplate.replace(`$(${item})`, data.HTML[item]);
    };
    let article = document.createElement('article');
    article.innerHTML = filledTemplate;
    if (this.template.variables && data.variables) for (let item in data.variables) {
      article.style.setProperty(item, data.variables[item]);
    };
    this.feed.prepend(article);
  }
};
