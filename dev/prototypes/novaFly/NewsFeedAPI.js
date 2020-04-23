// News Feed API
// v.0.0.1 first iteration
// v.0.0.2 advanced work with templates
// v.0.0.3 advanced findDifference() method | not support v.0.0.2 code
// v.0.0.4 advanced render methods
// v.0.0.5 cache api integration <===
// v.0.1.0 pre-release version

class NewsFeed {
  _consoleStart = '[News Feed API]';
  _consoleStyle = 'background-color: hsl(225, 30%, 15%); color: white; padding: 3px 4px;';

  constructor(feedElement, newsFile, options) {
    this._feed = feedElement;
    this._feedName = feedElement.id;
    this._newsFile = newsFile;
    this._path = newsFile.match(/[-.:\/\w]+\/(?=[-.\w]+.json)/).join('');
    options.usePath ? this._usePath = options.usePath : this._usePath = false;
    options.noCache ? this._noCache = options.noCache : this._noCache = false;
  }
  async install() {
    if (localStorage[this._feedName + 'State'] !== 'installed') {
      let newsFile = await fetch(this._newsFile);
      if (!newsFile.ok) {
        console.error(`${this._consoleStart} News File have %cstatus ${response.status}%cCheck path or change file\nNews Feed is not installed!`, this._consoleStyle);
        return;
      };
      let newsList = await newsFile.json();
      if (!Array.isArray(JSON.parse(newsList))) {
        console.error(`${this._consoleStart} News File data must be an %carray%c\nNews Feed is not installed!`, this._consoleStyle);
        return;
      };
      localStorage[this._feedName + 'Data'] = newsList;
      localStorage[this._feedName + 'State'] = 'installed';
      return {alreadyInstalled: false, data: JSON.parse(newsList)};
    } else if (localStorage[this._feedName + 'State'] === 'installed') {
      let newsList = localStorage[this._feedName + 'Data'];
      return {alreadyInstalled: true, data: JSON.parse(newsList)};
    };
  }
  async check() {
    if (localStorage[this._feedName + 'State'] !== 'installed') return;
    let newsFile = await fetch(this._newsFile);
    let newsList = await newsFile.json();
    newsList = JSON.parse(newsList);
    let savedList = JSON.parse(localStorage[this._feedName + 'Data']);
    let difference = this._findDifference(newsList, savedList);
    if (difference.new.length > 0 || difference.delete.length > 0) {
      localStorage[this._feedName + 'Data'] = JSON.stringify(newsList);
      return {anyNews: true, new: difference.new, delete: difference.delete};
    };
    return {anyNews: false};
  }
  _findDifference(fetchList, savedList) {
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
    if (localStorage[this._feedName + 'State'] !== 'installed') return;
    try {
      if (this._asyncList) {
        let index = this._asyncList.indexOf(news, 0);
        this._asyncList = this._asyncList.splice(index, 1);
      };
      document.querySelector(`#${this._feedName} > article[data-url="${news}"]`).remove();
    } catch (error) {};
  }
  deleteAll(newsList) {
    if (localStorage[this._feedName + 'State'] !== 'installed') return;
    for (let news of newsList) {
      this.delete(news);
    };
  }
  async render(news, rule) {
    if (localStorage[this._feedName + 'State'] !== 'installed') return;
    let response = await this._cache(news);
    if (!response.ok) {
      console.error(`${this._consoleStart} %c${news}%cfile have status ${response.status}. Check path or change file`, this._consoleStyle);
      return;
    };
    let data = await response.json();
    data = JSON.parse(data);
    let article = this._create(data);
    if (article === 'error') {
      console.error(`${this._consoleStart} %c${news}%cfile have not valid data`, this._consoleStyle);
      return;
    };
    article.setAttribute('data-url', news);
    if (rule === 'prepend') this._feed.prepend(article);
    else if (rule === 'append') this._feed.append(article);
    else console.error(`${this._consoleStart} Not valid rule in %crender()%cmethod`, this._consoleStyle);
  }
  async _cache(news) {
    let request;
    if (this._usePath) request = new Request(`${this._path}${news}.json`);
    else request = new Request(news);
    if (caches && !this._noCache) {
      let cacheResponse = await caches.match(request, {cacheName: this._feedName});
      if (cacheResponse) return cacheResponse;
    };
    let fetchResponse = await fetch(request);
    if (caches && !this._noCache && fetchResponse.ok) {
      let clone = fetchResponse.clone();
      caches.open(this._feedName).then((cache) => {
        cache.put(request, clone);
      })
    };
    return fetchResponse;
  }
  async renderAll(newsList, rule) {
    if (localStorage[this._feedName + 'State'] !== 'installed') return;
    if (!rule) rule = 'prepend';
    for (let news of newsList) {
      await this.render(news, rule);
    };
  }
  async renderAsync(newsList) {
    if (localStorage[this._feedName + 'State'] !== 'installed') return;
    if (this._asyncList) {
      console.error(`${this._consoleStart} %crenderAsync()%cmethod can be called only one time`, this._consoleStart);
      return;
    };
    if (!this._newsPerRender) this._setDefaultNewsPerRender();
    this._asyncList = newsList;
    this._length = this._asyncList.length;
    const renderPartFunction = async () => {
      let currentPart = [];
      for (let i = 0; i < this._asyncList.length; i++) {
        if (i < (this._length - this._newsPerRender * this._currentPosition) && i >= (this._length - this._newsPerRender * (this._currentPosition + 1))) {
          currentPart.push(this._asyncList[i]);
        };
      };
      this._currentPosition++;
      for (let i = currentPart.length - 1; i > -1; i--) {
        await this.render(currentPart[i], 'append');
      };
    };
    await renderPartFunction();
    this._setObserver(renderPartFunction);
  }
  _setObserver(renderPartFunction) {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(async (entry) => {
        if (!entry.isIntersecting) return;
        await renderPartFunction();
        observer.unobserve(entry.target);
        document.querySelector(`#${this._feedName} > article:last-child`).removeAttribute('style');
        if (this._length / (this._newsPerRender * this._currentPosition) <= 1) {
          observer.disconnect();
        } else {
          observer.observe(document.querySelector(`#${this._feedName} > article:last-child`));
          document.querySelector(`#${this._feedName} > article:last-child`).style.backgroundColor = 'aliceblue';
        };
      });
    }, {rootMargin: '0px', threshold: 2});
    observer.observe(document.querySelector(`#${this._feedName} > article:last-child`));
    document.querySelector(`#${this._feedName} > article:last-child`).style.backgroundColor = 'aliceblue';
  }
  _currentPosition = 0;
  _newsPerRender = null;
  getNewsPerRender() {
    if (localStorage[this._feedName + 'State'] !== 'installed') return;
    return this._newsPerRender;
  }
  setNewsPerRender(count) {
    if (localStorage[this._feedName + 'State'] !== 'installed') return;
    if (count < 10) {
      this._newsPerRender = 10;
      console.warn(`${this._consoleStart} Mininal newsPerRrender count is %c10%c`, this._consoleStyle);
    } else if (count > 200) {
      this._newsPerRender = 200;
      console.warn(`${this._consoleStart} Maximum newsPerRender count is %c200%c`, this._consoleStyle);
    } else this._newsPerRender = count;
  };
  _setDefaultNewsPerRender() {
    this.setNewsPerRender(10);
    console.warn(`${this._consoleStart} Set your custom newsPerRender count by %csetNewsPerRender(count)%cmethod`, this._consoleStyle);
  }
  _template = {HTML: null, variables: null}
  getTemplate() {
    if (localStorage[this._feedName + 'State'] !== 'installed') return;
    return {HTML: this._template.HTML, variables: this._template.variables};
  }
  setTemplate(template, variablesBoolean) {
    if (localStorage[this._feedName + 'State'] !== 'installed') return;
    this._template.HTML = template;
    this._template.variables = variablesBoolean;
  }
  _setDefaultTemplate() {
    let defaultTemplate = `
      <time>$(date)</time>
      <h3>$(title)</h3>
      <p>$(text)</p>
    `;
    this.setTemplate(defaultTemplate, false);
    console.warn(`${this._consoleStart} Set your custom template for render by %csetTemplate(template, variablesBoolean)%cmethod`, this._consoleStyle);
  }
  _create(data) {
    if (!data.HTML) return 'error';
    if (!this._template.HTML) this._setDefaultTemplate();
    let filledTemplate = this._template.HTML;
    for (let item in data.HTML) {
      filledTemplate = filledTemplate.replace(`$(${item})`, data.HTML[item]);
    };
    let article = document.createElement('article');
    article.innerHTML = filledTemplate;
    if (this._template.variables && data.variables) for (let item in data.variables) {
      article.style.setProperty(item, data.variables[item]);
    };
    return article;
  }
};
