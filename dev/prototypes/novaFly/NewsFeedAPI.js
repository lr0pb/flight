// News Feed API
// v.0.0.1 first iteration
// v.0.0.2 advanced work with templates
// v.0.0.3 advanced findDifference() method | not support v.0.0.2 code <===
// v.0.0.4 advanced render methods
// v.0.0.5 cache api integration

class NewsFeed {
  consoleStart = '[News Feed API]';
  consoleStyle = 'background-color: hsl(225, 30%, 15%); color: white; padding: 3px 4px;';

  constructor(feedElement, newsFile) {
    this.feed = feedElement;
    this.newsFile = newsFile;
    this.path = newsFile.match(/[-.\/\w]+\/(?=[-.\/\w]+.json)/).join('');
    console.log(this.path);
    this.feedName = feedElement.id;
  }
  async install() {
    if (localStorage[this.feedName + 'State'] !== 'installed') {
      let newsFile = await fetch(this.newsFile);
      if (!newsFile.ok) {
        console.error(`${this.consoleStart} News File have %c${response.status} status%cCheck way to your News File or change file`, this.consoleStyle);
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
    let difference = this.findDifference(newsList, savedList);
    if (difference.new.length > 0 || difference.delete.length > 0) {
      localStorage[this.feedName + 'Data'] = JSON.stringify(newsList);
      return {anyNews: true, new: difference.new, delete: difference.delete};
    };
    return {anyNews: false};
  }
  findDifference(fetchList, savedList) {
    let newNews = [];
    for (let item of fetchList) {
      if (!savedList.find(save => item === save)) newNews.push(item);
    };
    let deleteNews = [];
    for (let item of savedList) {
      if (!fetchList.find(fetch => item === fetch)) deleteNews.push(item);
    };
    return {new: newNews, delete: deleteNews};
  }
  delete(news) {
    try {
      if (this.asyncList) {
        let index = this.asyncList.indexOf(news, 0);
        this.asyncList = this.asyncList.splice(index, 1);
      };
      document.querySelector(`#${this.feedName} > article[data-url="${news}"]`).remove();
    } catch (error) {};
  }
  deleteAll(newsList) {
    for (let news of newsList) {
      this.delete(news);
    };
  }
  async render(news, rule) {
    let response = await this.cache(news);
    //let response = await fetch(`${this.path}${news}.json`);
    let data = await response.json();
    data = JSON.parse(data);
    let article = this.create(data);
    article.setAttribute('data-url', news);
    if (rule === 'prepend') this.feed.prepend(article);
    else if (rule === 'append') this.feed.append(article);
    else console.error(`${this.consoleStart} Not valid rule in %crender()%cmethod`, this.consoleStyle);
  }
  async cache(news) {
    let request = new Request(`${this.path}${news}.json`);
    let cacheResponse = await caches.match(request);
    if (cacheResponse) return cacheResponse;
    let fetchResponse = await fetch(`${this.path}${news}.json`);
    caches.open(this.feedName).then((cache) => {
      cache.put(request, fetchResponse.clone());
    })
    return fetchResponse;
  }
  async renderAll(newsList, rule) {
    if (!rule) rule = 'prepend';
    for (let news of newsList) {
      await this.render(news, rule);
    };
  }
  async renderAsync(newsList) {
    if (this.asyncList) {
      console.error(`${this.consoleStart} %crenderAsync()%cmethod can be called only one time`, this.consoleStart);
      return;
    };
    if (!this.newsPerRender) this.setDefaultNewsPerRender();
    this.asyncList = newsList;
    const renderPartFunction = async () => {
      let currentPart = [];
      for (let i = 0; i < this.asyncList.length; i++) {
        if (i < (this.asyncList.length - this.newsPerRender * this.currentPosition) && i >= (this.asyncList.length - this.newsPerRender * (this.currentPosition + 1))) {
          currentPart.push(this.asyncList[i]);
        };
      };
      this.currentPosition++;
      for (let i = currentPart.length - 1; i > -1; i--) {
        await this.render(currentPart[i], 'append');
      };
    };
    await renderPartFunction();
    this.setObserver(renderPartFunction);
  }
  setObserver(renderPartFunction) {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) await renderPartFunction();
        console.log('iteration');
        observer.unobserve(entry.target);
        observer.observe(document.querySelector(`#${this.feedName} > article:last-child`));
      });
    }, {rootMargin: '50px', threshold: 1});
    observer.observe(document.querySelector(`#${this.feedName} > article:last-child`));
  }
  currentPosition = 0;
  newsPerRender = null;
  setNewsPerRender(count) {
    if (count < 10) {
      this.newsPerRender = 10;
      console.warn(`${this.consoleStart} Mininal newsPerRrender count is %c10%c`, this.consoleStyle);
    } else if (count > 200) {
      this.newsPerRender = 200;
      console.warn(`${this.consoleStart} Maximum newsPerRender count is %c200%c`, this.consoleStyle);
    } else this.newsPerRender = count;
  };
  setDefaultNewsPerRender() {
    this.setNewsPerRender(10);
    console.warn(`${this.consoleStart} Set your custom newsPerRender count by %csetNewsPerRender(count)%cmethod`, this.consoleStyle);
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
    console.warn(`${this.consoleStart} Set your custom template for render by %csetTemplate(template, variablesBoolean)%cmethod`, this.consoleStyle);
  }
  create(data) {
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
    return article;
  }
};
